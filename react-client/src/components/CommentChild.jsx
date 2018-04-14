import React, { Component } from 'react';

export default class CommentChild extends Component {
  render() {
    return (
      <div className="comment">
        <img
          className="comment-img-circle"
          alt="default photo"
          src="http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg"
        />
        <div className="comment-body">
          <a href="#">USER </a>
          TEXT BLAH BLAH THIS IS MY COMMENT
          <div>
            <a href="#">Like </a>
            •
            <a href="#"> Reply</a>
          </div>
        </div>
      </div>
    );
  }
}
