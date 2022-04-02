import React, { useState, useRef } from "react";
import "./sidebar.css";

const SideBar = () => {

    const [sideBarExpanded, setSidebarExpansionStatus] = useState(false);

    const toggleSideBar = (currentStatus) =>{
        setSidebarExpansionStatus(!currentStatus)
    }

    return(
        <>
            <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'/>
            <nav className={"sidebar" + (sideBarExpanded ? "" : " close")}>
                <header>
                    <div className="image-text">
                        <span className="image">
                            {/*<img src="logo.png" alt="">*/}
                        </span>

                        <div className="text logo-text">
                            <span className="name">NatusRest</span>
                        </div>
                    </div>
                    <i className='bx bx-chevron-right toggle' onClick = {() => toggleSideBar(sideBarExpanded)} ></i>
                </header>

                <div className="menu-bar">
                    <div className="menu">

                        <ul className="menu-links">
                            <li className="nav-link">
                                <a href="#">
                                    <i className='bx bx-home-alt icon' ></i>
                                    <span className="text nav-text">Dashboard</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="#">
                                    <i className='bx bx-bar-chart-alt-2 icon' ></i>
                                    <span className="text nav-text">Revenue</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="#">
                                    <i className='bx bx-bell icon'></i>
                                    <span className="text nav-text">Notifications</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="#">
                                    <i className='bx bx-pie-chart-alt icon' ></i>
                                    <span className="text nav-text">Analytics</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="#">
                                    <i className='bx bx-heart icon' ></i>
                                    <span className="text nav-text">Likes</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="#">
                                    <i className='bx bx-wallet icon' ></i>
                                    <span className="text nav-text">Wallets</span>
                                </a>
                            </li>

                        </ul>
                    </div>

                    <div className="bottom-content">
                        <li className="">
                            <a href="#">
                                <i className='bx bx-log-out icon' ></i>
                                <span className="text nav-text">Logout</span>
                            </a>
                        </li>
                      
                    </div>
                </div>
            </nav>
        </>
    );
};

export default SideBar;