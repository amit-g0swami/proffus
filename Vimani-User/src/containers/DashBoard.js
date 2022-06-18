import React, { useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap';
import { getUserDetails } from "../actions/Account";
import "./style.css"
const DashBoard = () => {
    const [userDetails, setuserDetails] = useState();
    // const [moreUserDetails, setmoreUserDetails] = useState();

    useEffect(() => {
        document.title = "Profile";
        getUserDetails()
            .then((res) => {
                console.log(res);
                setuserDetails(res);
                // setmoreUserDetails(res.address);
            })
            .catch((res) => {
                console.log(res);
            });
    }, []);
    return (
        // <div className="profile-main">
        //     <div id="user" className="container profile">
        //         <div className="userProfile">
        //             <div className="userProfile__heading">
        //                 <h2>MY PROFILE</h2>
        //             </div>
        //             <div className="userinfo">
        //                 <div className="row__1">
        //                     <div className="row__1_1">
        //                         <img src="https://img.icons8.com/ios-filled/50/000000/user-male-circle.png" />
        //                         <input type="text" placeholder={moreUserDetails?.first_name} />
        //                     </div>
        //                     <div className="row__1_1">
        //                         <img src="https://img.icons8.com/ios-filled/50/000000/user-male-circle.png" />
        //                         <input type="text" placeholder={moreUserDetails?.last_name} />
        //                     </div>
        //                 </div>
        //                 <div className="row__1">
        //                     <div className="row__1_1">
        //                         <img src="https://img.icons8.com/ios-filled/50/000000/worldwide-location--v1.png" />
        //                         <input type="text" placeholder={userDetails?.email} />
        //                     </div>
        //                     <div className="row__1_1">
        //                         <img src="https://img.icons8.com/ios-filled/50/000000/ringing-phone.png" />
        //                         <input type="text" placeholder={moreUserDetails?.telephone} />
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div >
        // </div >
        <div className="dashboard" style={{ display: "felx", alignitems: "center", justifycontent: "center", padding: "100px", flexDirection: "column" }}>

            <div className="dashboard__profile" style={{ height: "auto", width: "100%", padding: "0px", marginBottom: "22px" }}>
                <div className="" style={{ display: "flex", alignitems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignitems: "center", justifyContent: "" }}>
                        <img src={userDetails?.profile_pic} style={{ height: "150px", width: "150px", borderRadius: "50%", marginRight: "10px", border: "2px solid black", objectFit: "contain" }} alt="" />
                        <div>
                            <p style={{
                                fontWeight: "Bold", marginLeft: "2px",
                                marginTop: "0px", marginBottom: "0px"
                            }}>{userDetails?.name}</p>
                            <p style={{ fontWeight: "400", marginLeft: "2px", marginTop: "0px", marginBottom: "0px" }}>{userDetails?.email}</p>
                            <p style={{ fontWeight: "400", marginLeft: "2px", marginTop: "0px", marginBottom: "0px" }}>{userDetails?.ph_number}</p>
                        </div>
                    </div>
                    <div>
                        <p style={{ fontSize: "small", borderBottom: "1px solid black", marginLeft: "6px" }}>Edit Details</p>
                    </div>
                </div>
            </div>

            <Card style={{ height: "auto", width: "100%", padding: "0px", marginBottom: "22px" }} className='cardshadow'>
                <Card.Body style={{
                    display: "flex", justifyContent: "space-between",
                    alignitems: "center",
                }}>
                    <div className='center'>
                        <img src="https://img.icons8.com/material-outlined/48/000000/list.png" alt="" style={{ height: "32px" }} />
                        <Card.Title style={{ fontWeight: "bold", marginLeft: "6px" }}>My Orders</Card.Title>
                    </div>
                    <img src="https://img.icons8.com/windows/48/000000/circled-chevron-right.png" alt="" style={{ height: "32px" }} />
                </Card.Body>
            </Card>

            <Card style={{ height: "auto", width: "100%", padding: "0px", marginBottom: "22px" }} className='cardshadow'>
                <Card.Body style={{
                    display: "flex", justifyContent: "space-between",
                    alignitems: "center",
                }}>
                    <div className='center'>
                        <img src="https://img.icons8.com/material-outlined/48/000000/dollar-account.png" alt="" style={{ height: "32px" }} />
                        <Card.Title style={{ fontWeight: "bold", marginLeft: "6px" }}>My Wallet</Card.Title>
                    </div>
                    <img src="https://img.icons8.com/windows/48/000000/circled-chevron-right.png" alt="" style={{ height: "32px" }} />
                </Card.Body>
            </Card>

            <Card style={{ height: "auto", width: "100%", padding: "0px", marginBottom: "22px" }} className='cardshadow'>
                <Card.Body style={{
                    display: "flex", justifyContent: "space-between",
                    alignitems: "center",
                }}>
                    <div className='center'>
                        <img src="https://img.icons8.com/material-outlined/48/000000/phone.png" alt="" style={{ height: "32px" }} />
                        <Card.Title style={{ fontWeight: "bold", marginLeft: "6px" }}>Phone Number</Card.Title>
                    </div>
                    <Card.Title style={{ fontSize: "small", borderBottom: "1px solid black", marginLeft: "6px" }}>ADD ANOTHER ADDRESS</Card.Title>
                </Card.Body>
                <Card.Body style={{ display: "flex", alignitems: "center" }}>
                    <img src="https://img.icons8.com/material-outlined/48/000000/circled.png" style={{ height: "32px" }} alt="" />
                    <Card.Title style={{ fontWeight: "600", marginLeft: "2px" }}>{userDetails?.ph_number}</Card.Title>
                </Card.Body>
                <Card.Body style={{ display: "flex", alignitems: "center" }}>
                    <img src="https://img.icons8.com/material-outlined/48/000000/circled.png" style={{ height: "32px" }} alt="" />
                    <Card.Title style={{ fontWeight: "600", marginLeft: "2px" }}>+91 8932392398</Card.Title>
                </Card.Body>
            </Card>

            <Card style={{ height: "auto", width: "100%", padding: "0px", marginBottom: "22px" }} className='cardshadow'>
                <Card.Body style={{
                    display: "flex", justifyContent: "space-between",
                    alignitems: "center",
                }}>
                    <div className='center'>
                        <img src="https://img.icons8.com/ios-glyphs/30/000000/house-of-cards.png" alt="" style={{ height: "32px" }} />
                        <Card.Title style={{ fontWeight: "bold", marginLeft: "6px" }}>Payment Cards</Card.Title>
                    </div>
                    <Card.Title style={{ fontSize: "small", borderBottom: "1px solid black", marginLeft: "6px" }}>ADD ANOTHER PAYMENT CARD</Card.Title>
                </Card.Body>
                <Card.Body style={{ display: "flex", alignitems: "center" }}>
                    <img src="https://img.icons8.com/material-outlined/48/000000/circled.png" style={{ height: "32px" }} alt="" />
                    <div>
                        <Card.Title style={{ fontWeight: "600", marginLeft: "2px" }}>Induslnd Bank Credit Card ****328784</Card.Title>
                        <Card.Title style={{ fontWeight: "400", marginLeft: "2px" }}>Delhi</Card.Title>
                        <Card.Title style={{ fontWeight: "400", marginLeft: "2px" }}>Expires 09/32</Card.Title>
                    </div>
                </Card.Body>
                <Card.Body style={{ display: "flex", alignitems: "center" }}>
                    <img src="https://img.icons8.com/material-outlined/48/000000/circled.png" style={{ height: "32px" }} alt="" />
                    <div>
                        <Card.Title style={{ fontWeight: "600", marginLeft: "2px" }}>Induslnd Bank Credit Card ****328784</Card.Title>
                        <Card.Title style={{ fontWeight: "400", marginLeft: "2px" }}>Delhi</Card.Title>
                        <Card.Title style={{ fontWeight: "400", marginLeft: "2px" }}>Expires 09/32</Card.Title>
                    </div>
                </Card.Body>
            </Card>


            <Card style={{ height: "auto", width: "100%", padding: "0px", marginBottom: "22px" }} className='cardshadow'>
                <Card.Body style={{
                    display: "flex", justifyContent: "space-between",
                    alignitems: "center",
                }}>
                    <div className='center'>
                        <img src="https://img.icons8.com/material-outlined/48/000000/lock--v1.png" alt="" style={{ height: "32px" }} />
                        <Card.Title style={{ fontWeight: "bold", marginLeft: "6px" }}>Change Password</Card.Title>
                    </div>
                    <img src="https://img.icons8.com/windows/48/000000/circled-chevron-right.png" alt="" style={{ height: "32px" }} />
                </Card.Body>
            </Card>

            <Card style={{ height: "auto", width: "100%", padding: "0px", marginBottom: "22px", marginTop: "180px" }} className='cardshadow'>
                <Card.Body style={{
                    display: "flex", justifyContent: "space-between",
                    alignitems: "center",
                }}>
                    <div className='center'>
                        <img src="https://img.icons8.com/material-outlined/48/FF0000/exit.png" alt="" style={{ height: "32px" }} />
                        <Card.Title style={{ fontWeight: "bold", marginLeft: "6px", color: "red" }}>Sign Out</Card.Title>
                    </div>
                    <img src="https://img.icons8.com/windows/48/000000/circled-chevron-right.png" alt="" style={{ height: "32px" }} />
                </Card.Body>
            </Card>

        </div >
    )
}

export default DashBoard