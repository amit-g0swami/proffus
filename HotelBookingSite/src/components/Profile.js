import React, { useEffect, useState } from 'react'
import { db, firebase } from "../firebase";
import "./Profile.css";
import { Avatar } from "@material-ui/core";

function Profile() {
    const [userData, setUserData] = useState([]);
    const email = firebase.auth().currentUser?.email;
    useEffect(() => {
        if (email) {
            db.collection("users").doc(email).get().then(doc => {
                const newData = doc.data();
                setUserData(newData);
            }).catch((err) => {
                console.log(err)
            })
        }
    }, [email]);

    return (
        <div className="rightcard">
            <div className="rightcard__card">
                <div className="profilebg__image">
                    <img
                        src="https://www.technistone.com/color-range/image-slab/Starlight%20Black_SLAB_web.jpg"
                        alt=""
                    />
                </div>

                <div className="profile__userimage">
                    <div className="profile__userdp">
                        <Avatar className="post__avatarleftsection" alt="" src={userData?.photo} sx={{ width: 60, height: 60 }}>
                            {userData?.username?.[0]?.toUpperCase()}
                        </Avatar>
                    </div>
                    <div className="profile__username">
                        {userData ? (
                            <div className="usernamestyle">
                                <h4 style={{ marginBottom: '0' }}>{userData?.username}</h4>
                                <h5 style={{ marginTop: '0', marginBottom: '0' }}>{userData?.email}</h5>
                                <h6 style={{ marginTop: '0', color: "gray" }}>{userData?.owner_uid}</h6>
                            </div>
                        ) : (
                            <div className="usernamestyle">
                                <h4>User</h4>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile