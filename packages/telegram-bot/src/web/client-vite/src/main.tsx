import React from 'react';
import ReactDOM from 'react-dom/client';
import AppComponent from './app.component';
import './index.css';
import './global';

// все энвы которые прокидывает vite
// console.log(import.meta.env);
// глобально задекларированные переменные
// console.log(window.prop);
// console.log(window.Telegram.WebApp);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <AppComponent />
    </React.StrictMode>
);
