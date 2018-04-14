export default function(state = [], action) {
  switch (action.type) {
    case "FETCH_PROFILE":
      return action.payload;
      break;
    default:
      return state;
  }
}
