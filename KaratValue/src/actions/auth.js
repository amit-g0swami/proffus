import axios from "axios";

import { baseURL } from "../config/config";

// CHECK TOKEN & LOAD USER

export const loadUser = () => (dispatch) => { };

// REGISTER USER
export const userlogin = (login) => {
  return fetch(`${baseURL}/api/login`, {
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

export const isAuth = () => {
  if (localStorage.getItem("user")) {
    const userData = JSON.parse(localStorage.getItem("user"));
    return userData;
  } else {
    return false;
  }
};

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

// REGISTER USER
export const register = (userData) => {
  console.log(userData);
  return fetch(`${baseURL}/api/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData)
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err)
      return err;
    });
};

// LOGOUT USER
export const logout = () => (dispatch) => {
  console.log("LOGOUT ACTION CALL NOW");
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  localStorage.removeItem("id");
};

export const Token = () => {
  return localStorage.getItem("token");
};
