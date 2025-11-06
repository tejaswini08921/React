import React from 'react'
import Hoc from './Hoc'
import Products from './Products';

const Cart = (props) => {
    console.log(props);
    
  return (
    <div>
        Cart
    </div>
  )
}

export default Hoc(Cart)