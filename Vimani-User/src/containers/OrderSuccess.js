import React, { useState, useEffect } from 'react';
import './style.css';

import { Button, Card, Container, Row, Col, Form,Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import { GetApprovedBlogs ,baseUrl} from '../../actions/user';
import HeaderImg from '../assets/product1.png';
import OrderSuccessimg from '../assets/ordersuccess.png';
import Slider from "react-slick";


const carditem = [{}, {}, {}]

const slideritem = [{}, {}, {}, {}, {}, {}, {}, {}]

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
};


export default function HomeComponent() {

    return (
        <div style={{ paddingBottom: '50px' }}>
           
            <section style={{marginTop:'100px'}}>
                <Container>
                    <div>
                        <h3 className='congrats-text'>CONGRATULATIONS!!!</h3>
                        <h3 className='text4 text-center my-4'>Your order has been placed successfully...</h3>
                    </div>
                    <div className='text-center' style={{marginTop:'50px'}}>
                        <img src={OrderSuccessimg}></img>
                    </div>
                </Container>
            </section>
            
            <section style={{marginTop:'50px'}}>
                <Container className='p-0' style={{border:'2px solid #000000'}}>
                    <section className='p-4' style={{background:'#fff',borderBottom:'2px solid #000000'}}>
                        <Row>
                            <Col lg={4} xs={12}>
                                <h3 className='text3 text-dark'>ORDER PLACED ON</h3>
                                <p className='text3'  style={{ color: 'black', fontWeight: '600' }}>2 December, 2021</p>
                            </Col>
                            <Col lg={5} xs={12}>
                                <h3 className='text3 text-dark' >TOTAL AMOUNT</h3>
                                <p className='text3 m-0' style={{ color: 'black', fontWeight: '600' }}>₹7,620.00</p>
                            </Col>
                            <Col lg={3} xs={12}>
                                <NavLink to='/' className='mx-4'>
                                   <p className='home-btn1'>MORE DETAILS</p>
                                </NavLink>
                            </Col>
                        </Row>
                    </section>
                    <section className='p-4'>
                        {
                            carditem.map(()=>(
                                <>
                                <Row>
                                   <Col lg={6} xs={12}>
                                        <div className='mb-3'>
                                           <p className='text4 m-0'>Arriving Sunday</p>
                                           <p className='text4 m-0' style={{color:'#000',fontSize:'14px'}}>Order Received</p>
                                        </div>
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
                                   <Col lg={2} xs={12}></Col>
                                   <Col lg={4} xs={12}>
                                       <div className='d-flex flex-column'>
                                            <Button className='custom-btn1  my-2' >TRACK PACKAGE</Button>
                                            <Button className='custom-btn1  my-2' 
                                            style={{background:'white',border:'1px solid #113B6B',color:'#113B6B'}}>REQUEST CANCELLATION</Button>
                                        </div>
                                   </Col>
                                </Row>
                                <hr/>
                                </>
                            ))
                        }
                    </section>
                </Container>
            </section>
            
            
            <section style={{marginTop:'50px'}}>
                <Container>
                    <div style={{ background: 'white' }} className='mx-1'>
                        <div className='px-3 py-3' style={{ display: 'flex' }}>
                            <h6 className='home-text1'>Similar Products</h6>
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
                    <div className='text-center my-4'>
                      <Button className='custom-btn1  my-2' >BACK TO HOME</Button>
                    </div>
                </Container>
            </section>
           
        </div>
    )
}
