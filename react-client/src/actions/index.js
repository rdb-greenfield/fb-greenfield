import axios from "axios";

export const postLogin = (e, pw, cb) => dispatch => {
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
      document.cookie = token;
      fetchProfile(id, cb, dispatch);
    })
    .catch(function(err) {
      cb(err.response, null);
    });
};
const fetchProfile = (id, cb, dispatch) => {
  axios({
    method: "get",
    url: `http://localhost:3050/profile/${id}/`
  })
    .then(function(response) {
      dispatch({
        type: "FETCH_PROFILE",
        payload: response.data
      });
      dispatch({
        type: "CURRENT_USER",
        payload: response.data.user.id
      });
      cb(null, true);
    })
    .catch(err => console.error(err));
};

export const fetchUsers = () => dispatch => {
  axios({
    method: "get",
    url: "http://localhost:3050/users/getAll"
  })
    .then(function(response) {
      dispatch({
        type: "FETCH_USERS",
        payload: response.data
      });
    })
    .catch(err => console.error(err));
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
      document.cookie = token;
      cb(response);
    })
    .catch(function(err) {
      console.log(err.response.data);
      cb(err.response.data);
    });
};

export const updateUserData = (id, input, col, cb) => {
  let body = {
    userID: id,
    data: input,
    column: col
  };

  axios({
    method: "post",
    url: "/users/update",
    data: body
  })
    .then(function(response) {
      cb(response);
    })
    .catch(function(err) {
      console.log(err.response.data);
      cb(err.response.data);
    });
};

export const postToDB = (post, cb) => dispatch => {
  axios({
    method: "post",
    url: "/users/wallpost",
    data: post
  })
    .then(function(response) {
      fetchProfile(post.author, cb, dispatch);
    })
    .catch(function(err) {
      console.log(err.response.data);
      cb(err.response.data);
    });
};

export const findFriends = (id, cb) => dispatch => {
  axios({
    method: "get",
    url: `http://localhost:3050/users/${id}/friends`,
    params: { id: id }
  })
    .then(function(response) {
      dispatch({
        type: "FETCH_FRIENDS",
        payload: response.data
      });
      cb(null, response.data);
    })
    .catch(err => console.error(err));
};

export const fetchSelectedProfile = (id, cb) => dispatch => {
  axios({
    method: "get",
    url: `http://localhost:3050/profile/${id}/`
  })
    .then(function(response) {
      dispatch({
        type: "FETCH_PROFILE",
        payload: response.data
      });
      cb(null, true);
    })
    .catch(err => console.error(err));
};

export const uploadPhoto = (id, input, cb) => {
  let body = {
    userID: id,
    data: input
  };

  axios({
    method: "post",
    url: "/users/photo",
    data: body
  })
    .then(function(response) {
      cb(response);
    })
    .catch(function(err) {
      console.log(err.response.data);
      cb(err.response.data);
    });
};
