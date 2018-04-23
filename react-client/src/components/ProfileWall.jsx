import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Comment from "./Comment.jsx";
import moment from "moment";
import { postToDB, fetchSelectedProfile } from "../actions/index.js";

class ProfileWall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentInput: ""
    };
    this.textInsert = this.textInsert.bind(this);
    this.submitComment = this.submitComment.bind(this);
  }

  textInsert(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitComment() {
    var postComment = {
      author: this.props.currentUser,
      owner: this.props.authorId,
      parent: this.props.postId,
      type: "comment",
      body: this.state.commentInput,
      img: null,
      video: null
    };
    this.props.postToDB(postComment, function(err, data) {
      if (err) {
        console.log("error", err);
      }
      if (data) {
        <Redirect
          to={{
            pathname: `/profile`
          }}
        />;
      }
    });
  }

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
                  authorId={post.author_id}
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
            <textarea
              name="commentInput"
              placeholder="Press Enter to post"
              onChange={this.textInsert}
              onKeyPress={event => {
                if (event.key === "Enter") {
                  this.submitComment();
                }
              }}
            />
          </div>
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
      postToDB: postToDB,
      fetchSelectedProfile: fetchSelectedProfile
    },
    dispatch
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(ProfileWall);
