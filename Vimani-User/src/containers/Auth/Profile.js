import React, { useState, useEffect } from 'react';
import '../style.css';
// import { GetApprovedBlogs ,baseUrl} from '../../actions/user';

import { Button, Card, Container, Row, Col,Form} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import CompanyImg from '../../assets/company.png';

import Profile1Img from '../../assets/profile1.png';
import Profile2Img from '../../assets/profile2.png';
import Profile3Img from '../../assets/profile3.png';
import Profile4Img from '../../assets/profile4.png';
import Profile5Img from '../../assets/profile5.png';
import Profile6Img from '../../assets/profile6.png';
import Profile7Img from '../../assets/profile7.png';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const BreadData=[
    {label:'Home',route:'/'},
    {label:'Men',route:'/'},
    {label:'Footerwear',route:'/'},
]

const carditem = [{}, {}, {},{},{},{}]

const dropItem = [
    { 
        title:'Color',
        option:[
            {text:'Red',value:''},{text:'Black',value:''},{text:'Blue',value:''}
        ]
    }, 
    { 
        title:'Size',
        option:[
            {text:'10',value:''},{text:'20',value:''},{text:'30',value:''}
        ]
    },
    { 
        title:'Price',
        option:[
            {text:'100',value:''},{text:'200',value:''},{text:'300',value:''}
        ]
    },
    { 
        title:'Material',
        option:[
            {text:'Nylon',value:''},{text:'Wollen',value:''},{text:'Silk',value:''}
        ]
    },
    { 
        title:'Gender',
        option:[
            {text:'Male',value:''},{text:'Female',value:''},{text:'Others',value:''}
        ]
    }
]


export default function HomeComponent() {

    const [filterArray, setfilterArray] = useState([]);
    
    // console.log("filterArray",filterArray);
    
    const onChange=(e)=>{
        const newItem = [...filterArray, e.target.value];
        console.log("onChange newItem",newItem);
        
        setfilterArray(newItem);
    }

    const removeFilter = index => {
        const newItem = [...filterArray];
        console.log("removeFilter newItem",newItem);
        newItem.splice(index, 1);
        setfilterArray(newItem);
      };


    
     

    return (
        <div className='profile' style={{ paddingBottom: '50px' }}>
            <section>
                <Container>
                    <div  style={{marginTop:'80px'}}>
                        <Row>
                            <Col lg={10} xs={12}>
                                <div style={{display:'flex',alignItems:'center'}}>
                                    <div>
                                        <img src={CompanyImg}></img>
                                    </div>
                                    <div className='mx-4'>
                                        <h5 className='text3 text-dark' style={{fontWeight:'500',fontSize:'32px'}}>Utkarsh Nigam</h5>
                                        <p className='my-3 text3 text-dark' style={{color:'rgba(0, 0, 0, 0.5)',fontWeight:'bold'}}>
                                          utk.ngm45@gmail.com</p>
                                        <p className='mb-0 text3' style={{color:'rgba(0, 0, 0, 0.5)'}}>
                                        Member since : <span className='text-dark' style={{fontWeight:'bold'}}>25 May, 2021</span></p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={2} xs={12}>
                                <NavLink to='/' className='mt-1 mx-4'>
                                   <p className='home-btn1'>Edit Details</p>
                                </NavLink>
                            </Col>
                        </Row>
                    </div>
                    
                    <div style={{marginTop:'50px'}}>
                        <div className='profile-div p-3   mt-4 d-flex justify-content-between'>
                            <p className='m-0 text3 text-dark'>
                               <img className='mx-2' src={Profile1Img}></img>My Orders</p>
                               <ArrowForwardIosIcon/>
                        </div>
                        <div className='profile-div p-3   mt-4 d-flex justify-content-between'>
                            <p className='m-0 text3 text-dark'>
                               <img className='mx-2' src={Profile2Img}></img>My Wallet</p>
                               <ArrowForwardIosIcon/>
                        </div>
                        <div className='profile-div p-3   mt-4'>
                            <div className='d-flex justify-content-between'>
                            <p className='m-0 text3 text-dark'>
                               <img className='mx-2' src={Profile3Img}></img>Address</p>
                               <NavLink to='/' className='mt-1 mx-4'>
                                  <p className='home-btn1'>ADD ANOTHER ADDRESS</p>
                               </NavLink>
                            </div>
                            <div className='mx-2'>
                               <Form.Check type='radio'  className='my-2'
                                 label={<p className='m-0 text3 text-dark'>Non ultricies a ferme ntum lorem pulvinar odio sit cum. Diam tellus lectus nam diam</p>}
                               />
                              <Form.Check type='radio' className='my-2'
                                 label={<p className='m-0 text3 text-dark'>Non ultricies a ferme ntum lorem pulvinar odio sit cum. Diam tellus lectus nam diam</p>}
                               />
                            </div>
                        </div>
                        <div className='profile-div p-3   mt-4'>
                            <div className='d-flex justify-content-between'>
                               <p className='m-0 text3 text-dark'>
                                  <img className='mx-2' src={Profile4Img}></img>Phone Number</p>
                                <NavLink to='/' className='mt-1 mx-4'>
                                  <p className='home-btn1'>ADD ANOTHER PHONE NUMBER</p>
                                </NavLink>
                            </div>
                            <div className='mx-2'>
                               <Form.Check type='radio'  className='my-2'
                                 label={<p className='m-0 text3 text-dark'>+91 9876543210</p>}
                               />
                              <Form.Check type='radio' className='my-2'
                                 label={<p className='m-0 text3 text-dark'>+91 9876543210</p>}
                               />
                            </div>
                        </div>
                        <div className='profile-div p-3   mt-4'>
                            <div className='d-flex justify-content-between'>
                               <p className='m-0 text3 text-dark'>
                                   <img className='mx-2' src={Profile5Img}></img>Payment Cards</p>
                               <NavLink to='/' className='mt-1 mx-4'>
                                  <p className='home-btn1'>ADD ANOTHER PAYMENT CARD</p>
                                </NavLink>
                            </div>
                            <div className='mx-2'>
                               <Form.Check type='radio'  className='my-2'
                                 label={
                                 <div>
                                     <p className='mb-1 text3 text-dark'>+91 9876543210</p>
                                     <p className='m-0 text3 text-dark' style={{fontSize:'14px'}}>Viverra Vehicula</p>
                                     <p className='m-0 text3 text-dark' style={{fontSize:'14px'}}>Expires 05/28</p>
                                 </div>}
                               />
                              <Form.Check type='radio' className='my-3'
                                 label={
                                    <div>
                                        <p className='mb-1 text3 text-dark'>+91 9876543210</p>
                                        <p className='m-0 text3 text-dark' style={{fontSize:'14px'}}>Viverra Vehicula</p>
                                        <p className='m-0 text3 text-dark' style={{fontSize:'14px'}}>Expires 05/28</p>
                                    </div>
                                 }
                               />
                            </div>
                        </div>
                        <div className='profile-div p-3   mt-4 d-flex justify-content-between'>
                            <p className='m-0 text3 text-dark'>
                               <img className='mx-2' src={Profile6Img}></img>Change Password</p>
                            <ArrowForwardIosIcon/>
                        </div>
                        <div className='profile-div p-3 ' style={{marginTop:'100px'}}>
                            <p className='m-0 text3' style={{color:'#E05050'}}>
                               <img className='mx-2' src={Profile7Img}></img>Sign Out</p>
                        </div>
                    </div>
                  
                </Container>
            </section>
        </div>
    )
}
