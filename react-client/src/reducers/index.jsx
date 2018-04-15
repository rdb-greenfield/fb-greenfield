import { combineReducers } from "redux";
import usersReducer from "./usersReducer.js";
import profileReducer from "./profileReducer.js";

export default combineReducers({
  users: usersReducer,
  profile: profileReducer
});
