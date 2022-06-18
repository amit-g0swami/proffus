import React, { useState, useEffect } from "react";

import "../../App.css";

function ViewAllOrders({ buyersName, orderId, products, price, date }) {
  return (
    <>
      <div className="Card mt-5 d-flex flex-column">
        <div className="order-info d-flex flex-row flex-md-row flex-sm-column justify-content-between align-items-baseline">
          <div className="order-id">
            <span>Order ID : {orderId} </span>
            <span className="o_id"></span>
          </div>
          <div className="date-time">
            <p>{date}</p>
          </div>
        </div>
        <div className="more-info px-3 mt-5  d-flex flex-column justify-content-between flex-lg-row flex-md-row">
          <div className="text text-start">
            <h4>Buyer’s Name : {buyersName} </h4>
          </div>
          <div className="text">
            <h4>Purchsed worth : ₹ {price} </h4>
          </div>
          <div className="text border-0 text-end">
            <h4>Items : {products} </h4>
          </div>
        </div>
        <div className="button-details mt-5">
          <span>
            More Details <i class="fas fa-chevron-right"></i>
          </span>
        </div>
      </div>
    </>
  );
}

export default ViewAllOrders;
