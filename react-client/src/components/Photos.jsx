import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ProfileHead from "./ProfileHead.jsx";
import HomeNav from "./HomeNav.jsx";

const imgStyle = {
  width: "850px",
  height: "auto"
};

class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      owner: this.props.profile.user.id
    };
  }

  render() {
    return (
      <div>
        <HomeNav />
        <div className="photosMain">
          <div className="profileMainHead">
            <ProfileHead owner={this.state.owner} />
          </div>
          {this.props.profile.photos.map((photo, index) => {
            if (index < 6) {
              return (
                <div>
                  <img src={photo.photo} alt="" style={imgStyle} />
                </div>
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

export default connect(mapStateToProps)(Photos);
