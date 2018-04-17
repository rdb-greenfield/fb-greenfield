import React, { Component } from "react";
import LoginNav from "./LoginNav.jsx";
import List from "./List.jsx";
import Login from "./Login.jsx";
import Profile from "./Profile.jsx";
import S3ProfileUploader from "./S3ProfileUploader.jsx";
import S3CoverUploader from "./S3CoverUploader.jsx";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./Home.jsx";
import Friends from "./Friends.jsx";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
          <Route path="/list" component={List} />
          <Route path="/home" component={Home} />
          <Route path="/friends" component={Friends} />
        </Switch>
      </Router>
    );
  }
}

export default App;
