import React from "react";
import ReactDOM from "react-dom";
import { PersistGate } from "reduxjs-toolkit-persist/integration/react";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";

import App from "./components/App/App";
import "./index.css";
import "modern-normalize/modern-normalize.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
