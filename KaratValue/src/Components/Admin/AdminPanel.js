import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./style.css";

import { allOrders } from "../../actions/Admin";

import { adminLogout } from "../../actions/Admin";

import ViewAllOrders from "./ViewAllOrders";
import AddCategory from "./AddCategory";
import AddItem from "./AddItem";
import AddBanner from "./AddBanner";
import Pagination from "../../Components/Pagination";

function AdminPanel() {
  const [Orders, setOrders] = useState();
  // const [categoryShowing, setcategoryShowing] = useState(false);
  // const [orderShowing, setorderShowing] = useState(true);
  // const [bannerShowing, setbannerShowing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // state use to store current page details
  const [postsPerPage] = useState(2); // state use to store maximum page details
  // const [itemShowing, setitemShowing] = useState(false);
  const [Error, setError] = useState();


  useEffect(() => {
    allOrders()
      .then((res) => {
        setOrders(res.orders);
      })
      .catch((data) => {
        setError(data);
      });
  }, []);

  let indexOfFirstPost;
  let indexOfLastPost;
  let currentOrders;

  if (Orders && Orders.length>0) {
    // Get Current posts
    indexOfLastPost = currentPage * postsPerPage;
    indexOfFirstPost = indexOfLastPost - postsPerPage;
    currentOrders = Orders.slice(indexOfFirstPost, indexOfLastPost);
  }

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="admin-panel-main admin-container">
      <Container>
            <div className="d-flex flex-column" style={{ marginLeft: "50px" }}>
              <div className="component-render mt-5">
                  <div className="orders">
                    {currentOrders &&   typeof(currentOrders)!='string'? (
                      currentOrders.map((order) => (
                        <ViewAllOrders
                          buyersName={order.Buyers_name}
                          orderId={order.Order_ID}
                          products={order.Total_products}
                          price={order.Total_price}
                          date={order.Date}
                        />
                      ))
                    ) : (
                      <h1
                        style={{ marginTop: "170px" }}
                        className="display-5 text-center pt-5"
                      >
                        No Orders Found !
                      </h1>
                    )}
                    <div className="mt-5">
                      <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={Orders ? Orders.length : 0}
                        paginate={paginate}
                      />
                    </div>
                  </div>
              </div>
            </div>
      </Container>
    </div>
  );
}

export default AdminPanel;
