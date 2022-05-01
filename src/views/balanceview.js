import React from "react";
import "./balanceview.css";
import Balance from "../components/balance/balance";
import SideBar from "../components/sidebar/sidebar";

const Balanceview = () => {
  return (
    <>
        <div className="fixbalance">
          <SideBar/>  
          <Balance/>
        </div>
    </>
  );
};


export default Balanceview;
