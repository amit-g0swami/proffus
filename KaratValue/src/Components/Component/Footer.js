import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Footer.css'
import ig from '../../images/ig.png'
import twitter from '../../images/twitter.png'
import fb from '../../images/fb.png'
import Logo from "../../images/logo.png";

function Footer() {
    return (
        <section >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill='#FFFCF2' fill-opacity="1" d="M0,96L1440,256L1440,320L0,320Z"></path>
            </svg>
            <div style={{ background: '#FFFCF2', width: '100%', padding: "40px" }} className='footers'>
                <Container >
                    <img style={{ height: "150px" }} src={Logo} alt="" />
                    <Row style={{ marginTop: '50px' }}>
                        <Col lg={4} xs={12} className='my-3'>
                            <h4>ADDRESS</h4>
                            <div style={{ marginTop: '50px' }}>
                                <p className="sub-list">Shop No.3/36A, Maharaja</p>
                                <p className="sub-list">Agrasen Marg, UV Block, </p>
                                <p className="sub-list">Shalimar Bagh, Delhi, </p>
                                <p className="sub-list">110088</p>
                            </div>
                        </Col>
                        <Col lg={5} xs={12} className='my-3 text-center'>
                            <Row>
                                <Col lg={7} xs={12}>
                                    <h4>SOCIALS</h4>
                                    <div style={{ marginTop: '50px' }}>
                                        <img className='my-2' src={fb} style={{ width: '20px' }} /><br />
                                        <img className='my-2' src={twitter} style={{ width: '20px' }} /><br />
                                        <img className='my-2' src={ig} style={{ width: '20px' }} />
                                    </div>
                                </Col>
                                <Col lg={5} xs={12}></Col>
                            </Row>
                        </Col>
                        <Col lg={3} xs={12} className='my-3'>
                            <h4>COMPANY</h4>
                            <div className="sub-list" style={{ marginTop: '50px' }}>
                                <p>About Us</p>
                                <p>Contact Us</p>
                                <p>Privacy Policy</p>
                                <p>Terms and Condition</p>
                            </div>
                        </Col>
                    </Row>
                    <div className='my-4'>
                        <p className='text-center'>© 2021 COPYRIGHTS GOLD COINS COMPANY PVT. LTD. | ALL RIGHTS RESERVED</p>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default Footer
