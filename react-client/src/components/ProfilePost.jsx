import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class ProfilePost extends Component {
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
            cols="52"
            rows="2"
            placeholder={`What's on your mind, ${
              this.props.profile.user.firstname
            }`}
            className="textareaInProfilePost"
          />
        </div>
        <div className="postFeeling">Add a feeling</div>
        <div className="submitDiv">
          <button type="submit" className="postOptionsSubmit">
            Post
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile
  };
}

export default connect(mapStateToProps)(ProfilePost);
