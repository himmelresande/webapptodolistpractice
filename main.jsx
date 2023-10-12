// Импортируем библиотеку React из установленного модуля 'react'.
import React from 'react';

// Импортируем функцию 'render' из ReactDOM, но используем расширенный путь 'react-dom/client'.
import ReactDOM from 'react-dom/client';

// Импортируем основной компонент приложения 'App' из локального файла 'App.jsx'.
import App from './App.jsx';

// Импортируем стили из файла 'index.css'.
import './index.css';

// Создаем корень (root) для рендеринга приложения в элемент с идентификатором 'root' на веб-странице.
ReactDOM.createRoot(document.getElementById('root')).render(
  // Оборачиваем компонент 'App' в 'React.StrictMode'. 'React.StrictMode' используется для выявления потенциальных проблем в приложении.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
