import React from "react";
import "./OrderHistoryView.css";
import SideBar from "../components/sidebar/sidebar";
import OrderHistory from "../components/orderHistory/orderHistory";

const OrderHistoryView = () => {
  return (
    <>
      <div className="fixOrderHistoryView">
        <SideBar/>
        <OrderHistory/>
      </div>
    </>
  );
};


export default OrderHistoryView;
