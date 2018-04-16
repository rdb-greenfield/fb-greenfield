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
          <div className="friendsView">Friends</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile,
    user: state.user,
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps)(Friends);
