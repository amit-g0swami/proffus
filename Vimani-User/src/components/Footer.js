import React,{useState,useEffect} from 'react';
import './style.css';

import { Button ,Card,Container,Row,Col} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';


let connect=[
    {text:"Facebook",route:'/'},
    {text:"Twitter",route:'/'},
    {text:"Instagram",route:'/'},
]

let knowUs=[
    {text:'About Us',route:'/'},
    {text:'Contact Us',route:'/'},
    {text:'Careers',route:'/'},
]

let legal=[
    {text:'Privacy Policy',route:'/'},
    {text:'Terms of Service',route:'/'},
    {text:'Security',route:'/'},
]

let help=[
    {text:'Help',route:'/'},
    {text:'Customer Support',route:'/'},
    {text:'Report an Issue',route:'/'},
]

const navStyle={
    textDecoration:'none',
    color:"white"
}


function Footer() {
    return (
        <div style={{background:'#113B6B',color:"white",paddingTop:'50px',paddingBottom:'0px'}}>
              <Container style={{paddingBottom:'50px'}}>
                    <Row>
                       <Col lg={3} xs={12} style={{marginTop:'30px'}}>
                           <img src={logo}></img>
                        </Col>
                       <Col lg={2} xs={12} style={{marginTop:'30px'}}>
                           <div>
                               <h6 className='footer-heading'>Connect With Us</h6>
                           </div>
                           <div className='my-4'>
                               {
                                   connect.map((row)=>(
                                       <NavLink to={`${row.route}`} style={navStyle}>
                                           <p className='footer-text'>{row.text}</p>
                                       </NavLink>
                                   ))
                               }
                           </div>
                        </Col>
                       <Col lg={2} xs={12} style={{marginTop:'30px'}}>
                           <div>
                               <h6 className='footer-heading'>Get to Know Us</h6>
                           </div>
                           <div className='my-4'>
                               {
                                   knowUs.map((row)=>(
                                       <NavLink to={`${row.route}`} style={navStyle}>
                                           <p className='footer-text'>{row.text}</p>
                                       </NavLink>
                                   ))
                               }
                           </div>
                        </Col>
                       <Col lg={2} xs={12} style={{marginTop:'30px'}}>
                            <div>
                               <h6 className='footer-heading'>Legal</h6>
                           </div>
                           <div className='my-4'>
                               {
                                   legal.map((row)=>(
                                       <NavLink to={`${row.route}`} style={navStyle}>
                                           <p className='footer-text'>{row.text}</p>
                                       </NavLink>
                                   ))
                               }
                           </div>
                        </Col>
                       <Col lg={2} xs={12} style={{marginTop:'30px'}}>
                            <div>
                               <h6 className='footer-heading'>Help & Support</h6>
                           </div>
                           <div className='my-4'>
                               {
                                   help.map((row)=>(
                                       <NavLink to={`${row.route}`} style={navStyle}>
                                           <p className='footer-text'>{row.text}</p>
                                       </NavLink>
                                   ))
                               }
                           </div>
                        </Col>
                       <Col lg={1} xs={12}></Col>
                    </Row>
                </Container>
                <hr/>
                <div className='p-1'>
                    <p className='text-center' style={{fontSize:'12px'}}>© Vimani Corporate Private Limited. All Rights Reserved.</p>
                </div>
        </div>
    )
}

export default Footer;
