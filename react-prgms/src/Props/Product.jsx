// import React, { Component } from 'react'

// export default class Product extends Component {
//   render(props) {
//     console.log(this.props);

//     return (
//       <div>
//         <h1>{this.props.data.name}</h1>
//       </div>
//     )
//   }
// }

// import React, { Component } from 'react'
// import Cart from './Cart';

// export default class Product extends Component {
//     render(props) {
//         console.log(this.props);

//         return (
//             <div>
//                 <Cart max={this.props.about}></Cart>
//                 <h1>{this.props.data.map((info) => {//this to print all the elements in the data using map
//                     return info
//                 })}</h1>
//             </div>
//         )
//     }
// }

//-------------------------------------Using API data-------------------------------------
import React, { Component, Fragment } from 'react'

export default class Product extends Component {
  render(props) {
    console.log(this.props);
    
    return (
      <div>
        {
            this.props.max.products.map((lio)=>{//This is the core logic. It accesses the products array nested within the prop named max. The .map() method iterates over every item in this array.
                console.log(lio);
                
                return <Fragment>  
                    <img src={lio.images[0]} alt="" />
                </Fragment> //Used as a lightweight wrapper for the list items. It prevents extra, unnecessary <div> elements from being added to the DOM.
            })
        }
      </div>
    )
  }
}

