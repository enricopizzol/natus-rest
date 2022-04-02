import React from "react";
import ReactDOM from "react-dom";
import { Login } from "./components/Login";
import "./index.css";
import ShopView from "./views/Shopview";
ReactDOM.render(
  <React.StrictMode>
    <Login/>
  </React.StrictMode>,
  document.getElementById("root")
);
