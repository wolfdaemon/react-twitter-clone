import React from 'react';
import ReactDOM from 'react-dom/client';
import MyRoutes from './components/MyRoutes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Quacker</h1>
    <MyRoutes/>
  </React.StrictMode>
);