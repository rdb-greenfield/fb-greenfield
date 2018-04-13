import React, { Component } from "react";
import LoginNav from "./LoginNav.jsx";
import List from "./List.jsx";
import LoginBody from "./LoginBody.jsx";
import Profile from "./Profile.jsx";
import HomeNav from "./HomeNav.jsx";
import { Route, BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <HomeNav />
          <Profile />
        </div>
      </Router>
    );
  }
}

export default App;
