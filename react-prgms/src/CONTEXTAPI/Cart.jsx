import React from 'react'
import { ContextApi } from './ContextApi'

const Cart = () => {
    return (
        <div>
            <ContextApi.Consumer>
                {
                    (lio) => {
                        console.log(lio);//this isone way of recieving the data/value given by the provider

                    }
                }
            </ContextApi.Consumer>
        </div>
    )
}

export default Cart