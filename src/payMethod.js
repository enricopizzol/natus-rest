import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "./payMethod.css";

const PayMethod = () => {
  const [creditSelected, setCreditValue] = useState(false);
  const [debitSelected, setDebitValue] = useState(false);
  const [cashSelected, setCashValue] = useState(false);
  const [currentOption, setCurrentOption] = useState("");

  const toggleCredit = (value) => {
    disableLastToggle(currentOption);
    setCurrentOption("credit");
    setCreditValue(!value);
  };
  const toggleDebit = (value) => {
    disableLastToggle(currentOption);
    setCurrentOption("debit");
    setDebitValue(!value);
  };
  const toggleCash = (value) => {
    disableLastToggle(currentOption);
    setCurrentOption("cash");
    setCashValue(!value);
  };

  const disableLastToggle = (option) => {
    if (option === "credit") {
      setCreditValue(false);
    }
    if (option === "debit") {
      setDebitValue(false);
    }
    if (option === "cash") {
      setCashValue(false);
    }
  };

  return (
    <>
      <div className="item-list">
        <div className="item-container">
          <div
            className="item-name"
            onClick={() => toggleCredit(creditSelected)}
          >
            {creditSelected ? (
              <>
                <FontAwesomeIcon icon={faCheckCircle} />
                <span>{"credito"}</span>
                {console.log("entrou no credito")}
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faCircle} />
                <span>{"credito"}</span>
              </>
            )}
          </div>
          <div className="item-name" onClick={() => toggleDebit(debitSelected)}>
            {debitSelected ? (
              <>
                <FontAwesomeIcon icon={faCheckCircle} />
                <span>{"debito"}</span>
                {console.log("entrou no débito")}
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faCircle} />
                <span>{"debito"}</span>
              </>
            )}
          </div>
          <div className="item-name" onClick={() => toggleCash(cashSelected)}>
            {cashSelected ? (
              <>
                {console.log("entrou no dinheiro")}
                <FontAwesomeIcon icon={faCheckCircle} />
                <span>{"dinheiro"}</span>
              </>
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
