import React from "react";

export default () => {
  return (
    <div>
      <h1>Welcome Home</h1>
      <div className="image-component">
        <DropzoneComponent config={componentConfig} />
      </div>
    </div>
  );
};
