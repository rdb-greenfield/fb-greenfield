import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { postLogin } from "../actions/index.js";

export default class LoginNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.submitLogin = this.submitLogin.bind(this);
  }

  emailChange(e) {
    this.setState({ email: e.target.value });
  }

  passwordChange(e) {
    this.setState({ password: e.target.value });
  }

  submitLogin(e) {
    e.preventDefault();
    postLogin(this.state.email, this.state.password);
  }

  render() {
    return (
      <div id="facebook">
        <div>
          <div className="head">
            <span className="logo">rdb-facebook</span>
            <div style={this.errorStyle} className="error-login">
              {this.state.error}
            </div>
            <form name="login" onSubmit={this.submitLogin}>
              <input
                value={this.state.email}
                onChange={this.emailChange}
                className="login-input"
                type="text"
                placeholder="Email"
              />
              <input
                value={this.state.password}
                onChange={this.passwordChange}
                className="login-input"
                type="password"
                placeholder="Password"
              />
              <button className="login-submit-button">Log In</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
