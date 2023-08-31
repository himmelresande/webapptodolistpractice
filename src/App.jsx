// src/App.js
import React, { useState } from 'react';
import TodoItem from './TodoItem';
import './styles.css';

export default function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        if (text.trim() !== '') {
            setTodos([...todos, { text, completed: false }]);
        }
    };

    const deleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    const toggleTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].completed = !updatedTodos[index].completed;
        setTodos(updatedTodos);
    };

    const updateTodoText = (index, newText) => {
        const updatedTodos = [...todos];
        updatedTodos[index].text = newText;
        setTodos(updatedTodos);
    };

    return (
        <div className="container">
            <h1>Todo List</h1>
            <div>
                <input
                    type="text"
                    placeholder="Add a new task"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            addTodo(e.target.value);
                            e.target.value = '';
                        }
                    }}
                />
            </div>
            <ul>
                {todos.map((todo, index) => (
                    <TodoItem
                        key={index}
                        todo={todo}
                        onDelete={() => deleteTodo(index)}
                        onToggle={() => toggleTodo(index)}
                        onUpdateText={(newText) => updateTodoText(index, newText)}
                    />
                ))}
            </ul>
        </div>
    );
}
