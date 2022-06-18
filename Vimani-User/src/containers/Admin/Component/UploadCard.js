import React, { useRef } from "react";
import { Card } from "react-bootstrap";

// import v1 from "../../../images/Vector (1).png";

const v1 = "is"
const UploadCard = ({ handleFile }) => {
    const hiddenFileInput = React.useRef(null);

    const handleClick = (event) => {
        hiddenFileInput.current.click();
    };

    const handleChange = (event) => {
        const fileUploaded = event.target.files[0];
        handleFile(fileUploaded);
    };

    return (
        <div className="text-center card-modify align-content-center">
            <Card onClick={handleClick} style={{ display: "flex", alignItems: "center" }}>
                {/* <Card.Img
                    variant="top"
                    style={{ width: "150px", height: "150px", marginTop: "40px" }}
                    src={v1}
                /> */}
                <img src="https://img.icons8.com/carbon-copy/100/000000/upload.png" style={{ width: "150px", height: "150px", marginTop: "40px" }} alt="" />
                <Card.Body className="mt-4">
                    <Card.Title>
                        <b style={{ color: "#113B6B" }}>Upload Image</b>
                        <input
                            type="file"
                            name="uploadFile"
                            onChange={handleFile}
                            ref={hiddenFileInput}
                            onChange={handleChange}
                            style={{ display: "none" }}
                        />
                    </Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
};

export default UploadCard;
