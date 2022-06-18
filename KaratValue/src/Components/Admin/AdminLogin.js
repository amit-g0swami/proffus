import React, { useState } from "react";
import { useHistory } from "react-router";
import { Adminlogin } from "../../actions/Admin";
import {Row,Col} from 'react-bootstrap';

const AdminLogin = () => {
  const [loginDetails, setloginDetails] = useState({
    email: "karatvalue@gmail.com",
    password: "Karatvalue@1234",
  });
  let history = useHistory();
  const handleSubmit = () => {
    if (loginDetails.email && loginDetails.password) {
      const result = Adminlogin(loginDetails.email, loginDetails.password);
      if (result) {
        history.push("/panel");
      } else {
        alert("Invalid email or password");
      }
    } else {
      alert("Enter email or password");
    }
  };
  return (
    <div style={{background:'rgb(255, 252, 242)',height:'100vh'}}>
    <div className="container  mt-5 pt-5" >
      <Row>
        <Col lg={3} xs={12}></Col>
        <Col lg={6} xs={12}>
           <section>
           <h1 className="mb-5 mt-5">Admin Login</h1>
      <div className="mb-3 row">
        <label for="staticEmail" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            value={loginDetails.email}
            onChange={(e) => {
              setloginDetails({ ...loginDetails, email: e.target.value });
            }}
            className="form-control"
            required={true}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label for="inputPassword" className="col-sm-2 col-form-label">
          Password
        </label>
        <div className="col-sm-10">
          <input
            type="password"
            value={loginDetails.password}
            onChange={(e) => {
              setloginDetails({ ...loginDetails, password: e.target.value });
            }}
            className="form-control"
            id="inputPassword"
            required
          />
        </div>
        <div className="col-sm-10">
          <input
            type="submit"
            onClick={handleSubmit}
            className="btn btn-dark mt-5"
          />
        </div>
      </div>
           </section>
        </Col>
        <Col lg={3} xs={12}></Col>
      </Row>

     
    </div>
  </div>
  );
};

export default AdminLogin;
