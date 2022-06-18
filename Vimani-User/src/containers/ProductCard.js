import React from "react";
// import { FaHeart, FaRegHeart, FaTrash } from "react-icons/fa";
import { Button, Card, Container, Row, Col, Form } from 'react-bootstrap';
// import "./Trending/Trending.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import { useAlert } from "react-alert";
import HeaderImg from '../assets/product1.png';
// import bag from "../../images/Vector.png";
// import cross from "../../images/cross.png";
import { connect } from "react-redux";
import { FaHeart, FaRegHeart, FaTrash } from "react-icons/fa";
import bag from "../assets/Vector.png";
import cross from "../assets/cross.png";

import {
    addToCart,
    addToWishList,
    addWishlist,
    AllProduct,
    removeFromWishList,
    removeWishlist,
    wishlistChanged,
} from "../actions/Product";
import { isAuth } from "../actions/auth";
// import { DeleteProduct } from "../actions/Admin";
import store from "../store";
import { DeleteProduct } from "../actions/Admin";

const ProductCard = ({
    name,
    price,
    description,
    after_sale_price,
    url,
    actual_price,
    product,
    ProductDetails,
    addwishlist,
    comesWishlist,
    deletebutton,
    changeWishlist,
    handleEdit,
    handleChange,
    comingFromAdmin,
    id,
    discount,
    slug
}) => {
    const auth = isAuth();
    // const alert = useAlert();

    const addcartcheck = (product) => {
        if (!auth) {
            alert("Please Sign Up First");
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
                        alert("added to cart");
                    }
                })
                .catch((error) => {
                    alert("Failed to add");
                });
        }
    };

    const addwishlistcheck = (product) => {
        if (!auth) {
            alert("Please Sign Up First");
        } else {
            addToWishList({ pid: product.pid })
                .then((data) => {
                    addwishlist(product);
                    alert("Added to wishlist!");
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    const removefromwishlistcheck = (product) => {
        let random = Math.floor(Math.random() * 100);
        removeFromWishList({ pid: product.pid })
            .then((data) => {
                changeWishlist(random);
                alert("Removed from wishlist!");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const deleteProduct = (id) => {
        DeleteProduct(id)
            .then((message) => {
                store.dispatch(AllProduct());
                handleChange("Successfully deleted");
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <Col lg={comingFromAdmin ? 4 : 4} xs={12} className='my-4 px-2'>
            <Card className='p-0 border-0' style={{ width: '100%', background: 'transparent' }}>
                {/* <div style={{width:'100%'}}> */}
                {/* </div> */}
                {/* <FavoriteBorderIcon style={{ position: 'relative', left: "90%", top: '40px' }} onClick={() => {
                    addwishlistcheck(product);
                }} /> */}
                <div className="" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    {deletebutton ? (
                        <div className="d-flex justify-content-center">
                            <span
                                className="span"
                                style={{
                                    position: "relative",
                                    left: "80px",
                                    marginBottom: "10px",
                                }}
                                onClick={() => {
                                    deleteProduct(id);
                                }}
                            >
                                <FaTrash style={{ marginRight: "10px" }} /> Delete Item
                            </span>
                        </div>
                    ) : comesWishlist ? (
                        <div
                            className="text-center"
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                width: "100%",
                            }}
                        >
                            <span>
                                <img
                                    src={bag}
                                    onClick={() => {
                                        addcartcheck(product);
                                    }}
                                />
                            </span>
                            <span>
                                <img
                                    className="img-fluid"
                                    style={{ width: "30px", height: "30px" }}
                                    src={cross}
                                    onClick={() => {
                                        removefromwishlistcheck(product);
                                    }}
                                />
                            </span>
                        </div>
                    ) : (
                        <div style={{ display: "contents" }}>
                            <span className="text-center">
                                <img
                                    src={bag}
                                    onClick={() => {
                                        addcartcheck(product);
                                    }}
                                />
                            </span>{" "}
                            <div className="vertical-line"></div>
                            <span
                                onClick={() => {
                                    addwishlistcheck(product);
                                }}
                            >
                                <FaRegHeart />
                            </span>{" "}
                        </div>
                    )}
                </div>

                <Card.Img variant="top" src={url} style={{ height: '300px', width: '100%' }}
                />
                <Card.Body className='p-0' >
                    <div className='py-3'>
                        <Card.Title className='text3' style={{ color: 'black', fontWeight: '600' }}>{slug}</Card.Title>
                        <div>
                            <p className='text3' style={{ color: 'rgba(0, 0, 0, 0.5)' }}>Sold By :
                                <span style={{ color: 'black' }}> {name}</span></p>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div style={{ width: '35%' }}>
                                <p className='text3 mb-0' style={{ color: '#000000', fontSize: '24px', fontWeight: '600' }}>₹{after_sale_price}</p>
                                <p className='text3 mb-0' style={{ color: '#000000', textDecoration: "line-through" }}>₹{price}</p>
                            </div>
                            <div className='px-1' style={{ width: '65%', background: 'rgba(255, 255, 255, 0.49)', display: 'flex', justifyContent: 'space-between' }}>
                                <p className='text3 mb-0 div-center' style={{ color: '#3BA732', fontWeight: 'bold' }}>12% OFF</p>
                                <p className='text3 mb-0 div-center' style={{ color: '#3BA732' }}>Saved :
                                    <span style={{ fontWeight: 'bold' }}>{discount}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <Button className='custom-btn1' style={{ width: '100%' }} >Buy Now</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

const mapStateToProps = (state) => ({
    latest: state,
});

const mapDispatchToProps = (dispatch) => ({
    removefromwishlist: (product) => {
        dispatch(removeWishlist(product));
    },
    addwishlist: (product) => {
        dispatch(addWishlist(product));
    },
    changeWishlist: (data) => {
        dispatch(wishlistChanged(data));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
