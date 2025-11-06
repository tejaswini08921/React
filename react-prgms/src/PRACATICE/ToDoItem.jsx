import React from 'react'

const ToDoItem = (props) => {


  return (
    // This is what each todo item looks like

        <div style={{border: '1px solid #a5ecf8ff', margin: '5px', padding: '10px'}}>
            <span>{props.text}</span>
        </div>
    )
}


export default ToDoItem