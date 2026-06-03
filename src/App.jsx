import { useState } from "react";
import Cards from "./assets/Cards";
import Cart from "./carello";

function App() {
  const [cart, setCart] = useState([]);
  const [openCart, setOpenCart] = useState(false);

  return (
    <div>

      {/* PRODUCTS */}
      <Cards
        cart={cart}
        setCart={setCart}
        setOpenCart={setOpenCart}
      />

      {/* CART SIDEBAR */}
      <Cart
        visibility={openCart}
        products={cart}
        handleCardRemove={() => { }}
      />

    </div>
  );
}

export default App;