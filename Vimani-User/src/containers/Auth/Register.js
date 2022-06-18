import React, { useState, useEffect } from 'react';
import { Button, Form, Container, Row, Col, Card, InputGroup, FormControl } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { userlogin, logout } from '../../actions/auth';
import { Redirect, Link } from 'react-router-dom';
import bgImg from '../../assets/auth.png';
import { register } from "../../actions/auth";
// import { useAlert } from "react-alert";

function Login() {
    // const alert = useAlert();

    const [registerUser, setRegisteruser] = useState({
        full_name: "",
        last_name: "",
        email: "",
        username: "",
        password: "",
    });
    // useEffect(() => {
    //     logout();
    // }, [])

    document.title = "Registration";
    const handleSubmit = (e) => {
        // userlogin(e);
        e.preventDefault();
        register(registerUser).then((data) => {
            if (data.error) {
                alert("Regstration failed");
            } else {
                alert("Registration successfull");
            }
        });
    }

    const updateUser = (e) => {
        setRegisteruser({ ...registerUser, [e.target.name]: e.target.value });
    };
    //   if(isAuthenticated){
    //     if (authCategory=='admin'){
    //       return <Redirect to='/admin-dashboard' />;
    //     }
    //     else if(authCategory=='writer'){
    //       return <Redirect to='/dashboard' />;
    //     }
    //   }

    return (
        <div className='auth-container'>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className='my-4' style={{ width: '100%' }}>
                            <div>
                                <h1 className="auth-heading text-uppercase">Register</h1>
                            </div>
                            <div className='py-4'>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label className='text3'>Fisrt Name*</Form.Label>
                                            <Form.Control type="text" placeholder="Enter first name" value={registerUser.first_name}
                                                name="first_name"
                                                onChange={updateUser} />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label className='text3'>Last Name*</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Last Name"
                                                value={registerUser.last_name}
                                                name="last_name"
                                                onChange={updateUser}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className='text3'>Email ID*</Form.Label>
                                        <Form.Control type="email" placeholder="Enter Email ID."
                                            value={registerUser.email}
                                            name="email"
                                            onChange={updateUser}
                                        />
                                    </Form.Group>
                                </Col>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label className='text3'>UserName*</Form.Label>
                                            <Form.Control type="Text" placeholder="Enter UserName"
                                                value={registerUser.username}
                                                name="username"
                                                onChange={updateUser} />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label className='text3'>Password*</Form.Label>
                                            <Form.Control type="Text" placeholder="Enter Password"
                                                value={registerUser.password}
                                                name="password"
                                                onChange={updateUser} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                {/* <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label className='text3'>Password*</Form.Label>
                                            <Form.Control type="Text" placeholder="Enter Password"
                                                value={register.password}
                                                name="password"
                                                onChange={updateUser} />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <div>
                                            <Form.Label className='text3'>Gender*</Form.Label>
                                            <Form.Select aria-label="Default select example">
                                                <option>Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </div>

                                    </Col>
                                </Row>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='text3'>Password*</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='text3'>Confirm Password*</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <div style={{ width: '100%', marginTop: '20px' }}>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label={<p>I have read and agree to <span className='text3'>Terms and Conditions</span></p>} />
                                    </Form.Group>
                                </div> */}
                                <div style={{ marginTop: '50px' }}>
                                    <Button className='custom-btn1' style={{ float: 'right', width: '50%' }}
                                        onClick={handleSubmit}>Register Me Now!</Button>
                                </div>
                            </div>
                        </div>
                        <div style={{ marginTop: '50px' }}>
                            <p className='text-center'>Already have an account?
                                <NavLink to={'/login'} style={{ textDecoration: 'none' }}>
                                    <span className='text3'> Login</span>
                                </NavLink>
                            </p>
                        </div>
                    </Col>
                    <Col lg={6}></Col>
                </Row>
            </Container>
        </div>
    );
}

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { userlogin, logout })(Login);
