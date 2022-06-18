import React, { Fragment } from 'react'
import NavBar from '../components/Navigation';
import Footer from '../components/Footer';
import SideNav from '../containers/Admin/Sidebar/SideNav';
import { Row, Col } from 'react-bootstrap';

function Layout({ children }) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const d = new Date();
    let day = days[d.getDay()];
    let month = months[d.getMonth()];
    let date = d.getDate();

    let hours = d.getHours();
    let minutes = d.getMinutes();

    return (
        <Fragment >{
            localStorage.getItem("admin") ?
                <Row>
                    <Col lg={2} xs={12}>
                        <SideNav />
                    </Col>
                    <Col lg={10} xs={12}>
                        <div className='admin-layout'>
                            <div className="heading text-center p-4">
                                <h1>Admin Panel</h1>
                                <h3>{date} {month} | {day}</h3>
                                <h4><b>{hours} : {minutes}</b></h4>
                            </div>
                            {children}
                        </div>
                    </Col>
                </Row>
                : <>
                    <NavBar />
                    {children}
                    <Footer />
                </>
        }
        </Fragment >
    );
}

export default Layout;