import React, { useState } from "react";
import "./Search.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import PeopleIcon from "@material-ui/icons/People";
import { Button } from "@material-ui/core";
import { useNavigate } from 'react-router-dom';

function Search() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [guests, setGuests] = useState();
    const navigate = useNavigate();

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
        // console.log("start Date", ranges.selection.startDate, "end Date", ranges.selection.endDate);
    }
    const handle = () => {
        if (guests < 1 || guests == null) {
            alert("please enter number of guests");
        }
        else {
            navigate('/search');
        }
    }
    return (
        <div className="search">
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
            <h4 style={{ backgroundColor: 'lightgray' }}>
                Number of guests <PeopleIcon />
            </h4>
            <div className="search__div">
                <div className="search__input" > <input type="number" min={1} value={guests} onChange={(e) => setGuests(e.target.value)} placeholder="Number of People" style={{ backgroundColor: 'lightgray' }} /></div>
                <Button onClick={handle}>Search</Button>
            </div>

        </div>
    );
}

export default Search;