import { useState } from "react";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";

const App = () => {
  const [cart, setCart] = useState([]); /* per gestire lo stato del carrello e dei prodotti*/
  const [openCart, setOpenCart] = useState(true);

  // ADD TO CART
  const addToCart = async (product) => {
    try {
      await fetch("http://localhost:3001/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: product._id,
          title: product.title,
          price: product.price,
          quantity: 1,
        }),
      });

      setCart((prev) => {
        const existing = prev.find((item) => item._id === product._id);

        if (!existing) {
          return [...prev, { ...product, quantity: 1 }];
        }

        return prev.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      });
    } catch (error) {
      console.error(error);
    }
  };

  // REMOVE FROM CART
  const removeFromCart = (product) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item._id === product._id
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

/*mongoDB
DATABASE RELAZIONALE
MSQL
CLOUD OPUS AI
CODEX CHATGTP
*/