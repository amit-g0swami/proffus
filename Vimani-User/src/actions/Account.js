import axios from "axios";
import { baseURL } from "./user";
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
        .post(`${baseURL}admin/login`)
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
        method: "GET",
        url: `${baseURL}user/details`,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${details.token}`,
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

export const getBanner = async () => {
    return axios
        .post(`${baseURL}/api/getbanners`)
        .then((res) => {
            return res.data.banner;
        })
        .catch((err) => {
            console.log(err);
        });
};

export const getSeasonData = async () => {
    return axios
        .get(`${baseURL}rest/season`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
};

export const getTodayDeal = async () => {
    return axios
        .get(`${baseURL}rest/season`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
};

export const getBrandsData = async () => {
    return axios
        .get(`${baseURL}rest/season`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
};