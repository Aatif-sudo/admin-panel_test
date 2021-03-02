import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, combineReducers } from "redux";
import modalreducer from "./Reducer/modalreducer";
import { Provider } from "react-redux";
import studentreducer from "./Reducer/studentreducer";
import sidebarreducer from "./Reducer/studentreducer";
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(
  combineReducers({
    modalreducer,
    studentreducer,
    sidebarreducer,
  })
);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
