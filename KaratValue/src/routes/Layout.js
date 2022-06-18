import React,{Fragment} from 'react'
import { connect } from 'react-redux';
import NavBar from '../Components/Component/Navbar';
import SideBar from '../Components/Admin/SideBar/SideNav';
import { authAdmin } from "../actions/Admin";
import {Row,Col} from 'react-bootstrap';
import './style.css';

function Layout({children}) {
      
      const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
      const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

      const d = new Date();
      let day = days[d.getDay()];
      let month = months[d.getMonth()];
      let date = d.getDate();
    
      let hours = d.getHours();
      let minutes = d.getMinutes();


    return (
        <Fragment >
            {
                localStorage.getItem("admin")?
                    <Row>
                        <Col lg={2} xs={12}>
                            <SideBar/>
                        </Col>
                        <Col lg={10} xs={12}>
                            <div className='admin-layout'>
                                <div className="heading text-center p-4">
                                  <h1>Admin Panel</h1>
                                  <h3>{date} {month} | {day}</h3>
                                  <h4><b>{hours} : {minutes}</b></h4>
                                </div>
                                <hr className='my-4'/>
                                {children}
                            </div>
                        </Col>
                    </Row>      
                :
                <>
                  <NavBar />
                  {children}
                </>
            }
          
        </Fragment>
    );
}

export default Layout;