import { useEffect, useState } from "react";
import CardChopping from "../CardChopping";

const Cards = () => {
    const API_URL = "https://dummyjson.com/products";

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    // 🔍 trova quantità nel carrello
    const getQuantity = (product) => {
        return cart.find(item => item.id === product.id)?.quantity || 0;
    };

    // ➕ ADD TO CART
    const addToCart = (product) => {
        const quantity = getQuantity(product);

        if (quantity === 0) {
            setCart([...cart, { ...product, quantity: 1 }]);
        } else {
            setCart(prev =>
                prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        }
    };

    // ➖ REMOVE FROM CART
    const removeFromCart = (product) => {
        const quantity = getQuantity(product);

        if (quantity === 1) {
            setCart(prev =>
                prev.filter(item => item.id !== product.id)
            );
        } else {
            setCart(prev =>
                prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
            );
        }
    };

    // 📦 FETCH PRODUCTS
    const fetchProducts = async () => {
        try {
            setLoading(true);
            setError(false);

            const res = await fetch(API_URL);
            if (!res.ok) throw new Error("API error");

            const data = await res.json();
            setProducts(data.products);

        } catch (err) {
            setError(true);
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    // 💰 TOTAL CARRELLO
    const total = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <div className="flex gap-10 p-6">

            {/* 🛒 CART */}
            <CardChopping
                products={cart}
                handleCardRemove={removeFromCart}
                total={total}
            />

            {/* 📦 PRODUCTS */}
            <div className="grid grid-cols-3 gap-4">
                {loading && <p>Loading...</p>}
                {error && <p>Error loading products</p>}

                {products.map((product) => (
                    <div
                        key={product.id}
                        className="border rounded p-3 shadow"
                    >
                        <img
                            src={product.thumbnail}
                            className="w-20 mx-auto"
                        />

                        <h2 className="text-center font-semibold">
                            {product.title}
                        </h2>

                        <p className="text-center">
                            {product.price}$
                        </p>

                        <button
                            onClick={() => addToCart(product)}
                            className="bg-blue-600 text-white px-3 py-1 mt-2 w-full rounded"
                        >
                            Add to cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cards;