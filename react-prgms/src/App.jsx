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
import React, { Component } from 'react'
import JSON from './Props/Data.json'
import Cart from './Props/Cart'

export default class App extends Component {
  render() {
    return (
      <div>
        <Cart data={JSON}></Cart>
      </div>
    )
  }
}
