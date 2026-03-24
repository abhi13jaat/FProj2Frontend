import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const initialOptions = {
    "client-id": "AWUoKIvhlTSMS5epTCSt4AgBGKVNmrMjU36xsVIH6y4ZkLh4ZOborLRq3-ctQRMUBN7cx0crrEndbo7i", 
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
