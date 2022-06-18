import React, { useState, useEffect } from 'react';
import { Button, Form, Container, Row, Col, Card, InputGroup, FormControl } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { userlogin, logout } from '../../actions/auth';
import { Redirect, Link } from 'react-router-dom';
import bgImg from '../../assets/auth.png';
import { useHistory } from "react-router";

function Login({ auth, logout }) {
    const history = useHistory();
    // const { isAuthenticated, user, token, authCategory } = auth;
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    useEffect(() => {
        logout();
    }, [])

    // const handleSubmit = () => {
    // console.log(values);
    // userlogin(values);
    // }
    const handleLogin = () => {
        if (!username || !password) {
            alert("Invalid email or password");
        } else {
            userlogin({ username, password }).then((data) => {
                if (data.error || !data) {
                    alert(data.error);
                } else {
                    localStorage.removeItem("user");
                    localStorage.setItem("user", JSON.stringify(data));
                    history.push("/");
                    window.location.reload(true);
                    alert("Logged in successfully");
                }
            });
        }
    }


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
                                <h1 className="auth-heading text-uppercase">Login</h1>
                            </div>
                            <div className='py-4'>
                                <div>
                                    <Form.Label className='text3'>Username</Form.Label>
                                    <InputGroup className="mb-3">
                                        <FormControl
                                            // placeholder="Recipient's username"
                                            aria-label="Recipient's username"
                                            aria-describedby="basic-addon2" placeholder="username"
                                            type="text"
                                            onChange={(e) => setUsername(e.target.value)}
                                            value={username}
                                            required
                                        />
                                        <InputGroup.Text id="basic-addon2"
                                        ></InputGroup.Text>
                                    </InputGroup>
                                </div>
                                <div>
                                    <Form.Label className='text3'>Password</Form.Label>
                                    <InputGroup className="mb-3">
                                        <FormControl
                                            // placeholder="Recipient's username"
                                            aria-label="Recipient's username"
                                            aria-describedby="basic-addon2" placeholder="Password"
                                            type="password"
                                            onChange={(e) => setPassword(e.target.value)}
                                            value={password}
                                            required
                                        />
                                        <InputGroup.Text id="basic-addon2" ></InputGroup.Text>
                                    </InputGroup>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '30px' }}>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Remember Me" />
                                    </Form.Group>
                                    <p className='text3'>Forget Password?</p>
                                </div>
                                <div style={{ marginTop: '50px' }}>
                                    <Button className='custom-btn1' style={{ float: 'right', width: '50%' }}
                                        onClick={handleLogin}>Login Now!</Button>
                                </div>
                            </div>
                        </div>
                        <div style={{ marginTop: '100px' }}>
                            <p className='text-center'>Don’t have an account?
                                <NavLink to={'/register'} style={{ textDecoration: 'none' }}>
                                    <span className='text3'> Register</span>
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
