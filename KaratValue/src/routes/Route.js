import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import "../App.css";
import Layout from "./Layout";
import PrivateRoute from "./PrivateRoute";

import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register";
import ForgotPassword from "../Components/Auth/ForgotPassword";
import Home from "../Components/Home/Home";
import About from "../Components/About/About.js";
import Product from "../Components/Products/Product";
import Products from "../Components/Products/Products";
import ProductDetails from "../Components/Products/ProductDetails";
import NotFound from "../Components/Home/NotFound/NotFound";

import Cart from "../Components/Cart/Cart";
import ViewAllOrders from "../Components/Admin/ViewAllOrders";
import Wishlist from "../Components/Wishlist/Wishlist";


import User from "../Components/User/User";

import AdminLogin from "../Components/Admin/AdminLogin";
import AdminRoute from "./AdminRoute";
import AddBanner from "../Components/Admin/AddBanner";
import AddCategory from "../Components/Admin/AddCategory";
import AddItem from "../Components/Admin/AddItem";
import AdminPanel from "../Components/Admin/AdminPanel";
import Services from "../Components/Services/Services";


const AllRoute = ({ data }) => {
  window.scrollTo(0, 0);
  return (
    <div>
      {data.product.categories ? (
        <Switch>
          <Layout>
            <Route path="/adminlogin" exact component={AdminLogin} />
            <AdminRoute path="/panel" exact component={AdminPanel} />
            <AdminRoute path="/manage-category" exact component={AddCategory} />
            <AdminRoute path="/manage-item" exact component={AddItem} />
            <AdminRoute path="/manage-banner" exact component={AddBanner} />
            <AdminRoute path="/allorders" exact component={ViewAllOrders} />

            <Route path="/" component={Home} exact />
            <Route path="/allproducts" component={Product} exact />
            <Route path="/profile" component={User} exact />
            <Route path="/products" component={Products} />
            <PrivateRoute path="/wishlist" exact component={Wishlist} />
            <Route path="/login" exact component={Login} />
            <Route path="/aboutus" exact component={About} />
            <Route path="/services" exact component={Services} />
            <Route path="/register" exact component={Register} />
            <Route path="/forgotPassword" exact component={ForgotPassword} />
            <Route path="/productDetails" exact component={ProductDetails} />
            <PrivateRoute path="/cart" exact component={Cart} />
          </Layout>
          <Route path="*" component={NotFound} />
        </Switch>
      ) : (
        <div className="loading-div">
          <div id="loading"></div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state,
});

const mapDispatchToProps = (state) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AllRoute);
