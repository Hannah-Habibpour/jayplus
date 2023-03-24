import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Settings from './Settings'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Settings />
    <App />
  </React.StrictMode>
);
