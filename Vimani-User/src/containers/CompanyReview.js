import React, { useState, useEffect } from 'react';
import './style.css';
import BreadCrumbComponent from './components/BreadCrumb';

import { Button, Card, Container, Row, Col,Form} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import { GetApprovedBlogs ,baseUrl} from '../../actions/user';
import HeaderImg from '../assets/product1.png';
import CompanyImg from '../assets/company.png';

import CloseIcon from '@mui/icons-material/Close';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rating from '@mui/material/Rating';

const BreadData=[
    {label:'Home',route:'/'},
    {label:'Men',route:'/'},
    {label:'Footerwear',route:'/'},
]

const carditem = [{}, {}, {},{},{},{}]




export default function HomeComponent() {


    return (
        <div style={{ paddingBottom: '50px' }}>
            <section>
                <Container>
                    <div  style={{marginTop:'80px'}}>
                        <div style={{display:'flex',alignItems:'center'}}>
                            <div>
                                <img src={CompanyImg}></img>
                            </div>
                            <div className='mx-4'>
                                <h5 className='text3 text-dark' style={{fontWeight:'500',fontSize:'32px'}}>Reebok</h5>
                                <p className='my-3 text3' style={{color:'rgba(0, 0, 0, 0.5)'}}>
                                    Member since : <span className='text-dark' style={{fontWeight:'bold'}}>25 May, 2021</span></p>
                                <p className='mb-0 text3' style={{color:'rgba(0, 0, 0, 0.5)'}}>
                                    Products Listed : <span className='text-dark' style={{fontWeight:'bold'}}>2854 Products</span></p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section style={{marginTop:'50px'}}>
                <Container>
                    <Row>
                        <Col lg={4} xs={12}>
                            <div>
                                <div style={{display:'flex',justifyContent:'space-between'}}>
                                    <Rating style={{color:'#113B6B',height:'15px',width:'15px'}} name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                                    <p className='text3 text-dark' style={{marginLeft:'30px'}}>(3.7)</p>
                                    <p className='text3 text-dark ' style={{fontWeight:'bold'}}>42 Reviews</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} xs={12} className='div-center'>
                                 <Button className='custom-btn1' style={{background:'white',color:'#113B6B',border:'2px solid #113B6B'}}>
                                     WRITE A REVIEW</Button>
                        </Col>
                        <Col lg={4} xs={12}>
                            <div>
                                <div style={{display:'flex',float:'right'}}>
                                    <div className='div-center'>
                                        <p className='text3 text-dark text-uppercase mt-2 mx-4' >sort by</p>
                                    </div>
                                    <div>
                                    <Form.Select className='text3' style={{color:'#113B6B'}} aria-label="Default select example">
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
                    <div style={{marginTop:'50px'}}>
                        {
                            carditem.map(() => (
                                    <Card className='p-0 border-0 mt-3' style={{ width: '100%' ,background:'transparent',}}>
                                        <Card.Body className='p-0' style={{borderBottom:'1px solid black'}}>
                                            <div className='py-3'>
                                                <div style={{display:'flex'}}>
                                                        <p className='text3' style={{color:'#000000',fontSize:'24px',fontWeight:'600',paddingRight:'20px',borderRight:'2px solid black' }}>Rajesh M</p>
                                                        <Rating className='mx-3' style={{color:'#113B6B',height:'15px',width:'15px'}} name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                                                </div>
                                                <p className='text3' style={{color:'#000000'}}>VERIFIED BUYER</p>
                                                <div>
                                                    <p className='text3' style={{color: 'black'}}> 
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
