import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ProfileHead from "./ProfileHead.jsx";
import HomeNav from "./HomeNav.jsx";

class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <HomeNav />
        <div className="friendsMain">
          <div className="profileMainHead">
            <ProfileHead />
          </div>
          {this.props.friends.map(friend => {
            return <p>{friend.firstname}</p>;
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

export default connect(mapStateToProps)(Friends);
