import { list } from "./allUsers-details.js";

export default function(state = [], action) {
  switch (action.type) {
    case "FETCH_USERS":
      return action.payload;
      break;
    default:
      return state;
  }
}
