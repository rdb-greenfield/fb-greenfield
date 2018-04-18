import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

const infoDivs = {
  marginTop: "10px"
};
const firstDiv = {
  marginBottom: "10px",
  verticalAlign: "middle",
  lineHeight: "23px"
};

class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutme: "",
      hometown: "",
      editable: false
    };
    this.textChange = this.textChange.bind(this);
    this.makeEdit = this.makeEdit.bind(this);
    this.submitAboutMe = this.submitAboutMe.bind(this);
    this.submitHometown = this.submitHometown.bind(this);
  }

  textChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  makeEdit() {
    this.setState({
      editable: true
    });
  }

  submitAboutMe() {
    let body = {
      userID: this.props.currentUser,
      data: this.state.aboutme,
      column: "aboutme"
    };
    let self = this;
    axios({
      method: "post",
      url: "/users/aboutme",
      headers: { token: sessionStorage.getItem("token") },
      data: body
    })
      .then(function(response) {
        if (response.data) {
          self.setState({
            editable: false
          });
        }
      })
      .catch(function(err) {
        console.log(err.response.data);
        cb(err.response.data);
      });
  }

  submitHometown() {
    let body = {
      userID: this.props.currentUser,
      data: this.state.Hometown,
      column: "hometown"
    };
    let self = this;
    axios({
      method: "post",
      url: "/users/hometown",
      headers: { token: sessionStorage.getItem("token") },
      data: body
    })
      .then(function(response) {
        if (response.data) {
          self.setState({
            editable: false
          });
        }
      })
      .catch(function(err) {
        console.log(err.response.data);
        cb(err.response.data);
      });
  }

  render() {
    return (
      <div className="profileIntro">
        <div className="info">
          <div style={firstDiv}>
            {this.props.profile.user.id === this.props.currentUser ? (
              <button className="postOptionsInfoButton" onClick={this.makeEdit}>
                Edit
              </button>
            ) : null}
            <strong>Intro</strong>
          </div>
          <div style={infoDivs}>
            {this.state.editable ? (
              <button
                className="postOptionsInfoButton"
                onClick={this.submitAboutMe}
              >
                Submit
              </button>
            ) : null}
            About Me:
            {this.state.editable ? (
              <textarea
                onChange={this.textChange}
                name="aboutme"
                type="text"
                placeholder="Tell Us Evveeryyything....."
                className="textareaInInfo"
              />
            ) : (
              <p>{this.props.profile.user.aboutme}</p>
            )}
          </div>
          <div style={infoDivs}>
            {this.state.editable ? (
              <button
                className="postOptionsInfoButton"
                onClick={this.submitHometown}
              >
                Submit
              </button>
            ) : null}
            Hometown:
            {this.state.editable ? (
              <textarea
                onChange={this.textChange}
                name="hometown"
                type="text"
                placeholder="Yess Yess, Tell Us Morreee"
                className="textareaInInfo"
              />
            ) : (
              <p>{this.props.profile.user.hometown}</p>
            )}
          </div>
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

export default connect(mapStateToProps)(Intro);
