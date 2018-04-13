import React, { Component } from 'react';
import Comment from './Comment.jsx';

export default class ProfileWall extends Component {
  render() {
    return (
      <div className="profileWall">
        <img
          className="post-img-circle"
          src="http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg"
          alt="default photo"
        />
        <div className="post-header">
          <a href="#">
            <span>USER</span>
          </a>
          <br />
          <span>DATE</span>
        </div>
        <div>
          <div className="post-body">
            BODY TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT
          </div>
          <div className="post-footer">
            <a href="#">Like</a>
            <a href="#">Comment</a>
            <a href="#">Share</a>
          </div>
        </div>
        <div className="like-counter"># Likes</div>
        <div className="comment-feed">
          <Comment />
          <Comment />
          <textarea name="commentInput" placeholder="Write a comment..." />
        </div>
      </div>
    );
  }
}
