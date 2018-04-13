import React, { Component } from "react";

export default class ProfilePost extends Component {
  render() {
    return (
      <div className="profilePost">
        <div className="postOptions">
          <ul>
            <li>
              <a href="#">Make Post</a>
            </li>
            <li>
              <a href="#">Photo/Video</a>
            </li>
            <li>
              <a href="#">Feeling</a>
            </li>
          </ul>
        </div>
        <div className="imageAndTextareaParentDiv">
          {" "}
          <img
            className="profilePicInPost"
            src="http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg"
            alt=""
          />{" "}
          <textarea
            name="statusPost"
            id="statusPost"
            cols="60"
            rows="3"
            placeholder="What's on your mind, Vlad?"
            className="textareaInProfilePost"
          />
        </div>
      </div>
    );
  }
}
