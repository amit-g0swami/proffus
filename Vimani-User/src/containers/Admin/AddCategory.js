import React, { useState } from 'react'
import UploadCard from "./Component/UploadCard";
import {
    AddImage,
    Addbanner,
    DeleteCategory,
    deleteBanner,
} from "../../actions/Admin";
import { Button, Form, Container, Row, Col, Card, InputGroup, FormControl } from "react-bootstrap";

function AddCategory() {
    const [Form, setForm] = useState({
        name: "",
        image_url: "",
    });
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
                <div className='mt-4'>
                    <h4>Category Name</h4>
                    <input style={{ border: "none" }} />
                </div>
                <div>
                    <button className="button-submit mt-4" style={{ backgroundColor: "#113B6B", width: "300px" }}>
                        ADD A CATEGORY <span style={{ fontWeight: "bold" }}>HERE</span>
                    </button>
                </div>
                <div style={{ display: "flex", alignItems: "center" }} className='mt-4'>
                    <hr style={{ width: "40%" }} />EXISTING CATEGORY<hr style={{ width: "40%" }} />
                </div>
                <div className="blockuser__data" style={{ gap: "10px", display: "flex", flexDirection: "row", marginTop: "10px", flexWrap: "wrap" }}>
                    <div style={{ height: "350px", width: "18%" }}>
                        <Card style={{ height: "150px", width: "100%", marginBottom: "22px", background: "transparent" }} className=''>
                            <Card.Img variant="top" src="https://img.webnots.com/2017/07/Bootstrap-4-User-Profile-Card.png" style={{ height: '150px', width: "auto", objectFit: "cover", backgroundPosition: "center center" }} />
                            <Card.Body style={{
                                display: "flex", justifyContent: "space-between",
                                alignitems: "center",
                            }}>
                            </Card.Body>
                        </Card>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                            <Card.Title style={{ fontWeight: "bold" }}>Foot wear <span style={{ fontSize: "small" }}>| fasd | profsut dwewqw sdfasd</span></Card.Title>
                            <Card.Title style={{ fontWeight: "bold", color: "#113B6B", display: "flex", flexDirection: "row" }}><img src="https://img.icons8.com/material-outlined/24/4a90e2/edit--v1.png" alt="" />
                                EDIT</Card.Title>
                            <Card.Title style={{ fontWeight: "bold", color: "red", display: "flex", flexDirection: "row" }}>
                                <img src="https://img.icons8.com/ios-glyphs/30/fa314a/filled-trash.png" alt="" />DELETE</Card.Title>
                        </div>
                    </div>

                    <div style={{ height: "350px", width: "18%" }}>
                        <Card style={{ height: "150px", width: "100%", marginBottom: "22px", background: "transparent" }} className=''>
                            <Card.Img variant="top" src="https://img.webnots.com/2017/07/Bootstrap-4-User-Profile-Card.png" style={{ height: '150px', width: "auto", objectFit: "cover", backgroundPosition: "center center" }} />
                            <Card.Body style={{
                                display: "flex", justifyContent: "space-between",
                                alignitems: "center",
                            }}>
                            </Card.Body>
                        </Card>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                            <Card.Title style={{ fontWeight: "bold" }}>Foot wear <span style={{ fontSize: "small" }}>| fasd | profsut dwewqw sdfasd</span></Card.Title>
                            <Card.Title style={{ fontWeight: "bold", color: "#113B6B", display: "flex", flexDirection: "row" }}><img src="https://img.icons8.com/material-outlined/24/4a90e2/edit--v1.png" alt="" />
                                EDIT</Card.Title>
                            <Card.Title style={{ fontWeight: "bold", color: "red", display: "flex", flexDirection: "row" }}>
                                <img src="https://img.icons8.com/ios-glyphs/30/fa314a/filled-trash.png" alt="" />DELETE</Card.Title>
                        </div>
                    </div>

                    <div style={{ height: "350px", width: "18%" }}>
                        <Card style={{ height: "150px", width: "100%", marginBottom: "22px", background: "transparent" }} className=''>
                            <Card.Img variant="top" src="https://img.webnots.com/2017/07/Bootstrap-4-User-Profile-Card.png" style={{ height: '150px', width: "auto", objectFit: "cover", backgroundPosition: "center center" }} />
                            <Card.Body style={{
                                display: "flex", justifyContent: "space-between",
                                alignitems: "center",
                            }}>
                            </Card.Body>
                        </Card>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                            <Card.Title style={{ fontWeight: "bold" }}>Foot wear <span style={{ fontSize: "small" }}>| fasd | profsut dwewqw sdfasd</span></Card.Title>
                            <Card.Title style={{ fontWeight: "bold", color: "#113B6B", display: "flex", flexDirection: "row" }}><img src="https://img.icons8.com/material-outlined/24/4a90e2/edit--v1.png" alt="" />
                                EDIT</Card.Title>
                            <Card.Title style={{ fontWeight: "bold", color: "red", display: "flex", flexDirection: "row" }}>
                                <img src="https://img.icons8.com/ios-glyphs/30/fa314a/filled-trash.png" alt="" />DELETE</Card.Title>
                        </div>
                    </div>

                    <div style={{ height: "350px", width: "18%" }}>
                        <Card style={{ height: "150px", width: "100%", marginBottom: "22px", background: "transparent" }} className=''>
                            <Card.Img variant="top" src="https://img.webnots.com/2017/07/Bootstrap-4-User-Profile-Card.png" style={{ height: '150px', width: "auto", objectFit: "cover", backgroundPosition: "center center" }} />
                            <Card.Body style={{
                                display: "flex", justifyContent: "space-between",
                                alignitems: "center",
                            }}>
                            </Card.Body>
                        </Card>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                            <Card.Title style={{ fontWeight: "bold" }}>Foot wear <span style={{ fontSize: "small" }}>| fasd | profsut dwewqw sdfasd</span></Card.Title>
                            <Card.Title style={{ fontWeight: "bold", color: "#113B6B", display: "flex", flexDirection: "row" }}><img src="https://img.icons8.com/material-outlined/24/4a90e2/edit--v1.png" alt="" />
                                EDIT</Card.Title>
                            <Card.Title style={{ fontWeight: "bold", color: "red", display: "flex", flexDirection: "row" }}>
                                <img src="https://img.icons8.com/ios-glyphs/30/fa314a/filled-trash.png" alt="" />DELETE</Card.Title>
                        </div>
                    </div>

                    <div style={{ height: "350px", width: "18%" }}>
                        <Card style={{ height: "150px", width: "100%", marginBottom: "22px", background: "transparent" }} className=''>
                            <Card.Img variant="top" src="https://img.webnots.com/2017/07/Bootstrap-4-User-Profile-Card.png" style={{ height: '150px', width: "auto", objectFit: "cover", backgroundPosition: "center center" }} />
                            <Card.Body style={{
                                display: "flex", justifyContent: "space-between",
                                alignitems: "center",
                            }}>
                            </Card.Body>
                        </Card>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                            <Card.Title style={{ fontWeight: "bold" }}>Foot wear <span style={{ fontSize: "small" }}>| fasd | profsut dwewqw sdfasd</span></Card.Title>
                            <Card.Title style={{ fontWeight: "bold", color: "#113B6B", display: "flex", flexDirection: "row" }}><img src="https://img.icons8.com/material-outlined/24/4a90e2/edit--v1.png" alt="" />
                                EDIT</Card.Title>
                            <Card.Title style={{ fontWeight: "bold", color: "red", display: "flex", flexDirection: "row" }}>
                                <img src="https://img.icons8.com/ios-glyphs/30/fa314a/filled-trash.png" alt="" />DELETE</Card.Title>
                        </div>
                    </div>

                    <div style={{ height: "350px", width: "18%" }}>
                        <Card style={{ height: "150px", width: "100%", marginBottom: "22px", background: "transparent" }} className=''>
                            <Card.Img variant="top" src="https://img.webnots.com/2017/07/Bootstrap-4-User-Profile-Card.png" style={{ height: '150px', width: "auto", objectFit: "cover", backgroundPosition: "center center" }} />
                            <Card.Body style={{
                                display: "flex", justifyContent: "space-between",
                                alignitems: "center",
                            }}>
                            </Card.Body>
                        </Card>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                            <Card.Title style={{ fontWeight: "bold" }}>Foot wear <span style={{ fontSize: "small" }}>| fasd | profsut dwewqw sdfasd</span></Card.Title>
                            <Card.Title style={{ fontWeight: "bold", color: "#113B6B", display: "flex", flexDirection: "row" }}><img src="https://img.icons8.com/material-outlined/24/4a90e2/edit--v1.png" alt="" />
                                EDIT</Card.Title>
                            <Card.Title style={{ fontWeight: "bold", color: "red", display: "flex", flexDirection: "row" }}>
                                <img src="https://img.icons8.com/ios-glyphs/30/fa314a/filled-trash.png" alt="" />DELETE</Card.Title>
                        </div>
                    </div>

                    <div style={{ height: "350px", width: "18%" }}>
                        <Card style={{ height: "150px", width: "100%", marginBottom: "22px", background: "transparent" }} className=''>
                            <Card.Img variant="top" src="https://img.webnots.com/2017/07/Bootstrap-4-User-Profile-Card.png" style={{ height: '150px', width: "auto", objectFit: "cover", backgroundPosition: "center center" }} />
                            <Card.Body style={{
                                display: "flex", justifyContent: "space-between",
                                alignitems: "center",
                            }}>
                            </Card.Body>
                        </Card>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                            <Card.Title style={{ fontWeight: "bold" }}>Foot wear <span style={{ fontSize: "small" }}>| fasd | profsut dwewqw sdfasd</span></Card.Title>
                            <Card.Title style={{ fontWeight: "bold", color: "#113B6B", display: "flex", flexDirection: "row" }}><img src="https://img.icons8.com/material-outlined/24/4a90e2/edit--v1.png" alt="" />
                                EDIT</Card.Title>
                            <Card.Title style={{ fontWeight: "bold", color: "red", display: "flex", flexDirection: "row" }}>
                                <img src="https://img.icons8.com/ios-glyphs/30/fa314a/filled-trash.png" alt="" />DELETE</Card.Title>
                        </div>
                    </div>
                </div>
            </div></div>
    )
}

export default AddCategory