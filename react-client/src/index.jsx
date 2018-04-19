// import "babel-polyfill";
import React from "react";
import App from "./components/App.jsx";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import allReducers from "./reducers/index.jsx";
import thunk from "redux-thunk";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import routes from "./routes.jsx";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";
const middleware = [thunk];
// const store = createStore(
//   allReducers,
//   {},
//   applyMiddleware(...middleware),
//   autoRehydrate()
// );

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, allReducers);
let store = createStore(persistedReducer, {}, applyMiddleware(...middleware));
let persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
