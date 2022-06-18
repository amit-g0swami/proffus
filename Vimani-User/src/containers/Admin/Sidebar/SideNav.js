import React from 'react';
import './style.css';
import { useHistory } from "react-router";
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { Navbar } from 'react-bootstrap';
import { adminLogout } from '../../../actions/Admin';

const data = [
    { image: "https://img.icons8.com/external-prettycons-lineal-prettycons/49/ffffff/external-stats-business-and-finance-prettycons-lineal-prettycons.png", text: "Stats", route: '/admin' },
    { image: "https://img.icons8.com/material-outlined/48/ffffff/list.png", text: "All Orders", route: '/all-stats' },
    { image: "https://img.icons8.com/dotty/80/ffffff/user.png", text: "Manage Vendors", route: '/manage-vendors' },
    { image: "https://img.icons8.com/ios/50/ffffff/health-data.png", text: "Manage Category", route: '/manage-category' },
    { image: "https://img.icons8.com/ios/50/ffffff/shopping-cart-with-money.png", text: "Manage items", route: '/manage-items' },
    { image: "https://img.icons8.com/dotty/80/ffffff/broken-computer.png", text: "Manage Banner", route: '/manage-banner' },
    { image: "https://img.icons8.com/dotty/80/ffffff/warranty.png", text: "Features Brands", route: '/featured-brands' },
    { image: "https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/ffffff/external-block-user-user-experience-flatart-icons-outline-flatarticons.png", text: "Block User", route: '/block-user' },
]

function SideNav() {

    let history = useHistory();
    let logout = "https://img.icons8.com/material-outlined/24/ffffff/exit.png"
    const handleLogout = () => {
        adminLogout();
        history.push("/adminlogin");
    };

    return (
        <div className='sidenav-container'>
            <div className='div-center my-4'>
            </div>
            <div className='side-nav'>
                <div className='px-4' style={{ width: '30%' }}>
                    <NavLink to='/admin' style={{ textDecoration: 'none', fontWeight: 'bolder' }}>
                        <Navbar.Brand href="#home"><img src={logo}></img></Navbar.Brand>
                    </NavLink>
                </div>
                {
                    data.map((row) => (
                        <NavLink to={`${row.route}`} style={{ textDecoration: 'none' }}>
                            <div className='sideNav-Item px-3'>
                                <img src={row.image} style={{ height: '30px', width: '30px' }}></img>
                                <p className='text-white my-2 mx-2' style={{ whiteSpace: 'nowrap' }}>{row.text}</p>
                            </div>
                        </NavLink>
                    ))
                }
                <div className='sideNav-Item px-3'
                    onClick={() => handleLogout()} style={{ cursor: 'pointer' }}>
                    <img src={logout} style={{ height: '30px', width: '30px' }} alt="" />
                    <p className='text-white my-2 mx-2' style={{ whiteSpace: 'nowrap' }}>Logout</p>
                </div>
            </div>
        </div>
    )
}

export default SideNav;
