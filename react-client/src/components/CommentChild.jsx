import React, { Component } from "react";

export default class CommentChild extends Component {
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
            <a href="#">{this.props.likes} Likes</a>
            •
            <a href="#"> Reply</a>
          </div>
        </div>
      </div>
    );
  }
}
