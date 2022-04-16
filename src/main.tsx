import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { history, HistoryRouter } from "@/router/history";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={history}>
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
