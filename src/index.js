import React from "react";
import ReactDOM from "react-dom";
import { Login } from "./components/Login";
import "./index.css";
import ShopView from "./views/Shopview";
import StockView from "./views/StockView";
ReactDOM.render(
  <React.StrictMode>
    <StockView/>
  </React.StrictMode>,
  document.getElementById("root")
);
