import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import BrowserRouter from 'react-router-dom/BrowserRouter'

// ReactDOM.render((
//    <BrowserRouter basename={process.env.PUBLIC_URL}>
//      <App />
//    </BrowserRouter>
// ), ...)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
