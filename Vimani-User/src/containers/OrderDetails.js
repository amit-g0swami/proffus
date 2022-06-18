import React, { useState, useEffect } from 'react';
import './style.css';
import BreadCrumbComponent from './components/BreadCrumb';

import { Button, Card, Container, Row, Col, Form,Table } from 'react-bootstrap';
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

const counterStyle={
    border:'1px solid black',borderRadius:'100%',cursor:'pointer'
}

export default function HomeComponent() {


    return (
        <div style={{ paddingBottom: '50px' }}>
            <Container className='px-0' style={{marginTop:'50px'}}>
                <div>
                    <h3 className='text3' style={{ color: 'black', fontWeight: '600' }}>Order Details</h3>
                    <h3 className='text3' style={{ color: 'black',marginTop:'50px',fontSize:'18px'}}>ORDER PLACED ON <span className='mx-4'>2 December, 2021</span></h3>                       
                </div>
            </Container>

            <section>
                <Container className='p-4' style={{border:'2px solid #000000',background:'#fff',color:'#000'}}>
                                <Row>
                                   <Col lg={4} xs={12}>
                                        <div>
                                            <h3 className='text3' style={{ color: 'black', fontWeight: '600' }}>SHIPPING ADDRESS</h3>
                                        </div>
                                        <div>
                                        <p className='text3  text-dark'>Utkarsh Nigam</p>
                                        <p className='text3 m-0 text-dark'>Shop No.3/36A, Maharaja Agrasen Marg, UV Block, Shalimar Bagh, Delhi, 110088</p>
                                        </div>
                                   </Col>
                                   <Col lg={4} xs={12}>
                                       <section>
                                            <div>
                                                <h3 className='text3' style={{ color: 'black', fontWeight: '600' }}>PAYMENT METHOD</h3>
                                            </div>  
                                            <div>
                                                <p className='text3 m-0 text-dark'>BHIM UPI</p>
                                            </div>   
                                       </section>
                                   </Col>
                                   <Col lg={4} xs={12}>
                                   <section>
                                        <div>
                                            <h3 className='text3' style={{ color: 'black', fontWeight: '600' }}>Order Summary</h3>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <p className='text3 m-0 text-dark'>Subtotal</p>
                                            <p className='text3 m-0 text-dark'><strong>₹7,620.00</strong></p>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <p className='text3 m-0 text-dark'>Discount</p>
                                            <p className='text3 m-0 text-dark'><strong>₹500.00</strong></p>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <p className='text3 m-0 text-dark'>Shipping</p>
                                            <p className='text3 m-0 text-dark'><strong>₹50.00</strong></p>
                                        </div>
                                        <hr/>
                                        <div className='d-flex justify-content-between'>
                                            <div>
                                               <p className='text2 m-0'><strong>Total Price</strong></p>
                                               <p>(Inclusive of all taxes)</p>
                                            </div>
                                            <p className='text2'><strong>₹7,170.00</strong></p>
                                        </div>
                                    </section>
                                       {/* <div className='d-flex flex-column'>
                                            <Button className='custom-btn1  my-2' >TRACK PACKAGE</Button>
                                            <Button className='custom-btn1  my-2' 
                                            style={{background:'white',border:'1px solid #113B6B',color:'#113B6B'}}>CANCEL ORDER</Button>
                                        </div> */}
                                   </Col>
                                </Row>
                             
                </Container>
            </section>
           

            <section>
                <Container className='p-4' style={{border:'2px solid #000000',marginTop:'50px'}}>
                        {
                            carditem.map(()=>(
                                <>
                                <Row>
                                   <Col lg={6} xs={12}>
                                        <div className='d-flex'>
                                            <div>
                                                <img src={HeaderImg} style={{ height: '150px', width: '150px' }}></img>
                                            </div>
                                            <div>
                                                <div className='p-2 d-flex flex-column' style={{ height: '100%' }}>
                                                    <h3 className='text3' style={{ color: 'black', fontWeight: '600' }}>FLATHEADS Lightweight Casual Shoes for Men | Super Breathable Men’s Sneakers</h3>
                                                    <p className='text3 mb-1' style={{ color: 'black' ,fontSize:'18px'}}>Quantity : 2</p>
                                                    <h4 className='text3' style={{ color: 'black' }}><strong>Black</strong></h4>
                                                    <h4 className='text3' style={{ color: 'black' }}><strong>₹4,510.00</strong></h4>
                                                </div>
                                            </div>
                                        </div>
                                   </Col>
                                   <Col lg={3} xs={12}></Col>
                                   <Col lg={3} xs={12}>
                                       <div className='d-flex flex-column'>
                                            <Button className='custom-btn1  my-2' >TRACK PACKAGE</Button>
                                            <Button className='custom-btn1  my-2' 
                                            style={{background:'white',border:'1px solid #113B6B',color:'#113B6B'}}>CANCEL ORDER</Button>
                                        </div>
                                   </Col>
                                </Row>
                                <hr/>
                                </>
                            ))
                        }
                </Container>
            </section>
           
        </div>
    )
}
