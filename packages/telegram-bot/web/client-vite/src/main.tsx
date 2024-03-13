import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './global';
import App from './components/app/app.component';
import { BrowserRouter } from 'react-router-dom';

console.log(import.meta.env.VITE_SOME_KEY); // "123"

// все энвы которые прокидывает vite
// console.log(import.meta.env);
// глобально задекларированные переменные
// console.log(window.prop);
// console.log(window.Telegram.WebApp);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
);
