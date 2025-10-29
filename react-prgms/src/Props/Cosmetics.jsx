// import React, { Component, Fragment } from 'react'

// export default class Cosmetics extends Component {
//   render(props) {
//     console.log(this.props);

//     return (
//       <div>
//         {
//             this.props.data2.products.map((item)=>{

//                 console.log(item);
//                 return  <Fragment key={item.id}>
//                     <img src={item.images[0]} alt="" />
//                 </Fragment>

//             })
//         }
//       </div>
//     )
//   }
// }

//------------------------------------------in FBC-----------------------------------------------------------------
// import React, { Fragment } from 'react'

// const Cosmetics = (props) => {
//     console.log(props);

//     return (
//         <div>
//             {
//                 props.data2.products.map((item) => {
//                     console.log(item)
//                     return <Fragment key={item.id}>
//                         <img src={item.images[0]} alt="" />
//                     </Fragment>
//                 })
//             }
//         </div>
//     )
// }

// export default Cosmetics