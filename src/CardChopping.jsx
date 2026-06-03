const CardChopping = ({ products, handleCardRemove, total }) => {
    return (
        <div className="w-80 bg-gray-100 border rounded-lg p-4 mt-10 ml-auto">

            {/* HEADER */}
            <h2 className="text-xl font-bold mb-4 text-center">
                Carrello
            </h2>

            {/* EMPTY STATE */}
            {Array.isArray(products) && products.length === 0 ? (
                <p className="text-center text-gray-500">
                    Carrello vuoto
                </p>
            ) : (
                <div className="space-y-4">

                    {/* PRODUCTS */}
                    {products &&
                        products.map((product) => (
                            <div
                                key={product.id}
                                className="flex items-center justify-between bg-white p-2 rounded shadow"
                            >

                                {/* LEFT */}
                                <div>
                                    <h3 className="font-medium">
                                        {product.title}
                                    </h3>

                                    <p className="text-sm text-gray-600">
                                        Qty: {product.quantity}
                                    </p>
                                </div>

                                {/* RIGHT */}
                                <div className="text-right">
                                    <p className="font-semibold">
                                        {product.price}$
                                    </p>

                                    <button
                                        onClick={() => handleCardRemove(product)}
                                        className="text-red-500 text-sm mt-1"
                                    >
                                        remove
                                    </button>
                                </div>

                            </div>
                        ))}
                </div>
            )}

            {/* TOTAL */}
            <div className="mt-6 text-right font-bold">
                Total: ${total}
            </div>
        </div>
    );
};

export default CardChopping;