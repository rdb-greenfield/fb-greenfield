import { combineReducers } from "redux";
import usersReducer from "./usersReducer.js";
import profileReducer from "./profileReducer";

export default combineReducers({
  users: usersReducer,
  profile: profileReducer
});
