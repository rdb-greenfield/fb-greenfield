import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import List from "./components/List.jsx";
import store from "./store.js";

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
