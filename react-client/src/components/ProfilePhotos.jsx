import React, { Component } from "react";

export default class ProfilePhotos extends Component {
  render() {
    return (
      <div className="profilePhotos">
        <div className="profilePhotosTitle">
          <strong>Photos</strong>
        </div>
        <div className="profilePhotosGrid">
          <img
            className="profilePhotosPreview"
            src="http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg"
            alt=""
          />
          <img
            className="profilePhotosPreview"
            src="http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg"
            alt=""
          />
          <img
            className="profilePhotosPreview"
            src="http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg"
            alt=""
          />
          <img
            className="profilePhotosPreview"
            src="http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg"
            alt=""
          />
        </div>
      </div>
    );
  }
}

// <img
//   className="profilePhotosPreview"
//   src="http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg"
//   alt=""
// />
// <img
//   className="profilePhotosPreview"
//   src="http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg"
//   alt=""
// />
