import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from ".././Component/Footer2";
import "./Cart.css";
import { connect } from "react-redux";
import { useAlert } from "react-alert";

import {
  increaseQuantity,
  decreaseQuantity,
  RemoveFromCart,
  addOrder,
  emptyCart,
  getCartProduct,
  addProductCart,
  removeCart,
  addToCart,
} from "../../actions/Product";
import { makePayment } from "../../actions/Payment";
import { isAuth } from "../../actions/auth";

function Cart({
  products,
  increasequantity,
  decreasequantity,
  addCart,
  removec,
}) {
  let alert = useAlert();
  const [orderPlaced, setorderPlaced] = useState(10);

  let shipping = 90;

  let total = 90;

  const x = isAuth();
  let token = null;

  if (x) {
    token = x.sha;
  }

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    try {
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );

      if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
      }
      // creating a new order
      let pay = await makePayment({ amount: total }, token).then((data) => {
        const order_id = data.order_id;
        const options = {
          key: "rzp_test_grEV6KDDjdjUsj", // Enter the Key ID generated from the Dashboard
          amount: total,
          name: "Pratik",
          order_id: order_id,
          handler: function (response) {
            const datas = {
              orderCreationId: order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
            };
            const order = {
              payment_id: datas.razorpayPaymentId,
              order_id: datas.razorpayOrderId,
              signature: datas.razorpaySignature,
              products: [],
            };
            products.addedItems.map((prod) => {
              order.products.push({
                product_id: prod.pid,
                quantity: prod.quantity,
                price: prod.cartTotal,
              });
            });
            addOrder(order)
              .then((res) => {
                alert.success("Order is placed");
              })
              .catch((res) => {
                alert.error("Order failed to place");
              });
            emptyCart()
              .then((res) => {
                setorderPlaced(orderPlaced + 1);
              })
              .catch((res) => {
                console.log(res);
              });
          },

          prefill: {
            name: "Soumya Dey",
            email: "SoumyaDey@example.com",
            contact: "9999999999",
          },
          notes: {
            address: "Soumya Dey Corporate Office",
          },
          theme: {
            color: "#61dafb",
          },
        };

        var paymentObject = new window.Razorpay(options);
        paymentObject.open();
      });
    } catch (error) {
      console.log(error);
    }
  }

  const handleOrder = () => {
    if (total == 90) {
      alert.error("Please add products");
    } else {
      displayRazorpay();
    }
  };

  const removecart = (product) => {
    removec(product);
    RemoveFromCart({ pid: product.pid, quantity: product.quantity })
      .then((message) => {
        if (message) {
          alert.success("Removed from cart!");
        }
      })
      .catch((error) => {
        alert.error("Failed to remove");
      });
  };

  if (products.addedItems) {
    for (let product of products.addedItems) {
      total += product.cartTotal;
    }
  }

  useEffect(() => {
    document.title = "Cart";
    getCartProduct()
      .then((data) => {
        addCart(data);
      })
      .catch((error) => {
        console.log(error);
      });
    window.scrollTo(0, 0);
  }, [orderPlaced]);

  return (
    <>
      {products.addedItems && products.addedItems.length !== 0 ? (
        <>
          {" "}
          <div style={{ width: "100%", background: "#FFFCF2" }}>
            <Container className="cart-container">
              <div className="header">
                <span>Shopping cart</span>
                <span>{/* <b>{products.addedItems.length} Items</b> */}</span>
              </div>
              <Container className="cart-products">
                <Row className="text-center mb-3">
                  <Col xs={5} className="text-initial">
                    <h5 className="table-heading">product details</h5>
                  </Col>
                  <Col>
                    <h5 className="table-heading">Quantity</h5>
                  </Col>
                  <Col>
                    <h5 className="table-heading">Price</h5>
                  </Col>
                  <Col>
                    <h5 className="table-heading">total</h5>
                  </Col>
                </Row>

                {products.addedItems.map((product) => (
                  <Row className="align-items-center mt-2 mb-5">
                    <Col xs={5}>
                      <div className="product-deets">
                        <img
                          src={product.image_urls}
                          style={{ width: "150px", height: "150px" }}
                          alt="coin"
                        />
                        <div className="deets-text">
                          <span className="p-name mb-3">
                            {product.description}
                          </span>
                          <span className="p-desc">{product.name}</span>
                          <span
                            style={{ cursor: "pointer" }}
                            className="remove"
                            onClick={() => {
                              removecart(product);
                            }}
                          >
                            Remove
                          </span>
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div className="quantity">
                        <span
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            decreasequantity(product);
                          }}
                        >
                          -
                        </span>
                        <span>{product.quantity}</span>
                        <span
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            increasequantity(product);
                          }}
                        >
                          +
                        </span>
                      </div>
                    </Col>
                    <Col>
                      <span className="price">{product.after_sale_price}</span>
                    </Col>
                    <Col>
                      <span className="price">
                        {product.after_sale_price * product.quantity}
                      </span>
                    </Col>
                  </Row>
                ))}
              </Container>
            </Container>
          </div>
          <Container className="summary">
            <span className="summary-heading">Order summary</span>
            <div className="bill">
              <div className="bill-row mb-2">
                <span className="row-title">Shipping</span>
                <span className="s-price">{shipping}</span>
              </div>
              <div className="bill-row mb-2">
                <span className="row-title">Total</span>
                <span className="s-price">{total}</span>
              </div>
            </div>
          </Container>
          <div className="sub-footer">
            <div className="form">
              <textarea placeholder="Special instructions" />
              <div className="cart-buttons">
                <button className="continue">Continue Shopping</button>
                <button
                  className="checkout"
                  onClick={() => {
                    handleOrder();
                  }}
                >
                  Checkout
                </button>
              </div>
            </div>
            <span className="end-text">
              We hope you enjoyed
              <br />
              shopping with us!
            </span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#FFFCF2"
              fill-opacity="1"
              d="M0,96L1440,256L1440,0L0,0Z"
            ></path>
          </svg>
          <Footer />{" "}
        </>
      ) : (
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>No Products Found!</h1>
        </div>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  products: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  increasequantity: (product) => {
    dispatch(increaseQuantity(product));
  },
  decreasequantity: (product) => {
    dispatch(decreaseQuantity(product));
  },
  addCart: (prod) => {
    dispatch(addProductCart(prod));
  },
  removec: (prod) => {
    dispatch(removeCart(prod));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
