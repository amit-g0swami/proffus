import React, { useState } from 'react'
import UploadCard from "./Component/UploadCard";
import {
    AddImage,
    Addbanner,
    DeleteCategory,
    deleteBanner,
} from "../../actions/Admin";
import { getBanner } from "../../actions/Product";

function AddItem() {
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
        <>
            <div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <hr style={{ width: "40%" }} />ADD AN ITEM<hr style={{ width: "40%" }} />
                </div>
                <div className="upload d-flex flex-column text-center">
                    <div style={{ width: "20%" }}>
                        <UploadCard handleFile={handleFile} />
                    </div>
                </div>
                <div>
                    <h4 style={{ color: "gray", fontSize: "small", marginTop: "10px" }}>Add image 1:1 ratio for best view | PNG,JPG,JPEG</h4>
                </div>
                <hr style={{ width: "90%", color: "gray" }} />
            </div>
            <div style={{}}>
                <div className="contact" style={{ display: "flex", alignItems: "center", padding: "10px" }}>
                    <div style={{ flex: "", display: "flex", alignItems: "center", padding: "0px", flexDirection: "column" }}>
                        <div style={{ flex: "1", display: "flex", alignItems: "flex-start", padding: "0px", flexDirection: "column", width: "100%", marginBottom: "10px" }}>
                            <label for="exampleFormControlTextarea1" class="form-label" style={{ fontWeight: "bold" }}>Selling Price</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" required="true" style={{ marginRight: "10px" }} />
                        </div>
                        <div class="mb-3" style={{ display: "flex", gap: "6px" }}>
                            <div>
                                <label for="exampleFormControlTextarea1" class="form-label" style={{ fontWeight: "bold" }}>Selling Price</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" required="true" style={{ marginRight: "10px" }} />
                            </div>
                            <div>
                                <label for="exampleFormControlTextarea1" class="form-label" style={{ fontWeight: "bold" }}>Pincode Excluded</label><input type="text" class="form-control" id="exampleFormControlInput1" required="true" style={{ marginRight: "10px" }} />
                            </div>
                            <div>
                                <label for="exampleFormControlTextarea1" class="form-label" style={{ fontWeight: "bold" }}>Pincode Excluded</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1" required="true" />
                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", gap: "20px" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                <input type="checkbox" id="checkbox" />
                                <h4 style={{ fontSize: "medium" }}>30 Days Return</h4>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                <input type="checkbox" id="checkbox" />
                                <h4 style={{ fontSize: "medium" }}>Free Delivery</h4>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                <input type="checkbox" id="checkbox" />
                                <h4 style={{ fontSize: "medium" }}>Assured</h4>
                            </div>
                        </div>
                        <div class="mb-3" style={{ width: "100%" }}>
                            <label for="exampleFormControlTextarea1" class="form-label" style={{ fontWeight: "bold" }}>Pincode Excluded</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Paste all the Pincodes here'></textarea>
                        </div>
                        <hr style={{ width: "100%", color: "gray" }} />
                        <button type="submit" class="btn btn-primary" style={{ backgroundColor: "#113B6B", width: "40%" }}>ADD OPTIONS</button>
                    </div>
                </div>
            </div>
            <div style={{}}>
                <div className="" style={{ display: "flex", alignItems: "center", padding: "10px" }}>
                    <div style={{ flex: "", display: "flex", alignItems: "center", padding: "0px", flexDirection: "column" }}>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: 'center', justifyContent: "space-between", gap: "15px" }}>
                            <div style={{ flex: "1", display: "flex", alignItems: "flex-start", padding: "0px", flexDirection: "column", width: "100%", marginBottom: "10px" }}>
                                <label for="exampleFormControlTextarea1" class="form-label" style={{ fontWeight: "bold" }}>Selling Price</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" required="true" style={{ marginRight: "10px" }} />
                            </div>
                            <div>
                                <button type="submit" class="btn btn-primary" style={{ border: "1px solid #113B6B", width: "40%", background: "transparent", color: "#113B6B", width: "150px" }}>ADD VARIETY</button>
                            </div>
                        </div>
                        <div class="mb-3" style={{ display: "flex", gap: "6px" }}>
                            <div>
                                <label for="exampleFormControlTextarea1" class="form-label" style={{ fontWeight: "bold" }}>Selling Price</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" required="true" style={{ marginRight: "10px" }} />
                            </div>
                            <div>
                                <label for="exampleFormControlTextarea1" class="form-label" style={{ fontWeight: "bold" }}>Pincode Excluded</label><input type="text" class="form-control" id="exampleFormControlInput1" required="true" style={{ marginRight: "10px" }} />
                            </div>
                        </div>
                        <div class="mb-3" style={{ display: "flex", gap: "6px" }}>
                            <div>
                                <label for="exampleFormControlTextarea1" class="form-label" style={{ fontWeight: "bold" }}>Selling Price</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" required="true" style={{ marginRight: "10px" }} />
                            </div>
                            <div>
                                <label for="exampleFormControlTextarea1" class="form-label" style={{ fontWeight: "bold" }}>Pincode Excluded</label><input type="text" class="form-control" id="exampleFormControlInput1" required="true" style={{ marginRight: "10px" }} />
                            </div>
                        </div>
                        <div class="mb-3" style={{ display: "flex", gap: "6px", alignItems: "flex-start", marginLeft: '0px' }}>
                            <div style={{ alignItems: "flex-start" }}>
                                <label for="exampleFormControlTextarea1" class="form-label" style={{ fontWeight: "bold" }}>Selling Price</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" required="true" style={{ marginRight: "10px" }} />
                            </div>
                        </div>

                        <div style={{ display: "flex", flexDirection: "row", alignItems: 'center', justifyContent: "space-between", gap: "15px" }}>
                            <div style={{ flex: "1", display: "flex", alignItems: "flex-start", padding: "0px", flexDirection: "column", width: "100%", marginBottom: "10px" }}>
                                <label for="exampleFormControlTextarea1" class="form-label" style={{ fontWeight: "bold" }}>Selling Price</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" required="true" style={{ marginRight: "10px" }} />
                            </div>
                            <div>
                                <button type="submit" class="btn btn-primary" style={{ border: "1px solid #113B6B", width: "40%", background: "transparent", color: "#113B6B", width: "150px" }}>ADD VARIETY</button>
                            </div>
                        </div>
                        <div class="mb-3" style={{ display: "flex", gap: "6px" }}>
                            <div>
                                <label for="exampleFormControlTextarea1" class="form-label" style={{ fontWeight: "bold" }}>Selling Price</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" required="true" style={{ marginRight: "10px" }} />
                            </div>
                            <div>
                                <label for="exampleFormControlTextarea1" class="form-label" style={{ fontWeight: "bold" }}>Pincode Excluded</label><input type="text" class="form-control" id="exampleFormControlInput1" required="true" style={{ marginRight: "10px" }} />
                            </div>
                        </div>
                        <div class="mb-3" style={{ display: "flex", gap: "6px" }}>
                            <div>
                                <label for="exampleFormControlTextarea1" class="form-label" style={{ fontWeight: "bold" }}>Selling Price</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" required="true" style={{ marginRight: "10px" }} />
                            </div>
                            <div>
                                <label for="exampleFormControlTextarea1" class="form-label" style={{ fontWeight: "bold" }}>Pincode Excluded</label><input type="text" class="form-control" id="exampleFormControlInput1" required="true" style={{ marginRight: "10px" }} />
                            </div>
                        </div>
                        <div class="mb-3" style={{ display: "flex", gap: "6px", alignItems: "flex-start", marginLeft: '0px' }}>
                            <div style={{ alignItems: "flex-start" }}>
                                <label for="exampleFormControlTextarea1" class="form-label" style={{ fontWeight: "bold" }}>Selling Price</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" required="true" style={{ marginRight: "10px" }} />
                            </div>
                        </div>

                        <div class="mb-3" style={{ width: "100%" }}>
                            <label for="exampleFormControlTextarea1" class="form-label" style={{ fontWeight: "bold" }}>Details</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder=''></textarea>
                        </div>
                        <hr style={{ width: "100%", color: "gray" }} />
                        <h4 class="mb-4">Specifications</h4>
                        <button type="submit" class="btn btn-primary" style={{ backgroundColor: "#113B6B", width: "40%" }}>ADD OPTIONS</button>
                        <div class="mb-3" style={{ display: "flex", gap: "6px" }}>
                            <div>
                                <label for="exampleFormControlTextarea1" class="form-label" style={{ fontWeight: "bold" }}>Selling Price</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" required="true" style={{ marginRight: "10px" }} />
                            </div>
                            <div>
                                <label for="exampleFormControlTextarea1" class="form-label" style={{ fontWeight: "bold" }}>Pincode Excluded</label><input type="text" class="form-control" id="exampleFormControlInput1" required="true" style={{ marginRight: "10px" }} />
                            </div>
                        </div>
                        <div class="mb-3" style={{ display: "flex", gap: "6px" }}>
                            <div>
                                <label for="exampleFormControlTextarea1" class="form-label" style={{ fontWeight: "bold" }}>Selling Price</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" required="true" style={{ marginRight: "10px" }} />
                            </div>
                            <div>
                                <label for="exampleFormControlTextarea1" class="form-label" style={{ fontWeight: "bold" }}>Pincode Excluded</label><input type="text" class="form-control" id="exampleFormControlInput1" required="true" style={{ marginRight: "10px" }} />
                            </div>
                        </div>
                        <div class="mb-3" style={{ display: "flex", gap: "6px" }}>
                            <div>
                                <label for="exampleFormControlTextarea1" class="form-label" style={{ fontWeight: "bold" }}>Selling Price</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" required="true" style={{ marginRight: "10px" }} />
                            </div>
                            <div>
                                <label for="exampleFormControlTextarea1" class="form-label" style={{ fontWeight: "bold" }}>Pincode Excluded</label><input type="text" class="form-control" id="exampleFormControlInput1" required="true" style={{ marginRight: "10px" }} />
                            </div>
                        </div>
                        <div class="mb-3" style={{ display: "flex", gap: "6px", flexDirection: "column", alignItems: 'flex-start' }}>
                            <div>
                                <label for="exampleFormControlTextarea1" class="form-label" style={{ fontWeight: "bold" }}>Selling Price</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" required="true" style={{ marginRight: "10px" }} />
                            </div>
                            <div>
                                <label for="exampleFormControlTextarea1" class="form-label" style={{ fontWeight: "bold" }}>Pincode Excluded</label><input type="text" class="form-control" id="exampleFormControlInput1" required="true" style={{ marginRight: "10px" }} />
                            </div>
                        </div>
                        <hr style={{ width: "100%", color: "gray" }} />
                        <button type="submit" class="btn btn-primary" style={{ backgroundColor: "#113B6B", width: "40%" }}>ADD OPTIONS</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddItem