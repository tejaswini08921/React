import React, { useContext, useState } from 'react'
import { ThemeContextApi } from './ThemeContextApi';

const Container = () => {
let {dark,light}=useContext(ThemeContextApi)


let [state,setState]=useState(true)

let handleTheme=()=>{
    setState(!state)

let box=document.getElementById('box')
if(state == true){
    box.style.backgroundColor=dark.backgroundColor
}
else{
    box.style.backgroundColor=light.backgroundColor
}
}


  return (
    <div>
        <div id="box">

        </div>
<button onClick={handleTheme}>{state?"dark":"light"}</button>
    </div>
    
    
  )
}

export default Container