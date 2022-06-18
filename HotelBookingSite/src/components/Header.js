import React, { useState, useEffect } from "react";
import "./Header.css";
// import SearchIcon from "@material-ui/icons/Search";
// import LanguageIcon from "@material-ui/icons/Language";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { auth, db } from "../firebase";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Input } from "@material-ui/core";
import { useNavigate } from 'react-router-dom';
import Logo from "../assets/logo.png";

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%,-${left}%)`,
    };
}

const usestyles = makeStyles((theme) => ({
    paper: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid gray",
        boxShadow: 24,
        p: 4,
    },
}));


function Header() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const classes = usestyles();
    const [modelStyle] = useState(getModalStyle);
    const [openSignIn, setOpenSignIn] = useState(false);
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState(null);
    const [number, setNumber] = useState("");

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                // console.log(authUser);
                setUser(authUser);
            } else {
                setUser(null);
            }
        });

        return () => {
            unsubscribe();
        };
    }, [user, username]);


    const signUp = async (event) => {
        event.preventDefault();
        try {
            const authUser = await auth
                .createUserWithEmailAndPassword(email, password)
            db.collection('users')
                .doc(authUser.email)
                .set({
                    owner_uid: authUser.uid,
                    username: username,
                    email: authUser.email,
                });
        } catch (error) {
            alert(error.message);
        }
        setOpen(false);
    };

    const signIn = async (event) => {
        event.preventDefault();
        try {
            await auth.signInWithEmailAndPassword(email, password)
            setOpenSignIn(false);
        } catch (error) {
            alert(error.message)
        }
    };

    return (
        <div className="header__app">
            <Modal className="modal" open={open} onClose={() => setOpen(false)}>
                <div style={modelStyle} className={classes.paper}>
                    <form className="app__signup" style={{ padding: "50px" }}>
                        <Input
                            placeholder="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            style={{ color: "white" }}
                        />
                        <Input
                            placeholder="email"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ color: "white" }}
                        />
                        <Input
                            placeholder="Phone no."
                            type="number"
                            max={10}
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            style={{ color: "white" }}
                        />
                        <Input
                            placeholder="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ color: "white" }}
                        />
                        <Button
                            type="submit"
                            onClick={signUp}
                            style={{ backgroundColor: "gray" }}
                        >
                            Sign Up
                        </Button>
                    </form>
                </div>
            </Modal>
            <Modal open={openSignIn} onClose={() => setOpenSignIn(false)}>
                <div style={modelStyle} className={classes.paper}>
                    <form className="app__signup" style={{ padding: "50px" }}>
                        <Input
                            placeholder="email"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ color: "white" }}
                        />
                        <Input
                            placeholder="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ color: "white" }}
                        />
                        <Button
                            type="submit"
                            onClick={signIn}
                            style={{ backgroundColor: "gray" }}
                        >
                            Sign In
                        </Button>
                    </form>
                </div>
            </Modal>

            <Link to="/" style={{ textDecoration: 'none' }}>
                <img
                    className="logo__header"
                    src={Logo}
                    alt=""
                />
                {/* <h2 className="logo__header">
                    LOGO
                </h2> */}
            </Link>
            <div className="header__center">
                {/* <input type="text" placeholder="search" />
                <SearchIcon /> */}
                <div className="header__center__button" onClick={() => navigate('/')}>Home</div>
                <div className="header__center__button">Rooms & Suits</div>
                <div className="header__center__button">Offers</div>
                <div className="header__center__button" onClick={() => navigate('/my-bookings')}>My Bookings</div>
                <div className="header__center__button" onClick={() => navigate('/profile')}>Profile</div>
            </div>
            <div className="header__right">
                {/* <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar /> */}
                {/* <Button className="header__button">Book Now</Button> */}
                {user ? (
                    <div className="app__logoutContainer">
                        <Button className="header__button" onClick={() => auth.signOut()}>
                            Logout
                        </Button>
                    </div>
                ) : (
                    <div className="app__loginContainer">
                        <Button className="header__button" onClick={() => setOpen(true)}>Sign Up</Button>
                        {/* <Button className="header__button" onClick={() => setOpenSignIn(true)}>Sign In</Button> */}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header;