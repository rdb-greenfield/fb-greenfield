import React, { Component } from "react";
import S3PhotoUploader from "./S3PhotoUploader.jsx";
import { connect } from "react-redux";

class ProfilePhotos extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="profilePhotos">
        <div className="profilePhotosTitle">
          <strong>Photos</strong>
          {this.props.profile.user.id === this.props.currentUser ? (
            <S3PhotoUploader />
          ) : null}
        </div>
        <div className="profilePhotosGrid">
          {this.props.photos.map((photo, index) => {
            if (index < 6) {
              return (
                <div
                  key={index}
                  style={{
                    background: `url(${photo.photo}
                    
                  )no-repeat`,
                    backgroundSize: "cover",
                    width: "100px",
                    height: "100px"
                  }}
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
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps)(ProfilePhotos);
