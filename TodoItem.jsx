// Импортируем необходимые зависимости из библиотеки React и Hook useState.
import React, { useState } from 'react';

// Экспортируем компонент TodoItem по умолчанию.
export default function TodoItem({ todo, onDelete, onToggle, onUpdateText }) {
    // Используем Hook useState для управления состоянием компонента.
    const [editing, setEditing] = useState(false); // Состояние редактирования задачи
    const [editedText, setEditedText] = useState(todo.text); // Состояние текста задачи, которое редактируется

    // Функция startEditing вызывается при начале редактирования задачи.
    const startEditing = () => {
        setEditing(true);
    };

    // Функция finishEditing вызывается при завершении редактирования задачи.
    const finishEditing = () => {
        setEditing(false);
        if (editedText.trim() !== '') {
            onUpdateText(editedText); // Если текст не пустой, обновляем текст задачи.
        }
    };

    // Функция handleTextChange вызывается при изменении текста в поле ввода.
    const handleTextChange = (e) => {
        setEditedText(e.target.value);
    };

    return (
        <li className="todo-item">
            {editing ? ( // Если редактирование активно, отображаем поле ввода для редактирования текста задачи.
                <>
                    <input
                        type="text"
                        value={editedText}
                        onChange={handleTextChange}
                        onBlur={finishEditing} // Вызываем finishEditing при потере фокуса поля ввода
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                finishEditing();
                            }
                        }}
                    />
                </>
            ) : ( // Если редактирование не активно, отображаем информацию о задаче, флажок завершенности и кнопку "Удалить".
                <>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={onToggle}
                    />
                    <span
                        className={todo.completed ? 'completed' : ''} // Добавляем класс 'completed' для завершенных задач
                        onClick={startEditing} // Вызываем startEditing при клике на текст задачи
                    >
                        {todo.text} {/* Отображаем текст задачи */}
                    </span>
                    <button onClick={onDelete}>Delete</button> {/* Вызываем onDelete при клике на кнопку "Удалить" */}
                </>
            )}
        </li>
    );
}
