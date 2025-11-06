import React, { useState } from 'react'

const Counter = (props) => {

    let [count, setCount] = useState(props.initialValue)

    let handleIncrement = () => {
        setCount(count + props.step)
    }

    let handleDecrement = () => {
        if (count - props.step >= 0)
            setCount(count - props.step)
    }

    const handleReset = () => {
        setCount(props.initialValue);  // Reset to initial value
    };
    return (
        <div>
            <h3>Counter:{count}</h3>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleReset}>Reset</button>


        </div>
    )

}


export default Counter