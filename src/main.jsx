// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/Store';  // تأكد من استخدام التصدير الافتراضي هنا
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>  
    <App />
  </Provider>
);
