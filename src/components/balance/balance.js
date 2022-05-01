import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./balance.css";
import {
  faCircle,
  faCheckCircle,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

const Balance = () => {
  const [valueCredit, setInputValueCredit] = useState("");
  const [valueEstorno, setValueEstorno] = useState("");
  const addCredit = () => {
  };
  const returnCredit = () =>{
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
            value={valueCredit}
            onChange={(event) => setInputValueCredit(event.target.value)}
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
            value={valueEstorno}
            onChange={(event) => setValueEstorno(event.target.value)}
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
