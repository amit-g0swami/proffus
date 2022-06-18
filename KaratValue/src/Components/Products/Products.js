import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import ProductCard from "../Home/ProductCard";
import { searchBarSetting } from "../../actions/Account";
const Products = ({ product, cart, filteredproducts, setSearchBar }) => {
  let history = useHistory();
  document.title = "Trending Products";

  const productDetail = (prod) => {
    history.push({
      pathname: "/productDetails",
      state: { product: prod, products: product },
    });
  };
  useEffect(() => {
    setSearchBar(true);
    document.title = "Products";
    return () => {
      setSearchBar(false);
    };
  }, []);
  return (
    <div className="container mb-5">
      <div className="big-text" style={{ marginTop: "180px" }}>
        <h1>Trending Products</h1>
      </div>
      <div className="row p-3 align-items-stretch">
        {filteredproducts.length > 0
          ? filteredproducts.map((product) => (
            <ProductCard
              name={product.name}
              description={product.description}
              after_sale_price={product.after_sale_price}
              url={product.image_urls}
              actual_price={product.actual_price}
              product={product}
              ProductDetails={productDetail}
              wishlist={product.Wishlist}
            />
          ))
          : product
            ? product.map((product) =>
              product ? (
                <ProductCard
                  name={product.name}
                  description={product.description}
                  after_sale_price={product.after_sale_price}
                  url={product.image_urls}
                  actual_price={product.actual_price}
                  product={product}
                  ProductDetails={productDetail}
                  wishlist={product.Wishlist}
                />
              ) : (
                ""
              )
            )
            : ""}
        {/* product.top_trending  */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  product: state.product.products,
  filteredproducts: state.product.filteredProducts,
  cart: state,
});

const mapDispatchToProps = (dispatch) => ({
  setSearchBar: (val) => {
    dispatch(searchBarSetting(val));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
