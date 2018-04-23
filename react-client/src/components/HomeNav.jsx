import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { fetchSelectedProfile } from "../actions/index.js";

let style = {
  height: "30px",
  margin: "5px 0 5px 5px"
};

let imgStyle = {
  borderRadius: "50%",
  width: "25px",
  verticalAlign: "middle",
  lineHeight: "30px"
};
let linkColor = {
  color: "white"
};

let logout = {
  color: "white",
  float: "right",
  marginTop: "-40px",
  marginRight: "20px"
};

class HomeNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      searchResults: []
    };
    this.termChange = this.termChange.bind(this);
    this.searchUsers = this.searchUsers.bind(this);
    this.getProfile = this.getProfile.bind(this);
    this.logout = this.logout.bind(this);
  }

  getProfile(value) {
    this.props.fetchSelectedProfile(value, function(err, data) {
      if (data) {
        return (
          <Redirect
            to={{
              pathname: `/profile`
            }}
          />
        );
      }
    });
  }
  searchUsers(user) {
    let self = this;
    axios({
      method: "get",
      url: `http://localhost:3050/users/search/${user}`,
      params: { user: user }
    })
      .then(function(response) {
        self.setState({
          searchResults: response.data
        });
      })
      .catch(err => console.error(err));
  }

  logout() {
    document.cookie = "";
    axios({
      method: "get",
      url: `http://localhost:3050/auth/logout`
    })
      .then(function(response) {
        console.log("Successfully logged out.");
      })
      .catch(err => console.error(err));
  }

  termChange(e) {
    this.setState({
      term: e
    });
    this.searchUsers(e);
  }
  render() {
    return (
      <div className="nav-on-top">
        <div className="homeNav">
          <div className="homeNavComponents">
            <a href="#" className="logo">
              f
            </a>
            <input
              type="text"
              name="term"
              className="searchInput"
              placeholder="Find Your Friends"
              onChange={e => this.termChange(e.target.value)}
            />
            <Link to="/" style={linkColor} className="homeNavHome">
              Home
            </Link>
            <Link
              to="/profile"
              className="homeNavProfile"
              onClick={() => this.getProfile(this.props.currentUser)}
              style={linkColor}
            >
              Profile
            </Link>
          </div>
          <Link
            to="/login"
            style={logout}
            onClick={() => this.logout()}
            className="homeNavHome"
          >
            Logout
          </Link>
        </div>
        {this.state.term === "" ? null : (
          <div className="results-display-container">
            <div className="results-display">
              {this.state.searchResults.map(user => {
                return (
                  <p
                    key={user.id}
                    style={style}
                    onClick={() => this.getProfile(user.id)}
                    value={user.id}
                  >
                    {" "}
                    <img
                      src={user.profilepicture}
                      alt=""
                      style={imgStyle}
                    />{" "}
                    {user.firstname} {user.lastname}
                  </p>
                );
              })}
            </div>
          </div>
        )}
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

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchSelectedProfile: fetchSelectedProfile
    },
    dispatch
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(HomeNav);
