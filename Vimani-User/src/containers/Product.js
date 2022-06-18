import React, { useEffect, useState } from 'react';
import './style.css';
import BreadCrumbComponent from './components/BreadCrumb';

import { Container, Row, Col, Form } from 'react-bootstrap';
// import { GetApprovedBlogs ,baseUrl} from '../../actions/user';
import CloseIcon from '@mui/icons-material/Close';
import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router";
import ProductCard from './ProductCard';
import { searchBarSetting } from "../actions/Account";
import { getBanner, getBrandsData, getSeasonData, getTodayDeal } from '../actions/Account';

const BreadData = [
    { label: 'Home', route: '/' },
    { label: 'Men', route: '/' },
    { label: 'Footerwear', route: '/' },
]

// let Products = [{
//     name: "shoe",
//     description: "edes",
//     after_sale_price: "232",
//     actual_price: "122",
//     url: "",
//     ProductDetails: "sa",
//     product: "da",
//     wishlist: "true",
//     pid: "1"
// }] 

function Product({ products, categories, filteredproducts, setSearchBar }) {
    const [Products, setProducts] = useState();
    const [seasonData, setSeasonData] = useState([]);

    useEffect(() => {
        getSeasonData().then((card) => {
            setSeasonData(card);
            setProducts([...seasonData]);
        });
    }, []);

    // window.scrollTo(0, 0);
    // let location = useLocation();
    // console.log(filteredproducts.length);

    const history = useHistory();
    const productDetail = (prod) => {
        history.push({
            pathname: "/productDetails",
            state: { product: prod, products: products },
        });
    };

    // useEffect(() => {
    //     setSearchBar(true);
    //     document.title = "Products";
    //     return () => {
    //         setSearchBar(false);
    //     };
    // }, []);

    return (
        <div style={{ paddingBottom: '50px' }}>
            <section>
                <Container>
                    <div style={{ marginTop: '50px' }}>
                        <BreadCrumbComponent data={BreadData} />

                    </div>

                    {/* <div style={{ marginTop: '50px' }}>
                        <div className='my-4'>
                            <h6 className='text3 text-dark'>FILTER BY</h6>
                        </div>
                        <div>
                            <Row>
                                {filteredproducts.length > 0
                                    ? filteredproducts.map((product) => (
                                        <ProductCard name={product.name}
                                            description={product.description}
                                            after_sale_price={product.after_sale_price}
                                            actual_price={product.actual_price}
                                            url={product.image_urls}
                                            ProductDetails={productDetail}
                                            product={product}
                                            wishlist={product.Wishlist} />
                                    ))
                                    : products.map((product) =>
                                        product.cid == location.state ? (
                                            <ProductCard name={product.name}
                                                description={product.description}
                                                after_sale_price={product.after_sale_price}
                                                actual_price={product.actual_price}
                                                url={product.image_urls}
                                                ProductDetails={productDetail}
                                                product={product}
                                                wishlist={product.Wishlist} />
                                        ) : (
                                            ""
                                        )
                                    )}
                            </Row>
                        </div>
                    </div> */}

                    <div style={{ marginTop: '50px' }}>
                        <div className='my-4'>
                            <h6 className='text3 text-dark'>SORT BY</h6>
                        </div>
                        <div>
                            <Row>
                                <Col lg={2}>
                                    <Form.Select className='text3' style={{ color: '#113B6B' }} aria-label="Default select example">
                                        <option >Relevant</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                        </div>
                    </div>

                </Container>
            </section>

            <section style={{ marginTop: '50px' }}>
                <Container>
                    <div className='my-4'>
                        <h6 className='text-center home-text1'>6 RESULTS FOUND</h6>
                    </div>
                    <Row>
                        {Products?.map((product) => (
                            <ProductCard
                                actual_price={product.actual_price}
                                ProductDetails={productDetail}
                                name={product.name}
                                description={product.description}
                                after_sale_price={product.sale_price}
                                price={product.actual_price}
                                url={product.option_set}
                                discount={product.discount}
                                slug={product.slug}
                                product={product}
                            />
                        ))
                        }
                    </Row>
                </Container>
            </section>

        </div>
    )
}
const mapStateToProps = (state) => ({
    category: state.product.categories,
    product: state.product.products,
    cart: state,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
// const mapStateToProps = (state) => ({
//     products: state.product.products,
//     categories: state.product.categories,
//     filteredproducts: state.product.filteredProducts,
// });

// const mapDispatchToProps = (dispatch) => ({
//     setSearchBar: (val) => {
//         dispatch(searchBarSetting(val));
//     },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Product);