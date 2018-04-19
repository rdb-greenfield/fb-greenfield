import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link, Redirect } from "react-router-dom";
import { findFriends } from "../actions/index.js";
import S3CoverUploader from "./S3CoverUploader.jsx";
import S3ProfileUploader from "./S3ProfileUploader.jsx";

import axios from "axios";
const friendButton = {
  padding: "10px 18px 10px 18px",
  backgroundColor: "#8b9dc3"
};

class ProfileHead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFriend: false,
      currentUser: this.props.currentUser
    };
    this.getFriends = this.getFriends.bind(this);
    this.checkFriendStatus = this.checkFriendStatus.bind(this);
    this.addFriend = this.addFriend.bind(this);
    this.unfriend = this.unfriend.bind(this);
  }

  componentDidMount() {
    this.getFriends();
    this.checkFriendStatus();
  }

  checkFriendStatus() {
    let self = this;
    this.props.friends.forEach(friend => {
      if (friend.id === this.props.currentUser) {
        console.log("working");
        self.setState({
          isFriend: true
        });
      }
    });
  }

  addFriend() {
    let info = {
      currentUser: this.props.currentUser,
      otherUser: this.props.profile.user.id
    };
    axios({
      method: "post",
      url: "/users/addfriend",
      headers: { token: sessionStorage.getItem("token") },
      data: info
    })
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(err) {
        console.log(err.response.data);
        cb(err.response.data);
      });
  }

  unfriend() {
    let info = {
      currentUser: this.props.currentUser,
      otherUser: this.props.profile.user.id
    };
    axios({
      method: "post",
      url: "/users/removefriend",
      headers: { token: sessionStorage.getItem("token") },
      data: info
    })
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(err) {
        console.log(err.response.data);
        cb(err.response.data);
      });
  }

  getFriends() {
    var self = this;
    this.props.findFriends(this.props.owner, function(err, response) {});
  }

  render() {
    return (
      <div className="profileHeadWrapper profileMainHead">
        <div className="coverPhoto">
          <img
            className="coverPic"
            src={this.props.profile.user.coverphoto}
            alt=""
          />
        </div>
        <div className="profilePic">
          <img
            className="pic"
            src={this.props.profile.user.profilepicture}
            alt=""
          />
        </div>
        <div className="profileName">
          <p>
            {this.props.profile.user.firstname}{" "}
            {this.props.profile.user.lastname}
          </p>
        </div>
        <div className="add-friends">
          {this.props.owner !== this.props.currentUser ? (
            this.state.isFriend ? (
              <button style={friendButton} onClick={this.unfriend}>
                Unfriend
              </button>
            ) : (
              <button style={friendButton} onClick={this.addFriend}>
                Add Friend
              </button>
            )
          ) : (
            ""
          )}
        </div>

        {this.props.owner === this.props.currentUser ? (
          <div className="cover-updater">
            <S3CoverUploader currentUser={this.state.currentUser} />
          </div>
        ) : null}
        {this.props.owner === this.props.currentUser ? (
          <div className="profile-updater">
            <S3ProfileUploader currentUser={this.state.currentUser} />
          </div>
        ) : null}
        <div className="profileNav">
          <ul>
            <li>
              <Link to="/profile">Timeline</Link>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <Link
                to="/friends"
                onClick={() => {
                  this.getFriends();
                }}
              >
                Friends
              </Link>
            </li>
            <li>
              <a href="#">Photos</a>
            </li>
            <li>
              <a href="#">More</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile,
    currentUser: state.currentUser,
    users: state.currentUser,
    friends: state.friends
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      findFriends: findFriends
    },
    dispatch
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(ProfileHead);
