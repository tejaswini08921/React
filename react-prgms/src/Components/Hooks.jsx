import React, { use, useState } from 'react'

// const Hooks = () => {
//     let [state, setState] = useState("javascript")

//     let handleChange = ()=>{
//         setState("react.js")
//     }
//     return (
//         <div>
//             <h1>{state}</h1>
//             <button onClick={handleChange}>click!</button>
//         </div>
//     )
// }


// export default Hooks

// import React from 'react'

// const Hooks = () => {
//     let [count, setCount] = useState(0)

//     let handlecount = () => {
//         setCount(count + 1)
//     }
//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={handlecount}>Click!</button>
//         </div>
//     )
// }

// export default Hooks

// import React from 'react'
import vid from '../Videos/246391_small.mp4'
const Hooks = () => {
    let [play, setPlay] = useState(false)

    let handlePlay = () => {
        setPlay(!play)
        let cntrl = document.getElementById('control')
        if (play == false) {
            cntrl.play()
        }
        else {
           cntrl.pause()
        }
    }
    return (
        <div>
            <video id="control" src={vid} height={500} width={500}></video>
            <button onClick={handlePlay}>play/pause</button>
        </div>
    )
}

export default Hooks