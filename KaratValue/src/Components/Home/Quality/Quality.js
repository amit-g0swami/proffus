import React from "react";
import "./Quality.css";
import insurance from "../../../images/insurance.png";
import certificate from "../../../images/certificate.png";
import cod from "../../../images/cash-on-delivery.png";
import returnBox from "../../../images/return-box.png";
import truck from "../../../images/delivery-truck.png";
import { Container, Row, Col } from "react-bootstrap";

const data = [
  { image: insurance, text: "An exquisite assortment of designs" },
  { image: certificate, text: "Customization & Individualization" },
  { image: returnBox, text: "Customer satisfaction guaranteed" },
  { image: cod, text: "Affordable & Convenient" },
  { image: truck, text: "Easy and Direct delivery" },
  { image: certificate, text: "100% authenticity & transparency" },
  { image: returnBox, text: "A strong Environmental ethics code" },
  { image: cod, text: "Certified & Trustworthy" }
];

function Quality() {
  return (
    <div className="quality">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#FFFCF2"
          fill-opacity="1"
          d="M0,96L1440,256L1440,320L0,320Z"
        ></path>
      </svg>
      <Container className="quality-container">
        <div className="big-text__heading"><h2 style={{ color: "#ee9776" }}>
          Why Choose Us?
        </h2></div>
        <Row style={{
          marginTop: "80px"
        }} className="text-center">
          {data.map((row, index) => (
            <div className="qcard" style={{ display: "flex", flex: "1 0 21%", height: "100%", padding: "10px" }}>
              <img
                src={row.image}
                style={{ width: "50px", height: "50px" }}
              />
              <span className="qtext my-4">{row.text}</span>
            </div>
          ))}
        </Row>
      </Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#FFFCF2"
          fill-opacity="1"
          d="M0,96L1440,256L1440,0L0,0Z"
        ></path>
      </svg>
    </div >
  );
}

export default Quality;
