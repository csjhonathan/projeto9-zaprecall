import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ResetGlobal from './assets/styles/ResetGlobalStyles';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ResetGlobal/>
    <App />
  </React.StrictMode>
);