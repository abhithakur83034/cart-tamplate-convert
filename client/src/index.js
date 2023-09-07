import React from 'react';
import ReactDOM from 'react-dom'; // Corrected import statement
import App from './App';
import store from "./redux/store/store";
import { Provider } from "react-redux";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate persistor={persistor}><App /></PersistGate>
    </Provider>
    <ToastContainer/>
  </React.StrictMode>
);
