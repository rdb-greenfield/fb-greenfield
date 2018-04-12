import React, { Component } from "react";
import LoginNav from "./LoginNav.jsx";
import List from "./List.jsx";
import LoginBody from "./LoginBody.jsx";
import Profile from "./Profile.jsx";
import Wall from "./Wall.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <LoginNav />
        <Profile />
      </div>
    );
  }
}

export default App;
