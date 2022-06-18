import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import "bootstrap/dist/css/bootstrap.min.css";
export const types = {
  INFO: "info",
  SUCCESS: "success",
  ERROR: "error",
};
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: "30px",
  type: types.INFO,
  // you can also just use 'scale'
  transition: transitions.SCALE,
};
ReactDOM.render(
  <AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider>,
  document.getElementById("root")
);
