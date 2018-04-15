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
      sessionStorage.setItem("token", token);

      axios({
        method: "get",
        url: `http://localhost:3050/profile/${id}/`,
        headers: { token: sessionStorage.getItem("token") }
      })
        .then(function(response) {
          console.log(response.data);
          dispatch({
            type: "FETCH_PROFILE",
            payload: response.data
          });
          cb(null, true);
        })
        .catch(err => console.error(err));

      // fetchProfile(id, function(response) {
      // });
    })
    .catch(function(err) {
      cb(err.response.data, null);
    });
};
// example of how to pass the sessionstorage token into the header on requests
const fetchProfile = (id, cb) => {
  axios({
    method: "get",
    url: `http://localhost:3050/profile/${id}/`,
    headers: { token: sessionStorage.getItem("token") }
  })
    .then(function(response) {
      console.log(response);
      cb(response);
    })
    .catch(err => console.error(err));
};

export const fetchUsers = () => dispatch => {
  axios({
    method: "get",
    url: "http://localhost:3050/users/getAll",
    headers: { token: sessionStorage.getItem("token") }
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
      sessionStorage.setItem("token", token);
      cb(response);
    })
    .catch(function(err) {
      console.log(err.response.data);
      cb(err.response.data);
    });
};

// const fetchProfile = id => dispatch => {
//   console.log(id);
//   axios
//     .get(`http://localhost:3050/profile/${id}/`)
//     .then(function(profile) {
//       dispatch({
//         type: "FETCH_PROFILE",
//         payload: profile.data
//       });
//     })
//     .catch(err => console.error(err));
// };
