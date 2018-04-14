import axios from "axios";

// example of how to pass the sessionstorage token into the header on requests
const testGet = id => {
  axios({
    method: "get",
    url: `http://localhost:3050/profile/${id}/`,
    headers: { token: sessionStorage.getItem("token") }
  })
    .then(function(response) {
      console.log("Login successful.");
    })
    .catch(err => console.error(err));
};

export const fetchUsers = () => dispatch => {
  axios
    .get("http://localhost:3050/users/getAll")
    .then(function(users) {
      dispatch({
        type: "FETCH_USERS",
        payload: users.data
      });
    })
    .catch(err => console.error(err));
};

export const postLogin = (e, pw) => {
  let body = {
    login_email: e,
    login_password: pw
  };

  axios({
    method: "post",
    url: "/auth/login",
    data: body
  })
    .then(function(response) {
      let id = JSON.parse(response.headers.auth).id;
      let token = JSON.parse(response.headers.auth).token;
      sessionStorage.setItem("token", token);
      console.log(fetchProfile);
      testGet(id);
    })
    .catch(function(err) {
      cb(err.response.data);
    });
};

export const postSignup = (fn, ln, e, pw, cb) => {
  let body = {
    signup_firstname: fn,
    signup_lastname: ln,
    signup_email: e,
    signup_password: pw
  };

  axios({
    method: "post",
    url: "/auth/signup",
    data: body
  })
    .then(function(response) {
      let token = JSON.parse(response.headers.auth).token;
      sessionStorage.setItem("token", token);
      cb(response);
    })
    .catch(function(err) {
      console.log(err.response.data);
      cb(err.response.data);
    });
};

const fetchProfile = id => dispatch => {
  console.log(id);
  axios
    .get(`http://localhost:3050/profile/${id}/`)
    .then(function(profile) {
      dispatch({
        type: "FETCH_PROFILE",
        payload: profile.data
      });
    })
    .catch(err => console.error(err));
};
