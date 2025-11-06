import React, { createContext } from 'react'

export let ContextApi = createContext()

let UserContext = ({children}) => {

    return <ContextApi.Provider value={{name:"Dorothy V.B", age:22 , place:"Bangalore"} }>
        {children}
    </ContextApi.Provider>
}

export default UserContext
