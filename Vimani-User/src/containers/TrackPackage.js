import React, { useState, useEffect } from 'react';
import './style.css';
import './package.css';
import BreadCrumbComponent from './components/BreadCrumb';

import { Button, Card, Container, Row, Col, Form,Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import { GetApprovedBlogs ,baseUrl} from '../../actions/user';
import HeaderImg from '../assets/product1.png';
import package1 from '../assets/package1.png';
import package2 from '../assets/package2.png';
import package3 from '../assets/package3.png';
import package4 from '../assets/package4.png';

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


const carditem = [{}, {}, {},{}]

const timeLine=[
    {image:package1,title:'Processing',status:'Ordered On',date:'1 December 2021',text:'Our Seller has received your order and will be shipped as soon as possible.'},
    {image:package2,title:'Shipped',status:'Shipped On',date:'1 December 2021',text:'Package arrived at an VIMANI facility at UNNAO, UTTAR PRADESH at 2:47 PM Thursday, 2 December'},
    {image:package3,title:'In Transit',status:'Arriving On',date:'1 December 2021',text:'Please share the OTP 4536 with the delivery agent to verify your order'},
    {image:package4,title:'Delivered',status:'Delivered On',date:'1 December 2021',text:'Your product was delivered successfully! Thank you for shopping with us. Hope you like the product...'},
]



export default function HomeComponent() {


    return (
        <div style={{ paddingBottom: '50px' }}>
            <Container  style={{marginTop:'50px'}}>
                <div>
                    <h3 className='text3' style={{ color: 'black', fontWeight: '600' }}>Track Package</h3>
                    <h3 className='text4' style={{marginTop:'30px',fontSize:'18px'}}>Arriving Sunday</h3>                       
                    <h3 className='text3 my-2' style={{ color: 'black',fontSize:'18px'}}>Preparing for Dispatch</h3>                       
                </div>
                <div style={{marginTop:'50px'}}>
                    <Row>
                        {
                            timeLine.map((row,index)=>(
                           <Col lg={3} xs={12} className='p-0'>
                            <Row>
                                <Col lg={12} xs={4}>
                                    <Row>
                                        <Col lg={4} xs={12} className='p-0 m-0' style={{height:'100%',overflow:'hidden'}}>
                                        {
                                            index !=0  &&
                                            <div  style={{overflow:'hidden'}}>
                                                <div className='line'></div>
                                            </div>
                                        }
                                        </Col>
                                        <Col lg={4} xs={12} className='p-0 m-0'>
                                            <div>
                                                <div className='package-icon-box div-center' style={{background:index<2?"#113B6B":"#fff"}}>
                                                    <img src={row.image}></img>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={4} xs={12} className='p-0 m-0' style={{height:'100%',overflow:'hidden'}}>
                                        {
                                            index !=3  &&
                                            <div  style={{overflow:'hidden'}}>
                                                <div className='line'></div>
                                            </div>
                                        }
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={12} xs={8} className='div-center'>
                                    <div className='text-center my-4'>
                                    <h3 className='text4'>{row.title}</h3>
                                    <p className='text3 mb-1' style={{ color: 'rgba(0, 0, 0, 0.49)' ,fontSize:'14px'}}>{row.status} : <span  style={{ color: 'black', fontWeight: '600' }}>{row.date}</span></p>
                                    <p className='text3 mb-1' style={{ color: 'black' ,fontSize:'14px'}}>{row.text}</p>
                                </div>
                                </Col>
                            </Row>
                            </Col>
                          ))
                        }
                    </Row>
                </div>
            </Container>

            <section>
                <Container  style={{marginTop:'50px'}}>
                    <div style={{marginBottom:'50px'}}>
                         <h3 className='text3' style={{ color: 'black', fontWeight: '600' }}>Package Contains</h3>
                    </div>
                        {
                            carditem.map(()=>(
                                <>
                                <Row>
                                   <Col lg={2} xs={12}>
                                        <div>
                                            <img src={HeaderImg} style={{ height: '150px', width: '150px' }}></img>
                                        </div>
                                   </Col>
                                   <Col lg={10} xs={12}>
                                        <div>
                                            <div className='p-2 d-flex flex-column' style={{ height: '100%' }}>
                                                <h3 className='text3' style={{ color: 'black', fontWeight: '600' }}>FLATHEADS Lightweight Casual Shoes for Men | Super Breathable Men’s Sneakers</h3>
                                                <p className='text3 mb-1' style={{ color: 'black' ,fontSize:'18px'}}>Quantity : 2</p>
                                                <h4 className='text3' style={{ color: 'black' }}><strong>Black</strong></h4>
                                                <h4 className='text3' style={{ color: 'black' }}><strong>₹4,510.00</strong></h4>
                                            </div>
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
