import axios from "axios";
import { baseURL } from "../config/config";

export const AddCard = () => {
  return axios
    .post(`${baseURL}/api/addcard`)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const makePayment = async (login, token) => {
  return fetch(`${baseURL}/api/make_payment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
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

export const CheckPaymentStatus = () => {
  return axios
    .post(`${baseURL}/api/check_payment_status`)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const WishList = () => {
  return axios
    .post(`${baseURL}/api/wishlist`)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const AddWishList = () => {
  return axios
    .post(`${baseURL}/api/addtowishlist`)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const DelWishList = () => {
  return axios
    .post(`${baseURL}/api/delfromwishlist`)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const CartProduct = () => {
  return axios
    .post(`${baseURL}/api/cartproduct`)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const AddCart = () => {
  return axios
    .post(`${baseURL}/api/addcart`)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const RemoveFromCart = () => {
  return axios
    .post(`${baseURL}/api/removefromcart`)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const RemoveCart = () => {
  return axios
    .post(`${baseURL}/api/removecart`)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const GetOrderByCus = () => {
  return axios
    .post(`${baseURL}/api/getorderbycus`)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const GetOrderbyID = () => {
  return axios
    .post(`${baseURL}/api/getorderbyid`)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const GetOrderProduct = () => {
  return axios
    .post(`${baseURL}/api/getorderproduct`)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const AddOrder = () => {
  return axios
    .post(`${baseURL}/api/addorder`)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
