import React from "react";
import "./stockView.css";
import SideBar from "../components/sidebar/sidebar";
import StockReport from "../components/Reports/stock";

const OrderHistoryView = () => {
  return (
    <>
      <SideBar/>
      <StockReport/>
    </>
  );
};


export default OrderHistoryView;
