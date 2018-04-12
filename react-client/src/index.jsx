// import "babel-polyfill";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import allReducers from "./reducers/index.jsx";
import List from "./components/List.jsx";
import thunk from "redux-thunk";

const middleware = [thunk];
const store = createStore(allReducers, {}, applyMiddleware(...middleware));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <List />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
