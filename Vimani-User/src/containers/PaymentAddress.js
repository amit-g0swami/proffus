import React, { useState, useEffect } from 'react';
import './style.css';
import BreadCrumbComponent from './components/BreadCrumb';

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

export default function HomeComponent() {


    return (
        <div style={{ paddingBottom: '50px' }}>
            <section style={{ marginTop: '50px' }}>
                <Container>
                    <Row>
                        <Col lg={8} xs={12}>
                            <div>
                                <h3 className='text3' style={{ color: 'black', fontWeight: '600' }}>Already have an account? 
                                <NavLink className='mx-3' to='/login' style={{textDecoration:'none',color:'#113B6B'}}>Login</NavLink></h3>
                            </div>
                            <hr />
                            <section style={{marginTop:'50px'}}>
                            <div >
                                <h3 className='text3' style={{ color: 'black', fontWeight: '600' }}>Payment Details</h3>
                                <hr/>
                                <Form.Group className="mb-3" controlId="formBasicEmail" style={{marginTop:'20px'}}> 
                                    <Form.Label className='text3 text-dark'>Full Name**</Form.Label>
                                    <Form.Control type='text'  />
                                </Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label className='text3 text-dark'>Email ID*</Form.Label>
                                            <Form.Control type='text'  />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label className='text3 text-dark'>Phone Number*</Form.Label>
                                            <Form.Control type='text'  />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </div>
                            <div style={{marginTop:'50px'}}>
                                <h3 className='text3' style={{ color: 'black', fontWeight: '600' }}>Shipping Address</h3>
                                <hr/>
                                <Form.Group className="mb-3" controlId="formBasicEmail" style={{marginTop:'20px'}}> 
                                    <Form.Label className='text3 text-dark'>Flat No., Building, Apartment*</Form.Label>
                                    <Form.Control type='text'  />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail" style={{marginTop:'20px'}}> 
                                    <Form.Label className='text3 text-dark'>Area, Colony, Street, Sector, Road*</Form.Label>
                                    <Form.Control type='text'  />
                                </Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label className='text3 text-dark'>Pincode*</Form.Label>
                                            <Form.Control type='text'  />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label className='text3 text-dark'>State*</Form.Label>
                                            <Form.Control type='text'  />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label className='text3 text-dark'>City*</Form.Label>
                                            <Form.Control type='text'  />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label className='text3 text-dark'>GST(Optional)</Form.Label>
                                            <Form.Control type='text'  />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </div>
                            <p className='text3 text-dark'>* Required</p>
                            <div style={{marginTop:'30px'}}>
                                <Button className='custom-btn1  my-2' style={{ float:'right'}} >Save and Continue</Button>
                            </div>
                            </section>
                           
                        </Col>
                        <Col lg={4} xs={12}>
                            <div className='p-4' style={{ background: 'white', width: '100%' }}>
                                <div>
                                    <h3 className='text3' style={{ color: 'black', fontWeight: '600' }}>Order Summary</h3>
                                    <p className='text3' style={{ color: 'black',fontSize:'16px'}}>Total Items : 3</p>
                                </div>
                                <hr />
                                <div className='py-4'>
                                    <div className='d-flex'>
                                        <div>
                                            <img src={HeaderImg} style={{ height: '100px', width: '100px' }}></img>
                                        </div>
                                        <div>
                                            <div className='p-2 d-flex flex-column' style={{ height: '100%' }}>
                                                <h3 className='text3' style={{ color: 'black', fontWeight: '600' }}>FLATHEADS Lightweight Casual Shoes for Men | Super Breathable Men’s Sneakers</h3>
                                                <h4 className='text3 m-0' style={{ color: 'black' }}>₹4,510.00</h4>
                                                <p className='text3 m-0' style={{ color: 'black' }}>Quantity : 2</p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className='d-flex'>
                                        <div>
                                            <img src={HeaderImg} style={{ height: '100px', width: '100px' }}></img>
                                        </div>
                                        <div>
                                            <div className='p-2 d-flex flex-column' style={{ height: '100%' }}>
                                                <h3 className='text3' style={{ color: 'black', fontWeight: '600' }}>FLATHEADS Lightweight Casual Shoes for Men | Super Breathable Men’s Sneakers</h3>
                                                <h4 className='text3 m-0' style={{ color: 'black' }}>₹4,510.00</h4>
                                                <p className='text3 m-0' style={{ color: 'black' }}>Quantity : 2</p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <section className='mt-4'>
                                        <div className='d-flex justify-content-between'>
                                            <p className='text2'>Subtotal</p>
                                            <p className='text2'><strong>₹7,620.00</strong></p>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <p className='text2'>Discount</p>
                                            <p className='text2'><strong>₹500.00</strong></p>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <p className='text2'>Shipping</p>
                                            <p className='text2'><strong>₹50.00</strong></p>
                                        </div>
                                        <hr />
                                        <div className='d-flex justify-content-between'>
                                            <div>
                                                <p className='text2 m-0'><strong>Total Price</strong></p>
                                                <p>(Inclusive of all taxes)</p>
                                            </div>
                                            <p className='text2'><strong>₹7,170.00</strong></p>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}
