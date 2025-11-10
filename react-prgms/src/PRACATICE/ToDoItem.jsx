import React from 'react'

const ToDoItem = (props) => {
    return (
        <div style={{
            padding: '10px',
            border: '1px solid black',
            margin: '5px',
            backgroundColor: '#f0f0f0',
            textDecoration: props.completed ? 'line-through' : 'none'
        }}>
            <input 
                type="checkbox" 
                checked={props.completed}
                onChange={() => props.toggleTodo(props.id)}
            />
            <span>{props.text}</span>
        </div>
    )
}

export default ToDoItem