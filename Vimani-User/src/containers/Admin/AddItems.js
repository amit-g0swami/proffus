import React from 'react'
import { Navbar, Button, Container, Nav, InputGroup, FormControl, Card, Row, Col } from "react-bootstrap";
import SearchIcon from '@mui/icons-material/Search';
import "./style.css";
import { NavLink } from 'react-router-dom';

function AddItems() {
    return (
        <div > <div className="">
            <div style={{ display: "flex", alignItems: "center" }}>
                <hr style={{ width: "40%" }} />ADD AN ITEM<hr style={{ width: "40%" }} />
            </div>
            <NavLink to="/add-item">
                <div className='' style={{ marginLeft: "36%" }}>
                    <button className="button-submit mb-4 mt-4" style={{ backgroundColor: "#113B6B", width: "200px" }}>
                        ADD AN ITEM
                    </button>
                </div>
            </NavLink>
            <div style={{ display: "flex", alignItems: "center" }}>
                <hr style={{ width: "40%" }} />EXISTING ITEM<hr style={{ width: "40%" }} />
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
                <div style={{ height: "350px", width: "18%" }}>
                    <Card style={{ height: "150px", width: "100%", padding: "10px", marginBottom: "22px" }} className=''>
                        <Card.Img variant="top" src="https://img.webnots.com/2017/07/Bootstrap-4-User-Profile-Card.png" style={{ height: '150px', width: "auto", objectFit: "cover", backgroundPosition: "center center" }} />
                        <Card.Body style={{
                            display: "flex", justifyContent: "space-between",
                            alignitems: "center",
                        }}>
                        </Card.Body>
                    </Card>
                    <div>
                        <Card.Title style={{ fontWeight: "bold" }}>adida sasd dsf sa df asdfsa dfasdfasdfasdf asdfasdfasdfsad
                            <br />
                            $ 422
                            <br />
                            <span style={{ fontSize: "small" }}>$421</span></Card.Title>
                    </div>
                    <div>
                        <button className="button-submit" style={{ backgroundColor: "#113B6B", width: "100%" }}>
                            EDIT
                        </button>
                    </div>
                </div>

                <div style={{ height: "350px", width: "18%" }}>
                    <Card style={{ height: "150px", width: "100%", padding: "10px", marginBottom: "22px" }} className=''>
                        <Card.Img variant="top" src="https://img.webnots.com/2017/07/Bootstrap-4-User-Profile-Card.png" style={{ height: '150px', width: "auto", objectFit: "cover", backgroundPosition: "center center" }} />
                        <Card.Body style={{
                            display: "flex", justifyContent: "space-between",
                            alignitems: "center",
                        }}>
                        </Card.Body>
                    </Card>
                    <div>
                        <Card.Title style={{ fontWeight: "bold" }}>adida sasd dsf sa df asdfsa dfasdfasdfasdf asdfasdfasdfsad
                            <br />
                            $ 422
                            <br />
                            <span style={{ fontSize: "small" }}>$421</span></Card.Title>
                    </div>
                    <div>
                        <button className="button-submit" style={{ backgroundColor: "#113B6B", width: "100%" }}>
                            EDIT
                        </button>
                    </div>
                </div>
                <div style={{ height: "350px", width: "18%" }}>
                    <Card style={{ height: "150px", width: "100%", padding: "10px", marginBottom: "22px" }} className=''>
                        <Card.Img variant="top" src="https://img.webnots.com/2017/07/Bootstrap-4-User-Profile-Card.png" style={{ height: '150px', width: "auto", objectFit: "cover", backgroundPosition: "center center" }} />
                        <Card.Body style={{
                            display: "flex", justifyContent: "space-between",
                            alignitems: "center",
                        }}>
                        </Card.Body>
                    </Card>
                    <div>
                        <Card.Title style={{ fontWeight: "bold" }}>adida sasd dsf sa df asdfsa dfasdfasdfasdf asdfasdfasdfsad
                            <br />
                            $ 422
                            <br />
                            <span style={{ fontSize: "small" }}>$421</span></Card.Title>
                    </div>
                    <div>
                        <button className="button-submit" style={{ backgroundColor: "#113B6B", width: "100%" }}>
                            EDIT
                        </button>
                    </div>
                </div>
                <div style={{ height: "350px", width: "18%" }}>
                    <Card style={{ height: "150px", width: "100%", padding: "10px", marginBottom: "22px" }} className=''>
                        <Card.Img variant="top" src="https://img.webnots.com/2017/07/Bootstrap-4-User-Profile-Card.png" style={{ height: '150px', width: "auto", objectFit: "cover", backgroundPosition: "center center" }} />
                        <Card.Body style={{
                            display: "flex", justifyContent: "space-between",
                            alignitems: "center",
                        }}>
                        </Card.Body>
                    </Card>
                    <div>
                        <Card.Title style={{ fontWeight: "bold" }}>adida sasd dsf sa df asdfsa dfasdfasdfasdf asdfasdfasdfsad
                            <br />
                            $ 422
                            <br />
                            <span style={{ fontSize: "small" }}>$421</span></Card.Title>
                    </div>
                    <div>
                        <button className="button-submit" style={{ backgroundColor: "#113B6B", width: "100%" }}>
                            EDIT
                        </button>
                    </div>
                </div>
                <div style={{ height: "350px", width: "18%" }}>
                    <Card style={{ height: "150px", width: "100%", padding: "10px", marginBottom: "22px" }} className=''>
                        <Card.Img variant="top" src="https://img.webnots.com/2017/07/Bootstrap-4-User-Profile-Card.png" style={{ height: '150px', width: "auto", objectFit: "cover", backgroundPosition: "center center" }} />
                        <Card.Body style={{
                            display: "flex", justifyContent: "space-between",
                            alignitems: "center",
                        }}>
                        </Card.Body>
                    </Card>
                    <div>
                        <Card.Title style={{ fontWeight: "bold" }}>adida sasd dsf sa df asdfsa dfasdfasdfasdf asdfasdfasdfsad
                            <br />
                            $ 422
                            <br />
                            <span style={{ fontSize: "small" }}>$421</span></Card.Title>
                    </div>
                    <div>
                        <button className="button-submit" style={{ backgroundColor: "#113B6B", width: "100%" }}>
                            EDIT
                        </button>
                    </div>
                </div>
                <div style={{ height: "350px", width: "18%" }}>
                    <Card style={{ height: "150px", width: "100%", padding: "10px", marginBottom: "22px" }} className=''>
                        <Card.Img variant="top" src="https://img.webnots.com/2017/07/Bootstrap-4-User-Profile-Card.png" style={{ height: '150px', width: "auto", objectFit: "cover", backgroundPosition: "center center" }} />
                        <Card.Body style={{
                            display: "flex", justifyContent: "space-between",
                            alignitems: "center",
                        }}>
                        </Card.Body>
                    </Card>
                    <div>
                        <Card.Title style={{ fontWeight: "bold" }}>adida sasd dsf sa df asdfsa dfasdfasdfasdf asdfasdfasdfsad
                            <br />
                            $ 422
                            <br />
                            <span style={{ fontSize: "small" }}>$421</span></Card.Title>
                    </div>
                    <div>
                        <button className="button-submit" style={{ backgroundColor: "#113B6B", width: "100%" }}>
                            EDIT
                        </button>
                    </div>
                </div>
                <div style={{ height: "350px", width: "18%" }}>
                    <Card style={{ height: "150px", width: "100%", padding: "10px", marginBottom: "22px" }} className=''>
                        <Card.Img variant="top" src="https://img.webnots.com/2017/07/Bootstrap-4-User-Profile-Card.png" style={{ height: '150px', width: "auto", objectFit: "cover", backgroundPosition: "center center" }} />
                        <Card.Body style={{
                            display: "flex", justifyContent: "space-between",
                            alignitems: "center",
                        }}>
                        </Card.Body>
                    </Card>
                    <div>
                        <Card.Title style={{ fontWeight: "bold" }}>adida sasd dsf sa df asdfsa dfasdfasdfasdf asdfasdfasdfsad
                            <br />
                            $ 422
                            <br />
                            <span style={{ fontSize: "small" }}>$421</span></Card.Title>
                    </div>
                    <div>
                        <button className="button-submit" style={{ backgroundColor: "#113B6B", width: "100%" }}>
                            EDIT
                        </button>
                    </div>
                </div>
                <div style={{ height: "350px", width: "18%" }}>
                    <Card style={{ height: "150px", width: "100%", padding: "10px", marginBottom: "22px" }} className=''>
                        <Card.Img variant="top" src="https://img.webnots.com/2017/07/Bootstrap-4-User-Profile-Card.png" style={{ height: '150px', width: "auto", objectFit: "cover", backgroundPosition: "center center" }} />
                        <Card.Body style={{
                            display: "flex", justifyContent: "space-between",
                            alignitems: "center",
                        }}>
                        </Card.Body>
                    </Card>
                    <div>
                        <Card.Title style={{ fontWeight: "bold" }}>adida sasd dsf sa df asdfsa dfasdfasdfasdf asdfasdfasdfsad
                            <br />
                            $ 422
                            <br />
                            <span style={{ fontSize: "small" }}>$421</span></Card.Title>
                    </div>
                    <div>
                        <button className="button-submit" style={{ backgroundColor: "#113B6B", width: "100%" }}>
                            EDIT
                        </button>
                    </div>
                </div>
                <div style={{ height: "350px", width: "18%" }}>
                    <Card style={{ height: "150px", width: "100%", padding: "10px", marginBottom: "22px" }} className=''>
                        <Card.Img variant="top" src="https://img.webnots.com/2017/07/Bootstrap-4-User-Profile-Card.png" style={{ height: '150px', width: "auto", objectFit: "cover", backgroundPosition: "center center" }} />
                        <Card.Body style={{
                            display: "flex", justifyContent: "space-between",
                            alignitems: "center",
                        }}>
                        </Card.Body>
                    </Card>
                    <div>
                        <Card.Title style={{ fontWeight: "bold" }}>adida sasd dsf sa df asdfsa dfasdfasdfasdf asdfasdfasdfsad
                            <br />
                            $ 422
                            <br />
                            <span style={{ fontSize: "small" }}>$421</span></Card.Title>
                    </div>
                    <div>
                        <button className="button-submit" style={{ backgroundColor: "#113B6B", width: "100%" }}>
                            EDIT
                        </button>
                    </div>
                </div>
                <div style={{ height: "350px", width: "18%" }}>
                    <Card style={{ height: "150px", width: "100%", padding: "10px", marginBottom: "22px" }} className=''>
                        <Card.Img variant="top" src="https://img.webnots.com/2017/07/Bootstrap-4-User-Profile-Card.png" style={{ height: '150px', width: "auto", objectFit: "cover", backgroundPosition: "center center" }} />
                        <Card.Body style={{
                            display: "flex", justifyContent: "space-between",
                            alignitems: "center",
                        }}>
                        </Card.Body>
                    </Card>
                    <div>
                        <Card.Title style={{ fontWeight: "bold" }}>adida sasd dsf sa df asdfsa dfasdfasdfasdf asdfasdfasdfsad
                            <br />
                            $ 422
                            <br />
                            <span style={{ fontSize: "small" }}>$421</span></Card.Title>
                    </div>
                    <div>
                        <button className="button-submit" style={{ backgroundColor: "#113B6B", width: "100%" }}>
                            EDIT
                        </button>
                    </div>
                </div>

            </div>
        </div>
        </div >
    )
}

export default AddItems