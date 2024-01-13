import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import All_context from './context/All_context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <All_context>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </All_context>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
