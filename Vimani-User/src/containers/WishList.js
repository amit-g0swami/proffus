import React, { useState, useEffect } from 'react';
import './style.css';
import BreadCrumbComponent from './components/BreadCrumb';
import { connect } from "react-redux";
import { Button, Card, Container, Row, Col, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import { GetApprovedBlogs ,baseUrl} from '../../actions/user';
import HeaderImg from '../assets/product1.png';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { getWishlistProducts } from "../actions/Product";
import ProductCard from './ProductCard';

const BreadData = [
    { label: 'Wishlist', route: '/' },
]


const Wishlist = ({ wishlist }) => {
    const [Wishlists, setWishlists] = useState();
    let size = Wishlists?.length;
    useEffect(() => {
        getWishlistProducts()
            .then((data) => {
                console.log("wishlist", data);
                setWishlists(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [wishlist]);

    return (
        <div style={{ paddingBottom: '50px' }}>
            <section style={{ marginTop: '50px' }}>
                <Container>
                    <div>
                        <BreadCrumbComponent data={BreadData} />
                    </div>
                    {
                        Wishlists ? <div className='my-4'>
                            <h6 className='text-center text3 text-dark' style={{ fontSize: '24px' }}>
                                <span className='home-text1'>{size}</span> ITEMS IN YOUR WISHLIST</h6>
                        </div> : (<div
                            style={{
                                height: "50vh",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <h1>No Product Found!</h1>
                        </div>)
                    }
                    {Wishlists ?
                        Wishlists.map((product) => (
                            <ProductCard
                                name={product.name}
                                description={product.description}
                                after_sale_price={product.sale_price}
                                price={product.actual_price}
                                url={product.option_set[0].productimage_set[0].image}
                                comesWishlist={true}
                                discount={product.discount}
                                slug={product.slug}
                                product={product}
                            />
                        )) : (
                            <></>
                        )
                    }
                </Container>
            </section>

        </div>
    )
};

const mapStateToProps = (state) => ({
    // HomeComponent: state.product.HomeComponentchanged,
    wishlist: state.product.wishlistchanged,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
