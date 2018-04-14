import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUsers } from "../actions/index.js";
import { postSignup } from "../actions/index.js";
import LoginNav from "./LoginNav.jsx";

export default class LoginBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      error: "",
      displayError: ""
    };

    this.errorStyle = {
      display: this.state.displayError
    };

    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.lastNameChange = this.lastNameChange.bind(this);
    this.firstNameChange = this.firstNameChange.bind(this);
    this.submitSignup = this.submitSignup.bind(this);
  }

  firstNameChange(e) {
    this.setState({ firstname: e.target.value });
  }

  lastNameChange(e) {
    this.setState({ lastname: e.target.value });
  }

  emailChange(e) {
    this.setState({ email: e.target.value });
  }

  passwordChange(e) {
    this.setState({ password: e.target.value });
  }

  submitSignup(e) {
    e.preventDefault();
    postSignup(
      this.state.firstname,
      this.state.lastname,
      this.state.email,
      this.state.password,
      function(err) {
        // if error return, render error message
        if (err) {
          console.log("error message in client", err);
          this.setState({
            error: err,
            displayError: "",
            firstname: "",
            lastname: "",
            email: "",
            password: ""
          });
        } else {
          // render next page ROUTER NEEDED
        }
      }.bind(this)
    );
  }

  render() {
    return (
      <div>
        <LoginNav />
        <div className="login">
          <div className="login-editor">
            <h2>Create a new account</h2>
            <h5>We may or may not sell your data..</h5>
            <form name="signup" onSubmit={this.submitSignup}>
              <div className="names">
                <input
                  value={this.state.firstname}
                  onChange={this.firstNameChange}
                  className="name-input"
                  type="text"
                  placeholder="First name"
                />
                <input
                  value={this.state.lastname}
                  onChange={this.lastNameChange}
                  className="name-input"
                  type="text"
                  placeholder="Last name"
                />
              </div>
              <input
                value={this.state.email}
                onChange={this.emailChange}
                className="signup-input"
                type="text"
                placeholder="Email"
              />
              <input
                value={this.state.password}
                onChange={this.passwordChange}
                className="signup-input"
                type="password"
                placeholder="Password"
              />
              <button className="signup-submit-button">Create Account</button>
              <div style={this.errorStyle} className="error-signup">
                {this.state.error}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
