import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CommentChild from "./CommentChild.jsx";
import Moment from "moment";
import { postToDB } from "../actions/index.js";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentInput: "",
      posted: false
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
      type: "sub-comment",
      body: this.state.commentInput,
      img: null,
      video: null
    };
    this.props.postToDB(postComment, function(err, data) {
      if (err) {
        console.log("error", err);
      }
    });
  }
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
              <a href="#">{this.props.likes} Likes</a>
            </p>
            •
            <a href="#"> Reply </a>
            •
            <p>{Moment.parseZone(this.props.timestamp).fromNow()}</p>
          </div>
          {this.props.profile.wall.map(post => {
            if (
              post.post_type === "sub-comment" &&
              post.parent_id === this.props.postId
            ) {
              return (
                <CommentChild
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

export default connect(mapStateToProps, matchDispatchToProps)(Comment);
