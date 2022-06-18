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
        <div style={{ paddingBottom: '50px' }}>
            <section>
                <Container>
                    <div  style={{marginTop:'80px'}}>
                        <Row>
                            <Col lg={8} xs={12}>
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
                            </Col>
                            <Col lg={4} xs={12}>
                                <div style={{display:'flex',justifyContent:'space-between'}}>
                                    <Rating style={{color:'#113B6B',height:'15px',width:'15px'}} name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                                    <p className='text3 text-dark' style={{marginLeft:'30px'}}>(3.7)</p>
                                    <p className='text3 text-dark ' style={{fontWeight:'bold'}}>42 Reviews</p>
                                </div>
                                <NavLink to='/' className='mt-1 mx-4'>
                                   <p className='home-btn1'>SEE RATINGS AND REVIEWS</p>
                                </NavLink>
                            </Col>
                        </Row>
                        <div style={{marginTop:'50px'}}>
                            <h3 className='heading1'>About</h3>
                            <p  className='text3 text-dark my-4'>Id pharetra montes, ac neque. Gravida sit metus molestie enim eu, lectus est. Pharetra, congue metus, dui nullam faucibus magna a congue tempus. Diam blandit malesuada aenean neque lacus vulputate sollicitudin adipiscing. Consectetur sed facilisis tellus volutpat mattis diam ipsum in.</p>
                        </div>
                    </div>
                    
                    <div style={{marginTop:'50px'}}>
                        <h3 className='heading1' style={{marginBottom:'50px'}}>Products Selling</h3>
                        <div className='my-4' >
                            <h6  className='text3 text-dark'>FILTER BY</h6>
                        </div>
                        <div>
                            <Row>
                                {
                                    dropItem.map((row)=>(
                                        <Col lg={2}>
                                            <Form.Select className='text3' style={{color:'#113B6B'}} onChange={(e)=>onChange(e)}>
                                              <option>{row.title}</option>
                                              {
                                                  row.option.map((row)=>(
                                                      <option value={row.text}>{row.text}</option>
                                                  ))
                                              }
                                            </Form.Select>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </div>
                    </div>
                    
                    <div style={{marginTop:'50px'}}>
                        <div className='my-4'>
                            <h6  className='text3 text-dark'>SORT BY</h6>
                        </div>
                        <div>
                            <Row>
                                <Col lg={2}>
                                    <Form.Select className='text3' style={{color:'#113B6B'}} aria-label="Default select example">
                                      <option >Relevant</option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                        </div>
                    </div>

                    <div style={{marginTop:filterArray.length>0?'50px':'0px'}}>
                        <Row>
                            {
                                filterArray.map((row,index)=>(
                                    <Col lg={2} className='my-2'>
                                        <div className='p-2 d-flex' style={{width:'100%',border:'2px dashed #113B6B',justifyContent:'space-between'}}>
                                            <p className='text3 m-0' style={{color:'#113B6B'}} >{row}</p>
                                            <CloseIcon style={{color:'#113B6B'}} onClick={()=>removeFilter(index)}/>
                                        </div>
                                    </Col>
                                ))
                            }
                        </Row>
                    </div>
                </Container>
            </section>

            <section style={{marginTop:'50px'}}>
                <Container>
                    <div className='my-4'>
                        <h6 className='text-center home-text1'>6 RESULTS FOUND</h6>
                    </div>
                    <Row>
                        {
                            carditem.map(() => (
                                <Col lg={4} xs={12} className='my-4 px-2'>
                                    <Card className='p-0 border-0' style={{ width: '100%' ,background:'transparent'}}>
                                        {/* <div style={{width:'100%'}}> */}
                                        {/* </div> */}
                                            <FavoriteBorderIcon style={{position:'relative',left:"90%",top:'40px'}}/>
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
                                                        <p className='text3 mb-0' style={{color:'#000000'}}>₹670.00</p>
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
