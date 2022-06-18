import React from 'react'
import { connect } from 'react-redux'
import {Container,Row,Col,Form,Button} from 'react-bootstrap';
import Slider from "react-slick";
import BreadCrumbComponent from './components/BreadCrumb';

import HeaderImg from '../assets/product1.png';

const slideritem = [{}, {}, {}, {}, {}, {}, {}, {}]

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
};

const BreadData=[
    {label:'Customer Support',route:'/'},
    {label:'Raise a Ticket',route:'/'},
]


export const CustomerRaise = (props) => {
  return (
    <div style={{paddingBottom:'100px'}}>
         <section style={{ marginTop: '50px' }}>
                <Container>
                <div  style={{margin:'50px 0px'}}>
                        <BreadCrumbComponent data={BreadData}/>
                    </div>
                    <div>
                        <p className='text3 mb-4' style={{ color: 'black', fontSize: '16px' }}>Choose the Product you have issue with...</p>
                    </div>
                    <div style={{ background: 'white' }} className='mx-1'>
                        <div className='px-3 py-3' style={{ display: 'flex' }}>
                            <h6 className='home-text1'>Your Recent Orders</h6>
                        </div>
                        <div className='mx-4'>
                            <Slider {...settings}>
                                {
                                    slideritem.map(() => (
                                        <div className='px-3 pb-3'>
                                            <img src={HeaderImg} style={{ height: '200px', width: '100%' }}></img>
                                            <div>
                                                <p className='text-center text3 mb-2' style={{ color: 'black' }}>Robbie jones Sneakers Casual Canvas Fabric Colour Shoes for Men and Boys</p>
                                                <div className='text-center'>
                                                <Form.Check 
                                                  id={`default`}
                                                  label={      
                                                  <p className='text-center text3 mb-2' style={{ color: 'black'}}>Choose this product</p> 
                                                  }
                                                />
                                                </div>
                                                {/* <p className='text-center text3 mb-2' style={{ color: 'black', fontSize: '20px' }}>₹10,000 - ₹50,000</p> */}
                                                {/* <p className='text-center text3 mb-2' style={{ color: 'black', fontSize: '12px' }}>Ends In 12:52:35</p> */}
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

            <section>
                <Container>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className='text3' style={{color:'black'}}>Title</Form.Label>
                        <Form.Control type="text"  />
                    </Form.Group>
                    <Form.Group className="my-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label className='text3' style={{color:'black'}}>Details</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Form.Group className="my-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label className='text3' style={{color:'black'}}>Add an Image</Form.Label>
                      <Form.Control type='file' />
                    </Form.Group>
                    <Button className='custom-btn1 my-4' style={{ background: 'white', color: '#113B6B', border: '2px solid #113B6B' }}>
                    ATTACH AN IMAGE</Button>
                    <div>
                    <Button className='custom-btn1 mx-3 my-4' style={{float:'right'}}>RAISE A TICKET</Button>
                    </div>
                </Container>
            {/* <div className='div-center py-4' style={{justifyContent:'space-between'}}>
                                <div>
                                </div>
                                <div>
                                  <Form.Group controlId="formBasicEmail">
                                      <Form.Label className='text3' style={{color:'black'}}>Check Availibility</Form.Label>
                                      <Form.Control type="text" placeholder="Enter Pincode" />
                                  </Form.Group>
                                </div>
                                <div>
                                </div>
                            </div> */}
            </section>
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerRaise)