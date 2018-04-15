import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class ProfileHead extends Component {
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
              <a href="#">Timeline</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Friends</a>
            </li>
            <li>
              <a href="#">Photos</a>
            </li>
            <li>
              <a href="#">More</a>
            </li>
          </ul>
        </div>
        {console.log(this.props.profile)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile
  };
}

export default connect(mapStateToProps)(ProfileHead);
