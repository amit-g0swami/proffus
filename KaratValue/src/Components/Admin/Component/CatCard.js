import React from "react";
import { Card } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";

const CatCard = ({ img, name, deleteCategory, cid }) => {
  return (
    <div className="text-center card-modify">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          style={{ width: "250px", height: "220px", borderRadius: "40px" }}
          src={img}
        />
        <Card.Body>
          <Card.Title>
            <b>{name}</b>
            <hr className="hero" />
          </Card.Title>
          <span
            className="span"
            onClick={() => {
              deleteCategory(cid);
            }}
          >
            <FaTrash style={{ marginRight: "10px" }} /> Delete Category
          </span>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CatCard;
