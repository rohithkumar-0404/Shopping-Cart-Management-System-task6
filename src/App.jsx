
import { useState, useEffect } from "react";

function Product({ productName, price }) {
  const [currentPrice, setCurrentPrice] = useState(price);

  useEffect(() => {
    console.log("Shopping Cart System Loaded");
  }, []);

  function applyDiscount() {
    setCurrentPrice((previousPrice) =>
      Math.max(0, previousPrice - 200)
    );
  }

  return (
    <div>
      <h1>Shopping Cart Management System</h1>
      <h2>Product Details</h2>
      <p>Product Name: {productName}</p>
      <p>Price: ₹{currentPrice}</p>
      <button onClick={applyDiscount}>
        Apply ₹200 Discount
      </button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Product productName="Wireless Headphones" price={1500} />
    </div>
  );
}

export default App;
