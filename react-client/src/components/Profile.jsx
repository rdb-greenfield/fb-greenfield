import React, { Component } from "react";
import ProfileHead from "./ProfileHead.jsx";
import Wall from "./Wall.jsx";

export default class Profile extends Component {
  render() {
    return (
      <div>
        <ProfileHead />
        <Wall />
      </div>
    );
  }
}
