import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";

import { useLocation } from "react-router";
import {
    AddImage,
    Addbanner,
    DeleteCategory,
    deleteBanner,
} from "../../actions/Admin";
import { getBanner } from "../../actions/Product";
import UploadCard from "./Component/UploadCard";

// import { FaTimes } from "react-icons/fa";

import "./style.css";
// import { useAlert } from "react-alert";

function AddBanner() {
    const [Form, setForm] = useState({
        name: "",
        image_url: "",
    });

    const [Banners, setBanners] = useState();

    // let alert = useAlert();

    const handleForm = (e) => {
        e.preventDefault();
        Addbanner(Form)
            .then((res) => {
                if (res) {
                    callBannerAPI();
                    alert("Banner uploaded successfully");
                    setForm({ ...Form, name: "", image_url: "" });
                } else {
                    alert("Banner did not uploaded successfully");
                }
            })
            .catch((error) => {
                alert("Banner did not uploaded successfully");
            });
    };

    const callBannerAPI = () => {
        getBanner()
            .then((banner) => {
                setBanners(banner);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleDelete = (name) => {
        deleteBanner(name)
            .then((data) => {
                callBannerAPI();
                alert.success("Banner Deleted");
            })
            .catch((error) => {
                alert.error("Banner Failed To Deleted");
            });
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

    useEffect(() => {
        callBannerAPI();
    }, []);

    return (
        <div className="d-flex flex-column admin-container">
            <div className="d-flex flex-column mb-5">
                <div className="hea">
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <hr style={{ width: "40%" }} />CURRENT BANNERS<hr style={{ width: "40%" }} />
                    </div>
                </div>
                <div className="banner">
                    <Carousel interval={2000}>
                        {Banners && Banners.length !== 0 ? (
                            Banners.map((banner) => (
                                <Carousel.Item>
                                    <span
                                        onClick={() => {
                                            handleDelete(banner.name);
                                        }}
                                        className="del-icon"
                                        style={{ cursor: "pointer" }}
                                    >

                                        <img src="https://img.icons8.com/emoji/48/000000/cross-mark-emoji.png" alt="" />
                                    </span>
                                    <img
                                        className="d-block w-100"
                                        src={banner.b_url}
                                        style={{ width: "100%", height: "350px" }}
                                        alt={banner.name}
                                    />
                                </Carousel.Item>
                            ))
                        ) : (
                            <h1
                                style={{ marginTop: "50px" }}
                                className="display-5 text-center pt-5"
                            >
                                No Banners Found !
                            </h1>
                        )}
                    </Carousel>
                </div>
            </div>
            <div className="d-flex flex-column mt-5">
                <div className="hea">
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <hr style={{ width: "40%" }} />ADD BANNERS<hr style={{ width: "40%" }} />
                    </div>
                </div>
                <div className="upload d-flex flex-column text-center">
                    <div>
                        <UploadCard handleFile={handleFile} />
                    </div>
                    <div>
                        <input
                            type="text"
                            value={Form.name}
                            onChange={(e) => {
                                setForm({ ...Form, name: e.target.value });
                            }}
                            className="input-admin mt-5"
                            placeholder="Banner Name"
                        />
                    </div>
                    <div>
                        <button onClick={handleForm} className="button-submit mt-5" style={{ backgroundColor: "#113B6B" }}>
                            SAVE CHANGES
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddBanner;
