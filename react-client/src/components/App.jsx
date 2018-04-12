import React, { Component } from "react";
import LoginNav from "./LoginNav.jsx";
import List from "./List.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <LoginNav />
        <List />
      </div>
    );
  }
}

export default App;
