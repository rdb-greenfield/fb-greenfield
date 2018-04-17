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
  }

  getProfile(value) {
    console.log("clieck", value);
    this.props.fetchSelectedProfile(value, function(err, data) {
      if (data) {
        <Redirect
          to={{
            pathname: "/profile"
          }}
        />;
      }
    });
  }
  searchUsers(user) {
    let self = this;
    axios({
      method: "get",
      url: `http://localhost:3050/users/search/${user}`,
      params: { user: user },
      headers: { token: sessionStorage.getItem("token") }
    })
      .then(function(response) {
        self.setState({
          searchResults: response.data
        });
      })
      .catch(err => console.error(err));
  }

  termChange(e) {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      this.searchUsers(this.state.term)
    );
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
              onChange={this.termChange}
            />
            <a href="#" className="homeNavHome">
              Home
            </a>
            <Link to="/profile" className="homeNavProfile">
              Profile
            </Link>
          </div>
        </div>
        {this.state.term === "" ? (
          <div className="results-display show-display">Results Display</div>
        ) : (
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
                  <img src={user.profilepicture} alt="" style={imgStyle} />{" "}
                  {user.firstname} {user.lastname}
                </p>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile
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
