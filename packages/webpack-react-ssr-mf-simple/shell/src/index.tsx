import './index.scss';

import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { App } from './components/app/app.component';
import React from 'react';

const container = document.getElementById('app');

if (container) {
    hydrateRoot(
        container,
        <Router>
            <App />
        </Router>,
    );
} else {
    console.log('Нет элемента с id app');
}
