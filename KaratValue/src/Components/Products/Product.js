import React, { useState, useEffect } from "react";
import "./Product.css";
import { Container, Form, Row, Col } from "react-bootstrap";
import Footer from ".././Component/Footer2";
import { useHistory, useLocation } from "react-router";
import { connect } from "react-redux";
import ProductCard from "../Home/ProductCard";
import { searchBarSetting } from "../../actions/Account";

function Product({ products, categories, filteredproducts, setSearchBar }) {
  const [Products, setProducts] = useState();

  window.scrollTo(0, 0);

  let location = useLocation();

  console.log(filteredproducts.length);

  const history = useHistory();
  const productDetail = (prod) => {
    history.push({
      pathname: "/productDetails",
      state: { product: prod, products: products },
    });
  };

  useEffect(() => {
    setSearchBar(true);
    document.title = "Products";
    return () => {
      setSearchBar(false);
    };
  }, []);

  return (
    <>
      <div className="container">
        <Container style={{ marginTop: "150px" }}>
          <Row className="row1 align-content-stretch">
            <Col lg={3} xs={12}>
              <div>
                <h4 style={{ color: "black" }}>Products</h4>
                <hr style={{ border: "2px solid #403D39" }}></hr>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className=" row align-items-stretch">
            {filteredproducts.length > 0
              ? filteredproducts.map((product) => (
                  <ProductCard
                    name={product.name}
                    description={product.description}
                    after_sale_price={product.after_sale_price}
                    url={product.image_urls}
                    actual_price={product.actual_price}
                    ProductDetails={productDetail}
                    product={product}
                    wishlist={product.Wishlist}
                  />
                ))
              : products.map((product) =>
                  product.cid == location.state ? (
                    <ProductCard
                      name={product.name}
                      description={product.description}
                      after_sale_price={product.after_sale_price}
                      url={product.image_urls}
                      ProductDetails={productDetail}
                      actual_price={product.actual_price}
                      product={product}
                      wishlist={product.Wishlist}
                    />
                  ) : (
                    ""
                  )
                )}
          </Row>
        </Container>{" "}
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
  products: state.product.products,
  categories: state.product.categories,
  filteredproducts: state.product.filteredProducts,
});

const mapDispatchToProps = (dispatch) => ({
  setSearchBar: (val) => {
    dispatch(searchBarSetting(val));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
