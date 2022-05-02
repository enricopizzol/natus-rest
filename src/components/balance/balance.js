import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./balance.css";
import {
  faCircle,
  faCheckCircle,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";


const Balance = () => {
  const BASE_URL = "http://localhost:8080/api/account/303059/";

  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [currentBalance, setCurrentBalance] = useState("");
  const [checkDeposit, setcheckDeposit] = useState(false);
  const [checkReturn, setReturn] = useState(false);

  const addCredit = (value) => {
    console.log("Entrou no addCredit");

    let newBalance = parseFloat(currentBalance) + parseFloat(value);
    updateBalance(newBalance);
    setCurrentBalance(newBalance);
  };

  

  const returnCredit = () => {
    updateBalance(0);
    console.log("zerou a moneda!!");
  };

  const updateBalance = (value) => {
    const url = BASE_URL + value;
    axios
      .put(url)
      .then((response) => {
        const data = "" + response.data;
        setCurrentBalance(data);
      })
      .catch((error) => {
        console.log("error:" + error);
      });
  };


 useEffect(() => {

  console.log("setou o current Balance");

 axios
   .get("http://localhost:8080/api/account/303059")
   .then((response) => {
     const balance = "" + response.data;
     console.log(balance);
     console.log(typeof balance);
     setCurrentBalance(balance);
   })
   .catch((error) => {
     console.log("error:" + error);
   });
 }, []);

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
