import React from 'react'
import './SearchResult.css';
// import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
import { Button } from '@material-ui/core';
import { firebase } from "../firebase";

function SearchResult({
    img,
    location,
    title,
    description,
    star,
    price,
    total,
    book,
}) {
    const email = firebase.auth().currentUser.email;
    const addOrderToFireBase = () => {
        const db = firebase.firestore();
        db.collection("users").doc(email).collection("bookings")
            .add({
                img: img,
                location: location,
                title: title,
                description: description,
                star: star,
                price: price,
                total: total,
                book: book,
            }).then(() => {
                alert("Hotel booked !!")
            })
    }
    console.log(book)
    return (
        <div className='searchResult'>
            <img src={img} alt="" />
            {/* <FavoriteBorderIcon className="searchResult__heart" /> */}
            <Button className="searchResult__heart" onClick={() => {
                addOrderToFireBase();
            }}>Book Now</Button>
            <div className='searchResult__info'>
                <div className="searchResult__infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{description}</p>
                </div>

                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                        <StarIcon className="searchResult__star" />
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>
                    <div className='searchResults__price'>
                        <h2>${price}/night</h2>
                        <p>${total} total</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult