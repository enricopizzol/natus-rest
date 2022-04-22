import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Login } from "./components/Login";
import "./index.css";
import ShopView from "./views/Shopview";
import StockView from "./views/StockView";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Login />} />
        <Route path = "/shopview" index element={< ShopView />} />
        <Route path = "/stockview" index element={< StockView />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
