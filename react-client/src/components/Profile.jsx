import React, { Component } from "react";
import ProfileHead from "./ProfileHead.jsx";
import Intro from "./Intro.jsx";
import ProfilePost from "./ProfilePost.jsx";
import ProfileFriends from "./ProfileFriends.jsx";
import ProfileWall from "./ProfileWall.jsx";

export default class Profile extends Component {
  render() {
    return (
      <div className="profileMain">
        <ProfileHead />
        <Intro />
        <ProfilePost />
        <ProfileFriends />
        <ProfileWall />
        <ProfileWall />
        <ProfileWall />
        <ProfileWall />
        <ProfileWall />
        <ProfileWall />
        <ProfileWall />
        <ProfileWall />
        <ProfileWall />
      </div>
    );
  }
}
