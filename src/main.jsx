import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const initialOptions = {
    "client-id": "AQCBrFyBS_7azBt9hCwGUuZ8cIGMVkFY26_dwG-zXn-EaeGUlhTzxZ2KpUeQYstfzyHAP95rM0u29mwt", 
    currency: "USD",
    intent: "capture",
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PayPalScriptProvider options={initialOptions}>
      <App />
    </PayPalScriptProvider>
  </React.StrictMode>,
);
