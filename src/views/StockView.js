import React from "react";
import "./stockView.css";
import Stock from "../components/stock/stock";
import SideBar from "../components/sidebar/sidebar";

const StockView = () => {
  return (
    <>
        <div className="fixstock">
          <SideBar/>  
          <Stock/>
        </div>
        
    </>
  );
};


export default StockView;
