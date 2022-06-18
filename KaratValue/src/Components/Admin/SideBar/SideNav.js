import React from 'react';
import './style.css';
import { useHistory } from "react-router";
import { NavLink } from 'react-router-dom';

import adv from "../../../images/advertising.svg";
import grid from "../../../images/grid (1).svg";
import items from "../../../images/items.svg";
import logout from "../../../images/log-out 1.svg";
import note2 from "../../../images/note 2.svg";

import { adminLogout } from "../../../actions/Admin";

const data=[
    {image:note2,text:"All Orders",route:'/panel'},
    {image:grid,text:"Manage Category",route:'/manage-category'},
    {image:items,text:"Manage Products",route:'/manage-item'},
    {image:adv,text:"Manage Banner",route:'/manage-banner'},
]

function SideNav() {

    let history = useHistory();

    const handleLogout = () => {
        adminLogout();
        history.push("/adminlogin");
      };


    return (
        <div className='sidenav-container'>
            <div className='div-center my-4'>
            </div>
            <div className='side-nav'>
           {
               data.map((row)=>(
                   <NavLink to={`${row.route}`}style={{textDecoration:'none'}}>
                        <div className='sideNav-Item px-3'>
                            <img src={row.image} style={{height:'30px',width:'30px'}}></img>
                            <p className='text-white my-2 mx-2' style={{whiteSpace:'nowrap'}}>{row.text}</p>
                        </div>
                   </NavLink>
               ))
            }
            <div className='sideNav-Item px-3' onClick={()=>handleLogout()} style={{cursor:'pointer'}}>
                <img src={logout} style={{height:'30px',width:'30px'}}></img>
                <p className='text-white my-2 mx-2' style={{whiteSpace:'nowrap'}}>Logout</p>
            </div>
            </div>
        </div>
    )
}

export default SideNav;
