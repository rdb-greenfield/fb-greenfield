import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Comment from "./Comment.jsx";
import moment from "moment";

class ProfileWall extends Component {
  render() {
    return (
      <div className="profileWall">
        <div className="post-content">
          <div className="post-header">
            <a href="#">
              <img
                className="post-img-circle"
                src={this.props.ownerProfilePicture}
                alt="default photo"
              />
            </a>
            <div className="post-header-text">
              <a href="#">
                <span>{this.props.author}</span>
              </a>
              <br />
              <span>{moment.parseZone(this.props.timestamp).fromNow()}</span>
            </div>
          </div>
          <div className="post-body">{this.props.body}</div>
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
          <div className="like-counter">
            <a href="#">{this.props.likes} Likes</a>
          </div>
        </div>
        <div className="comment-feed">
          {this.props.profile.wall.map(post => {
            if (
              post.post_type === "comment" &&
              post.parent_id === this.props.postId
            ) {
              return (
                <Comment
                  key={post.id}
                  author={post.firstname + " " + post.lastname}
                  body={post.body}
                  timestamp={post.createdat}
                  likes={post.likes}
                  ownerProfilePicture={post.profilepicture}
                  postId={post.id}
                />
              );
            }
          })}
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

function mapStateToProps(state) {
  return {
    profile: state.profile
  };
}

export default connect(mapStateToProps)(ProfileWall);
