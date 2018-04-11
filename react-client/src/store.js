import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootreducer from "./reducers/index.jsx";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddlewasre(...middleware)
);

export default store;
