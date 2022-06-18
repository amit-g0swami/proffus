import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Footer from ".././Component/Footer2";
import "./ProductDetails.css";

import { useLocation, useHistory } from "react-router";
import ProductCard from "../Home/ProductCard";
import { connect } from "react-redux";
import { addToCart } from "../../actions/Product";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAlert } from "react-alert";
import { isAuth } from "../../actions/auth";

function ProductDetails({ cart, showCart }) {
  const location = useLocation();
  const history = useHistory();

  var x = [];
  const alert = useAlert();
  const auth = isAuth();

  const [Product, setProduct] = useState();
  const [Products, setProducts] = useState();

  const productDetail = (prod) => {
    history.push({
      pathname: "/productDetails",
      state: { product: prod },
    });

    console.log(location.state);
  };

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
            alert.success("Added to cart!");
          }
        })
        .catch((error) => {
          alert.error("Failed to add");
        });
    }
  };

  useEffect(() => {
    document.title = "Product details";
    setProduct(location.state.product);
    setProducts(location.state.products);
  }, []);

  return (
    <>
      <ToastContainer limit={1} />
      <div
        className="productDetails-container"
        style={{ background: "#FFFCF2" }}
      >
        {Product ? (
          <div className="detail-container" key={Product.pid}>
            <div className="product-images">
              <img src={Product.image_urls} className="selected" />
              <div className="small-images">
                <img src={Product.url} style={{ width: "100px" }} />
              </div>
            </div>
            <div className="details">
              <span className="name">{Product.name}</span>
              <span className="stock">
                {Product.in_stock === "False" ? "Not Available" : "Available"}
              </span>
              <span className="price1">{Product.after_sale_price} ₹</span>
              <span className="price2">{Product.actual_price} ₹</span>
              <span className="detail">Details</span>
              <span className="detail-para">{Product.description}</span>
              {Product ? (
                <div className="characteristics">
                  <div className="char">
                    <span>
                      <b>Weight</b>
                    </span>
                    <span>{Product.weight}</span>
                  </div>
                  <div className="char">
                    <span>
                      <b>Type</b>
                    </span>
                    <span>{Product.Type}</span>
                  </div>
                  <div className="char">
                    <span>
                      <b>Specification</b>
                    </span>
                    <span>{Product.specification}</span>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        ) : (
          "Loading"
        )}
        <div className="purchase-btn">
          <button onClick={() => addcartcheck(Product)} className="add">
            Add to cart
          </button>
        </div>
        <div className="similar">
          <span className="similar-heading" style={{ marginLeft: "90px" }}>
            Similar products
          </span>
          <Container>
            <Row className=" p-3 align-items-stretch">
              {Products
                ? Products.map((product) =>
                  product.cid == Product.cid ? (
                    <ProductCard
                      name={product.name}
                      description={product.description}
                      after_sale_price={product.after_sale_price}
                      actual_price={product.actual_price}
                      url={product.image_urls}
                      ProductDetails={productDetail}
                      product={product}
                      wishlist={product.Wishlist}
                    />
                  ) : (
                    ""
                  )
                )
                : "Loading"}
            </Row>
          </Container>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#FFFCF2"
          fill-opacity="1"
          d="M0,96L1440,256L1440,0L0,0Z"
        ></path>
      </svg>

      <Footer />
    </>
  );
}

const mapStateToProps = (state) => ({
  showCart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
