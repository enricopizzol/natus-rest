import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import yolo from "./exemplo";
import {
    faLeaf, 
    faAngleRight,
    faBurger, 
    faWallet, 
    faBoxesStacked, 
    faNewspaper, 
    faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import "./sidebar.css";


const SideBar = () => {

    const [sideBarExpanded, setSidebarExpansionStatus] = useState(false);

    const toggleSideBar = (currentStatus) =>{
        setSidebarExpansionStatus(!currentStatus)
    }

    return(
        <>
            <nav className={"sidebar" + (sideBarExpanded ? "" : " close")}>
                <header>
                    <div className="image-text">

                        <div className="text logo-text">
                            <FontAwesomeIcon className="icon" icon={faLeaf} />
                            <span className="name">NatusRest</span>
                        </div>
                    </div>
                    <FontAwesomeIcon className = "toggle" icon = {faAngleRight} onClick = {() => toggleSideBar(sideBarExpanded)}/>
                </header>

         
                <div className="menu-bar">
                    <div className="menu">
                        <ul className="menu-links">
                            <li className="nav-link">
                                {
                                <a href="/shopview">
                                     <FontAwesomeIcon className="icon" icon={faBurger} />
                                     <span className="text nav-text">Cardápio</span>
                                </a>
                                }
                            </li>
                            
                            <li className="nav-link">
                                <li href="">
                                    <FontAwesomeIcon className="icon" icon={faWallet} />
                                    <span className="text nav-text">Saldo : R$ {parseFloat(yolo())}</span>
                                    {/* Aqui jás o yolo que tem que mudar do SALDO */}
                                </li>
                            </li>

                            <li className="nav-link">
                                <a href="/stockview">
                                    <FontAwesomeIcon className="icon" icon={faBoxesStacked} />
                                    <span className="text nav-text">Estoque</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="#">
                                    <FontAwesomeIcon className="icon" icon={faNewspaper} />
                                    <span className="text nav-text">Relatórios</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="bottom-content">
                        <li className="">
                            <a href="/">
                                <FontAwesomeIcon className="icon" icon={faDoorOpen} />
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