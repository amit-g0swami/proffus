import axios from "axios";
import btoa from "btoa";
import { baseURL, USERNAME, PASSWORD } from "./user";

export const Addbanner = (data) => {
    return axios({
        method: "POST",
        url: `${baseURL}/api/addbanner/`,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Basic " + btoa(`${USERNAME}:${PASSWORD}`),
        },
        data: data,
    })
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.log(error);
        });
};

export const deleteBanner = (data) => {
    return axios({
        method: "DELETE",
        url: `${baseURL}/api/deleteBanner/${data}`,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Basic " + btoa(`${USERNAME}:${PASSWORD}`),
        },
    })
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.log(error);
        });
};
export const AddProduct = (data) => {
    console.log(JSON.stringify(data));
    return axios({
        method: "POST",
        url: `${baseURL}/api/addProduct/`,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Basic " + btoa(`${USERNAME}:${PASSWORD}`),
        },
        data: data,
    })
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.log(error);
        });
};
export const EditProduct = (data) => {
    console.log(JSON.stringify(data));
    return axios({
        method: "POST",
        url: `${baseURL}/api/editProduct/`,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Basic " + btoa(`${USERNAME}:${PASSWORD}`),
        },
        data: data,
    })
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.log(error);
        });
};

export const DeleteProduct = (data) => {
    return axios({
        method: "DELETE",
        url: `${baseURL}/api/deleteProduct/${data}`,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Basic " + btoa(`${USERNAME}:${PASSWORD}`),
        },
    })
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.log(error);
        });
};

export const addCategory = (data) => {
    return axios({
        method: "POST",
        url: `${baseURL}/api/addCategory/`,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Basic " + btoa(`${USERNAME}:${PASSWORD}`),
        },
        data: data,
    })
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.log(error);
        });
};

export const Adminlogin = (login) => {
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

export const authAdmin = () => {
    if (localStorage.getItem("admin")) {
        return true;
    } else {
        return false;
    }
};

export const adminLogout = () => {
    if (localStorage.getItem("admin")) {
        localStorage.removeItem("admin");
    }
};

export const AddSubCategory = () => {
    return axios
        .post(`${baseURL}/api/addSubCategory`)
        .then((res) => {
            console.log(res.data);
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
};

export const DeleteCategory = (cid) => {
    return axios({
        method: "DELETE",
        url: `${baseURL}/api/deleteCategory/${cid}`,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Basic " + btoa(`${USERNAME}:${PASSWORD}`),
        },
    })
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.log(error);
        });
};

export const allOrders = () => {
    return axios({
        method: "GET",
        url: `${baseURL}/api/allorders`,
        headers: {
            Authorization: "Basic " + btoa(`${USERNAME}:${PASSWORD}`),
        },
    })
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.log(error);
        });
};

export const AddImage = (file) => {
    return axios({
        method: "POST",
        url: `${baseURL}/api/addimage`,
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Basic " + btoa(`${USERNAME}:${PASSWORD}`),
        },
        data: file,
    })
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.log(error);
        });
};
