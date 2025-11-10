import React, { useState } from 'react'
import ToDoItem from './ToDoItem'

const ToDo = () => {
   
    const [todo, setTodo] = useState([])
    const [inputValue, setInputValue] = useState('')

    
    const addToDo = () => {
        if (inputValue.trim()) {
            const newTodo = {
                id: Date.now(),
                text: inputValue,
                completed: false
            };
            setTodo([...todo, newTodo])
            setInputValue('');
        }
    }

    
    const toggleTodo = (id) => {  
        setTodo(todo.map(item => {
            if (item.id === id) {
                return { ...item, completed: !item.completed };
            }
            return item;
        }));
    };  

    return (
        <div>
            <h3>ToDo List</h3>

            <input
                value={inputValue}
                placeholder="Add new ToDo"
                type="text"
                onChange={(e) => setInputValue(e.target.value)}
            />

            <button onClick={addToDo}>Add</button>

            <div>
                {todo.map(todoItem => (
                    <ToDoItem
                        key={todoItem.id}
                        text={todoItem.text}
                        completed={todoItem.completed}
                        id={todoItem.id}
                        toggleTodo={toggleTodo}  
                    />
                ))}
            </div>
        </div>
    )
}

export default ToDo