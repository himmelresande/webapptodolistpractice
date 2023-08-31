// src/TodoItem.js
import React, { useState } from 'react';

export default function TodoItem({ todo, onDelete, onToggle, onUpdateText }) {
    const [editing, setEditing] = useState(false);
    const [editedText, setEditedText] = useState(todo.text);

    const startEditing = () => {
        setEditing(true);
    };

    const finishEditing = () => {
        setEditing(false);
        if (editedText.trim() !== '') {
            onUpdateText(editedText);
        }
    };

    const handleTextChange = (e) => {
        setEditedText(e.target.value);
    };

    return (
        <li className="todo-item">
            {editing ? (
                <>
                    <input
                        type="text"
                        value={editedText}
                        onChange={handleTextChange}
                        onBlur={finishEditing} // Сохранение при потере фокуса
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                finishEditing();
                            }
                        }}
                    />
                </>
            ) : (
                <>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={onToggle}
                    />
                    <span
                        className={todo.completed ? 'completed' : ''}
                        onClick={startEditing}
                    >
                        {todo.text}
                    </span>
                    <button onClick={onDelete}>Delete</button>
                </>
            )}
        </li>
    );
}
