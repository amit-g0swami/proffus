import React, { useState } from 'react'
import { Tabs, Tab, Table } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { Card } from 'react-bootstrap';

function AllStats() {
    const [key, setKey] = useState("home");
    return (
        <div className="profile-main">
            <div id="user" className="">
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                >
                    <Tab eventKey="home" title="ALL ORDERS">
                        <NavLink
                            to="/stats-details"
                            style={{ textDecoration: 'none', color: "black" }}
                        >
                            <Card style={{ height: "auto", width: "90%", padding: "0px", marginBottom: "50px", border: "2px solid black" }} className='mb-3' >
                                <Card.Body style={{
                                    display: "flex", justifyContent: "space-between",
                                    alignitems: "center",
                                }}>
                                    <div className='' style={{ borderBottom: "1px solid gray", display: "flex", justifyContent: "space-between", width: "100%" }}>
                                        <div style={{ display: "flex", justifyContent: "flex-Start", width: "100%" }}>
                                            <div >
                                                <Card.Title style={{ fontSize: "small", marginLeft: "6px", display: "flex", flexDirection: "row", alignItems: "Center" }}>
                                                    <img src="https://img.icons8.com/material/24/000000/hashtag--v1.png" alt="" style={{ height: "14px", width: "14px" }} />
                                                    ORDER ID</Card.Title>
                                                <Card.Title style={{ fontWeight: "bold", marginLeft: "6px" }}>Payment Cards</Card.Title>
                                            </div>
                                            <div style={{ borderRight: "2px solid gray", padding: "4px", marginBottom: "8px", marginRight: "3px" }}>

                                            </div>
                                            <div>
                                                <Card.Title style={{ fontSize: "small", marginLeft: "6px", display: "flex", flexDirection: "row", alignItems: "Center" }}>
                                                    <img src="https://img.icons8.com/material-outlined/24/000000/planner.png" alt="" style={{ height: "14px", width: "14px" }} />
                                                    ORDER PLACED ON</Card.Title>
                                                <Card.Title style={{ fontWeight: "bold", marginLeft: "6px" }}>2 DECEMBER ,2021 | 14:23</Card.Title>
                                            </div>
                                        </div>
                                        <Card.Title style={{ fontSize: "small", marginLeft: "6px", width: "120px", }}>MORE DETAILS</Card.Title>
                                    </div>
                                </Card.Body>
                                <Card.Body style={{ display: "flex", alignitems: "center", paddingTop: "0px" }}>
                                    <div className='' style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                                        <div style={{ display: "flex", justifyContent: "flex-Start", width: "100%" }}>
                                            <div >
                                                <Card.Title style={{ fontSize: "small", marginLeft: "6px", display: "flex", flexDirection: "row", alignItems: "Center" }}>
                                                    <img src="https://img.icons8.com/material-outlined/24/000000/user--v1.png" alt="" style={{ height: "14px", width: "14px" }} />
                                                    ORDER PLACED BY</Card.Title>
                                                <Card.Title style={{ fontWeight: "bold", marginLeft: "6px" }}>Mohit Yadav</Card.Title>
                                            </div>
                                            <div style={{ borderRight: "2px solid gray", padding: "4px", marginBottom: "8px", marginRight: "3px" }}>

                                            </div>
                                            <div>
                                                <Card.Title style={{ fontSize: "small", marginLeft: "6px", display: "flex", flexDirection: "row", alignItems: "Center" }}>
                                                    <img src="https://img.icons8.com/windows/32/000000/cash.png" alt="" style={{ height: "14px", width: "14px" }} />
                                                    TOTAL AMOUNT</Card.Title>
                                                <Card.Title style={{ fontWeight: "bold", marginLeft: "6px" }}>$ 7,832</Card.Title>
                                            </div>
                                            <div style={{ borderRight: "2px solid gray", padding: "4px", marginBottom: "8px", marginRight: "3px" }}>

                                            </div>
                                            <div>
                                                <Card.Title style={{ fontSize: "small", marginLeft: "6px", display: "flex", flexDirection: "row", alignItems: "Center" }}>
                                                    <img src="https://img.icons8.com/ios-filled/50/000000/van.png" alt="" style={{ height: "14px", width: "14px" }} />
                                                    STATUS</Card.Title>
                                                <Card.Title style={{ fontWeight: "bold", marginLeft: "6px" }}>PROCESSING</Card.Title>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </NavLink>
                        <Card style={{ height: "auto", width: "90%", padding: "0px", marginBottom: "50px", border: "2px solid black" }} className='mb-3' >
                            <Card.Body style={{
                                display: "flex", justifyContent: "space-between",
                                alignitems: "center",
                            }}>
                                <div className='' style={{ borderBottom: "1px solid gray", display: "flex", justifyContent: "space-between", width: "100%" }}>
                                    <div style={{ display: "flex", justifyContent: "flex-Start", width: "100%" }}>
                                        <div >
                                            <Card.Title style={{ fontSize: "small", marginLeft: "6px", display: "flex", flexDirection: "row", alignItems: "Center" }}>
                                                <img src="https://img.icons8.com/material/24/000000/hashtag--v1.png" alt="" style={{ height: "14px", width: "14px" }} />
                                                ORDER ID</Card.Title>
                                            <Card.Title style={{ fontWeight: "bold", marginLeft: "6px" }}>Payment Cards</Card.Title>
                                        </div>
                                        <div style={{ borderRight: "2px solid gray", padding: "4px", marginBottom: "8px", marginRight: "3px" }}>

                                        </div>
                                        <div>
                                            <Card.Title style={{ fontSize: "small", marginLeft: "6px", display: "flex", flexDirection: "row", alignItems: "Center" }}>
                                                <img src="https://img.icons8.com/material-outlined/24/000000/planner.png" alt="" style={{ height: "14px", width: "14px" }} />
                                                ORDER PLACED ON</Card.Title>
                                            <Card.Title style={{ fontWeight: "bold", marginLeft: "6px" }}>2 DECEMBER ,2021 | 14:23</Card.Title>
                                        </div>
                                    </div>
                                    <Card.Title style={{ fontSize: "small", marginLeft: "6px", width: "120px", }}>MORE DETAILS</Card.Title>
                                </div>
                            </Card.Body>
                            <Card.Body style={{ display: "flex", alignitems: "center", paddingTop: "0px" }}>
                                <div className='' style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                                    <div style={{ display: "flex", justifyContent: "flex-Start", width: "100%" }}>
                                        <div >
                                            <Card.Title style={{ fontSize: "small", marginLeft: "6px", display: "flex", flexDirection: "row", alignItems: "Center" }}>
                                                <img src="https://img.icons8.com/material-outlined/24/000000/user--v1.png" alt="" style={{ height: "14px", width: "14px" }} />
                                                ORDER PLACED BY</Card.Title>
                                            <Card.Title style={{ fontWeight: "bold", marginLeft: "6px" }}>Mohit Yadav</Card.Title>
                                        </div>
                                        <div style={{ borderRight: "2px solid gray", padding: "4px", marginBottom: "8px", marginRight: "3px" }}>

                                        </div>
                                        <div>
                                            <Card.Title style={{ fontSize: "small", marginLeft: "6px", display: "flex", flexDirection: "row", alignItems: "Center" }}>
                                                <img src="https://img.icons8.com/windows/32/000000/cash.png" alt="" style={{ height: "14px", width: "14px" }} />
                                                TOTAL AMOUNT</Card.Title>
                                            <Card.Title style={{ fontWeight: "bold", marginLeft: "6px" }}>$ 7,832</Card.Title>
                                        </div>
                                        <div style={{ borderRight: "2px solid gray", padding: "4px", marginBottom: "8px", marginRight: "3px" }}>

                                        </div>
                                        <div>
                                            <Card.Title style={{ fontSize: "small", marginLeft: "6px", display: "flex", flexDirection: "row", alignItems: "Center" }}>
                                                <img src="https://img.icons8.com/ios-filled/50/000000/van.png" alt="" style={{ height: "14px", width: "14px" }} />
                                                STATUS</Card.Title>
                                            <Card.Title style={{ fontWeight: "bold", marginLeft: "6px" }}>PROCESSING</Card.Title>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>

                        <Card style={{ height: "auto", width: "90%", padding: "0px", marginBottom: "50px", border: "2px solid black" }} className='mb-3' >
                            <Card.Body style={{
                                display: "flex", justifyContent: "space-between",
                                alignitems: "center",
                            }}>
                                <div className='' style={{ borderBottom: "1px solid gray", display: "flex", justifyContent: "space-between", width: "100%" }}>
                                    <div style={{ display: "flex", justifyContent: "flex-Start", width: "100%" }}>
                                        <div >
                                            <Card.Title style={{ fontSize: "small", marginLeft: "6px", display: "flex", flexDirection: "row", alignItems: "Center" }}>
                                                <img src="https://img.icons8.com/material/24/000000/hashtag--v1.png" alt="" style={{ height: "14px", width: "14px" }} />
                                                ORDER ID</Card.Title>
                                            <Card.Title style={{ fontWeight: "bold", marginLeft: "6px" }}>Payment Cards</Card.Title>
                                        </div>
                                        <div style={{ borderRight: "2px solid gray", padding: "4px", marginBottom: "8px", marginRight: "3px" }}>

                                        </div>
                                        <div>
                                            <Card.Title style={{ fontSize: "small", marginLeft: "6px", display: "flex", flexDirection: "row", alignItems: "Center" }}>
                                                <img src="https://img.icons8.com/material-outlined/24/000000/planner.png" alt="" style={{ height: "14px", width: "14px" }} />
                                                ORDER PLACED ON</Card.Title>
                                            <Card.Title style={{ fontWeight: "bold", marginLeft: "6px" }}>2 DECEMBER ,2021 | 14:23</Card.Title>
                                        </div>
                                    </div>
                                    <Card.Title style={{ fontSize: "small", marginLeft: "6px", width: "120px", }}>MORE DETAILS</Card.Title>
                                </div>
                            </Card.Body>
                            <Card.Body style={{ display: "flex", alignitems: "center", paddingTop: "0px" }}>
                                <div className='' style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                                    <div style={{ display: "flex", justifyContent: "flex-Start", width: "100%" }}>
                                        <div >
                                            <Card.Title style={{ fontSize: "small", marginLeft: "6px", display: "flex", flexDirection: "row", alignItems: "Center" }}>
                                                <img src="https://img.icons8.com/material-outlined/24/000000/user--v1.png" alt="" style={{ height: "14px", width: "14px" }} />
                                                ORDER PLACED BY</Card.Title>
                                            <Card.Title style={{ fontWeight: "bold", marginLeft: "6px" }}>Mohit Yadav</Card.Title>
                                        </div>
                                        <div style={{ borderRight: "2px solid gray", padding: "4px", marginBottom: "8px", marginRight: "3px" }}>

                                        </div>
                                        <div>
                                            <Card.Title style={{ fontSize: "small", marginLeft: "6px", display: "flex", flexDirection: "row", alignItems: "Center" }}>
                                                <img src="https://img.icons8.com/windows/32/000000/cash.png" alt="" style={{ height: "14px", width: "14px" }} />
                                                TOTAL AMOUNT</Card.Title>
                                            <Card.Title style={{ fontWeight: "bold", marginLeft: "6px" }}>$ 7,832</Card.Title>
                                        </div>
                                        <div style={{ borderRight: "2px solid gray", padding: "4px", marginBottom: "8px", marginRight: "3px" }}>

                                        </div>
                                        <div>
                                            <Card.Title style={{ fontSize: "small", marginLeft: "6px", display: "flex", flexDirection: "row", alignItems: "Center" }}>
                                                <img src="https://img.icons8.com/ios-filled/50/000000/van.png" alt="" style={{ height: "14px", width: "14px" }} />
                                                STATUS</Card.Title>
                                            <Card.Title style={{ fontWeight: "bold", marginLeft: "6px" }}>PROCESSING</Card.Title>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>


                    </Tab>
                    <Tab eventKey="address" title="RETURNED">

                    </Tab>
                    <Tab eventKey="order" title="NOT YET SHIPPED"></Tab>
                    <Tab eventKey="delivered" title="DELIVERED"></Tab>
                </Tabs>
            </div>
        </div >
    )
}

export default AllStats