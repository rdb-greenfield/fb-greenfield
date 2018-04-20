import React, { Component } from "react";
import { fetchSelectedProfile } from "../actions/index.js";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link, Redirect } from "react-router-dom";

class ProfileFriends extends Component {
  constructor(props) {
    super(props);
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
      <div className="profilePhotos">
        <div className="profilePhotosTitle">
          <strong>Friends</strong>
        </div>
        <div className="profilePhotosGrid">
          {this.props.friends.map((friend, index) => {
            if (index < 6) {
              return (
                <img
                  key={friend.id}
                  className="profilePhotosPreview"
                  src={friend.profilepicture}
                  alt=""
                  onClick={() => this.getProfile(friend.id)}
                />
              );
            }
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

export default connect(mapStateToProps, matchDispatchToProps)(ProfileFriends);
