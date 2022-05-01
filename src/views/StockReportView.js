import React from "react";
import styled from "styled-components";
import "./StockReportView.css";
import SideBar from "../components/sidebar/sidebar";
import StockReport from "../components/Reports/stock";

const OrderHistoryView = () => {
  return (
    <>
    <div className="fixReportView">
      <SideBar/>
      <StockReport/>
    </div>
    </>
  );
};

export default OrderHistoryView;
