const Cart = ({
  visibility,
  products,
  handleCardRemove,
}) => {
  return (
    <div
      className={`
        fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50
        transform transition-transform duration-300
        ${visibility ? "translate-x-0" : "translate-x-full"}
      `}
    >
      {/* HEADER */}
      <div className="p-4 border-b sticky top-0 bg-white">
        <h2 className="text-xl font-bold">
          Cart 🛒
        </h2>
      </div>

      {/* BODY */}
      <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-60px)]">
        {products.length === 0 ? (
          <p className="text-gray-500">
            Cart is empty
          </p>
        ) : (
          products.map((product) => (
            <div
              key={product.id}
              className="flex justify-between items-center border p-2 rounded"
            >
              <div>
                <h3 className="font-medium">
                  {product.title}
                </h3>

                <p className="text-sm text-gray-500">
                  Qty: {product.quantity}
                </p>

                <p className="text-sm font-semibold">
                  {product.price}$
                </p>
              </div>

              <button
                onClick={() => handleCardRemove(product)}
                className="text-red-500 text-sm"
              >
                remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;