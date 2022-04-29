import React from "react";
import "./stockView.css";
import SideBar from "../components/sidebar/sidebar";
import OrderHistory from "../components/orderHistory/orderHistory";

const OrderHistoryView = () => {
  return (
    <>
      <SideBar/>
      <OrderHistory/>
    </>
  );
};


export default OrderHistoryView;
