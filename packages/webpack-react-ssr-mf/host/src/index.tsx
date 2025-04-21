import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.module.sass';

import { App } from './App';

// @ts-ignore
window.__env__ = {
    API: '',
};

const container = document.getElementById('app');
hydrateRoot(
    container,
    <Router>
        <App />
    </Router>,
    {
        onRecoverableError: error => {
            if (error instanceof Error && error.message === '[skip ssr]') {
                return;
            }
        },
    },
);
