import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getWishlistProducts } from "../../actions/Product";
import ProductCard from "../Home/ProductCard";

const Wishlist = ({ wishlist }) => {
  const [Wishlists, setWishlists] = useState();

  useEffect(() => {
    getWishlistProducts()
      .then((data) => {
        console.log(data);
        setWishlists(data.Wishlist);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [wishlist]);

  return (
    <div className="container mb-5">
      <div
        className="row p-2 align-items-stretch"
        style={{ marginTop: "113px" }}
      >
        <div className="big-text">
          <h1 className="mt-4 mb-1">Wishlist</h1>
        </div>
        {Wishlists
          ? Wishlists.map((product) => (
            <ProductCard
              name={product.name}
              description={product.description}
              after_sale_price={product.after_sale_price}
              url={product.image_urls}
              actual_price={product.actual_price}
              comesWishlist={true}
              product={product}
            />
          ))
          : (<div
            style={{
              height: "50vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>No Product Found!</h1>
          </div>)}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  wishlist: state.product.wishlistchanged,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
