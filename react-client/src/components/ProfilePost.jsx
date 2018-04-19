import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { postToDB } from "../actions/index.js";

class ProfilePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      img: "",
      video: "",
      feeling: "",
      posted: false
    };
    this.textInsert = this.textInsert.bind(this);
    this.submitPost = this.submitPost.bind(this);
  }

  textInsert(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitPost() {
    var postContents = {
      author: this.props.currentUser,
      owner: this.props.owner,
      body: this.state.body,
      img: this.state.img,
      video: this.state.video,
      feeling: this.state.feeling
    };
    let self = this;
    this.props.postToDB(postContents, function(err, data) {
      if (err) {
        console.log("error", err);
      } else {
        self.setState({
          posted: !self.state.posted
        });
      }
    });
  }

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
            name="body"
            id="statusPost"
            cols="52"
            rows="2"
            placeholder={`What's on your mind, ${
              this.props.profile.user.firstname
            }`}
            className="textareaInProfilePost"
            onChange={this.textInsert}
          />
        </div>
        <div className="postFeeling">Add a feeling</div>
        <div className="submitDiv">
          <button
            type="submit"
            className="postOptionsSubmit"
            onClick={this.submitPost}
          >
            Post
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile,
    currentUser: state.currentUser
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      postToDB: postToDB
    },
    dispatch
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(ProfilePost);
