import React from 'react'
import { Navbar, Button, Container, Nav, InputGroup, FormControl, Card, Row, Col } from "react-bootstrap";
import SearchIcon from '@mui/icons-material/Search';
import "./style.css";

function BlockUser() {
    return (
        <div > <div className="">
            <div style={{ display: "flex", alignItems: "center" }}>
                <hr style={{ width: "40%" }} />BLOCK THE USER<hr style={{ width: "40%" }} />
            </div>
            <div style={{ width: '90%' }}>
                <InputGroup className="mt-2 ml-4 " style={{ width: '100%', border: "1px solid black" }}>
                    <FormControl style={{ boxShadow: 'none' }}
                        placeholder="Search here..."
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Text id="basic-addon2" style={{ background: '#F8C648' }}><SearchIcon /></InputGroup.Text>
                </InputGroup>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }} className='mt-3 mb-3'>
                0 Users selected
            </div>
            <div className="blockuser__data" style={{ gap: "10px", display: "flex", flexDirection: "row", marginTop: "10px", flexWrap: "wrap" }}>
                <Card style={{ height: "auto", width: "30%", padding: "0px", marginBottom: "22px" }} className=''>
                    <Card.Body style={{
                        display: "flex", justifyContent: "space-between",
                        alignitems: "center",
                    }}>
                        <div className='center'>
                            <Card.Img variant="top" src="https://img.webnots.com/2017/07/Bootstrap-4-User-Profile-Card.png" style={{ height: '100px', width: '100px', border: "1px solid black", borderRadius: "50%", border: "1px solid black", objectFit: "cover" }} />
                            <div>
                                <Card.Title style={{ fontWeight: "bold", marginLeft: "6px" }}>Sandeep yadav</Card.Title>
                                <Card.Title style={{ fontSize: "small", marginLeft: "6px" }}>+0 312311221</Card.Title>
                                <Card.Title style={{ fontSize: "small", marginLeft: "6px" }}>Payment@gmail.com</Card.Title>
                            </div>
                        </div>
                    </Card.Body>
                    <Card.Body style={{ display: "flex", alignItems: "center !important" }} className="">
                        <img src="https://img.icons8.com/material-outlined/48/000000/circled.png" style={{ height: "32px" }} alt="" />
                        <div>
                            <Card.Title style={{ fontSize: "large", marginLeft: "2px" }} className='align'>Block This user</Card.Title>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ height: "auto", width: "30%", padding: "0px", marginBottom: "22px" }} className=''>
                    <Card.Body style={{
                        display: "flex", justifyContent: "space-between",
                        alignitems: "center",
                    }}>
                        <div className='center'>
                            <Card.Img variant="top" src="https://img.webnots.com/2017/07/Bootstrap-4-User-Profile-Card.png" style={{ height: '100px', width: '100px', border: "1px solid black", borderRadius: "50%", border: "1px solid black", objectFit: "cover" }} />
                            <div>
                                <Card.Title style={{ fontWeight: "bold", marginLeft: "6px" }}>Sandeep yadav</Card.Title>
                                <Card.Title style={{ fontSize: "small", marginLeft: "6px" }}>+0 312311221</Card.Title>
                                <Card.Title style={{ fontSize: "small", marginLeft: "6px" }}>Payment@gmail.com</Card.Title>
                            </div>
                        </div>
                    </Card.Body>
                    <Card.Body style={{ display: "flex", alignItems: "center !important" }} className="">
                        <img src="https://img.icons8.com/material-outlined/48/000000/circled.png" style={{ height: "32px" }} alt="" />
                        <div>
                            <Card.Title style={{ fontSize: "large", marginLeft: "2px" }} className='align'>Block This user</Card.Title>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ height: "auto", width: "30%", padding: "0px", marginBottom: "22px" }} className=''>
                    <Card.Body style={{
                        display: "flex", justifyContent: "space-between",
                        alignitems: "center",
                    }}>
                        <div className='center'>
                            <Card.Img variant="top" src="https://img.webnots.com/2017/07/Bootstrap-4-User-Profile-Card.png" style={{ height: '100px', width: '100px', border: "1px solid black", borderRadius: "50%", border: "1px solid black", objectFit: "cover" }} />
                            <div>
                                <Card.Title style={{ fontWeight: "bold", marginLeft: "6px" }}>Sandeep yadav</Card.Title>
                                <Card.Title style={{ fontSize: "small", marginLeft: "6px" }}>+0 312311221</Card.Title>
                                <Card.Title style={{ fontSize: "small", marginLeft: "6px" }}>Payment@gmail.com</Card.Title>
                            </div>
                        </div>
                    </Card.Body>
                    <Card.Body style={{ display: "flex", alignItems: "center !important" }} className="">
                        <img src="https://img.icons8.com/material-outlined/48/000000/circled.png" style={{ height: "32px" }} alt="" />
                        <div>
                            <Card.Title style={{ fontSize: "large", marginLeft: "2px" }} className='align'>Block This user</Card.Title>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ height: "auto", width: "30%", padding: "0px", marginBottom: "22px" }} className=''>
                    <Card.Body style={{
                        display: "flex", justifyContent: "space-between",
                        alignitems: "center",
                    }}>
                        <div className='center'>
                            <Card.Img variant="top" src="https://img.webnots.com/2017/07/Bootstrap-4-User-Profile-Card.png" style={{ height: '100px', width: '100px', border: "1px solid black", borderRadius: "50%", border: "1px solid black", objectFit: "cover" }} />
                            <div>
                                <Card.Title style={{ fontWeight: "bold", marginLeft: "6px" }}>Sandeep yadav</Card.Title>
                                <Card.Title style={{ fontSize: "small", marginLeft: "6px" }}>+0 312311221</Card.Title>
                                <Card.Title style={{ fontSize: "small", marginLeft: "6px" }}>Payment@gmail.com</Card.Title>
                            </div>
                        </div>
                    </Card.Body>
                    <Card.Body style={{ display: "flex", alignItems: "center !important" }} className="">
                        <img src="https://img.icons8.com/material-outlined/48/000000/circled.png" style={{ height: "32px" }} alt="" />
                        <div>
                            <Card.Title style={{ fontSize: "large", marginLeft: "2px" }} className='align'>Block This user</Card.Title>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ height: "auto", width: "30%", padding: "0px", marginBottom: "22px" }} className=''>
                    <Card.Body style={{
                        display: "flex", justifyContent: "space-between",
                        alignitems: "center",
                    }}>
                        <div className='center'>
                            <Card.Img variant="top" src="https://img.webnots.com/2017/07/Bootstrap-4-User-Profile-Card.png" style={{ height: '100px', width: '100px', border: "1px solid black", borderRadius: "50%", border: "1px solid black", objectFit: "cover" }} />
                            <div>
                                <Card.Title style={{ fontWeight: "bold", marginLeft: "6px" }}>Sandeep yadav</Card.Title>
                                <Card.Title style={{ fontSize: "small", marginLeft: "6px" }}>+0 312311221</Card.Title>
                                <Card.Title style={{ fontSize: "small", marginLeft: "6px" }}>Payment@gmail.com</Card.Title>
                            </div>
                        </div>
                    </Card.Body>
                    <Card.Body style={{ display: "flex", alignItems: "center !important" }} className="">
                        <img src="https://img.icons8.com/material-outlined/48/000000/circled.png" style={{ height: "32px" }} alt="" />
                        <div>
                            <Card.Title style={{ fontSize: "large", marginLeft: "2px" }} className='align'>Block This user</Card.Title>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ height: "auto", width: "30%", padding: "0px", marginBottom: "22px" }} className=''>
                    <Card.Body style={{
                        display: "flex", justifyContent: "space-between",
                        alignitems: "center",
                    }}>
                        <div className='center'>
                            <Card.Img variant="top" src="https://img.webnots.com/2017/07/Bootstrap-4-User-Profile-Card.png" style={{ height: '100px', width: '100px', border: "1px solid black", borderRadius: "50%", border: "1px solid black", objectFit: "cover" }} />
                            <div>
                                <Card.Title style={{ fontWeight: "bold", marginLeft: "6px" }}>Sandeep yadav</Card.Title>
                                <Card.Title style={{ fontSize: "small", marginLeft: "6px" }}>+0 312311221</Card.Title>
                                <Card.Title style={{ fontSize: "small", marginLeft: "6px" }}>Payment@gmail.com</Card.Title>
                            </div>
                        </div>
                    </Card.Body>
                    <Card.Body style={{ display: "flex", alignItems: "center !important" }} className="">
                        <img src="https://img.icons8.com/material-outlined/48/000000/circled.png" style={{ height: "32px" }} alt="" />
                        <div>
                            <Card.Title style={{ fontSize: "large", marginLeft: "2px" }} className='align'>Block This user</Card.Title>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ height: "auto", width: "30%", padding: "0px", marginBottom: "22px" }} className=''>
                    <Card.Body style={{
                        display: "flex", justifyContent: "space-between",
                        alignitems: "center",
                    }}>
                        <div className='center'>
                            <Card.Img variant="top" src="https://img.webnots.com/2017/07/Bootstrap-4-User-Profile-Card.png" style={{ height: '100px', width: '100px', border: "1px solid black", borderRadius: "50%", border: "1px solid black", objectFit: "cover" }} />
                            <div>
                                <Card.Title style={{ fontWeight: "bold", marginLeft: "6px" }}>Sandeep yadav</Card.Title>
                                <Card.Title style={{ fontSize: "small", marginLeft: "6px" }}>+0 312311221</Card.Title>
                                <Card.Title style={{ fontSize: "small", marginLeft: "6px" }}>Payment@gmail.com</Card.Title>
                            </div>
                        </div>
                    </Card.Body>
                    <Card.Body style={{ display: "flex", alignItems: "center !important" }} className="">
                        <img src="https://img.icons8.com/material-outlined/48/000000/circled.png" style={{ height: "32px" }} alt="" />
                        <div>
                            <Card.Title style={{ fontSize: "large", marginLeft: "2px" }} className='align'>Block This user</Card.Title>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ height: "auto", width: "30%", padding: "0px", marginBottom: "22px" }} className=''>
                    <Card.Body style={{
                        display: "flex", justifyContent: "space-between",
                        alignitems: "center",
                    }}>
                        <div className='center'>
                            <Card.Img variant="top" src="https://img.webnots.com/2017/07/Bootstrap-4-User-Profile-Card.png" style={{ height: '100px', width: '100px', border: "1px solid black", borderRadius: "50%", border: "1px solid black", objectFit: "cover" }} />
                            <div>
                                <Card.Title style={{ fontWeight: "bold", marginLeft: "6px" }}>Sandeep yadav</Card.Title>
                                <Card.Title style={{ fontSize: "small", marginLeft: "6px" }}>+0 312311221</Card.Title>
                                <Card.Title style={{ fontSize: "small", marginLeft: "6px" }}>Payment@gmail.com</Card.Title>
                            </div>
                        </div>
                    </Card.Body>
                    <Card.Body style={{ display: "flex", alignItems: "center !important" }} className="">
                        <img src="https://img.icons8.com/material-outlined/48/000000/circled.png" style={{ height: "32px" }} alt="" />
                        <div>
                            <Card.Title style={{ fontSize: "large", marginLeft: "2px" }} className='align'>Block This user</Card.Title>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ height: "auto", width: "30%", padding: "0px", marginBottom: "22px" }} className=''>
                    <Card.Body style={{
                        display: "flex", justifyContent: "space-between",
                        alignitems: "center",
                    }}>
                        <div className='center'>
                            <Card.Img variant="top" src="https://img.webnots.com/2017/07/Bootstrap-4-User-Profile-Card.png" style={{ height: '100px', width: '100px', border: "1px solid black", borderRadius: "50%", border: "1px solid black", objectFit: "cover" }} />
                            <div>
                                <Card.Title style={{ fontWeight: "bold", marginLeft: "6px" }}>Sandeep yadav</Card.Title>
                                <Card.Title style={{ fontSize: "small", marginLeft: "6px" }}>+0 312311221</Card.Title>
                                <Card.Title style={{ fontSize: "small", marginLeft: "6px" }}>Payment@gmail.com</Card.Title>
                            </div>
                        </div>
                    </Card.Body>
                    <Card.Body style={{ display: "flex", alignItems: "center !important" }} className="">
                        <img src="https://img.icons8.com/material-outlined/48/000000/circled.png" style={{ height: "32px" }} alt="" />
                        <div>
                            <Card.Title style={{ fontSize: "large", marginLeft: "2px" }} className='align'>Block This user</Card.Title>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
        </div >
    )
}

export default BlockUser