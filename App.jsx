// src/App.js
// Импортируем необходимые зависимости из библиотеки React.
import React, { useState } from 'react';

// Импортируем компонент TodoItem из локального файла './TodoItem'.
import TodoItem from './TodoItem';

// Импортируем стили из файла './styles.css'.
import './styles.css';

// Экспортируем компонент App, который представляет основное приложение.
export default function App() {
    // Используем React Hook useState для создания состояния 'todos' (список задач) и функции 'setTodos' для его обновления.
    const [todos, setTodos] = useState([]);

    // Функция 'addTodo' добавляет новую задачу в список.
    const addTodo = (text) => {
        // Проверяем, что введенный текст не пустой.
        if (text.trim() !== '') {
            // Создаем новый массив задач, добавляя в него новую задачу с текстом и флагом завершенности (completed: false).
            setTodos([...todos, { text, completed: false }]);
        }
    };

    // Функция 'deleteTodo' удаляет задачу по ее индексу в массиве.
    const deleteTodo = (index) => {
        // Создаем новый массив задач, исключая задачу с указанным индексом.
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    // Функция 'toggleTodo' переключает состояние задачи (завершена/не завершена) по индексу.
    const toggleTodo = (index) => {
        // Создаем копию текущего массива задач и инвертируем состояние задачи с указанным индексом.
        const updatedTodos = [...todos];
        updatedTodos[index].completed = !updatedTodos[index].completed;
        setTodos(updatedTodos);
    };

    // Функция 'updateTodoText' обновляет текст задачи по индексу.
    const updateTodoText = (index, newText) => {
        // Создаем копию текущего массива задач и обновляем текст задачи с указанным индексом.
        const updatedTodos = [...todos];
        updatedTodos[index].text = newText;
        setTodos(updatedTodos);
    };

    // Возвращаем JSX, представляющий интерфейс приложения.
    return (
        <div className="container">
            <h1>Todo List</h1>
            <div>
                <input
                    type="text"
                    placeholder="Add a new task"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            // Вызываем функцию 'addTodo' при нажатии клавиши "Enter" и сбрасываем значение ввода.
                            addTodo(e.target.value);
                            e.target.value = '';
                        }
                    }}
                />
            </div>
            <ul>
                {todos.map((todo, index) => (
                    // Рендерим компонент TodoItem для каждой задачи, передавая ей соответствующие свойства.
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
