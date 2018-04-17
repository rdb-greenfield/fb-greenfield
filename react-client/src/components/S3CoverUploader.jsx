import React from "react";
import DropzoneS3Uploader from "react-dropzone-s3-uploader";
import { updateUserData } from "../actions/index.js";

export default class S3CoverUploader extends React.Component {
  constructor() {
    super();
    this.style = {
      width: "550px",
      height: "250px",
      border: "2px dashed rgb(153, 153, 153)",
      borderRadius: "5px",
      position: "relative",
      cursor: "pointer",
      overflow: "hidden"
    };
  }
  handleFinishedUpload(info) {
    console.log("Access it on s3 at:", info.fileUrl);
    // this function makes a post to the server, which updates our db w/ the new profile link
    // takes in user ID, link to image & column name
    updateUserData(1, info.fileUrl, "coverphoto", function(err, data) {
      console.log(err, data);
    });
  }

  render() {
    const uploadOptions = {
      server: "http://localhost:3050",
      signingUrlQueryParams: { uploadType: "avatar" }
    };

    const s3Url = "https://s3-us-west-1.amazonaws.com/greenfield-images/";

    return (
      <DropzoneS3Uploader
        style={this.style}
        onFinish={this.handleFinishedUpload}
        s3Url={s3Url}
        maxSize={1024 * 1024 * 5}
        upload={uploadOptions}
      />
    );
  }
}
