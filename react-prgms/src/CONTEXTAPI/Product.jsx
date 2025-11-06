import React, { useContext } from 'react'
import { ContextApi } from './ContextApi'

const Product = () => {
    let max=useContext(ContextApi)//another way of consuming the values given by the provider
    console.log(max);
    
    return (
        <div>
        <h1>{max.name}</h1>
        </div>
    )
}

export default Product