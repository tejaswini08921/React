// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//     super()

//     this.state={
//       subject:"Javacript"
//     }
//   }
//   handleChange=()=>{
//     this.setState({subject:"React"})
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.subject}</h1>
//         <button onClick={this.handleChange}>Click!</button>
//       </div>
//     )
//   }
// }

// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       count: 0
//     }
//   }

//   handleIncrement = ()=>{
//     this.setState({count:this.state.count+1})
//     if(this.state.count>=0){
//       document.body.style.backgroundColor="lightblue"
//     }
//    if(this.state.count>=5){
//       document.body.style.backgroundColor="lightpink"
//     }
//    if(this.state.count>=10){
//       document.body.style.backgroundColor="lightgreen"
//     }

//   }
//   handleDecrement = ()=>{
//     this.setState({count:this.state.count-1})
//     if(this.state.count<=0){
//       document.body.style.backgroundColor="yellow"
//     }
//    if(this.state.count<=-5){
//       document.body.style.backgroundColor="red"
//     }
//    if(this.state.count<=-10){
//       document.body.style.backgroundColor="blue"
//     }
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.handleIncrement}>Increment</button>
//         <button onClick={this.handleDecrement}>Decrement</button>
//       </div>
//     )
//   }
// }

// import React, { useState } from 'react';
// import Bulb from './Components/Bulb';
// import Video from './Components/Video'
// import ImageScroll from './Components/ImageScroll'
// import Hooks from './Components/Hooks';
// import "./App.css"; // <-- Import CSS
// import Basic from './Props/Basic';
// import Product from './Props/Product';


// export default function App() {
//   // ... (state logic if needed)

//   return (
//     <div id="app-wrapper">
//       <main>
//         {/* The main content, which includes the bulb feature */}
//         {/* <Bulb />
//         <Video></Video>
//         <ImageScroll></ImageScroll>
//         <Hooks></Hooks> */}
//         <Basic></Basic>
//         <Product></Product>
//       </main>
//     </div>
//   );
// }

//----------------------------------Props-----------------------------------------
// import React, { Component } from 'react'
// import Product from './Props/Product'

// export default class App extends Component {
//   constructor(){
//     super()

//     this.state = {
//       name:"Dorothy",
//       age:22
//     }
//   }
//   render() {
//     return (
//       <div>
//         <Product data = {this.state.name}></Product>
//       </div>
//     )
//   }
// }

// import React, { Component } from 'react'
// import Product from './Props/Product'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Product data={[100,200,300,400]} about = {"Dor"}></Product>
//       </div>
//     )
//   }
// }

//-----------------------------------------Using API Data----------------------------------------
// import React, { Component } from 'react'
// import JSON from './Props/Data.json'
// import Cart from './Props/Cart'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Cart data={JSON}></Cart>
//       </div>
//     )
//   }
// }

//-----------------------------Sending from parent to child in single line-------------------------------
// import React, { Component } from 'react'
// import JSON from './Props/Data.json'
// import Product from './Props/Product'
// import Cart from './Props/Cart'
// import Cosmetics from './Props/Cosmetics'


// export default class App extends Component {
//   render() {
//     return (
//       <div>
//        <Product data={<Cart data1={<Cosmetics data2={JSON}></Cosmetics>}></Cart>}></Product>
//       </div>
//     )
//   }
// }


//------------------------------------------------Using FBC --------------------------------------------------
// import React from 'react'
// import JSON from './Props/Data.json'
// import Product from './Props/Product'

// const App = () => {
//   return (
//     <div>
//       <Product data={JSON}></Product>
//     </div>
//   )
// }

// export default App

//---------------------------------------Task-------------------------------------------------------------
// import React from 'react'
// import JSON1 from './Props/JSON1.json'
// import JSON from './Props/Data.json'
// import JSON2 from './Props/JSON2.json'
// import Data from './Props/Data'
// import Data1 from './Props/Data1'
// import Data2 from './Props/Data2'
// import Box1 from './Props/Box1'
// import Box2 from './Props/Box2'
// import Box3 from './Props/Box3'
// import Box4 from './Props/Box4'

// const App = () => {
//   return (
//     <div>
//       <Data>
//         <Data1>
//           <Box1 data3={JSON} />
//         </Data1>
//       </Data>

//       <Data>
//         <Data1>
//           <Box2 data13={JSON1} />
//         </Data1>
//       </Data>

//       <Data>
//         <Data2>
//           <Box3 data23={JSON2} />
//         </Data2>
//       </Data>

//       <Data>
//         <Data2>
//           <Box4 data33={JSON} />
//         </Data2>
//       </Data>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Accesories from './Props/JSON1.json'
// import Recepies from './Props/JSON2.json'
// import Data from './Props/Data'


// const App = () => {
//   return (
//     <div>
//       <Data food={Recepies} access={Accesories}></Data>
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react';
// import VIDEO from './Youtube/data.json';
// import Container from './Youtube/Container';
// import './App.css'; 

// const App = () => {
//   let [state, setState] = useState(VIDEO);
//   let [play, setPlay] = useState(state[0]);

//   let handlePlay = (max) => {
//     setPlay(max.videoUrl);
//   };

//   return (
//     <div>
//       <header className="header">
//         {/* Left Section - Hamburger + Logo */}
//         <div className="left-section">
//           <i className="fa-solid fa-bars fa-lg"></i>
//           <img
//             src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-logo-icon.png"
//             alt="YouTube Logo"
//             className="logo"
//           />
//         </div>

//         {/* Middle Section - Search Bar + Mic */}
//         <div className="middle-section">
//           <div className="search-bar">
//             <input type="text" placeholder="Search" />
//             <button className="search-btn">
//               <i className="fa-solid fa-magnifying-glass"></i>
//             </button>
//           </div>
//           <i className="fa-solid fa-microphone mic-icon"></i>
//         </div>

