import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from '@articles/ScrollToTop';
import App from './App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import CheckWallet from '@articles/CheckWallet';


// if (process.env.NODE_ENV === "development") {
//   const { worker } = require("./mock/~~~");
//   worker.start({ onUnhandledRequest: "bypass" });
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      {/* <CheckWallet /> */}
      <App />
    </BrowserRouter>
    <ToastContainer theme="dark" />
  </React.StrictMode>,
);
