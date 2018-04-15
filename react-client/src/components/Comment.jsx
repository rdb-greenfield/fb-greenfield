import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CommentChild from "./CommentChild.jsx";

class Comment extends Component {
  render() {
    return (
      <div className="comment">
        <img
          className="comment-img-circle"
          alt="default photo"
          src={this.props.ownerProfilePicture}
        />
        <div className="comment-body">
          <a href="#">{this.props.author}</a>
          <div>{this.props.body}</div>
          <div>
            <p>
              <a href="#">{this.props.likes}</a> Likes
            </p>
            •
            <a href="#"> Reply </a>
            •
            <p>{this.props.timestamp}</p>
          </div>
          <CommentChild />
          <CommentChild />
          <CommentChild />
          <textarea name="commentInput" placeholder="Write a comment..." />
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

export default connect(mapStateToProps)(Comment);
