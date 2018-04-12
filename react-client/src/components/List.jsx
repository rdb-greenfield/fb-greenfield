import React, { Component } from "react";
import ListItem from "./ListItem.jsx";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/postActions.js";

class List extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div>
        <h4> List Component </h4>
        {console.log(this.props)}
        {this.props.users.map(user => <div>{user.firstName}</div>)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
  user: state.user
});

export default connect(mapStateToProps, { fetchUsers })(List);
// There are {this.props.users} items.
