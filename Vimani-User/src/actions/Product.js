import { baseURL } from './user';
import { isAuth } from "./auth";
import axios from "axios";

import {
    ADD_CATEGORY,
    ADD_PRODUCT,
    ADD_CART,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY,
    REMOVE_CART,
    ADD_WISHLIST,
    REMOVE_WISHLIST,
    ADD_LATEST_PRODUCT,
    ADD_FILTER_PRODUCTS,
    WISHLIST_CHANGED,
} from "./types";

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

export const addToCart = (prod) => {
    console.log(prod);
    let x = {
        pid: prod.pid,
        quantity: prod.quantity,
    };
    const user = isAuth();
    return axios({
        method: "PUT",
        url: `${baseURL}user/cart`,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
        },
        data: x,
    })
        .then((res) => {
            console.log(res.config.data);
            return res.config.data;
        })
        .catch((error) => {
            console.log(error);
        });
};

export const addOrder = (order) => {
    const user = isAuth();
    return axios({
        method: "POST",
        url: `${baseURL}user/order`,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
        },
        data: order,
    })
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            return error;
        });
};

export const emptyCart = () => {
    const user = isAuth();
    return axios({
        method: "POST",
        url: `${baseURL}/api/removecart`,
        headers: {
            Authorization: `Bearer ${user.sha}`,
        },
    })
        .then((res) => {
            console.log(res);
            //return res.data;
        })
        .catch((error) => {
            console.log(error);
            //return error;
        });
};

export const getCartProduct = () => {
    let user = isAuth();
    return axios({
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
        },
        url: `${baseURL}user/cart`,
    })
        .then((res) => {
            let modifiedproducts = res.config.data.map((prod) => ({
                ...prod,
                cartTotal: prod.after_sale_price,
                quantity: prod.quantity,
            }));
            return modifiedproducts;
        })
        .catch((error) => {
            console.log(error);
        });
};

export const addProductCart = (products) => (dispatch) => {
    dispatch({ type: ADD_CART, payload: products });
};

export const RemoveFromCart = (product) => {
    let user = isAuth();
    return axios({
        method: "DELETE",
        url: `${baseURL}user/cart?id=1`,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
        },
        data: product,
    })
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.log(error);
        });
};

export const addToWishList = (product) => {
    let user = isAuth();
    return axios({
        method: "POST",
        url: `${baseURL}user/wishlist?pid=1`,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
        },
        data: product,
    })
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.log(error);
        });
};

export const removeFromWishList = (product) => {
    let user = isAuth();
    return axios({
        method: "DELETE",
        url: `${baseURL}user/wishlist?pid=1`,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
        },
        data: product,
    })
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.log(error);
        });
};

export const getWishlistProducts = () => {
    let user = isAuth();
    return axios({
        method: "GET",
        url: `${baseURL}user/wishlist`,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
        },
    })
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.log(error);
        });
};

export const increaseQuantity = (product) => (dispatch) => {
    dispatch({
        type: INCREASE_QUANTITY,
        payload: product,
    });
};

export const decreaseQuantity = (product) => (dispatch) => {
    dispatch({
        type: DECREASE_QUANTITY,
        payload: product,
    });
};

export const addFilteredProducts = (name) => (dispatch) => {
    dispatch({
        type: ADD_FILTER_PRODUCTS,
        payload: name,
    });
};

export const removeCart = (product) => (dispatch) => {
    dispatch({
        type: REMOVE_CART,
        payload: product,
    });
};

export const addWishlist = (product) => (dispatch) => {
    dispatch({
        type: ADD_WISHLIST,
        payload: product,
    });
};

export const removeWishlist = (product) => (dispatch) => {
    dispatch({
        type: REMOVE_WISHLIST,
        payload: product,
    });
};

export const getLatest = (limit) => (dispatch) => {
    return axios
        .post(`${baseURL}/api/getLatest/limit/${limit}`)
        .then((res) => {
            let x = res.data.Latest.map((latest) => ({ ...latest, Wishlist: false }));
            dispatch({
                type: ADD_LATEST_PRODUCT,
                payload: x,
            });
        })
        .catch((err) => {
            console.log(err);
        });
};

export const AllProduct = () => (dispatch) => {
    return axios
        .get(`${baseURL}rest/topdeal`)
        .then((res) => {
            // let products = [];
            // res.data.Categories[0].products.map((product) => {
            //   products.push(product);
            // });
            // if (res.data.Categories.length > 1) {
            //   res.data.Categories[1].products.map((product) => {
            //     products.push(product);
            //   });
            // }
            // let modifiedproducts = products.map((prod) => ({
            //   ...prod,
            // }));
            let products = [];
            let modifiedproducts = res.config.data.map((row, index) => {
                row.products.map((item) => {
                    products.push(item);
                })
                return row.products;
            })
            dispatch({ type: ADD_CATEGORY, payload: res.data.Categories });
            dispatch({ type: ADD_PRODUCT, payload: products });
            return res.data.Categories;
        })
        .catch((err) => {
            console.log(err);
        });
};

export const GetProductByCategory = () => {
    return axios
        .post(`${baseURL}/api/products/category`)
        .then((res) => {
            console.log(res.data);
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
};

export const GetBySubCategory = () => {
    return axios
        .post(`${baseURL}/api/products/subcategory`)
        .then((res) => {
            console.log(res.data);
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
};

export const GetProduct = () => {
    return axios
        .post(`${baseURL}/api/getProduct`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
};

export const wishlistChanged = (data) => (dispatch) => {
    dispatch({ type: WISHLIST_CHANGED, payload: data });
};

export const SearchProduct = (data) => {
    return axios
        .post(`${baseURL}/api/searchproduct/${data}`)
        .then((res) => {
            console.log(res.data);
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
};
