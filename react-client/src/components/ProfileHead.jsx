import React, { Component } from "react";

export default class ProfileHead extends Component {
  render() {
    return (
      <div className="profileHeadWrapper profileMainHead">
        <div className="coverPhoto">this is the cover photo</div>
        <div className="profilePic">
          <img
            className="pic"
            src="http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg"
            alt=""
          />
        </div>
        <div className="profileNav">
          <ul>
            <li>
              <a href="#">Timeline</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Friends</a>
            </li>
            <li>
              <a href="#">Photos</a>
            </li>
            <li>
              <a href="#">More</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
