import { FETCH_USERS, NEW_USER } from "../actions/types.js";
import { list } from "./allUsers-details.js";

const initialState = {
  users: [],
  user: {}
};

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload;
      break;
    default:
      return state;
  }
}
