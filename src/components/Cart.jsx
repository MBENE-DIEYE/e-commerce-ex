const Cart = ({
  visibility,
  products,
  handleCardRemove,
  total,
}) => {
  return (
    <div
      className={`
        fixed top-0 right-0 h-full w-96 bg-white shadow-2xl z-50
        transform transition-transform duration-300 ease-in-out
        ${visibility ? "translate-x-0" : "translate-x-full"}
        flex flex-col
      `}
    >

      {/* HEADER */}
      <div className="p-4 border-b bg-white sticky top-0 z-10">
        <h2 className="text-xl font-bold">
          Cart 🛒
        </h2>
      </div>

      {/* BODY */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {products.length === 0 ? (
          <p className="text-gray-500 text-center mt-10">
            Cart is empty
          </p>
        ) : (
          products.map((product) => (
            <div
              key={product._Id}
              className="flex justify-between items-center bg-white border rounded-lg p-3 shadow-sm"
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
                className="text-red-500 hover:text-red-700 text-sm font-medium"
              >
                remove
              </button>
            </div>
          ))
        )}
      </div>

      {/* FOOTER (TOTAL) */}
      <div className="p-4 border-t bg-white sticky bottom-0">
        <div className="flex justify-between items-center font-bold text-lg">
          <span>Total</span>
          <span>${total}</span>
        </div>
      </div>

    </div>
  );
};

export default Cart;