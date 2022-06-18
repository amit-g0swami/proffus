import React, { Component, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Routes from './Routes/Route';
import Home from './containers/Home';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import Layout from './Routes/Layout';
import { AllProduct } from "./actions/Product";

function App() {

  // useEffect(() => {
  //   store.dispatch(loadUser());    
  // }, []);
  useEffect(() => {
    store.dispatch(loadUser());
    store.dispatch(AllProduct());
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
      <Provider store={store}>
        <Router>
          <Route component={Routes} />
        </Router>
      </Provider>

    </>
  );
}
export default App;
