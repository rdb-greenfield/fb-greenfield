import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./store.js";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
