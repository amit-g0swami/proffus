import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import { AllProduct } from "./actions/Product";
import Routes from "./routes/Route";
import { getCartProduct } from "./actions/Product";

function App() {
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
