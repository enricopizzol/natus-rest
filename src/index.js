import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./ProducList";
import ShopView from "./Shopview";
import PayMethod from "./payMethod";
ReactDOM.render(
  <React.StrictMode>
    <PayMethod/>
  </React.StrictMode>,
  document.getElementById("root")
);
