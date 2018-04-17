import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { postLogin } from "../actions/index.js";
import { Link, Redirect } from "react-router-dom";

class LoginNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
      displayError: "",
      loggedIn: false
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
    this.props.postLogin(
      this.state.email,
      this.state.password,
      function(err, results) {
        // if error return, render error message
        if (err) {
          this.setState({
            error: err,
            displayError: "",
            email: "",
            password: ""
          });
        }
        if (results) {
          this.setState(
            {
              loggedIn: true
            },
            console.log(this.props)
          );
        }
      }.bind(this)
    );
  }

  render() {
    {
      return this.state.loggedIn ? (
        <Redirect
          to={{
            pathname: "/profile"
          }}
        />
      ) : (
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
}

function mapStateToProps(state) {
  return {
    profile: state.profile,
    currentUser: state.currentUser
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      postLogin: postLogin
    },
    dispatch
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(LoginNav);
