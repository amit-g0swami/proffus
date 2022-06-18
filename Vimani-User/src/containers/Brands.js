import React, { useState, useEffect } from 'react';
import './style.css';
import BreadCrumbComponent from './components/BreadCrumb';

import { Button, Card, Container, Row, Col,Form} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import { GetApprovedBlogs ,baseUrl} from '../../actions/user';
import HeaderImg from '../assets/product1.png';

import img1 from '../assets/brand1.png';
import img2 from '../assets/brand2.png';
import img3 from '../assets/brand3.png';
import img4 from '../assets/brand4.png';
import img5 from '../assets/brand5.png';
import img6 from '../assets/brand6.png';
import img7 from '../assets/brand7.png';
import img8 from '../assets/brand8.png';
import img9 from '../assets/brand9.png';
import img10 from '../assets/brand10.png';
import img11 from '../assets/brand11.png';
import img12 from '../assets/brand12.png';
import img13 from '../assets/brand13.png';
import img14 from '../assets/brand14.png';
import img15 from '../assets/brand15.png';
import img16 from '../assets/brand16.png';
import img17 from '../assets/brand17.png';
import img18 from '../assets/brand18.png';
import img19 from '../assets/brand19.png';
import img20 from '../assets/brand20.png';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const BreadData=[
    {label:'Home',route:'/'},
    {label:'Brands',route:'/'},
]

const carditem = [
    {name:'Nike |',products:'6293 Products',image:img1}, 
    {name:'Louis Vuitton |',products:'6293 Products',image:img2}, 
    {name:'Reebok |',products:'6293 Products',image:img3},
    {name:'Adidas |',products:'6293 Products',image:img4},
    {name:'Fila |',products:'6293 Products',image:img5},
    {name:'Chanel |',products:'6293 Products',image:img6},
    {name:'Gucci |',products:'6293 Products',image:img7},
    {name:'Zara |',products:'6293 Products',image:img8},
    {name:'Versace |',products:'6293 Products',image:img9},
    {name:'Vans |',products:'6293 Products',image:img10},
    {name:'Puma |',products:'6293 Products',image:img11},
    {name:'Levis |',products:'6293 Products',image:img12},
    {name:'Calvin Klein |',products:'6293 Products',image:img13},
    {name:'Converse |',products:'6293 Products',image:img14},
    {name:'Giorgio Armani |',products:'6293 Products',image:img15},
    {name:'Allen Solly |',products:'6293 Products',image:img16},
    {name:'Prada |',products:'6293 Products',image:img17},
    {name:'Arrow |',products:'6293 Products',image:img18},
    {name:'Victoria’s Secret |',products:'6293 Products',image:img19},
    {name:'Blackberrys |',products:'6293 Products',image:img20}
]

export default function HomeComponent() {

    return (
        <div style={{ paddingBottom: '50px' }}>
            <section style={{marginTop:'50px'}}>
                <Container>
                    <div  style={{marginTop:'50px'}}>
                        <BreadCrumbComponent data={BreadData}/>
                    </div>
                    <Row>
                        {
                            carditem.map((row) => (
                                <Col lg={3} xs={6} className='my-4 px-2'>
                                    <Card className='p-0 border-0' style={{ width: '100%' ,background:'transparent'}}>
                                        <Card.Img variant="top" src={row.image} style={{ height: '200px', width: '100%' }} />
                                        <Card.Body className='p-0' style={{borderTop:'1px solid black'}}>
                                            <div className='py-3'>
                                                <div>
                                                    <p className='text3' style={{color: 'rgba(0, 0, 0, 0.5)'}}>
                                                        <span style={{color: 'black'}}>{row.name} </span> {row.products} 
                                                    </p>
                                                </div>
                                            </div>
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
