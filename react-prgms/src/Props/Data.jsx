// import React from 'react'

// const Data = ({ children }) => {
//   return <div>{children}</div>
// }

// export default Data

import React from 'react'
import Box1 from './Box1';
import Box2 from './Box2';

const Data = (props) => {
  console.log(props);

  return (
    <div>
      <Box1 magic={{ data1: props.food, data2: props.access }} />
      <Box2 demo={{ data11: props.food, data12: props.access }} />
    </div>
  )
}

export default Data