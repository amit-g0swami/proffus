import React, { useEffect, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import userIcon from "../../images/user.png";
import phoneIcon from "../../images/phone.png";
import hashIcon from "../../images/hash.png";
import faxIcon from "../../images/fax.png";
import locationIcon from "../../images/location.png";
import mailIcon from "../../images/mail.png";
import cross from "../../images/cross.png";

import Footer from ".././Component/Footer";
import { Alert } from "react-bootstrap";
import { register } from "../../actions/auth";
import { useAlert } from "react-alert";

function Register() {
  const alert = useAlert();
  const history = useHistory();
  const [error, setError] = useState(false);
  const [message, setmessage] = useState(false);
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    telephone: "",
    address_1: "",
    address_2: "",
    city: "",
    state: "",
    country: "",
    pin_code: "",
    password: "",
  });

  document.title = "Registration";
  const handleForm = (e) => {
    e.preventDefault();
    register(user).then((data) => {
      if (data.error) {
        alert.error("Regstration failed");
      } else {
        alert.success("Registration successfull");
      }
    });
  };

  const updateUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container" style={{ marginTop: "150px" }}>
        <div className="form p-5">
          <h2 className="profile-heading">Register</h2>
          <div className="row mb-3 mt-5" style={{ width: "100%" }}>
            <div className="col-md-6 input">
              <input
                placeholder="First name"
                type="text"
                value={user.first_name}
                name="first_name"
                onChange={updateUser}
              />
            </div>
            <div className="col-md-6 input">
              <input
                placeholder="Last name"
                type="text"
                name="last_name"
                onChange={updateUser}
              />
            </div>
          </div>
          <div className="row mb-5" style={{ width: "100%" }}>
            <div className="col-md-6 input">
              <input
                placeholder="Email"
                type="email"
                name="email"
                onChange={updateUser}
              />
            </div>
            <div className="col-md-6 input">
              <input
                placeholder="Mobile number"
                type="text"
                onChange={updateUser}
                name="telephone"
              />
            </div>
          </div>
          <div className="row mb-5" style={{ width: "100%" }}>
            <div className="col-md-6 input">
              <input
                placeholder="State"
                type="text"
                onChange={updateUser}
                name="state"
              />
            </div>
            <div className="col-md-6 input">
              <input
                placeholder="Postal code"
                type="text"
                onChange={updateUser}
                name="pin_code"
              />
            </div>
          </div>
          <div className="row mb-5" style={{ width: "100%" }}>
            <div className="col-md-6 input">
              <input
                placeholder="Address 1"
                type="text"
                onChange={updateUser}
                name="address_1"
              />
            </div>
            <div className=" col-md-6 mb-4 input">
              <input
                placeholder="Address 2"
                type="text"
                onChange={updateUser}
                name="address_2"
              />
            </div>
            <div className=" col-md-6 input">
              <input
                placeholder="City"
                type="text"
                onChange={updateUser}
                name="city"
              />
            </div>
          </div>
          <div className="row mb-5" style={{ width: "100%" }}>
            <div className="col-md-6 input">
              <input
                placeholder="Country"
                type="text"
                onChange={updateUser}
                name="country"
              />
            </div>
            <div className="col-md-6 input">
              <input
                placeholder="Password"
                type="password"
                name="password"
                onChange={updateUser}
              />
            </div>
          </div>
          <button className="save btn mt-3" type="submit" onClick={handleForm}>
            Register
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
