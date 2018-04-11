import { FETCH_POSTS, NEW_POST } from "./types";
import axios from "axios";

export const fetchPosts = () => dispatch => {
  axios.get("http://localhost:3050").then(data => {
    dispatch({
      type: FETCH_USERS,
      payload: data
    });
  });
};
