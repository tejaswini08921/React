// import React, { Fragment } from 'react'

// const Box2 = (props) => {
//   console.log(props);

//   return (
//     <div>
//       {
//         props.data13.carts.map((cart) => (
//           <Fragment key={cart.id}>
//             {
//               cart.products.map((prod) => (
//                 <Fragment key={prod.id}>
//                   <img src={prod.thumbnail} alt={prod.title} width="200" height="150" />
//                 </Fragment>
//               ))
//             }
//           </Fragment>
//         ))
//       }
//     </div>
//   )
// }

// export default Box2

import React from 'react'
import Lio from './Lio'

const Box2 = (props) => {
  console.log(props);

  return (
    <div>
      <Lio access={props.demo.data12}></Lio>
    </div>
  )
}

export default Box2
