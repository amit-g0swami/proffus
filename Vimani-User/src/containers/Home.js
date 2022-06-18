import React, { useState, useEffect } from 'react';
import './style.css';

import { Button, Card, Container, Row, Col, Carousel } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import { GetApprovedBlogs ,baseUrl} from '../../actions/user';
import HeaderImg from '../assets/header.png';

import Slider from "react-slick";
import { getBanner, getBrandsData, getSeasonData, getTodayDeal } from '../actions/Account';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
};

const banner1 = ["https://prabhat-port.s3.amazonaws.com/banners/PC-1500X600._CB648065009_.jpg?AWSAccessKeyId=AKIAZDRSRFSM5QHMITVV&Signature=cQIFReg78W31HA%2F4RknHwIQ2sxY%3D&Expires=1655539199", "https://prabhat-port.s3.amazonaws.com/banners/Unrec-footwear-3000._CB635337188_.jpg?AWSAccessKeyId=AKIAZDRSRFSM5QHMITVV&Signature=qO5AepWU%2BXfejNjSlpW1SmhrdJw%3D&Expires=1655539199", "https://prabhat-port.s3.amazonaws.com/banners/D47281209_WLA_Monsoon_Sale_DesktopTallHero_3000x1200_2._CB636244778_.jpg?AWSAccessKeyId=AKIAZDRSRFSM5QHMITVV&Signature=3ocGdYpxh1yNRV2KI6cNzr%2Byoe8%3D&Expires=1655539199"]

const carditem = [{}, {}, {}]

const item1 = [{}, {}, {}, {}]

const slideritem = [{}, {}, {}, {}, {}, {}, {}, {}]


