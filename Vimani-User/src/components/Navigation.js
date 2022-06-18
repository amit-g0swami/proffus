import React, { useState, useEffect } from 'react';
import './style.css';
import { Navbar, Button, Container, Nav, InputGroup, FormControl, Row, Col } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { isAuth, logout } from '../actions/auth';
import logo from '../assets/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useHistory } from "react-router";
import { addFilteredProducts } from "../actions/Product";

import img1 from '../assets/nav1.png';
import img2 from '../assets/nav2.png';
import img3 from '../assets/nav3.png';


const toplink = [
    { text: "MESSAGE", icon: img1, route: '/messages' },
    { text: "WISHLIST", icon: img2, route: '/wish-list' },
    { text: "CART", icon: img3, route: '/cart' },
    // { text: "SELLER", icon: img3, route: '/seller' },
    // { text: "REVIEW", icon: img3, route: '/company-review' },
    // { text: "WALLET", icon: img3, route: '/wallet' },
]

const link = [
    { text: "All", route: '/product' },
    { text: "Mobiles", route: '/product' },
    { text: "Electronics", route: '/product' },
    { text: "Books", route: '/product' },
    { text: "Toys and Games", route: '/product' },
    { text: "Grocery", route: '/product' },
    { text: "Fashion", route: '/product' },
    { text: "Home and Kitchen", route: '/product' },
    { text: "Sports", route: '/product' },
    { text: "Bags", route: '/product' },
    { text: "Hardware", route: '/product' },
]

function Navigation() {
    const history = useHistory();
    const x = isAuth();

    const handleLogout = () => {
        logout();
    }

    const NoAuth = (
        <Nav className='ml-auto'>
            <NavLink to={`/login`} style={{ textDecoration: 'none' }}>
                <Button className='auth-btn mx-2 mt-2'>Login</Button>
            </NavLink>
        </Nav>
    )

    // const UserAuth = (
    //     <Nav>
    //         <Nav.Link >
    //             <NavLink to={`/dashboard`} style={{ textDecoration: 'none', fontWeight: 'bolder' }}>Dashboard</NavLink>
    //         </Nav.Link >
    //         <NavLink to='/'>
    //             <Button variant='primary' className='mx-2' onClick={() => handleLogout()}>Logout</Button>
    //         </NavLink>
    //     </Nav>
    // )
    const LogoutHandle = () => {
        localStorage.removeItem("user");
        history.push("/login");
        window.location.reload(true);
    };



    return (
        <div style={{ background: '#113B6B', color: 'white' }}>
            <Navbar expand="lg" className='pb-0'>
                <Container>
                    <div style={{ width: '100%' }}>
                        <Row >
                            <Col lg={8} xs={12} style={{ display: 'flex' }}>
                                <div className='px-4' style={{ width: '30%' }}>
                                    <NavLink to='/' style={{ textDecoration: 'none', fontWeight: 'bolder' }}>
                                        <Navbar.Brand href="#home"><img src={logo}></img></Navbar.Brand>
                                    </NavLink>
                                </div>
                                <div style={{ width: '70%' }}>
                                    <InputGroup className="mt-2 ml-4 px-4" style={{ width: '100%' }}>
                                        <FormControl style={{ boxShadow: 'none' }}
                                            placeholder="Search here..."
                                            aria-label="Recipient's username"
                                            aria-describedby="basic-addon2"
                                        />
                                        <InputGroup.Text id="basic-addon2" style={{ background: '#F8C648' }}><SearchIcon /></InputGroup.Text>
                                    </InputGroup>
                                </div>
                            </Col>
                            <Col lg={4} xs={12}>
                                <div >
                                    <Nav style={{ display: 'flex  !important', flexDirection: 'row' }}>
                                        {
                                            toplink.map((row) => (
                                                <Nav.Link className=' px-3' >
                                                    <NavLink className='nav-text top-nav-text mt-1' to={`${row.route}`}
                                                        style={{ textDecoration: 'none', color: '#F8C648', fontSize: '14px' }}>
                                                        <img src={row.icon} style={{ height: '20px', width: '20px' }}></img>
                                                        <p className='m-0'>{row.text}</p>
                                                    </NavLink>
                                                </Nav.Link >
                                            ))
                                        }
                                        {x ? (
                                            <Nav>
                                                <Nav.Link >
                                                    <NavLink to={`/dashboard`} style={{ textDecoration: 'none', fontWeight: 'bolder' }}>Dashboard</NavLink>
                                                </Nav.Link >
                                                <NavLink to='/'>
                                                    <Button variant='primary' className='mx-2' onClick={LogoutHandle}>Logout</Button>
                                                </NavLink>
                                            </Nav>
                                        ) : (
                                            <Nav>
                                                <NavLink to='/login'>
                                                    <Button variant='primary' className='mx-2'
                                                        style={{ color: '#F8C648', }} >Login</Button>
                                                </NavLink>
                                            </Nav>
                                        )}
                                    </Nav>
                                </div>
                            </Col>
                        </Row>


                    </div>
                </Container>
            </Navbar>

            <Navbar expand="lg">
                <Container >
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='py-0' style={{ width: '100%' }}>
                            {
                                link.map((row) => (
                                    <Nav.Link className='pt-0'>
                                        <NavLink className='nav-text' to={`${row.route}`}
                                            style={{ textDecoration: 'none', color: 'white' }}>
                                            {row.text}</NavLink>
                                    </Nav.Link>
                                ))
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </div>
    )
}

// const mapStateToProps = (state) => ({
//     auth: state.auth,
// });
const mapStateToProps = (state) => ({
    products: state.product.filteredProducts,
    searchbar: state.product.showSearchBar,
});

// export default connect(mapStateToProps, { logout })(Navigation);
const mapDispatchToProps = (dispatch) => ({
    setFilterProducts: (product) => {
        dispatch(addFilteredProducts(product));
    },
});
{/* {
                            isAuthenticated ?
                                authCategory == 'admin' ? AdminAuth : UserAuth
                                : NoAuth
                        } */}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);