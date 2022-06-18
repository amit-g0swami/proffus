import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Trending.css";

import { useHistory } from "react-router";
import "../../../App.css";

import "reactjs-popup/dist/index.css";

import ProductCard from "../ProductCard";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function Trending({ category, product, cart }) {
  console.log(product);
  const history = useHistory();

  const productDetail = (prod) => {
    history.push({
      pathname: "/productDetails",
      state: { product: prod, products: product },
    });
  };

  let limitProducts = [];

  for (let i of product) {
    // if (i.top_trending && limitProducts.length != 4) {
    //   limitProducts.push(i);
    // }
    if (limitProducts.length != 4) {
      limitProducts.push(i);
    }
  }
  return (
    <Container className="mt-5 pt-5">
      <>
        <Container style={{ marginTop: "60px", marginBottom: "10px" }}>
          <div className="big-text">
            <div className="big-text__heading"> <h1>Categories</h1></div>
            <Row className="justify-content-around px-3 align-items-stretch">
              {category.length !== 0
                ? category.map((category) => (
                  <Col className="mb-5" lg={3} cs={12} key={category.cid}>
                    <Link
                      to={{
                        pathname: "/allproducts/",
                        state: category.cid,
                      }}
                    >
                      <div
                        className="card"
                        style={{ borderRadius: "16px", width: "100%" }}
                      >
                        <img
                          src={category.image_url}
                          className="img-fluid-md"
                        />
                        <h1 className="text-center text-dark mt-4">
                          {category.name}
                        </h1>
                        <hr className="line" />
                      </div>
                    </Link>
                  </Col>
                ))
                : ""}
            </Row>
          </div>

          <div className="big-text" style={{ marginTop: "180px" }}>
            <div className="big-text__heading"> <h1>Top Trending</h1></div>
          </div>
          <Row className="mb-4 align-items-stretch">
            {limitProducts.length !== 0
              ? limitProducts.map((product) => (
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
              ))
              : ""}
          </Row>
          <Row>
            <Col lg={10} xs={12}></Col>
            <Col lg={2} xs={12}>
              <div className="big-text text-left">
                <Link
                  to="/products"
                  className="text-left"
                  style={{ color: "black" }}
                >
                  <h2 className="text-left mt-4">
                    <span style={{ marginRight: "20px", marginTop: "20px" }}>
                      Trending Products
                    </span>
                    <FaArrowRight />
                  </h2>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>{" "}
      </>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  category: state.product.categories,
  product: state.product.products,
  cart: state,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Trending);
