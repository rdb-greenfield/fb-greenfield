import { combineReducers } from "redux";
import usersReducer from "./usersReducer.js";
import profileReducer from "./profileReducer.js";
import currentUser from "./currentUser.js";
import friendsReducer from "./friendsReducer";
export default combineReducers({
  users: usersReducer,
  profile: profileReducer,
  currentUser: currentUser,
  friends: friendsReducer
});
