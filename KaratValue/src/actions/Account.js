import axios from "axios";
import { baseURL } from "../config/config";
import { isAuth } from "./auth";
import { SHOW_SEARCH_BAR } from "./types";

export const RegisterUser = () => {
  return axios
    .post(`${baseURL}/api/register`)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const LoginUser = () => {
  return axios
    .post(`${baseURL}/api/login`)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const searchBarSetting = (payld) => (dispatch) => {
  dispatch({
    type: SHOW_SEARCH_BAR,
    payload: payld,
  });
};

export const EditCustomer = () => {
  return axios
    .post(`${baseURL}/api/editCustomer`)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const EditPassword = () => {
  return axios
    .post(`${baseURL}/api/editPassword`)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getUserDetails = () => {
  const details = isAuth();
  return axios({
    method: "POST",
    url: `${baseURL}/api/getuserdetails`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${details.sha}`,
    },
  })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const GetAddress = () => {
  return axios
    .post(`${baseURL}/api/getaddress`)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const AddAddress = () => {
  return axios
    .post(`${baseURL}/api/addaddress`)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const EditAddress = () => {
  return axios
    .post(`${baseURL}/api/editaddress`)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const DeleteAddress = () => {
  return axios
    .post(`${baseURL}/api/deleteaddress`)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
