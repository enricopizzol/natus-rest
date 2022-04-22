import React from "react";
import "./stockView.css";
import Stock from "../components/stock/stock";
import SideBar from "../components/sidebar/sidebar";

const StockView = () => {
  return (
    <>
      <SideBar/>
      <Stock/>
    </>
  );
};


export default StockView;
