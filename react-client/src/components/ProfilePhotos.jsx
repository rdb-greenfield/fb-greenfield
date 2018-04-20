import React, { Component } from "react";
import S3PhotoUploader from "./S3PhotoUploader.jsx";

export default class ProfilePhotos extends Component {
  render() {
    return (
      <div className="profilePhotos">
        <div className="profilePhotosTitle">
          <strong>Photos</strong>
          <S3PhotoUploader />
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
