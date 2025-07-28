import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Set initial dark theme
document.documentElement.classList.add('dark');
document.documentElement.setAttribute('data-theme', 'dark');
localStorage.setItem('theme', 'dark');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