export default function HomeComponent() {
    const [banner, setBanners] = useState([]);
    const [seasonData, setSeasonData] = useState([]);
    const [todayDeal, setTodayDeal] = useState([]);
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        getBanner().then((banner) => {
            setBanners(banner);
        });
        getSeasonData().then((card) => {
            setSeasonData(card);
        });
        getTodayDeal().then((data) => {
            setTodayDeal(data);
        });
        getBrandsData().then((data) => {
            setBrands(data);
        });
    }, []);

    return (
        <div style={{ paddingBottom: '50px' }}>
            <section>
                <Carousel>
                    {
                        banner1?.map((row) => (
                            <Carousel.Item>
                                <img src={row} style={{ width: '100%' }} alt="" />
                            </Carousel.Item>
                        ))
                    }
                </Carousel>
            </section>

            <section style={{ marginTop: '-100px' }}>
                <Container>
                    <Row>
                        {
                            seasonData?.map((data, index) => (
                                <Col lg={4} xs={12} className='my-3'>
                                    <Card className='p-3'>
                                        <div className='pl-4'>
                                            <h6 className='home-text1'>{data.title}</h6>
                                        </div>
                                        <Row>
                                            {
                                                seasonData?.map((data) => (
                                                    <Col lg={6} xs={6} className='my-2'>
                                                        <div className='pl-2'>
                                                            <img src={data.products[0].product.option_set[0].productimage_set[0].image} style={{ height: '200px', width: '100%' }} alt="" />
                                                            {/* <p className='my-1 home-text2' >Sneakers | 30-40% OFF</p> */}
                                                        </div>
                                                    </Col>
                                                ))
                                            }
                                        </Row>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        {
                            seasonData?.map((data) => (
                                <Col lg={4} xs={12} className='my-3'>
                                    <Card className='p-3'>
                                        <div className='pl-4'>
                                            <h6 className='home-text1'>{data.title}</h6>
                                        </div>
                                        <Row>
                                            {
                                                seasonData?.map(() => (
                                                    <Col lg={6} xs={6} className='my-2'>
                                                        <div className='pl-2'>
                                                            <img src={data.products[0].product.option_set[0].productimage_set[0].image} style={{ height: '200px', width: '100%' }} alt="" />
                                                            {/* <p className='my-1 home-text2' >Sneakers | 30-40% OFF</p> */}
                                                        </div>
                                                    </Col>
                                                ))
                                            }
                                        </Row>

                                    </Card>
                                </Col>

                            ))
                        }
                    </Row>
                </Container>
            </section>

            <section className='mt-4'>
                <Container >
                    <div style={{ background: 'white' }} className='mx-1 pb-3'>
                        <div className='px-3 py-2' style={{ display: 'flex' }}>
                            <h6 className='home-text1'>Today’s Deals</h6>
                            <NavLink to='/' className='mt-1 mx-4'>
                                <p className='home-btn1'>See All Details</p>
                            </NavLink>
                        </div>
                        <div className='mx-4'>
                            <Slider {...settings}>
                                {
                                    todayDeal?.map((data) => (
                                        <div className='px-3'>
                                            <img src={data.products[0].product.option_set[0].productimage_set[0].image} style={{ height: '200px', width: '100%' }} alt="" />
                                        </div>
                                    ))
                                }
                            </Slider>
                            {/* <Carousel>
                                {
                                    todayDeal?.map((data) => (
                                        <Carousel.Item >
                                            <div className='px-3'>
                                                <img src={data.products[0].product.option_set[0].productimage_set[0].image} style={{ height: '200px', width: '100%' }} alt="" />
                                            </div>
                                        </Carousel.Item>
                                    ))
                                }
                            </Carousel> */}
                        </div>
                    </div>
                </Container>
            </section>

            <section className='mt-5'>
                <Container >
                    <div style={{ background: 'white' }} className='mx-1 pb-3'>
                        <div className='px-3 py-2' style={{ display: 'flex' }}>
                            <h6 className='home-text1'>Recommended For You</h6>
                            <NavLink to='/' className='mt-1 mx-4'>
                                <p className='home-btn1'>EXPLORE MORE</p>
                            </NavLink>
                        </div>
                        <div className='mx-4'>
                            <Slider {...settings}>
                                {
                                    slideritem.map(() => (
                                        <div className='px-3'>
                                            <img src={HeaderImg} style={{ height: '200px', width: '100%' }}></img>
                                        </div>
                                    ))
                                }
                            </Slider>
                        </div>
                    </div>
                </Container>
            </section>

            <section className='mt-5'>
                <Container >
                    <div style={{ background: 'white' }} className='mx-1 pb-3'>
                        <div className='px-3 py-2' style={{ display: 'flex' }}>
                            <h6 className='home-text1'>Brands</h6>
                            <NavLink to='/' className='mt-1 mx-4'>
                                <p className='home-btn1'>EXPLORE MORE</p>
                            </NavLink>
                        </div>
                        <div className='mx-4'>
                            <Slider {...settings}>
                                {
                                    brands?.map((data) => (
                                        <div className='px-3'>
                                            <img src={data.products[0].product.option_set[0].productimage_set[0].image} style={{ height: '200px', width: '100%' }}></img>
                                        </div>
                                    ))
                                }
                            </Slider>
                        </div>
                    </div>
                </Container>
            </section>

            <section className='my-4'>
                <Container>
                    <Row>
                        {
                            carditem?.map(() => (
                                <Col lg={4} xs={12} className='my-3'>
                                    <Card className='p-3'>
                                        <div className='pl-4'>
                                            <h6 className='home-text1'>50-60% OFF on Fitness Essentials</h6>
                                        </div>
                                        <Row>
                                            {
                                                item1.map(() => (
                                                    <Col lg={6} xs={6} className='my-2'>
                                                        <div className='pl-2'>
                                                            <img src={HeaderImg} style={{ height: '120px', width: '100%' }}></img>
                                                            <p className='my-1 home-text2' >Sneakers | 30-40% OFF</p>
                                                        </div>
                                                    </Col>
                                                ))
                                            }
                                        </Row>

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
