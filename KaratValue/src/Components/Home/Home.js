import React, { useState, useEffect } from "react";
import Cover from "./Cover";
import Footer from "../Component/Footer";
import Brands from "./Brands/Brands";
import Quality from "./Quality/Quality";
import Trending from "./Trending/Trending";
import Quote from "./Quote/Quote";
import Reviews from "./Reviews/Reviews";
import { getBanner } from "../../actions/Product";
import Shop from "./Shop/Shop";

function Home() {
  const [Banners, setBanners] = useState();

  useEffect(() => {
    getBanner().then((banner) => {
      setBanners(banner);
    });
    document.title = "Home Page";
  }, []);
  return (
    <div style={{ width: "100vw" }}>
      <Cover banners={Banners} />
      {/* <Quote /> */}
      {/* <Shop /> */}
      <Trending />
      <Quality />
      {/* <Brands /> */}
      <Reviews />
      <Footer />
    </div>
  );
}

export default Home;
