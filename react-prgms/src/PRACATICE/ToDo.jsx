import React, { useState } from 'react'
import ToDoItem from './ToDoItem'

const ToDo = () => {
    // STATE DECLARATIONS
    const [todo, setTodo] = useState([])        
    // Why: Store array of todo objects. Empty array = no todos initially
    
    const [inputValue, setInputValue] = useState('') 
    // Why: Track what user types in input. Empty string = input starts blank

    const addToDo = () => {
        if (inputValue.trim()) {  // Check if input is not just empty spaces
            const newTodo = {
                id: Date.now(),   // Create unique ID using current timestamp
                text: inputValue, // Store the text user typed
                completed: false  // New todos start as not completed
            };
            setTodo([...todo, newTodo])  
            // Why: Create NEW array with old todos + new todo
            // [...todo] = copy existing todos, newTodo = add new item
            
            setInputValue(''); // Clear input field for next todo
        }
    }

    return (
        <div>
            <h3>ToDo List</h3>
            
            {/* INPUT FIELD */}
            <input 
                value={inputValue}  // Show current input value
                placeholder="Add new ToDo" 
                type="text" 
                onChange={(e) => setInputValue(e.target.value)} 
                // Why: Update inputValue state every time user types
            />
            
            <button onClick={addToDo}>Add</button>

            {/* DISPLAY TODOS */}
            <div>
                {todo.map(todoItem => (  // Map through todo array
                    <ToDoItem 
                        key={todoItem.id}  
                        text={todoItem.text}  // Pass todo text as prop
                        completed={todoItem.completed}  // Pass completion status
                    />
                ))}
            </div>
        </div>
    )
}

export default ToDo