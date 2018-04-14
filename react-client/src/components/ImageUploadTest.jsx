import React from "react";
import DropzoneComponent from "react-dropzone-component";

export default () => {
  var componentConfig = {
    iconFiletypes: [".jpg", ".png", ".gif", ".mp4"],
    showFiletypeIcon: true,
    postUrl: "/uploadHandler"
  };

  return (
    <div>
      <h1>Welcome Home</h1>
      <div className="image-component">
        <DropzoneComponent config={componentConfig} />
      </div>
    </div>
  );
};
