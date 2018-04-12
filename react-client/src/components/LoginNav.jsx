import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUsers } from "../actions/index.js";

export default class componentName extends Component {
  render() {
    return (
      <div id="facebook">
        <div>
          <div className="head">
            <span className="logo">rdb-facebook</span>
            <form action="/auth/login" method="post">
              <input
                id="login_email"
                name="login_email"
                className="login-input"
                type="text"
                placeholder="Email"
              />
              <input
                id="login_password"
                name="login_password"
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