//         {/* Right Section - Icons */}
//         <div className="right-section">
//           <div className='create'>
//             <i className="fa-solid fa-plus">
//               <p>Create</p>
//             </i>
//           </div>

//           <i className="fa-solid fa-bell"></i>
//           <i className="fa-solid fa-user"></i>
//         </div>
//       </header>

//       <Container state={state} play={play} fun={handlePlay}></Container>
//     </div>

//   );
// };

// export default App;


// export default App;

// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//     super()

//     this.state={
//       count:0
//     }
//   }
//   render() {
//     return (
//       <div>
//         <button>Click!</button>
//       </div>
//     )
//   }
// }

//-------------------------------------------HOC----------------------------------------------------------
// import React from 'react'
// import Cart from './HOC/Cart'
// import Products from './HOC/Products'

// const App = () => {
//   return (
//     <div>
//       <Cart></Cart>
//       <Products></Products>
//     </div>
//   )
// }

// export default App

//------------------------------------LifeCycle Methods--------------------------------------------------

// import React, { Component } from 'react'
// import User from './LifeCycle/User'

// export default class App extends Component {
//   constructor(){
//     super()
//     this.state={
//       count:0,
//       delete:false
//     }
//   }

//   handleChange=()=>{
//     this.setState({count:this.state.count+1})
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.handleChange}>Click!</button>
//         <button onClick={()=>this.setState({delete:true})}>DELETE ALL</button>
//         {this.state.delete=== true? null :<User count={this.state.count}/>}
//       </div>
//     )
//   }
// }

//-----------------------------------Cart Task-----------------------------------------------------------
// import React, { useState } from "react";
// import Home from "./Task/Home";

// const App = () => {
//   const [cartItems, setCartItems] = useState([]);

//   const handleAddToCart = (productName) => {
//     setCartItems(prevItems => {
//       const existingItem = prevItems.find(item => item.product === productName);

//       if (existingItem) {
//         return prevItems.map(item =>
//           item.product === productName
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       } else {
//         return [...prevItems, { product: productName, quantity: 1 }];
//       }
//     });
//   };

//   const handleIncrement = (productName) => {
//     setCartItems(prevItems =>
//       prevItems.map(item =>
//         item.product === productName
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       )
//     );
//   };

//   const handleDecrement = (productName) => {
//     setCartItems(prevItems =>
//       prevItems.map(item =>
//         item.product === productName
//           ? { ...item, quantity: item.quantity - 1 }
//           : item
//       ).filter(item => item.quantity > 0)
//     );
//   };

//   return (
//     <div>
//       <h1>Simple Shopping App</h1>
//       <Home onAddToCart={handleAddToCart} />
//       {cartItems.length > 0 && (
//         <div style={{ marginTop: "20px" }}>
//           <h2>🛒 Cart</h2>
//           {cartItems.map((item) => (
//             <div key={item.product} style={{ margin: "10px 0", padding: "10px", border: "1px solid #ccc" }}>
//               <p>{item.product}</p>
//               <button onClick={() => handleDecrement(item.product)}>-</button>
//               <span style={{ margin: "0 10px" }}>{item.quantity}</span>
//               <button onClick={() => handleIncrement(item.product)}>+</button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;
//-------------------------------------Task(theme in hoc)----------------------------------------------------------
// import React, { useState } from 'react'
// import Home from './Task/Home'

// const App = () => {
//   let[state,setState]=useState(null)

//   let handleChange=()=>{
//     setState(<Home></Home>)
//   }
//   return (
//     <div>
//       <h1>Book A</h1>
//       <button onClick={handleChange}>Add to Cart</button>
//       <h1>{state}</h1>
//     </div>
//   )
// }

// export default App


// App.js
// import React from "react";
// import Home from "./Task/Home";
// import Theme from "./Theme";
// import "./App.css";

// const ThemedHome = Theme(Home);

// const App = () => {
//   return (
//     <div>
//       <h1>Store</h1>
//       <ThemedHome />
//     </div>
//   );
// };

// export default App;
//---------------------------------------Context Api----------------------------------------------------
// import React from 'react'
// import UserContext from './CONTEXTAPI/ContextApi'
// import Cart from './CONTEXTAPI/Cart'
// import Product from './CONTEXTAPI/Product'

// const App = () => {
//   return (
//     <div>
//       <UserContext>
//         <Cart></Cart>
//         <Product></Product>
//       </UserContext>
//     </div>
//   )
// }

// 

//----------------------------------Theme-----------------------------------------------------------------
// import React from 'react'
// import theme, { ThemeContextApi } from './THEMECONTEXT/ThemeContextApi'
// import Container from './THEMECONTEXT/Container'
// import "./App.css";

// const App = () => {
//   return (
//     <div>
//       <ThemeContextApi.Provider value={theme}>
//         <Container></Container>
//       </ThemeContextApi.Provider>
//     </div>
//   )
// }

// export default App

//--------------------------------------Practice------------------------------------------------------
// import React from 'react'
// import Counter from './PRACATICE/Counter'
// import ParentCounter from './PRACATICE/ParentCounter'
// import ToDo from './PRACATICE/ToDo'
// import ToDoItem from './PRACATICE/ToDoItem'

// const App = () => {
//   return (
//     <div>
//       <ParentCounter></ParentCounter>
//       <ToDo></ToDo>
     
//       </div>
//   )
// }

// export default App

//-------------------------------FORM HANDLING-------------------------------------------------------
import React from 'react'
import Form from './FORMS/Form'

const App = () => {
  return (
    <div>
      <Form></Form>
    </div>
  )
}

export default App