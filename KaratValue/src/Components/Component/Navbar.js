import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { isAuth } from "../../actions/auth";
import { addFilteredProducts } from "../../actions/Product";
import Logo from "../../images/logo.png";

import "./Navbar.css";

function Navigation({ setFilterProducts, products, searchbar }) {
  const history = useHistory();
  const [Input, setInput] = useState();
  const x = isAuth();
  const LogoutHandle = () => {
    localStorage.removeItem("user");
    history.push("/login");
    window.location.reload(true);
  };
  const setProduct = (e) => {
    setInput(e.target.value);
    setFilterProducts(e.target.value);
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="#FFFCF2"
      variant="light"
      style={{
        padding: "20px 0",
        background: "#FFFCF2",
      }}
      fixed="top"
    >
      <Container>
        <Link className="navbar-brand" to="/">
          {/* <b>KARAT</b>
          <br />
          VALUE */}
          <img style={{ height: "40px" }} src={Logo} alt="" />
        </Link>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="align-items-baseline"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {searchbar ? (
              <Form className="g-4">
                <FormControl
                  className="mt-md-4 mx-lg-3 mb-md-4"
                  placeholder="Search"
                  value={Input}
                  onChange={setProduct}
                  style={{
                    width: "30vw",
                    borderRadius: "25px",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25);",
                  }}
                />
              </Form>
            ) : (
              ""
            )}
          </Nav>
          <Nav className="mt-2">
            <Link className="mb-md-2 nav-link" to="/aboutus">
              About Us
            </Link>
            <Link className="mb-md-2 nav-link" to="/services">
              Our Services
            </Link>

            {x ? (
              <>
                <li
                  className="mb-md-2 nav-link"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    history.push("/profile");
                  }}
                >
                  Profile
                </li>
                <li
                  className="mb-md-2 nav-link"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    history.push("/wishlist");
                  }}
                >
                  Wishlist
                </li>
                <li
                  className="mb-md-2 nav-link"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    history.push("/cart");
                  }}
                >
                  Cart
                </li>
                <li
                  className="mb-md-2 nav-link"
                  style={{ cursor: "pointer" }}
                  onClick={LogoutHandle}
                >
                  Logout
                </li>
              </>
            ) : (
              <Link to="/login">
                <Button
                  variant="dark"
                  className="mx-lg-4 "
                  style={{
                    width: "150px",
                    height: "40px",
                    borderRadius: "25px",
                  }}
                >
                  Login
                </Button>
              </Link>
            )}
            {/* {!currentUser && 
          } */}
            {/* {currentUser && <Button variant="dark" style={{width:'150px',borderRadius:'25px',marginLeft:'20px'}} onClick={handleLogout}>Logout</Button>} */}
            {/* {currentUser && <Button variant="dark" style={{width:'150px',borderRadius:'25px',marginLeft:'20px'}} href="/register">Update Profile</Button>} */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const mapStateToProps = (state) => ({
  products: state.product.filteredProducts,
  searchbar: state.product.showSearchBar,
});

const mapDispatchToProps = (dispatch) => ({
  setFilterProducts: (product) => {
    dispatch(addFilteredProducts(product));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
