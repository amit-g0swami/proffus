import axios from 'axios';
import { baseURL } from './user';
// import {
//   USER_LOADED,
//   USER_LOADING,
//   AUTH_ERROR,
//   LOGIN_SUCCESS,
//   LOGIN_FAIL,
//   LOGOUT_SUCCESS,
//   REGISTER_SUCCESS,
//   REGISTER_FAIL,
// } from './types';


// CHECK TOKEN & LOAD USER

// export const loadUser = () => (dispatch) => {
//   dispatch({ type: USER_LOADING });
// };

// REGISTER USER
// export const userlogin = (userData) => (dispatch) => {
//   console.log("Actions = ", userData)
//   const config = {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };
//   axios.post(`${baseUrl}/api/auth/login`, userData, config)
//     .then((res) => {
//       console.log('Login seccessfully');
//       dispatch({
//         type: LOGIN_SUCCESS,
//         payload: res.data,
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       dispatch({
//         type: LOGIN_FAIL,
//       });
//     });
// }; 
export const userlogin = (login) => {
  return fetch(`${baseURL}admin/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(login),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return err;
    });
};


// REGISTER USER
// export const register = (userData) => (dispatch) => {
//   const config = {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };
//   axios.post(`${baseUrl}/api/auth/register`, userData, config)
//     .then((res) => {
//       console.log('Register seccessfully');
//       dispatch({
//         type: REGISTER_SUCCESS,
//         payload: res.data,
//       });
//     })
//     .catch((err) => {
//       dispatch({
//         type: REGISTER_FAIL,
//       });
//     });
// };
export const loadUser = () => (dispatch) => { };

export const register = (userData) => {
  console.log(userData);
  return fetch(`${baseURL}user/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return err;
    })
};

// LOGOUT USER
export const logout = () => (dispatch) => {
  console.log('LOGOUT ACTION CALL NOW');
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  localStorage.removeItem("id");
  localStorage.removeItem("email");
  // dispatch({
  //   type: LOGOUT_SUCCESS,
  // });
};

// is auth 
export const isAuth = () => {
  if (localStorage.getItem("user")) {
    const userData = JSON.parse(localStorage.getItem("user"));
    return userData;
  } else {
    return false;
  }
};

// export const Token = () => {
//   return localStorage.getItem('token');
// };
export const getToken = () => {
  if (localStorage.getItem("user")) {
    return JSON.parse(localStorage.getItem("user"));
  } else {
    return false;
  }
};

export const forgetPassword = async (data) => {
  return fetch(`${baseURL}/api/forgetPassword`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return err;
    });
};

export const Token = () => {
  return localStorage.getItem("token");
};
