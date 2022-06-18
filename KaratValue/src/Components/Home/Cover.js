import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "./Cover.css";

//AliceCarousel
import AliceCarousel from "react-alice-carousel";

// Import css files
import "react-alice-carousel/lib/alice-carousel.css";

function Cover(banners) {
  const handleDragStart = (e) => e.preventDefault();
  const items = [];

  if (banners.banners) {
    banners.banners.map((banner) => {
      items.push(
        <img
          src={banner.b_url}
          className="img-fluid-modify"
          onDragStart={handleDragStart}
          role="presentation"
          alt={banner.name}
        ></img>
      );
    });
  }
  return (
    <div>
      <div className="cover"><p className='cover__quote'>
        Create a timeless collection with our fine pieces of Gold and diamond jewellery.
      </p></div>
      <AliceCarousel
        autoPlay={true}
        autoPlayInterval={2000}
        infinite={true}
        keyboardNavigation={true}
        disableButtonsControls={true}
        mouseTracking
        items={items}
      />
    </div>
  );
}
export default Cover;
