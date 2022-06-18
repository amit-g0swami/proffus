import React, { useState, useEffect } from 'react';
import './style.css';
import BreadCrumbComponent from './components/BreadCrumb';

import { Button, Card, Container, Row, Col, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import { GetApprovedBlogs ,baseUrl} from '../../actions/user';
import HeaderImg from '../assets/product1.png';
import detailsImg1 from '../assets/details1.png';
import detailsImg2 from '../assets/details2.png';
import detailsImg3 from '../assets/details3.png';


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



export default function HomeComponent() {




    return (
        <div style={{ paddingBottom: '50px' }}>
            <section>
                <Container>
                    <div style={{ marginTop: '50px' }}>

                    </div>

                    <div style={{ marginTop: '50px' }}>

                    </div>

                    <div style={{ marginTop: '50px' }}>

                    </div>

                </Container>
            </section>

            <section style={{ marginTop: '50px' }}>
                <Container>
                    <Row>
                        <Col lg={6} xs={12}>
                            <img src={HeaderImg} style={{ height: 'auto', width: '100%' }} />
                            <div className='my-4'>
                                <Row>
                                {
                                    carditem.map(()=>(
                                        <Col lg={4} xs={4}>
                                        <img src={HeaderImg} style={{ height: '150px', width: '100%' }} />
                                        </Col>
                                        ))   
                                }
                                </Row>
                            </div>
                        </Col>
                        <Col lg={6} xs={12}>
                            <div>
                                <Card.Title className='text3' style={{ color: 'black', fontWeight: '600' }}>FLATHEADS Lightweight Casual Shoes for Men | Super Breathable Men’s Sneakers</Card.Title>
                                <div>
                                    <p className='text3 my-4' style={{ color: 'rgba(0, 0, 0, 0.5)' }}>Sold By :
                                        <span style={{ color: 'black' }}> Nike</span></p>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <div style={{ width: '35%' }}>
                                        <p className='text3 mb-0' 
                                           style={{ color: '#000000', fontSize: '24px', fontWeight: '600' }}>₹620.00</p>
                                        <p className='text3 mb-0' 
                                           style={{ color: '#000000', textDecoration: "line-through" }}>₹670.00</p>
                                    </div>
                                    <div className='px-1' style={{ width: '65%', background: 'rgba(255, 255, 255, 0.49)', display: 'flex', justifyContent: 'space-between' }}>
                                        <p className='text3 mb-0 div-center' style={{ color: '#3BA732', fontWeight: 'bold' }}>12% OFF</p>
                                        <p className='text3 mb-0 div-center' style={{ color: '#3BA732' }}>Saved :
                                            <span style={{ fontWeight: 'bold' }}> ₹50.00</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <Row className='py-4'>
                                <Col lg={8} xs={12}>
                                    <div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Rating style={{ color: '#113B6B', height: '14px', width: '14px' }} name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                                            <p className='text3 text-dark' style={{ marginLeft: '30px' }}>(3.7)</p>
                                            <p className='text3 text-dark ' style={{ fontWeight: 'bold' }}>42 Reviews</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} xs={12}></Col>
                            </Row>
                            <div className='py-3' style={{ borderTop: ' 1px dashed #000000', borderBottom: ' 1px dashed #000000' }}>
                                <Row>
                                    <Col lg={4} xs={12}>
                                        <div className='text-center'><img src={detailsImg1} />
                                            <p className='text3 my-2' style={{ color: 'black', fontSize: '14px' }}>30 Days Return</p>
                                        </div>
                                    </Col>
                                    <Col lg={4} xs={12}>
                                        <div className='text-center'><img src={detailsImg2} />
                                            <p className='text3 my-2' style={{ color: 'black', fontSize: '14px' }}>Free Delivery</p>
                                        </div>
                                    </Col>
                                    <Col lg={4} xs={12}>
                                        <div className='text-center'><img src={detailsImg3} />
                                            <p className='text3 my-2' style={{ color: 'black', fontSize: '14px' }}>Assured</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>


                            <div className='div-center py-4' style={{justifyContent:'space-between'}}>
                                <div>
                                      <Form.Label className='text3' style={{color:'black'}}>Check Availibility</Form.Label>
                                </div>
                                <div>
                                  <Form.Group controlId="formBasicEmail">
                                      <Form.Control type="text" placeholder="Enter Pincode" />
                                  </Form.Group>
                                </div>
                                <div>
                                <Button className='custom-btn1 mx-3' style={{ width: '97%' }} >Check</Button>
                                </div>
                            </div>

                            <div className='div-center py-4' style={{borderTop: '1px solid black',
                            justifyContent: 'space-around'}}>
                                <div style={{ borderRight: '1px solid black', width: '40%',display:'flex',alignItems:'center'}}>
                                    <p className='m-0 text3' style={{color:"black"}}>Size</p>
                                    <Form.Select className='text3 mx-4' style={{ color: '#113B6B',width:'100px' }} >
                                        <option >Relevant</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                                <div style={{ width: '60%',display:'flex',alignItems:'center'}}>
                                    <p className='m-0 mx-4 text3' style={{color:"black"}}>Color</p>
                                    <Form.Select className='text3 mx-4' style={{ color: '#113B6B',width:'100px' }}>
                                        <option >Relevant</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                            </div>

                            <div className='d-flex' style={{alignItems:'center'}}>
                                <div className='m-0 p-0' style={{borderTop:'1px solid black',width:'93%',height:0}}></div>
                                <p className='m-0 text3 mx-2' style={{color:'#113B6B'}}>UPDATE</p>
                            </div>

                            <div className='div-center py-4' style={{justifyContent: 'space-around' }}>
                                <div style={{width: '40%',display:'flex',alignItems:'center'}}>
                                    <p className='m-0 text3' style={{color:"black"}}>Quantity</p>
                                    <Form.Select className='text3 mx-4' style={{ color: '#113B6B',width:'100px' }} >
                                        <option >10</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                                <div style={{ width: '60%',display:'flex',alignItems:'center'}}>
                                    <p className='m-0 mx-4 text3' style={{color:"#3BA732"}}>Yay, item is in stock</p>
                                </div>
                            </div>

                            <div className='div-center' style={{ marginTop: '50px' }}>
                                <div style={{ width: '100%' }}>
                                    <Button className='custom-btn1' style={{ width: '100%' }} >ADD TO CART</Button>
                                </div>
                                <div style={{ width: '100%' }}>
                                    <Button className='custom-btn1 mx-3' style={{ width: '97%' }} >Buy Now</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section style={{marginTop:'50px'}}>
                <Container>
                    <div className='div-center py-4' style={{ justifyContent: 'space-around', borderTop: '1px solid black', borderBottom: '1px solid black' }}>
                        <div style={{ borderRight: '1px solid black', width: '50%' }}><h3 className='m-0 heading1 text-center'>DETAILS</h3></div>
                        <div style={{ width: '50%' }}><h3 className='m-0 heading1 text-center'>SPECIFICATIONS</h3></div>
                    </div>
                    <p className='text3' style={{ color: 'black', marginTop: '50px' }}>
                        Robbie Jones Shoes Are Designed To Keeping In Mind Durability As Well As Trends,
                        The Most Stylish Range Of Shoes. They Are Exclusively Designed To Match The Latest
                        Trends Of The New Generation. This Pair Of Shoes Is Sure To Make You Look Smart & Classy.
                        These Will Go With Most Of Your Casual Outfits. This Product Is Made Of Premium Quality And Highly Material.
                        Wearing This Prime Quality Amazing And Cozy Shoe With The Combination Of Jean And T-Shirt. It Presents Standard
                        Look To Your Personality. We Are Always Providing Latest Fashion Shoes For Men's Casual Shoes For Men.
                    </p>
                </Container>
            </section>


            <section style={{ marginTop: '50px' }}>
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
                    <hr style={{ margin: '50px 0px', border: '1px solid black' }} />
                </Container>
            </section>

            <section style={{ marginTop: '50px' }}>
                <Container>
                    <div>
                        <h4 className='text-center heading1' style={{ fontWeight: '500' }}>REVIEWS</h4>
                    </div>
                    <Row style={{ marginTop: '50px' }}>
                        <Col lg={4} xs={12}>
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Rating style={{ color: '#113B6B', height: '15px', width: '15px' }} name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                                    <p className='text3 text-dark' style={{ marginLeft: '30px' }}>(3.7)</p>
                                    <p className='text3 text-dark ' style={{ fontWeight: 'bold' }}>42 Reviews</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} xs={12} className='div-center'>
                            <Button className='custom-btn1' style={{ background: 'white', color: '#113B6B', border: '2px solid #113B6B' }}>
                                WRITE A REVIEW</Button>
                        </Col>
                        <Col lg={4} xs={12}>
                            <div>
                                <div style={{ display: 'flex', float: 'right' }}>
                                    <div className='div-center'>
                                        <p className='text3 text-dark text-uppercase mt-2 mx-4' >sort by</p>
                                    </div>
                                    <div>
                                        <Form.Select className='text3' style={{ color: '#113B6B' }} aria-label="Default select example">
                                            <option >1-Star</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div style={{ marginTop: '50px' }}>
                        {
                            carditem.map(() => (
                                <Card className='p-0 border-0 mt-3' style={{ width: '100%', background: 'transparent', }}>
                                    <Card.Body className='p-0' style={{ borderBottom: '1px solid black' }}>
                                        <div className='py-3'>
                                            <div style={{ display: 'flex' }}>
                                                <p className='text3' style={{ color: '#000000', fontSize: '24px', fontWeight: '600', paddingRight: '20px', borderRight: '2px solid black' }}>Rajesh M</p>
                                                <Rating className='mx-3' style={{ color: '#113B6B', height: '15px', width: '15px' }} name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                                            </div>
                                            <p className='text3' style={{ color: '#000000' }}>VERIFIED BUYER</p>
                                            <div>
                                                <p className='text3' style={{ color: 'black' }}>
                                                    Sem augue dolor sit blandit urna aliquam urna gravida. Nibh turpis vel morbi interdum nunc cursus. At vestibulum,
                                                    tempor a ullamcorper placerat diam mattis.
                                                    Aliquam et integer nisl vivamus sollicitudin. Erat nisl, arcu elementum facilisi dignissim elit.
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            ))
                        }
                    </div>
                </Container>
            </section>

        </div>
    )
}
