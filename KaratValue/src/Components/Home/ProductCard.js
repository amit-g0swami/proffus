import React from "react";
import { FaHeart, FaRegHeart, FaTrash } from "react-icons/fa";

import { Row, Col } from "react-bootstrap";
import "./Trending/Trending.css";

import { useAlert } from "react-alert";

import bag from "../../images/Vector.png";
import cross from "../../images/cross.png";
import { connect } from "react-redux";

import {
  addToCart,
  addToWishList,
  addWishlist,
  AllProduct,
  removeFromWishList,
  removeWishlist,
  wishlistChanged,
} from "../../actions/Product";
import { isAuth } from "../../actions/auth";
import { DeleteProduct } from "../../actions/Admin";
import store from "../../store";

const ProductCard = ({
  name,
  description,
  after_sale_price,
  url,
  actual_price,
  product,
  ProductDetails,
  addwishlist,
  comesWishlist,
  deletebutton,
  changeWishlist,
  handleEdit,
  handleChange,
  comingFromAdmin,
  id,
}) => {
  const auth = isAuth();
  const alert = useAlert();

  const addcartcheck = (product) => {
    if (!auth) {
      alert.error("Please Sign Up First");
    } else {
      const x = {
        quantity: 1,
      };

      const m_prod = {
        ...product,
        ...x,
      };
      addToCart(m_prod)
        .then((message) => {
          if (message) {
            alert.success("added to cart");
          }
        })
        .catch((error) => {
          alert.error("Failed to add");
        });
    }
  };

  const addwishlistcheck = (product) => {
    if (!auth) {
      alert.error("Please Sign Up First");
    } else {
      addToWishList({ pid: product.pid })
        .then((data) => {
          addwishlist(product);
          alert.success("Added to wishlist!");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const removefromwishlistcheck = (product) => {
    let random = Math.floor(Math.random() * 100);
    removeFromWishList({ pid: product.pid })
      .then((data) => {
        changeWishlist(random);
        alert.success("Removed from wishlist!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteProduct = (id) => {
    DeleteProduct(id)
      .then((message) => {
        store.dispatch(AllProduct());
        handleChange("Successfully deleted");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Col lg={comingFromAdmin ? 4 : 3} className="mb-5" cs={12}>
      <div className="card" style={{ borderRadius: "16px", width: "100%" }}>
        <img
          src={url}
          onClick={() => {
            comingFromAdmin ? handleEdit(product) : ProductDetails(product);
          }}
          className="img-fluid-md"
          style={{ height: "110px", width: "110px" }}
          alt=""
        />
        <hr className="line" />
        <span style={{ fontSize: "12px", fontWeight: "bold" }}>{name}</span>
        <span
          style={{
            fontSize: "12px",
            fontWeight: "bold",
            marginTop: "10px",
          }}
        >
          {description}
        </span>
        <div className="d-flex flex-column">
          <span
            className="price1"
            style={{
              fontSize: "15px",
              fontWeight: "bold",
            }}
          >
            {after_sale_price} ₹
          </span>
          <span
            className="price2"
            style={{
              fontSize: "15px",
              fontWeight: "bold",
            }}
          >
            {actual_price} ₹
          </span>
        </div>
        <hr className="line" />
        <div className="buy-options">
          {deletebutton ? (
            <div className="d-flex justify-content-center">
              <span
                className="span"
                style={{
                  position: "relative",
                  left: "80px",
                  marginBottom: "10px",
                }}
                onClick={() => {
                  deleteProduct(id);
                }}
              >
                <FaTrash style={{ marginRight: "10px" }} /> Delete Item
              </span>
            </div>
          ) : comesWishlist ? (
            <div
              className="text-center"
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <span>
                <img
                  src={bag}
                  onClick={() => {
                    addcartcheck(product);
                  }}
                />
              </span>
              <span>
                <img
                  className="img-fluid"
                  style={{ width: "30px", height: "30px" }}
                  src={cross}
                  onClick={() => {
                    removefromwishlistcheck(product);
                  }}
                />
              </span>
            </div>
          ) : (
            <div style={{ display: "contents" }}>
              <span className="text-center">
                <img
                  src={bag}
                  onClick={() => {
                    addcartcheck(product);
                  }}
                />
              </span>{" "}
              <div className="vertical-line"></div>
              <span
                onClick={() => {
                  addwishlistcheck(product);
                }}
              >
                <FaRegHeart />
              </span>{" "}
            </div>
          )}
        </div>
      </div>
    </Col>
  );
};

const mapStateToProps = (state) => ({
  latest: state,
});

const mapDispatchToProps = (dispatch) => ({
  removefromwishlist: (product) => {
    dispatch(removeWishlist(product));
  },
  addwishlist: (product) => {
    dispatch(addWishlist(product));
  },
  changeWishlist: (data) => {
    dispatch(wishlistChanged(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
