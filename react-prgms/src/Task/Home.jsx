// import React from "react";

// const Home = ({ onAddToCart }) => {
//   return (
//     <div>
//       <h2>Products</h2>

//       <div style={{ margin: "20px 0" }}>
//         <p>Shoes</p>
//         <button onClick={() => onAddToCart("Shoes")}>
//           Add to Cart
//         </button>
//       </div>

//       <div style={{ margin: "20px 0" }}>
//         <p>Shirt</p>
//         <button onClick={() => onAddToCart("Shirt")}>
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React, { useState } from 'react'

// const Home = () => {
//   let [count, setCount] = useState(0)

//   let handleIncrement = () => {
//     setCount(count + 1)
//   }

//   let handleDecrement = () => {
//     setCount(count - 1)
//   }
//   return (
//     <div>
//       <h1>Book A aaded to cart </h1>
//       <h1>{count}</h1>
//       <button onClick={handleIncrement}>+</button>
//       <button onClick={handleDecrement}>-</button>

//     </div>
//   )
// }

// export default Home

// Task/Home.js
import React, { useState } from "react";

const Home = ({ theme }) => {
  let [count, setCount] = useState(0);

  let handleIncrement = () => {
    setCount(count + 1);
  };

  let handleDecrement = () => {
    if(count>0){
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h2>Theme: {theme}</h2>
      <h1>Book A Added to cart</h1>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};

export default Home;
