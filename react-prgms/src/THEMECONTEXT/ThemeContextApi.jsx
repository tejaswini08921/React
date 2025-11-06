import React, { createContext } from 'react'

export let ThemeContextApi = createContext()

let theme={
    dark:{
        backgroundColor:"#331B3F"
    },
    light:{
        backgroundColor:"#ACC7B4"
    }
}

export default theme