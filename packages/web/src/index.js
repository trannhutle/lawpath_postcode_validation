import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import "./i18n";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading</div>}>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
