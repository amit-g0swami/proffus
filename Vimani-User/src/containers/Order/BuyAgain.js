import React, { useState, useEffect } from 'react';
import '../style.css';

import { Button, Card, Container, Row, Col,Form} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import { GetApprovedBlogs ,baseUrl} from '../../actions/user';
import HeaderImg from '../../assets/product1.png';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const BreadData=[
    {label:'Wishlist',route:'/'},
   
]

const carditem = [{}, {}, {},{},{},{}]




export default function HomeComponent() {

    return (
        <div style={{ paddingBottom: '50px' }}>
            <section>
                <Container>
                    <Row>
                        {
                            carditem.map(() => (
                                <Col lg={4} xs={12} className='my-4 px-2'>
                                    <Card className='p-0 border-0' style={{ width: '100%' ,background:'transparent'}}>
                                            <FavoriteIcon style={{position:'relative',left:"90%",top:'40px',color:'#113B6B'}}/>
                                        <Card.Img variant="top" src={HeaderImg} style={{ height: '300px', width: '100%' }} />
                                        <Card.Body className='p-0' >
                                            <div className='py-3'>
                                                <Card.Title className='text3' style={{ color: 'black',fontWeight:'600' }}>FLATHEADS Lightweight Casual Shoes for Men | Super Breathable Men’s Sneakers</Card.Title>
                                                <div>
                                                    <p className='text3' style={{color: 'rgba(0, 0, 0, 0.5)'}}>Sold By : 
                                                    <span style={{color: 'black'}}> Nike</span></p>
                                                </div>
                                                <div style={{display:'flex'}}>
                                                    <div style={{width:'35%'}}>
                                                        <p className='text3 mb-0' style={{color:'#000000',fontSize:'24px',fontWeight:'600' }}>₹620.00</p>
                                                        <p className='text3 mb-0' style={{color:'#000000',textDecoration:"line-through"}}>₹670.00</p>
                                                    </div>
                                                    <div className='px-1' style={{width:'65%',background: 'rgba(255, 255, 255, 0.49)',display:'flex',justifyContent:'space-between'}}>
                                                        <p className='text3 mb-0 div-center' style={{color:'#3BA732',fontWeight:'bold'}}>12% OFF</p>
                                                        <p className='text3 mb-0 div-center' style={{color:'#3BA732'}}>Saved :  
                                                           <span style={{fontWeight:'bold'}}> ₹50.00</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <Button className='custom-btn1' style={{ width: '100%' }} >Buy Now</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </section>

        </div>
    )
}
