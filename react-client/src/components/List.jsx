import React, { Component } from "react";
import ListItem from "./ListItem.jsx";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUsers } from "../actions/index.js";

class List extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div>
        <h4> List Component </h4>
        {this.props.users.map(user => {
          return <p key={user.id}>{user.firstname}</p>;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchUsers: fetchUsers
    },
    dispatch
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(List);
