import React, { Component } from 'react';
import CommentChild from './CommentChild.jsx';

export default class Comment extends Component {
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
          <div>text blah blah this is a comment comment comment</div>
          <div>
            <a href="#">Like </a>
            •
            <a href="#"> Reply </a>
            •
            <a href="#"> Time</a>
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
