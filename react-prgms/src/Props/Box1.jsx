// import React, { Fragment } from 'react'

// const Box1 = (props) => {
//   console.log(props);

//   return (
//     <div>
//       {
//         props.data3.products.map((item) => (
//           <Fragment key={item.id}>
//             <img src={item.images[0]} alt={item.title} width="200" height="150" />
//           </Fragment>
//         ))
//       }
//     </div>
//   )
// }

// export default Box1

import React from 'react'
import Max from './Max';
import Lio from './Lio';

const Box1 = (props) => {
  console.log(props);
  
  return (
    <div>
      <Max food={props.magic.data1}></Max>
    </div>
  )
}

export default Box1
