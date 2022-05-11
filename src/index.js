import React from 'react';
import ReactDOM from 'react-dom/client';
import MyRoutes from './components/MyRoutes';
import './css/index.css';
//Global Variable but will not reset
//Need to click F5 for the id to show up.
window.id = localStorage.getItem('userId');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Quacker</h1>
    <h2>@{window.id}</h2>
    <MyRoutes />
  </React.StrictMode>
);