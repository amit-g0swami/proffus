import React, { useState, useEffect } from 'react';
import './style.css';
import { Button, Card, Container, Row, Col, Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import { GetApprovedBlogs ,baseUrl} from '../../actions/user';
import CustomerImg1 from '../assets/customer1.png';
import CustomerImg2 from '../assets/customer2.png';

import CloseIcon from '@mui/icons-material/Close';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rating from '@mui/material/Rating';

const BreadData = [
    { label: 'Home', route: '/' },
    { label: 'Men', route: '/' },
    { label: 'Footerwear', route: '/' },
]

const carditem = [{}, {}, {},{},{},{}]



export default function HomeComponent() {


    return (
        <div style={{ paddingBottom: '50px' }}>
            <section style={{ paddingBottom: '50px' }}>
                <Container>
                    <p style={{ marginTop: '50px', fontSize: '24px', fontWeight: '600' }} className='text3 text-dark'>Customer Support</p>
                    <div style={{marginTop:'-100px'}}>
                        <Row>
                            <Col lg={6} xs={12}>
                                <div  style={{position:'relative',top:'25vh'}}>
                                    <div className='p-4'>
                                       <h3 className='text3' style={{  fontWeight: '600',fontSize:'36px' }}>Raise a Ticket</h3>
                                       <h3 className='text3 mt-4' style={{ fontSize:'18px'}}
                                         >Discribe your issue in details and provide images if possible to help us better understand your issue.</h3>                                                           
                                    </div>
                                </div>
                                <img src={CustomerImg1} style={{ width: '100%', height: '400px'}}></img>
                                <div className='text-center' style={{width:'100%',marginTop:'-100px'}}>
                                   <Button className='custom-btn1  my-2' >RAISE A TICKET</Button>
                                </div>
                            </Col>
                            <Col lg={6} xs={12}>
                               <div  style={{position:'relative',top:'25vh'}}>
                                    <div className='p-4'>
                                       <h3 className='text3' style={{  fontWeight: '600',fontSize:'36px' }}>Chat Live</h3>
                                       <h3 className='text3 mt-4' style={{ fontSize:'18px'}}
                                         >Discribe your issue in details and provide images if possible to help us better understand your issue.</h3>                                                           
                                    </div>
                                </div>
                                <img src={CustomerImg2} style={{ width: '100%', height: '400px'}}></img>
                                <div className='text-center' style={{width:'100%',marginTop:'-100px'}}>
                                   <Button className='custom-btn1  my-2' >CHAT LIVE</Button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                   
                </Container>
            </section>

            <section style={{ marginTop: '50px' }}>
                <Container>
                <div style={{ marginTop: '50px' }}>
                        <h3 className='heading1' style={{ marginBottom: '50px' }}>Previously Raised Tickets</h3>
                    </div>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Ticket Number</th>
                                <th>Title</th>
                                <th>Status</th>
                                <th>Last Update</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className='help-table'>
                            {
                                carditem.map(()=>(
                                <tr>
                                    <td className='py-3 text3 text-dark'>#564346</td>
                                    <td className='py-3 text3 text-dark'>Tristique ullamcorper condimentum viverra auctor</td>
                                    <td className='py-3 text3 text-dark'>RESOLVED</td>
                                    <td className='py-3 text3 text-dark'>@1 hour ago</td>
                                    <td className='py-3 text3 text-dark'>MORE DETAILS</td>
                                </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Container>
            </section>
        </div>
    )
}
