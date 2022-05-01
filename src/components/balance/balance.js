import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./balance.css";
import {
  faCircle,
  faCheckCircle,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

const Balance = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const addCredit = () => {
    console.log("Hey i wok");
  };
  const returnCredit = () =>{
    console.log("Hey i wok too");
  }

  return (
    <div className="balance-container">
      <div className="balance-title">
        <span>Saldo</span>
      </div>
      <div className="boxcredito">
        <span className="addCredito">Adicionar Crédito</span>
        <div className="add-saldo">
          <input
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            className="qtt-input"
            placeholder="Valor"
          />
          <FontAwesomeIcon
            icon={faCheck}
            onClick={() => addCredit(inputValue)}
          />
        </div>
      </div>
      <div className="boxcredito">
        <span className="addCredito">Estornar Crédito</span>
        <div className="add-saldo">
          <input
            value={inputValue2}
            onChange={(event) => setInputValue2(event.target.value)}
            className="qtt-input"
            placeholder="Valor"
          />
          <FontAwesomeIcon
            icon={faCheck}
            onClick={() => returnCredit(inputValue2)}
          />
        </div>
      </div>
    </div>
  );
};

export default Balance;
