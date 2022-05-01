import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Login } from "./components/Login";
import "./index.css";
import ShopView from "./views/Shopview";
import StockView from "./views/StockView";
import Balanceview from "./views/balanceview";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Login />} />
        <Route path = "/shopview" index element={< ShopView />} />
        <Route path = "/stockview" index element={< StockView />} />
        <Route path = "/balanceview" element={<Balanceview/>} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));