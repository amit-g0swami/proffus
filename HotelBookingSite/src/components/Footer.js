import React from 'react'
import './Footer.css'
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className='footer__top'>
            <div className='footer'>
                <div className='footer__left'>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <img
                            className="logo__header__footer"
                            src={Logo}
                            alt=""
                        />
                        {/* <h2 className="logo__header">
                    LOGO
                </h2> */}
                    </Link>
                    <div style={{ display: 'flex', alignItems: "center", justifyContent: 'space-between', width: '308px' }}>
                        <img src="https://img.icons8.com/ios-filled/24/ffffff/facebook-new.png" />
                        <img src="https://img.icons8.com/ios-glyphs/24/ffffff/instagram-new.png" />
                        <img src="https://img.icons8.com/ios-glyphs/24/ffffff/twitter--v1.png" />
                        <img src="https://img.icons8.com/ios-filled/24/ffffff/linkedin.png" />
                    </div>
                </div>
                <div className='footer__right'>
                    <div style={{ display: 'flex', alignItems: "center", padding: '10px' }} className='address___footer'>
                        <img src="https://img.icons8.com/material-outlined/24/ffffff/marker.png" alt="" style={{ marginRight: "34.6px", width: '19px' }} />Shop No.3/36A, Maharaja    Agrasen Marg, UV Block, Shalimar Bagh, Delhi, 110088</div>
                    <div style={{ display: 'flex', alignItems: "center", padding: '10px' }}>
                        <img src="https://img.icons8.com/material-outlined/24/ffffff/new-post.png" alt="" style={{ marginRight: "34.6px" }} />lorem.ipsum@gmail.com</div>
                    <div style={{ display: 'flex', alignItems: "center", padding: '10px' }}><img src="https://img.icons8.com/ios/24/ffffff/phone.png" style={{ marginRight: "34.6px" }} alt="" />+91 9876543210</div>
                </div>
            </div>
            <div>
                <p>Copyright ©2022 All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer