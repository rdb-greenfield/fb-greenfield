import React from "react";
import DropzoneS3Uploader from "react-dropzone-s3-uploader";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateUserData } from "../actions/index.js";

class S3ProfileUploader extends React.Component {
  constructor(props) {
    super(props);
    this.style = {
      width: "25px",
      height: "25px",
      border: "2px dashed white",
      borderRadius: "5px",
      position: "relative",
      cursor: "pointer",
      overflow: "hidden"
    };
    this.handleFinishedUpload = this.handleFinishedUpload.bind(this);
  }
  handleFinishedUpload(info) {
    console.log("Access it on s3 at", info.fileUrl);
    // this function makes a post to the server, which updates our db w/ the new profile link
    // takes in user ID, link to image & column name
    updateUserData(
      this.props.currentUser,
      info.fileUrl,
      "profilepicture",
      function(err, data) {
        console.log(err, data);
      }
    );
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

function mapStateToProps(state) {
  return {
    profile: state.profile,
    currentUser: state.currentUser,
    users: state.currentUser,
    friends: state.friends
  };
}

export default connect(mapStateToProps)(S3ProfileUploader);
