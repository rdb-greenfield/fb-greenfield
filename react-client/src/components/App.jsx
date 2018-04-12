import React, { Component } from "react";
import LoginNav from "./LoginNav.jsx";
import List from "./List.jsx";
import LoginBody from "./LoginBody.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <LoginNav />
        <LoginBody />
      </div>
    );
  }
}

export default App;
