import React, { useState, useEffect } from 'react';
import '../style.css';

import { Button, Card, Container, Row, Col, Form,Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import { GetApprovedBlogs ,baseUrl} from '../../actions/user';
import HeaderImg from '../../assets/product1.png';



const carditem = [{}]


export default function HomeComponent() {


    return (
        <div style={{ paddingBottom: '50px' }}>

            <section>
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
                                           <p className='text4 m-0' style={{color:'#000',fontSize:'14px'}}>Preparing for Dispatch</p>
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
                    </section>

                </Container>
            </section>
           
        </div>
    )
}
