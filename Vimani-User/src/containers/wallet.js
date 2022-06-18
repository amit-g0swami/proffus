import React, { useState, useEffect } from 'react';
import './style.css';
import { Button, Card, Container, Row, Col, Table,Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import { GetApprovedBlogs ,baseUrl} from '../../actions/user';
import WalletImg1 from '../assets/wallet.png';


const BreadData = [
    { label: 'Home', route: '/' },
    { label: 'Men', route: '/' },
    { label: 'Footerwear', route: '/' },
]

const carditem = [{}, {}, {},{},{},{}]

const priceitem = ['₹ 250/-','₹ 500/-','₹ 1,000/-','₹ 1,500/-','₹ 2,000/-','₹ 3,000/-','₹ 5,000/-']


export default function HomeComponent() {


    return (
        <div style={{ paddingBottom: '50px' }}>
            <section style={{ paddingBottom: '50px' }}>
                <Container>
                    <p style={{ marginTop: '50px', fontSize: '24px', fontWeight: '600' }} className='text3 text-dark'>My Wallet</p>
                    <p  className='text5'>BALANCE</p>
                    <div className='d-flex'>
                        <img src={WalletImg1}></img>
                        <h1 className='wallet-heading mx-4'>₹ 7,720.00/-</h1>
                    </div>
                    <p className='my-4 text3' style={{color:'rgba(0, 0, 0, 0.5'}}>Additional 5% off each time you pay using this wallet, so pay using this wallet now!</p>
                    <hr/>
                </Container>
            </section>
            <section style={{ paddingBottom: '50px' }}>
                <Container>
                    <p  className='text5'>ADD MONEY TO THE WALLET</p>
                    <Row>
                        {
                            priceitem.map((row,index)=>(
                                <Col  className='my-2'>
                                    <div className='p-2' 
                                    style={{width:'100%',border:'2px dashed #113B6B',background:'#fff'}}>
                                        <p className='text3 m-0 text-center' style={{color:'#113B6B'}} >{row}</p>
                                    </div>
                                </Col>
                            ))
                        }
                    </Row>
                    <Row style={{marginTop:'50px'}}>
                        <Col lg={4} xs={12}>
                            <Form.Group className="mb-3" controlId="formBasicEmail" > 
                                <Form.Label className='text3 text-dark'>Enter Amount</Form.Label>
                                <Form.Control type='text'  />
                            </Form.Group>
                            <div style={{marginTop:'30px'}}>
                                <Button className='custom-btn1  my-2' style={{width:'auto'}} >ADD TO WALLET</Button>
                            </div>
                        </Col>
                        <Col lg={8} xs={12}></Col>
                    </Row>
                    <hr style={{ marginTop: '50px' }}/>
                </Container>
            </section>
            <section style={{ marginTop: '50px' }}>
                <Container>
                    <div style={{ marginTop: '50px' }}>
                        <p  className='text5'>TRANSACTION HISTORY</p>
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
