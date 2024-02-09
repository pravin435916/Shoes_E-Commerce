import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import App from './App.jsx';
import { ToastContainer, toast } from "react-toastify";
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App/>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      // theme="colored"
    />
  </Provider>
);
