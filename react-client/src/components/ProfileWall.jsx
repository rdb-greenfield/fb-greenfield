import React, { Component } from 'react';
import Comment from './Comment.jsx';

export default class ProfileWall extends Component {
  render() {
    return (
      <div className="profileWall">
        <div className="post-content">
          <div className="post-header">
            <a href="#">
              <img
                className="post-img-circle"
                src="http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg"
                alt="default photo"
              />
            </a>
            <div className="post-header-text">
              <a href="#">
                <span>Rick Sanchez</span>
              </a>
              <br />
              <span>THE FUTURE • LOCATION</span>
            </div>
          </div>
          <div className="post-body">
            BODY TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT
            TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT
            TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT
          </div>
        </div>
        <div>
          <div className="post-options">
            <span>
              <a href="#">Like</a>
            </span>
            <span>
              <a href="#">Comment</a>
            </span>
            <span>
              <a href="#">Share</a>
            </span>
          </div>
          <div className="like-counter">you and 10 others liked this</div>
        </div>
        <div className="comment-feed">
          <Comment />
          <Comment />
        </div>
        <div className="post-footer">
          <div>
            <img
              src="http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg"
              alt="default photo"
            />
          </div>
          <div className="comment-textarea">
            <textarea name="commentInput" placeholder="Write a comment..." />
          </div>
        </div>
      </div>
    );
  }
}
