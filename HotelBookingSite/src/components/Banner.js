import React, { useState } from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";
import Search from "./Search";
// import { useHistory } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { DateRange } from "react-date-range";
import { format } from "date-fns";

let vector = require("../assets/Vector.png");
let adult = require("../assets/adult.png");
let child = require("../assets/child.png");

function Banner({ user, setBook }) {
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
    });
    const [showSearch, setShowSearch] = useState(false);
    // const history = useHistory();
    const navigate = useNavigate();

    const handle = () => {
        if (!user) {
            alert("You have to login !!");
        }
        else {
            setBook("children :-" + options.children + ", adults :-" + options.adult + ", arrivel date :- " + date[0].startDate + ", checkout :-" + date[0].endDate)
            navigate('/search');
        }
    }
    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };
    return (
        <>
            <div className="banner__app">
                <div className="banner__search">
                    {showSearch &&
                        <DateRange
                            editableDateInputs={true}
                            onChange={(item) => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className="date"
                            minDate={new Date()}
                        />
                    }
                    {/* {user ? <Button
                        onClick={() => setShowSearch(!showSearch)}
                        className="banner__searchButton"
                        variant="outlined"
                    >
                        {showSearch ? "Hide" : "Search Dates"}
                    </Button> : <></>} */}
                </div>
                <div className="banner__info">
                    <h4>
                        Enjoy Your Vacation With RCG Hotels.
                    </h4>
                    <h1 style={{ marginTop: "0px", color: '#EB8A04' }}>Let us plan you a perfect India Holiday.</h1>
                    {/* <Button onClick={() => history.push("./search")} variant="outlined">Explore Nearby</Button> */}
                    <Button style={{
                        width: " 236px",
                        height: "54px ",
                        top: "481px !important",
                        background: "#EB8A04 ",
                        fontFamily: "Lexend",
                        fontSize: "16px",
                        fontWeight: "400",
                        lineHeight: "20px",
                        letterSpacing: "0em",
                        textAlign: "center",
                    }} onClick={handle} variant="outlined">Explore Now</Button>
                </div>
            </div >
            <div className="booking_div">
                <div className="booking">
                    <div style={{ display: 'flex', alignItem: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                        <div className="banner__main__div" >
                            <div className="booking__header">
                                <img className="booking__vector" alt="" src={vector} />
                                <h4>Arrival Date</h4>
                                <img className="booking__vector2" src="https://img.icons8.com/ios-filled/24/000000/sort-down.png" style={{ height: '24px' }} onClick={() => setShowSearch(true)} />
                            </div>
                            <div className="booking__bof">
                                <h2>{`${format(date[0].startDate, "dd MMM")}`}</h2>
                                <h4>{`${format(date[0].startDate, "EEEE")}`}</h4>
                            </div>
                        </div>
                        <div className="banner__main__div">
                            <div className="booking__header">
                                <img className="booking__vector" alt="" src={vector} />
                                <h4>Check Out</h4>
                                <img className="booking__vector2" src="https://img.icons8.com/ios-filled/24/000000/sort-down.png" style={{ height: '24px' }} onClick={() => setShowSearch(false)} />
                            </div>
                            <div className="booking__bof">
                                <h2>{`${format(
                                    date[0].endDate,
                                    "dd MMM"
                                )}`}</h2>
                                <h4>{`${format(date[0].endDate, "EEEE")}`}</h4>
                            </div>
                        </div>
                    </div>

                    <div className="banner__main__div">
                        <div className="booking__header">
                            <img className="booking__vector" alt="" src={adult} />
                            <h4>Adults</h4>
                        </div>
                        <div className="booking__bo">
                            <h2>{`${options.adult}`}</h2>
                            <div className="booking_noooo">
                                <div onClick={() => handleOption("adult", "i")}>
                                    <img src="https://img.icons8.com/material/24/000000/sort-up--v2.png" style={{ height: '28px' }} />
                                </div>
                                <div>
                                    <button onClick={() => handleOption("adult", "d")} style={{ border: 'none', background: 'transparent' }} onClick={() => handleOption("adult", "d")} disabled={options.adult <= 1}>
                                        <img src="https://img.icons8.com/ios-filled/24/000000/sort-down.png" style={{ height: '24px' }} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="banner__main__div">
                        <div className="booking__header">
                            <img className="booking__vector" alt="" src={child} />
                            <h4>Children</h4>
                        </div>
                        <div className="booking__bo">
                            <h2>{`${options.children}`}</h2>
                            <div className="booking_noooo">
                                <div >
                                    <button style={{ border: 'none', background: 'transparent' }} onClick={() => handleOption("children", "i")}>
                                        <img src="https://img.icons8.com/material/24/000000/sort-up--v2.png" style={{ height: '28px' }} />
                                    </button>
                                </div>
                                <div>
                                    <button style={{ border: 'none', background: 'transparent' }} onClick={() => handleOption("children", "d")} disabled={options.children <= 0}>
                                        <img src="https://img.icons8.com/ios-filled/24/000000/sort-down.png" style={{ height: '24px' }} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="banner__main__div" style={{ paddingTop: "0px" }}>

                        <h4 className="fadded__text">Hope
                            You Have A
                            Nice Exerience...</h4>
                        <div className="booking__bottom">
                            <button onClick={handle}>Check Availability</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Banner;