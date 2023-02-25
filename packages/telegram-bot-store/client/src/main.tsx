import React from 'react';
import ReactDOM from 'react-dom/client';
import AppComponent from './app.component';
import './index.css';

// все энвы которые прокидывает vite
console.log(import.meta.env);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <AppComponent />
    </React.StrictMode>
);
