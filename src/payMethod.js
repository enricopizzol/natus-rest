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
      <div className="payment-list">
        <div className="payment-container">
          <div
            className="payment-name"
            onClick={() => toggleCredit(creditSelected)}
          >
            {creditSelected ? (
              <>
                <FontAwesomeIcon icon={faCheckCircle} />
                <span>{"Crédito"}</span>
                {console.log("entrou no credito")}
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faCircle} />
                <span>{"Crédito"}</span>
              </>
            )}
          </div>
          <div className="payment-name" onClick={() => toggleDebit(debitSelected)}>
            {debitSelected ? (
              <>
                <FontAwesomeIcon icon={faCheckCircle} />
                <span>{"Débito"}</span>
                {console.log("entrou no débito")}
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faCircle} />
                <span>{"Débito"}</span>
              </>
            )}
          </div>
          <div className="payment-name" onClick={() => toggleCash(cashSelected)}>
            {cashSelected ? (
              <>
                {console.log("entrou no dinheiro")}
                <FontAwesomeIcon icon={faCheckCircle} />
                <span>{"Dinheiro"}</span>
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faCircle} />
                <span>{"Dinheiro"}</span>
              </>
            )}
          </div>      
          <div class = "payment-button-container">
              <button class = "payment-button">Comprar</button>
          </div>
        </div>
        
      </div>

    </>
  );
};

export default PayMethod;
