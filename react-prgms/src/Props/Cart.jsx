// import React, { Component } from 'react'

// export default class Cart extends Component {
//   render(props) {
//     console.log(this.props);
    
//     return (
//       <div>
//         <h1>{this.props.max}</h1>
//       </div>
//     )
//   }
// }

//-----------------------------------API---------------------------------
import React, { Component } from 'react'
import Product from './Product';

export default class Cart extends Component {
  render(props) {
    console.log(this.props);
    
    return (
      <div>
        <div>
            <Product max={this.props.data}></Product>
        </div>
      </div>
    )
  }
}
