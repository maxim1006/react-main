import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import App from './App'

const container = document.getElementById('app')

if (!container) {
  throw new Error('Не найден корневой элемент #app')
}

hydrateRoot(
  container,
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

