// import "babel-polyfill";
import React from "react";
import App from "./components/App.jsx";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import allReducers from "./reducers/index.jsx";
import thunk from "redux-thunk";

const middleware = [thunk];
const store = createStore(allReducers, {}, applyMiddleware(...middleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
