import React from 'react'
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function VendorDetail() {
    return (
        <div className="d-flex flex-column admin-container">
            <div className="d-flex flex-column mb-5">
                <div className="">
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <hr style={{ width: "40%" }} />EDIT OR DELETE VENDOR<hr style={{ width: "40%" }} />
                    </div>
                </div>
                <div>
                    <div className="" style={{ display: "flex", alignitems: "center", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", alignitems: "center", justifyContent: "", padding: "15px" }}>
                            <img src="https://i.stack.imgur.com/sTFvl.jpg?s=328&g=1" style={{ height: "150px", width: "150px", marginRight: "10px", objectFit: "contain", borderRadius: "50%" }} alt="" />
                            <div>
                                <p style={{
                                    fontWeight: "Bold", marginLeft: "2px",
                                    marginTop: "0px", marginBottom: "0px"
                                }}>sdfadfa</p>
                                <p style={{ fontWeight: "400", marginLeft: "2px", marginTop: "0px", marginBottom: "0px" }}>Quality : 2</p>
                                <p style={{ fontWeight: "400", marginLeft: "2px", marginTop: "0px", marginBottom: "0px" }}>Quality : 2</p>
                                <div style={{ display: "flex", padding: "10px", gap: "10px" }}>
                                    <Card.Title style={{ fontWeight: "bold", color: "#113B6B", display: "flex", flexDirection: "row" }}><img src="https://img.icons8.com/material-outlined/24/4a90e2/edit--v1.png" alt="" />
                                        EDIT</Card.Title>

                                    <Card.Title style={{ fontWeight: "bold", color: "red", display: "flex", flexDirection: "row" }}>
                                        <img src="https://img.icons8.com/ios-glyphs/30/fa314a/filled-trash.png" alt="" />DELETE</Card.Title>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <hr style={{ width: "40%" }} />PRODUCTS SOLD BY VENDORS<hr style={{ width: "40%" }} />
                    </div>
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
                            <NavLink to="/vendor-product-details" >
                                <button className="button-submit" style={{ backgroundColor: "#113B6B", width: "100%" }}>
                                    VIEW
                                </button>
                            </NavLink>
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
                                VIEW
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
                                VIEW
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
                                VIEW
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
                                VIEW
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
                                VIEW
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
                                VIEW
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VendorDetail