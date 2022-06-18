import React, { useState } from "react";
import { useHistory } from "react-router";
import { Adminlogin } from "../../actions/Admin";
import { Row, Col } from 'react-bootstrap';

const AdminLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();
    const handleSubmit = () => {
        if (!username || !password) {
            alert("Invalid email or password");
        } else {
            if (username == "prabhat" && password == "Ranjan#4151") {
                Adminlogin({ username, password }).then((data) => {
                    if (data.error || !data) {
                        alert(data.error);
                    } else {
                        // localStorage.removeItem("admin");
                        localStorage.setItem("admin", JSON.stringify(data));
                        history.push("/admin");
                        // window.location.reload(true);
                        alert("Logged in successfully");
                    }
                })
            } else {
                alert("wrong credentials")
            }
        }
    };

    return (
        <div style={{ background: 'rgb(255, 252, 242)', height: '100vh' }}>
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
                                        onChange={(e) => setUsername(e.target.value)}
                                        value={username}
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
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
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
