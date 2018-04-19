import React, { Component } from "react";

export default class ProfileFriends extends Component {
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
                />
              );
            }
          })}
        </div>
      </div>
    );
  }
}
