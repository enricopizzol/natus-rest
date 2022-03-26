
import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import './payMethod.css';


const PayMethod = () => {
  const [creditSelected, setCreditValue] = useState(false);
  const [debitSelected, setDebitValue] = useState(false);
  const [cashSelected, setCashValue] = useState(false);

  const toggleComplete = () => {
    setCreditValue();
  };

  return (
    <>
      <div className="item-list">
        <div className="item-container">
          <div className="item-name" onClick={() => toggleComplete()}>
            {creditSelected ? (
              <>{console.log("entrou no credito")};</>
            ) : (
              <>
                <FontAwesomeIcon icon={faCircle} />
                <span>{"credito"}</span>
              </>
            )}
          </div>
          <div className="item-name" onClick={() => toggleComplete()}>
            {creditSelected ? (
              <>{console.log("entrou no credito")};</>
            ) : (
              <>
                <FontAwesomeIcon icon={faCircle} />
                <span>{"debito"}</span>
              </>
            )}
          </div>
          <div className="item-name" onClick={() => toggleComplete()}>
            {creditSelected ? (
              <>{console.log("entrou no credito")};</>
            ) : (
              <>
                <FontAwesomeIcon icon={faCircle} />
                <span>{"dinheiro"}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};



export default PayMethod;