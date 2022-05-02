import {
  faAngleRight,
  faBoxesStacked,
  faBurger,
  faClockRotateLeft,
  faDoorOpen,
  faLeaf,
  faNewspaper,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./sidebar.css";

const SideBar = () => {
  const [sideBarExpanded, setSidebarExpansionStatus] = useState(false);
  const [balance, setBalance] = useState("0.0");





  useEffect(() => {
    axios
      .get("http://localhost:8080/api/account/303059")
      .then((response) => {
        const balance = "" + response.data;
        console.log(balance);
        console.log(typeof balance);
        setBalance(balance);
      })
      .catch((error) => {
        console.log("error:" + error);
      });
  }, []);

  const toggleSideBar = (currentStatus) => {
    setSidebarExpansionStatus(!currentStatus);
  };

  return (
    <>
      <nav className={"sidebar" + (sideBarExpanded ? "" : " close")}>
        <header>
          <div className="image-text">
            <div className="text logo-text">
              <FontAwesomeIcon className="icon" icon={faLeaf} />
              <span className="name">NatusRest</span>
            </div>
          </div>
          <FontAwesomeIcon
            className="toggle"
            icon={faAngleRight}
            onClick={() => toggleSideBar(sideBarExpanded)}
          />
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
                <a href="/balanceview">
                  <FontAwesomeIcon className="icon" icon={faWallet} />
                  <span className="text nav-text">Saldo : R$ {balance}</span>
                  {/* Aqui jás o yolo que tem que mudar do SALDO */}
                </a>
              </li>

              <li className="nav-link">
                <a href="/stockview">
                  <FontAwesomeIcon className="icon" icon={faBoxesStacked} />
                  <span className="text nav-text">Estoque</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="/historyview">
                  <FontAwesomeIcon className="icon" icon={faClockRotateLeft} />
                  <span className="text nav-text">Histórico</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="/stockreportview">
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
