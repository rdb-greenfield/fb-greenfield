import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link, Redirect } from "react-router-dom";
import { findFriends } from "../actions/index.js";

class ProfileHead extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getFriends = this.getFriends.bind(this);
  }

  componentDidMount() {
    this.getFriends();
  }
  getFriends() {
    var self = this;
    this.props.findFriends(this.props.owner, function(err, response) {});
  }

  render() {
    return (
      <div className="profileHeadWrapper profileMainHead">
        <div className="coverPhoto">this is the cover photo</div>
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
        <div className="profileNav">
          <ul>
            <li>
              <Link to="/profile">Timeline</Link>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <Link to="/friends">Friends</Link>
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
