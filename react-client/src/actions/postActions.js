import { FETCH_USERS, NEW_USERS } from "./types";
import axios from "axios";

export const fetchUsers = () => dispatch => {
  axios
    .get("http://localhost:3050/allUsers")
    .then(function(users) {
      dispatch({
        type: FETCH_USERS,
        payload: users.data
      });
    })
    .catch(err => console.error(err));
};
