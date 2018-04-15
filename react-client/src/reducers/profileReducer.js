export default function(state = [], action) {
  switch (action.type) {
    case "FETCH_PROFILE":
      console.log("payload", action.payload);
      return action.payload;
      break;
    default:
      return state;
  }
}
