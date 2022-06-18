import React from 'react'
import { Card } from 'react-bootstrap';

function AllStatsDetails() {
    return (
        <div className="">
            <div style={{ display: "flex", alignItems: "center" }}>
                <hr style={{ width: "40%" }} />ORDER DETAILS<hr style={{ width: "40%" }} />
            </div>
            <div style={{ display: "flex", justifyContent: "flex-Start", width: "100%" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Card.Title style={{ fontSize: "small", marginLeft: "6px", display: "flex", flexDirection: "row", alignItems: "Center" }}>
                        ORDER ID</Card.Title>
                    <Card.Title style={{ fontWeight: "bold", marginLeft: "6px" }}>#95800</Card.Title>
                </div>
                <div style={{ borderRight: "2px solid gray", padding: "4px", marginBottom: "8px", marginRight: "3px" }}>

                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Card.Title style={{ fontSize: "small", marginLeft: "6px", display: "flex", flexDirection: "row", alignItems: "Center" }}>
                        ORDER PLACED ON</Card.Title>
                    <Card.Title style={{ fontWeight: "bold", marginLeft: "6px" }}>2 DECEMBER ,2021 | 14:23</Card.Title>
                </div>
            </div>
            <Card style={{ height: "auto", width: "90%", padding: "0px", marginBottom: "50px", border: "2px solid black" }} className='mb-3' >
                <Card.Body style={{
                    display: "flex", justifyContent: "space-between",
                    alignitems: "center",
                }}>
                    <div className='' style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                        <div style={{ display: "flex", justifyContent: "space-around", width: "100%" }}>
                            <div style={{ flex: "0.3" }}>
                                <Card.Title style={{ fontWeight: "bold", marginLeft: "6px", display: "flex", flexDirection: "row", alignItems: "Center" }}>

                                    SHOPPING ADDRESS</Card.Title>
                                <Card.Title style={{ fontSize: "small", marginLeft: "6px" }}>Utkarsh Nigam</Card.Title>
                                <Card.Title style={{ fontSize: "small", marginLeft: "6px" }}>sdfs dasdf asdfasdf asdf asd fas df asdfasdfas dfasdf asdfas dfas df</Card.Title>
                            </div>
                            <div style={{ borderRight: "2px solid gray", padding: "4px", marginBottom: "8px", marginRight: "3px" }}>
                            </div>
                            <div style={{ felx: "0.3", alignItems: "flex-start" }}>
                                <Card.Title style={{ fontWeight: "bold", marginLeft: "6px", display: "flex", flexDirection: "row", alignItems: "Center" }}>

                                    PAYMENT METHOD</Card.Title>
                                <Card.Title style={{ fontSize: "small", marginLeft: "6px" }}>BHIM UPI</Card.Title>
                                <Card.Title style={{ fontWeight: "bold", marginLeft: "6px" }}>STATUS</Card.Title>
                                <Card.Title style={{ fontSize: "small", marginLeft: "6px" }}>Out for Delivery</Card.Title>
                            </div>
                            <div style={{ borderRight: "2px solid gray", padding: "4px", marginBottom: "8px", marginRight: "3px" }}>
                            </div>
                            <div style={{ felx: "0.3" }}>
                                <Card.Title style={{ fontWeight: "bold", marginLeft: "6px", display: "flex", flexDirection: "row", alignItems: "Center" }}>

                                    ORDER SUMMERY</Card.Title>
                                <div>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <Card.Title style={{ fontSize: "small", marginLeft: "6px" }}>Subtotal</Card.Title>
                                        <Card.Title style={{ fontSize: "small", marginLeft: "6px" }}>$ 5657</Card.Title>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <Card.Title style={{ fontSize: "small", marginLeft: "6px" }}>Subtotal</Card.Title>
                                        <Card.Title style={{ fontSize: "small", marginLeft: "6px" }}>$ 5657</Card.Title>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <Card.Title style={{ fontSize: "small", marginLeft: "6px" }}>Subtotal</Card.Title>
                                        <Card.Title style={{ fontSize: "small", marginLeft: "6px" }}>$ 5657</Card.Title>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <Card.Title style={{ fontWeight: "bold", marginLeft: "6px" }}>Subtotal</Card.Title>
                                        <Card.Title style={{ fontWeight: "bold", marginLeft: "6px" }}>$ 5657</Card.Title>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
            <Card className="dashboard__profile" style={{ height: "auto", width: "90%", padding: "0px", marginBottom: "22px", border: "2px solid black", background: "transparent" }}>
                <div style={{ padding: "15px" }}>
                    <Card.Title style={{ fontWeight: "bold", marginLeft: "6px", color: "#113B6B", marginBottom: "0px" }}>Arriving Sunday</Card.Title>
                    <Card.Title style={{ fontSize: "small", marginLeft: "6px", padding: "0px", marginTop: "0px" }}>Preparing for diapatch</Card.Title>
                </div>
                <div className="" style={{ display: "flex", alignitems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignitems: "center", justifyContent: "", padding: "15px" }}>
                        <img src="https://i.stack.imgur.com/sTFvl.jpg?s=328&g=1" style={{ height: "150px", width: "150px", marginRight: "10px", objectFit: "contain" }} alt="" />
                        <div>
                            <p style={{
                                fontWeight: "Bold", marginLeft: "2px",
                                marginTop: "0px", marginBottom: "0px"
                            }}>sdfadfa sadf asd f asdf  asdf asd f asdf asd f asdfasdfsad</p>
                            <p style={{ fontWeight: "400", marginLeft: "2px", marginTop: "0px", marginBottom: "0px" }}>Quality : 2</p>
                            <p style={{ fontWeight: "bold", marginLeft: "2px", marginTop: "0px", marginBottom: "0px" }}>Red</p>
                            <p style={{ fontWeight: "bold", marginLeft: "2px", marginTop: "0px", marginBottom: "0px" }}>$ 3232</p>
                        </div>
                    </div>
                </div>
                <div style={{ borderBottom: "2px solid gray" }}></div>
                <div className="" style={{ display: "flex", alignitems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignitems: "center", justifyContent: "", padding: "15px" }}>
                        <img src="https://i.stack.imgur.com/sTFvl.jpg?s=328&g=1" style={{ height: "150px", width: "150px", marginRight: "10px", objectFit: "contain" }} alt="" />
                        <div>
                            <p style={{
                                fontWeight: "Bold", marginLeft: "2px",
                                marginTop: "0px", marginBottom: "0px"
                            }}>sdfadfa sadf asd f asdf  asdf asd f asdf asd f asdfasdfsad</p>
                            <p style={{ fontWeight: "400", marginLeft: "2px", marginTop: "0px", marginBottom: "0px" }}>Quality : 2</p>
                            <p style={{ fontWeight: "bold", marginLeft: "2px", marginTop: "0px", marginBottom: "0px" }}>Red</p>
                            <p style={{ fontWeight: "bold", marginLeft: "2px", marginTop: "0px", marginBottom: "0px" }}>$ 3232</p>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default AllStatsDetails