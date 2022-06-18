import React, { useEffect, useState } from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";
import { db } from "../firebase";

function SearchPage({ book }) {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        db.collection("hotels").onSnapshot((snapshot) => {
            setRooms(
                snapshot.docs.map((doc) => ({
                    rooms: doc.data(),
                }))
            );
        });
    }, []);

    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 stays · 26 august to 30 august · 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            {rooms?.map(({ id, rooms }) => (
                <SearchResult
                    key={id}
                    img={rooms.img}
                    location={rooms.location}
                    title={rooms.title}
                    description={rooms.description}
                    star={rooms.star}
                    price={rooms.price}
                    total={rooms.total}
                    book={book}
                />
            ))}
        </div>
    );
}

export default SearchPage;