import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MainContextProvider from './context/MainContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <MainContextProvider>
      <App />
      <ToastContainer />
    </MainContextProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
