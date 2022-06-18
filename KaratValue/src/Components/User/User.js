import React, { useState, useEffect } from "react";
import { Tabs, Tab, Table } from "react-bootstrap";
import { getUserDetails } from "../../actions/Account";

import "./User.css";

const User = () => {
  const [key, setKey] = useState("home");
  const [userDetails, setuserDetails] = useState();
  const [moreUserDetails, setmoreUserDetails] = useState();

  useEffect(() => {
    document.title = "Profile";
    getUserDetails()
      .then((res) => {
        console.log(res);
        setuserDetails(res.Details);
        setmoreUserDetails(res.address);
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);

  return (
    <div className="profile-main">
      <div id="user" className="container profile">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="home" title="Profile Details">
            <div className="userProfile">
              <div className="userProfile__heading">
                <h2>MY PROFILE</h2>
              </div>
              <div className="userinfo">
                <div className="row__1">
                  <div className="row__1_1">
                    <img src="https://img.icons8.com/ios-filled/50/000000/user-male-circle.png" />
                    <input type="text" placeholder={moreUserDetails?.first_name} />
                  </div>
                  <div className="row__1_1">
                    <img src="https://img.icons8.com/ios-filled/50/000000/user-male-circle.png" />
                    <input type="text" placeholder={moreUserDetails?.last_name} />
                  </div>
                </div>
                <div className="row__1">
                  <div className="row__1_1">
                    <img src="https://img.icons8.com/ios-filled/50/000000/worldwide-location--v1.png" />
                    <input type="text" placeholder={userDetails?.email} />
                  </div>
                  <div className="row__1_1">
                    <img src="https://img.icons8.com/ios-filled/50/000000/ringing-phone.png" />
                    <input type="text" placeholder={moreUserDetails?.telephone} />
                  </div>
                </div>
                <div className="row__2">
                  <div className="row__1_2">
                    <img src="https://img.icons8.com/ios-filled/50/000000/home.png" />
                    <input type="text" placeholder={moreUserDetails?.address_1 + " " + moreUserDetails?.address_2 + " " + moreUserDetails?.city + " " + moreUserDetails?.pin_code + " " + moreUserDetails?.state + " " + moreUserDetails?.country} />
                  </div>
                </div>
              </div>
            </div>
          </Tab>

          <Tab Tab eventKey="order" title="Order Details" >
            <div class="" style={{ width: "100%", height: "450px", overflowy: "hidden" }}>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">An item</li>
              </ul>
            </div>
          </Tab >
        </Tabs >
      </div >
    </div >
  );
};

export default User;
