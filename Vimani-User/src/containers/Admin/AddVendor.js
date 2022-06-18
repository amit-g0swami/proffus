import React, { useState } from 'react'
import UploadCard from "./Component/UploadCard";
import {
    AddImage,
    Addbanner,
    DeleteCategory,
    deleteBanner,
} from "../../actions/Admin";
import { Button, Form, Container, Row, Col, Card, InputGroup, FormControl } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

function AddVendor() {
    const [Form, setForm] = useState({
        name: "",
        image_url: "",
    });

    const [registerUser, setRegisteruser] = useState({
        full_name: "",
        last_name: "",
        email: "",
        username: "",
        password: "",
    });
    const updateUser = (e) => {
        setRegisteruser({ ...registerUser, [e.target.name]: e.target.value });
    };
    const handleFile = (file) => {
        console.log(file);
        const image = new FormData();
        image.append("file", file);
        AddImage(image)
            .then((data) => {
                console.log(data);
                if (data) {
                    setForm({ ...Form, image_url: data.url });
                    alert.success("Image Uploaded Successfully");
                } else {
                    alert.error("Image Failed to Upload");
                }
            })
            .catch((error) => {
                alert.error("Image Failed to Upload");
            });
    };

    return (
        <div className=" mt-5">
            <div style={{ display: "flex", alignItems: "center" }}>
                <hr style={{ width: "40%" }} />ADD A VENDOR<hr style={{ width: "40%" }} />
            </div>
            <div className="upload d-flex flex-column text-center mt-4">
                <div style={{ width: "90%" }}>
                    <UploadCard handleFile={handleFile} />
                </div>
                <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                    <div className='mt-4' style={{
                        width: "40%",
                        height: "30%",
                    }}>
                        <h6>Username</h6>
                        <input style={{ border: "none" }} />
                    </div>
                    <div className='mt-4' style={{
                        width: "40%",
                        height: "30%",
                    }}>
                        <h6>Email ID</h6>
                        <input style={{ border: "none" }} />
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                    <div className='mt-4' style={{
                        width: "40%",
                        height: "30%",
                    }}>
                        <h6>Password</h6>
                        <input style={{ border: "none" }} />
                    </div>
                    <div className='mt-4' style={{
                        width: "40%",
                        height: "30%",
                    }}>
                        <h6>Confirm Password</h6>
                        <input style={{ border: "none" }} />
                    </div>
                </div>
                <div className='d-flex' style={{ dispkay: "flex", alignItems: "flex-end", justifyContent: "flex-end", marginRight: "150px" }}>
                    <NavLink to="/vendor-detail">
                        <button className="button-submit mt-5" style={{ backgroundColor: "#113B6B", width: "300px" }}>
                            ADD A VENDOR
                        </button>
                    </NavLink>
                </div>
            </div>
            <div>
                <div className='mt-4' style={{ display: "flex", alignItems: "center" }}>
                    <hr style={{ width: "40%" }} />EXISTING VENDORS<hr style={{ width: "40%" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <div style={{ height: "auto", width: "30%", padding: "0px", marginBottom: "22px", display: "flex", flexDirection: "column", alignItems: "center" }} className=''>
                        <Card.Body style={{
                            display: "flex", justifyContent: "center",
                            alignItems: "center", marginBottom: "0px"
                        }}>
                            <div style={{
                                display: "flex", justifyContent: "center",
                                alignItems: "center", flexDirection: "column", marginBottom: "0px"
                            }} >
                                <Card.Img variant="top" src="https://img.webnots.com/2017/07/Bootstrap-4-User-Profile-Card.png" style={{ height: '200px', width: '200px', border: "1px solid black", borderRadius: "50%", border: "1px solid black", objectFit: "cover" }} />
                                <div>
                                    <Card.Title style={{ fontWeight: "bold", marginLeft: "6px", marginBottom: "0px" }}>Sandeep yadav</Card.Title>
                                    <Card.Title style={{ fontSize: "small", marginLeft: "6px", marginBottom: "0px" }}>+0 312311221</Card.Title>
                                    <Card.Title style={{ fontSize: "small", marginLeft: "6px", marginBottom: "0px" }}>Payment@gmail.com</Card.Title>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Body style={{ display: "flex", alignItems: "center !important" }} className="">
                            <div>
                                <button className="button-submit" style={{ backgroundColor: "#113B6B", width: "230px" }}>
                                    EDIT OR REMOVE
                                </button>
                            </div>
                        </Card.Body>
                    </div>
                    <div style={{ height: "auto", width: "30%", padding: "0px", marginBottom: "22px", display: "flex", flexDirection: "column", alignItems: "center" }} className=''>
                        <Card.Body style={{
                            display: "flex", justifyContent: "center",
                            alignItems: "center", marginBottom: "0px"
                        }}>
                            <div style={{
                                display: "flex", justifyContent: "center",
                                alignItems: "center", flexDirection: "column", marginBottom: "0px"
                            }} >
                                <Card.Img variant="top" src="https://img.webnots.com/2017/07/Bootstrap-4-User-Profile-Card.png" style={{ height: '200px', width: '200px', border: "1px solid black", borderRadius: "50%", border: "1px solid black", objectFit: "cover" }} />
                                <div>
                                    <Card.Title style={{ fontWeight: "bold", marginLeft: "6px", marginBottom: "0px" }}>Sandeep yadav</Card.Title>
                                    <Card.Title style={{ fontSize: "small", marginLeft: "6px", marginBottom: "0px" }}>+0 312311221</Card.Title>
                                    <Card.Title style={{ fontSize: "small", marginLeft: "6px", marginBottom: "0px" }}>Payment@gmail.com</Card.Title>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Body style={{ display: "flex", alignItems: "center !important" }} className="">
                            <div>
                                <button className="button-submit" style={{ backgroundColor: "#113B6B", width: "230px" }}>
                                    EDIT OR REMOVE
                                </button>
                            </div>
                        </Card.Body>
                    </div>
                    <div style={{ height: "auto", width: "30%", padding: "0px", marginBottom: "22px", display: "flex", flexDirection: "column", alignItems: "center" }} className=''>
                        <Card.Body style={{
                            display: "flex", justifyContent: "center",
                            alignItems: "center", marginBottom: "0px"
                        }}>
                            <div style={{
                                display: "flex", justifyContent: "center",
                                alignItems: "center", flexDirection: "column", marginBottom: "0px"
                            }} >
                                <Card.Img variant="top" src="https://img.webnots.com/2017/07/Bootstrap-4-User-Profile-Card.png" style={{ height: '200px', width: '200px', border: "1px solid black", borderRadius: "50%", border: "1px solid black", objectFit: "cover" }} />
                                <div>
                                    <Card.Title style={{ fontWeight: "bold", marginLeft: "6px", marginBottom: "0px" }}>Sandeep yadav</Card.Title>
                                    <Card.Title style={{ fontSize: "small", marginLeft: "6px", marginBottom: "0px" }}>+0 312311221</Card.Title>
                                    <Card.Title style={{ fontSize: "small", marginLeft: "6px", marginBottom: "0px" }}>Payment@gmail.com</Card.Title>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Body style={{ display: "flex", alignItems: "center !important" }} className="">
                            <div>
                                <button className="button-submit" style={{ backgroundColor: "#113B6B", width: "230px" }}>
                                    EDIT OR REMOVE
                                </button>
                            </div>
                        </Card.Body>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AddVendor