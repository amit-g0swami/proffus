import React, { useRef } from "react";
import { Card } from "react-bootstrap";

import v1 from "../../../images/Vector (1).png";

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
      <Card onClick={handleClick}>
        <Card.Img
          variant="top"
          style={{ width: "150px", height: "150px", marginTop: "40px" }}
          src={v1}
        />
        <Card.Body className="mt-4">
          <Card.Title>
            <b>Upload Image</b>
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
