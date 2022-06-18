import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import Card from "./Card";
import Footer from "./Footer";
import Categories from "./Categories";
import "./Home.css";
import Advantages from "./Advantages";
// import Carousel from "react-elastic-carousel";
import Item from "./Item";
import { auth } from "../firebase";

let p1 = require("../assets/baba.jpg");
let p2 = require("../assets/krishna.jpg");
let p3 = require("../assets/kkrishna.jpg");
let p4 = require("../assets/p4.png");

const breakPoints = [
   { width: 1, itemsToShow: 1 },
   { width: 550, itemsToShow: 2 },
   { width: 768, itemsToShow: 3 },
   { width: 1200, itemsToShow: 4 },
];

function Home({ setBook }) {
   const [user, setUser] = useState(null);
   const [username, setUsername] = useState("");
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
   return (
      <div className="home">
         <Banner user={user} setBook={setBook} />
         <div className="home__categories">
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: 'center', flexDirection: 'column', marginTop: "180px", marginBottom: "90px", height: "15vh" }}>
               <div style={{ backgroundColor: '#EB8A04', height: "170px", width: '50%', zIndex: "-1", position: 'absolute' }}>
               </div>
               <div style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                  background: "transparent",
                  zIndex: "1",
                  marginRight: "480px"
               }}>
                  <h1 style={{ color: 'blue', marginBottom: '0px' }} className="quote__h1">Full service, at your disposal</h1>
                  <h4 style={{ display: "flex", alignItems: "center", justifyContent: 'center', color: "gray", marginTop: '0px' }} className="quote__h4">More than you can Imagine.</h4>
               </div>
            </div>
            <Categories />
            <div style={{ display: "", alignItems: "center", justifyContent: 'center', flexDirection: 'column', height: "15vh", marginTop: "60px", marginBottom: "120px" }}>
               <div style={{ backgroundColor: '#EB8A04', height: "170px", width: '50%', zIndex: "-1", position: 'absolute' }}>
               </div>
               <div style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                  background: "transparent",
                  zIndex: "1"
               }}>
                  <h1 style={{ color: 'blue', marginBottom: '0px' }} className="quote__h1">Choose What’s Best for You!</h1>
                  <h4 className="quote__h4" style={{ display: "flex", alignItems: "center", justifyContent: 'center', color: "gray", marginTop: '0px' }}>Make your vacation Comfortable.</h4>
               </div>
            </div>
         </div>
         <div className="home__section">
            <Card src={p1} title="Hotel Baba Deluxe by RCG Hotel" description="Start your weekend at the Hotel Baba Deluxe by RCG Hotel with a full breakfast, then visit the Museum and Art Gallery, home to a beautiful collection of historical documents, Indian art and a beautiful exhibition on the region's history." />
            <Card src={p2} title="Hotel Krishna by RCG Hotels" description="Start your weekend at the Hotel Krishna by RCG Hotels with a full breakfast, then visit the Museum and Art Gallery, home to a beautiful collection of historical documents, Indian art and a beautiful exhibition on the region's history." />
            <Card src={p3} title="Hotel krishna Deluxe by RCG Hotels" description="Start your weekend at the Hotel krishna Deluxe by RCG Hotels with a full breakfast, then visit the Museum and Art Gallery." />
         </div>
         <div className="" style={{}}>
            {/* <div style={{
               left: "120px"
            }}>
               <Card src={p4} title="Family Room" description="Specially designed keeping in mind the needs of a modern-day traveller, these rooms have been thoughtfully designed with space efficient straight line furniture and comfortable beds with all modern day amenities." price="200$" />
            </div> */}
            <h1 className="quotes__card__">
               RCG Hotels stand as a true paragon of world class hospitality and have some of the best luxury hotels and resorts in India, Book handpicked hotels with certified quality.
            </h1>
         </div>
         <div style={{ display: "flex", alignItems: "flex-end", justifyContent: 'center', flexDirection: 'column', height: "15vh", marginTop: "110px", marginBottom: "80px" }}>
            <div style={{ backgroundColor: '#EB8A04', height: "170px", width: '50%', zIndex: "-1", position: 'absolute' }}>
            </div>
            <div style={{
               display: "flex",
               alignItems: "center",
               flexDirection: "column",
               justifyContent: "center",
               background: "transparent",
               zIndex: "1",
               marginRight: "480px"
            }}>
               <h1 style={{ color: 'blue', marginBottom: '0px' }} className="quote__h1">Luxury Redefined</h1>
               <h4 style={{ display: "flex", alignItems: "center", justifyContent: 'center', color: "gray", marginTop: '0px' }} className="quote__h4">Luxury is Personal</h4>
            </div>
         </div>
         <div className="some__quotes"> <h4>
            RCG Hotels stand as a true paragon of world class hospitality and have some of the best luxury hotels and resorts in India. They are synonymous with excellence in hospitality and being able to offer unforgettable holiday and stay experiences to guests in the most exquisite settings.With "Stay with us, Stay with nature" being the sustained outlook of this luxury hotel chain, a stay at any of its properties truly brings guests closer to a sense of wellbeing and oneness with nature. RCG Hotels offers a safe and secure environment, authentic hospitality, thoughtful service, lavish accommodation and world class facilities.
         </h4></div>
         <Advantages />
         <div style={{ display: "", alignItems: "", justifyContent: '', flexDirection: 'column', height: "15vh", marginTop: "100px", marginBottom: "140px" }}>
            <div style={{ backgroundColor: '#EB8A04', height: "170px", width: '50%', zIndex: "-1", position: 'absolute', }}>
            </div>
            <div style={{
               display: "flex",
               alignItems: "center",
               flexDirection: "column",
               justifyContent: "center",
               background: "transparent",
               zIndex: "1"
            }}>
               <h1 style={{ color: 'blue', marginBottom: '0px' }} className="quote__h1">They Loved Our Hospitality</h1>
               <h4 style={{ display: "flex", alignItems: "center", justifyContent: 'center', color: "gray", marginTop: '0px' }} className="quote__h4">Explore the world with Ease.</h4>
            </div>
         </div>
         <div>
            {/* <Carousel breakPoints={breakPoints}>
               {
                  [1, 2, 2, 2, 2].map((index) =>
                     <Item />
                  )
               }
            </Carousel> */}
         </div>
         <Footer />
      </div >
   );
}

export default Home;


