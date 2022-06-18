import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import PrivateRoute from './PrivateRoute';

import Login from '../containers/Auth/Login';
import Register from '../containers/Auth/Register';
import Profile from '../containers/Auth/Profile';

import Product from '../containers/Product';
import ProductDetails from '../containers/ProductDetails';
import Brands from '../containers/Brands';
import WishList from '../containers/WishList';
import Cart from '../containers/Cart';
import Home from '../containers/Home';

import PaymentAddress from '../containers/PaymentAddress';
import MyOrder from '../containers/MyOrder';
import OrderDetails from '../containers/OrderDetails';
import OrderSuccess from '../containers/OrderSuccess';
import TrackPackage from '../containers/TrackPackage';

import Company from '../containers/Company';
import CompanyReview from '../containers/CompanyReview';
import CustomerSupport from '../containers/CustomerSupport';
import CustomerRaise from '../containers/CustomerRaise';

import MakeSeller from '../containers/Seller';
import Wallet from '../containers/wallet';
import DashBoard from "../containers/DashBoard";
import Messages from "../containers/Messages";
import AdminPanel from "../containers/Admin/AdminPanel";
import AddBanner from "../containers/Admin/AddBanner";
import AddBrands from "../containers/Admin/AddBrands";
import BlockUser from "../containers/Admin/BlockUser";
import AddItems from "../containers/Admin/AddItems";
import AllStats from "../containers/Admin/AllStats";
import AddVendor from "../containers/Admin/AddVendor";
import AllStatsDetails from "../containers/Admin/AllStatsDetails";
import AddCategory from "../containers/Admin/AddCategory";
import VendorDetail from "../containers/Admin/VendorDetail";
import VendorProductDetails from "../containers/Admin/VendorProductDetails";
import AddItem from "../containers/Admin/AddItem";
import AdminLogin from "../containers/Admin/AdminLogin";
import Layout from "./Layout";
import AdminRoute from "./AdminRoute";

const AllRoute = ({ data }) => {
    window.scrollTo(0, 0);
    return (
        <div>
            {data.product.categories ? (<Switch>
                <Layout>
                    <Route path="/" component={Home} exact />
                    <Route path="/adminlogin" exact component={AdminLogin} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/product" component={Product} />
                    <Route path="/product-details" component={ProductDetails} />
                    <Route path="/brands" component={Brands} />
                    <PrivateRoute path="/wish-list" component={WishList} />
                    <PrivateRoute path="/cart" component={Cart} />
                    <Route path="/address" component={PaymentAddress} />

                    <Route path="/profile" component={Profile} />
                    <Route path="/dashboard" component={DashBoard} />
                    <Route path="/orders" component={MyOrder} />
                    <Route path="/details" component={OrderDetails} />
                    <Route path="/track" component={TrackPackage} />
                    <Route path="/success" component={OrderSuccess} />

                    <Route path="/company" component={Company} />
                    <Route path="/company-review" component={CompanyReview} />
                    <Route path="/support" component={CustomerSupport} />
                    <Route path="/raise" component={CustomerRaise} />
                    <Route path="/messages" component={Messages} />
                    <Route path="/seller" component={MakeSeller} />
                    <Route path="/wallet" component={Wallet} />

                    <AdminRoute path="/admin" component={AdminPanel} />
                    <AdminRoute path="/manage-banner" component={AddBanner} />
                    <AdminRoute path="/featured-brands" component={AddBrands} />
                    <AdminRoute path="/block-user" component={BlockUser} />
                    <AdminRoute path="/manage-items" component={AddItems} />
                    <AdminRoute path="/all-stats" component={AllStats} />
                    <AdminRoute path="/manage-vendors" component={AddVendor} />
                    <AdminRoute path="/stats-details" component={AllStatsDetails} />
                    <AdminRoute path="/manage-category" component={AddCategory} />
                    <AdminRoute path="/vendor-detail" component={VendorDetail} />
                    <AdminRoute path="/vendor-product-details" component={VendorProductDetails} />
                    <AdminRoute path="/add-item" component={AddItem} />
                </Layout>
            </Switch>) : (
                <div className="loading-div">
                    <div id="loading"></div>
                </div>
            )}
        </div>

    )
}
const mapStateToProps = (state) => ({
    data: state,
});

const mapDispatchToProps = (state) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AllRoute);
