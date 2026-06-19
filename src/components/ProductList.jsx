import { useEffect, useState } from "react";

const ProductList = ({ addToCart, setOpenCart }) => {
    // const API_URL = "https://dummyjson.com/products";
    // const API_URL = "http://localhost:3001/products";
    const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";
    const API_URL = `${BASE_URL}/products`;

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            setError(false);

            const res = await fetch(API_URL);
            if (!res.ok) throw new Error("API error");

            const data = await res.json();
            setProducts(data);
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="grid grid-cols-3 gap-4 p-3">

            {loading && <p>Loading...</p>}
            {error && <p>Error loading products</p>}

            {products.map((product) => (
                <div key={product.id} className="border p-3 rounded shadow">

                    <img src={product.thumbnail} className="w-20 mx-auto" />

                    <h2 className="text-center font-semibold">
                        {product.title}
                    </h2>

                    <p className="text-center">
                        {product.price}$
                    </p>

                    <button
                        onClick={() => {
                            addToCart(product);
                            setOpenCart(true);
                        }}
                        className="bg-blue-600 text-white px-3 py-1 mt-2 w-full rounded"
                    >
                        Add to cart
                    </button>

                </div>
            ))}
        </div>
    );
};

export default ProductList;