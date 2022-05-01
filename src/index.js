import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Login } from "./components/Login";
import Registration from "./components/registration/registration.jsx";
import "./index.css";
import ShopView from "./views/Shopview";
import StockView from "./views/StockView";
import OrderHistoryView from "./views/OrderHistoryView";
import StockReportView from "./views/StockReportView";
import Balanceview from "./views/balanceview";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Login />} />
        <Route path = "/registration" element={<Registration />} />
        <Route path = "/historyview" element = {<OrderHistoryView />} />  
        <Route path = "/shopview" index element={< ShopView />} />
        <Route path = "/stockview" index element={< StockView />} />
        <Route path = "/stockreportview" element={< StockReportView />} />
        <Route path = "/balanceview" element={<Balanceview/>} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
