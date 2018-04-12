import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUsers } from "../actions/index.js";

export default class LoginBody extends Component {
  render() {
    return (
      <div>
        <div className="login">
          <div className="login-editor">
            <h2>Create a new account</h2>
            <h5 style={{ marginLeft: "15px" }}>
              We may or may not sell your data..
            </h5>
            <form action="/auth/signup" method="post">
              <div className="names">
                <input
                  id="signup_firstname"
                  name="signup_firstname"
                  className="name-input"
                  type="text"
                  placeholder="First name"
                />
                <input
                  id="signup_lastname"
                  name="signup_lastname"
                  className="name-input"
                  type="text"
                  placeholder="Last name"
                />
              </div>
              <input
                id="signup_email"
                name="signup_email"
                className="signup-input"
                type="text"
                placeholder="Email"
              />
              <input
                id="signup_password"
                name="signup_password"
                className="signup-input"
                type="password"
                placeholder="Password"
              />
              <button className="signup-submit-button">Create Account</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
