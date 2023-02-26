import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import store  from './store/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
      </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
