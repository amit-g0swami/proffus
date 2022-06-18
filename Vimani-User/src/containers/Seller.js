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
        <div style={{ paddingBottom: '100px' }}>
            <section style={{ marginTop: '50px' }}>
                <Container>
                        <div>
                            <h3 className='text3' style={{ color: 'black', fontWeight: '600' }}>Become a Seller
                            </h3>
                            <p className='my-4 text3' style={{color:'rgba(0, 0, 0, 0.5'}}>Thank you so much for showing your interest and becoming a part of us. We would like to know about you and will try to connect with you as soon as possible.</p>
                        </div>
                        <section style={{marginTop:'50px'}}>
                            <div>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formBasicEmail"> 
                                             <Form.Label className='text3 text-dark'>Full Name</Form.Label>
                                             <Form.Control type='text'  />
                                         </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label className='text3 text-dark'>Email</Form.Label>
                                            <Form.Control type='text'  />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label className='text3 text-dark'>Phone Number</Form.Label>
                                            <Form.Control type='text'  />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label className='text3 text-dark'>Company Name</Form.Label>
                                            <Form.Control type='text'  />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group className="mb-3" controlId="formBasicEmail" > 
                                    <Form.Label className='text3 text-dark'>Company Address</Form.Label>
                                    <Form.Control type='text'  />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail" > 
                                    <Form.Label className='text3 text-dark'>Registered as</Form.Label>
                                    <Form.Select aria-label="Default select example" style={{width:'50%'}}>
                                      <option>Open this select menu</option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                    </Form.Select>
                                </Form.Group>
                            </div>
                            <div style={{marginTop:'30px'}}>
                                <Button className='custom-btn1  my-2' style={{ float:'right',width:'20vw'}} >Save</Button>
                            </div>
                        </section>
                </Container>
            </section>
        </div>
    )
}
