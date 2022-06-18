import React, { useState, useEffect } from 'react';
import './style.css';
import BreadCrumbComponent from './components/BreadCrumb';
import { connect } from "react-redux";
import { Button, Card, Container, Row, Col, Form, Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import { GetApprovedBlogs ,baseUrl} from '../../actions/user';
import HeaderImg from '../assets/product1.png';
import detailsImg1 from '../assets/details1.png';
import detailsImg2 from '../assets/details2.png';
import detailsImg3 from '../assets/details3.png';

import deleteImg from '../assets/delete.png';
import mapImg from '../assets/map.png';


import CloseIcon from '@mui/icons-material/Close';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import Slider from "react-slick";
import Rating from '@mui/material/Rating';

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
} from "../actions/Product";
import { makePayment } from "../actions/Payment";
import { isAuth } from "../actions/auth";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
};


const carditem = [{}, {}, {}]

const slideritem = [{}, {}, {}, {}, {}, {}, {}, {}]

const counterStyle = {
    border: '1px solid black', borderRadius: '100%', cursor: 'pointer'
}

function Cart(products,
    increasequantity,
    decreasequantity,
    addCart,
    removec,) {
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
        <div style={{ paddingBottom: '50px' }}>
            {products.addedItems && products.addedItems.length !== 0 ?
                (<section style={{ marginTop: '50px' }}>
                    <Container>
                        <Row>
                            <Col lg={8} xs={12}>
                                <div>
                                    <h3 className='text3' style={{ color: 'black', fontWeight: '600' }}>My Shopping Cart : 3 Items</h3>
                                </div>
                                <div className='d-flex justify-content-between align-items-center my-3'>
                                    <h3 className='text3' style={{ color: 'black', fontWeight: '600' }}><img src={mapImg}></img> Delivering to 110001</h3>
                                    <Button className='custom-btn1  my-2'
                                        style={{ background: 'white', border: '1px solid #113B6B', color: '#113B6B' }}>CHANGE</Button>
                                </div>
                                <section>
                                    <Table responsive>
                                        <thead>
                                            <tr>
                                                <th>Product Details</th>
                                                <th>Qty.</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                products.addedItems.map((product) => (
                                                    <tr>
                                                        <td className='d-flex'>
                                                            <div>
                                                                <img src={product.image_urls} style={{ height: '150px', width: '150px' }} alt="Coin"></img>
                                                            </div>
                                                            <div className='align-self-stretch'>
                                                                <div className='p-2 d-flex flex-column' style={{ height: '100%' }}>
                                                                    <h3 className='text3' style={{ color: 'black', fontWeight: '600' }}>{product.description}</h3>
                                                                    <div className='mt-2  d-flex justify-content-between'>
                                                                        <Button className='custom-btn1  my-2' style={{ background: 'transparent', color: '#113B6B' }}
                                                                        ><FavoriteBorderIcon /> Add to Wishlist</Button>
                                                                        <div className='align-self-center' style={{ border: '1px solid rgba(0,0,0,0.3)', height: '25px' }}></div>
                                                                        <Button className='custom-btn1  my-2' style={{ background: 'transparent', color: '#E33636' }}
                                                                        ><img src={deleteImg} alt="delete"></img> <span
                                                                            style={{ cursor: "pointer" }}
                                                                            className="remove"
                                                                            onClick={() => {
                                                                                removecart(product);
                                                                            }}
                                                                        >
                                                                                Remove
                                                                            </span></Button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td><strong>
                                                            <span
                                                                style={counterStyle}
                                                                onClick={() => {
                                                                    increasequantity(product);
                                                                }}
                                                            >
                                                                +
                                                            </span>
                                                            <span>{product.quantity}</span>
                                                            <span
                                                                style={{ cursor: "pointer" }}
                                                                onClick={() => {
                                                                    decreasequantity(product);
                                                                }}
                                                            >
                                                                -
                                                            </span>
                                                        </strong>
                                                        </td>
                                                        <td>
                                                            <strong> <span className="price">
                                                                {product.after_sale_price * product.quantity}
                                                            </span></strong></td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </Table>
                                </section>
                                <div>
                                    <Form.Control type="text" placeholder="Special Instructions..." style={{ background: '#DFDFDF' }}
                                        as="textarea" rows={5} />
                                </div>
                            </Col>
                            <Col lg={4} xs={12}>
                                <div className='p-4' style={{ background: 'white', width: '100%' }}>
                                    <div>
                                        <h3 className='text3' style={{ color: 'black', fontWeight: '600' }}>Order Summary</h3>
                                    </div>
                                    <hr />
                                    <div className='py-4'>
                                        <div style={{ border: '1px solid black' }}>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Control type="text" placeholder="Enter Pincode" />
                                            </Form.Group>
                                        </div>
                                        <div>
                                            <Button className='custom-btn1  my-2' style={{ width: '100%' }} >Apply</Button>
                                        </div>
                                        <p className='text3 text-end text-dark my-3'>View Applicable Coupons</p>
                                        <section className='p-3' style={{ border: '1px dashed #000000' }}>
                                            <div style={{ borderBottom: '1px dashed #000000' }}>
                                                <h3 className='text3' style={{ color: 'black', fontWeight: '600' }}>HOME50</h3>
                                                <p className='text2 text-dark'>Lectus egestas dapibus amet sed sed a malesuada curabitur. Facilisis tincidunt amet parturient molestie pharetra sit amet lectus ultricies.</p>
                                            </div>
                                            <div className='mt-3'>
                                                <h3 className='text3' style={{ color: 'black', fontWeight: '600' }}>SAVE120</h3>
                                                <p className='text2 text-dark'>Lectus egestas dapibus amet sed sed a malesuada curabitur. Facilisis tincidunt amet parturient molestie pharetra sit amet lectus ultricies.</p>
                                            </div>
                                        </section>
                                        <section className='my-4'>
                                            {/* <div className='d-flex justify-content-between'>
                                            <p className='text2'>Subtotal</p>
                                            <p className='text2'><strong>₹7,620.00</strong></p>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <p className='text2'>Discount</p>
                                            <p className='text2'><strong>₹500.00</strong></p>
                                        </div> */}
                                            <div className='d-flex justify-content-between'>
                                                <p className='text2'>Shipping</p>
                                                <p className='text2'><strong>{shipping}</strong></p>
                                            </div>
                                            <hr />
                                            <div className='d-flex justify-content-between'>
                                                <div>
                                                    <p className='text2 m-0'><strong>Total Price</strong></p>
                                                    <p>(Inclusive of all taxes)</p>
                                                </div>
                                                <p className='text2'><strong>{total}</strong></p>
                                            </div>
                                        </section>
                                        <section>
                                            <div>
                                                <Button className='custom-btn1  my-2' style={{ width: '100%' }}>SECURE CHECKOUT</Button>
                                                <Button className='custom-btn1  my-2' style={{ width: '100%', background: 'white', border: '1px solid #113B6B', color: '#113B6B' }}>CONTINUE SHOPPING</Button>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>) : (
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
                )
            }

            <section style={{ marginTop: '50px' }}>
                <Container>
                    <div style={{ background: 'white' }} className='mx-1'>
                        <div className='px-3 py-3' style={{ display: 'flex' }}>
                            <h6 className='home-text1'>Frequently Bought Together</h6>
                        </div>
                        <div className='mx-4'>
                            <Slider {...settings}>
                                {
                                    slideritem.map(() => (
                                        <div className='px-3'>
                                            <img src={HeaderImg} style={{ height: '200px', width: '100%' }}></img>
                                            <div>
                                                <p className='text-center text3 mb-2' style={{ color: 'black' }}>Monitors</p>
                                                <p className='text-center text3 mb-2' style={{ color: 'black', fontSize: '20px' }}>₹10,000 - ₹50,000</p>
                                                <p className='text-center text3 mb-2' style={{ color: 'black', fontSize: '12px' }}>Ends In 12:52:35</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </Slider>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    )
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