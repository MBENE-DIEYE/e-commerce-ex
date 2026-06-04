import { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const App = () => {
  const [cart, setCart] = useState([]);
  const [openCart, setOpenCart] = useState(true);

  // ADD TO CART
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (!existing) {
        return [...prev, { ...product, quantity: 1 }];
      }

      return prev.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    });
  };

  // REMOVE FROM CART
  const removeFromCart = (product) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // TOTAL
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="flex">

      {/* PRODUCTS */}
      <div className={`transition-all duration-300 flex-1 ${openCart ? "mr-96" : ""}`}>
        <ProductList
          addToCart={addToCart}
          setOpenCart={setOpenCart}
        />
      </div>
      {/* CART SIDEBAR */}
      <Cart
        visibility={openCart}
        products={cart}
        handleCardRemove={removeFromCart}
        total={total}
      />

    </div>
  );
};

export default App;