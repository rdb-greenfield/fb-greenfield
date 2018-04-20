import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ProfileHead from "./ProfileHead.jsx";
import HomeNav from "./HomeNav.jsx";
import { fetchSelectedProfile } from "../actions/index.js";
import { Link, Redirect } from "react-router-dom";

const friendStyle = {
  width: "419px",
  height: "110px"
};

const imgStyle = {
  width: "100px",
  height: "100px",
  float: "left"
};

class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      owner: this.props.profile.user.id
    };
    this.getProfile = this.getProfile.bind(this);
  }

  getProfile(value) {
    this.props.fetchSelectedProfile(value, function(err, data) {
      if (data) {
        return (
          <Redirect
            to={{
              pathname: `/profile`
            }}
          />
        );
      }
    });
  }

  render() {
    return (
      <div>
        <HomeNav />
        <div className="friendsMain">
          <div className="profileMainHead">
            <ProfileHead owner={this.state.owner} />
          </div>
          {this.props.friends.map(friend => {
            console.log(friend);
            return (
              <div
                key={friend.id}
                style={friendStyle}
                onClick={() => this.getProfile(friend.id)}
              >
                <img
                  src={friend.profilepicture}
                  alt=""
                  style={imgStyle}
                  onClick={() => this.getProfile(friend.id)}
                />
                {friend.firstname} {friend.lastname}
              </div>
            );
          })}
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
      fetchSelectedProfile: fetchSelectedProfile
    },
    dispatch
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(Friends);
