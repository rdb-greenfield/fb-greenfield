export default function(state = [], action) {
  switch (action.type) {
    case "CURRENT_USER":
      return action.payload;
      break;
    default:
      return state;
  }
}
