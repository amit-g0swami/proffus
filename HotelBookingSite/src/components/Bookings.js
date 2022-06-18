import React, { useEffect, useState } from 'react'
import { db, firebase } from "../firebase";
import StarIcon from "@material-ui/icons/Star";
import { Button } from '@material-ui/core';

function Bookings() {
    const email = firebase.auth().currentUser?.email;
    const [bookingData, setBookingData] = useState();
    useEffect(() => {
        if (email) {
            db.collection("users").doc(email).collection("bookings").onSnapshot((snapshot) => {
                setBookingData(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        details: doc.data(),
                    }))
                );
            });
        }
    }, [email]);
    return (
        <div>
            {bookingData?.map(({ id, details }) => (
                <div className='searchResult'>
                    <img src={details.img} alt="" />
                    {/* <Button className="searchResult__heart" onClick={() => {

                    }}>Remove Now</Button> */}
                    <div className='searchResult__info'>
                        <div className="searchResult__infoTop">
                            <p>{details.location}</p>
                            <h3>{details.title}</h3>
                            <p>____</p>
                            <p>{details.description}</p>
                        </div>

                        <div className="searchResult__infoBottom">
                            <div className="searchResult__stars">
                                <StarIcon className="searchResult__star" />
                                <p>
                                    <strong>{details.star}</strong>
                                </p>
                            </div>
                            <div className='searchResults__price'>
                                <h2>${details.price}/night</h2>
                                <p>${details.total} total</p>
                            </div>
                        </div>
                    </div>
                </div>))}
        </div>

    )
}

export default Bookings