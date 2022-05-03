import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./balance.css";
import {
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";


const Balance = () => {

  const BASE_URL = "http://localhost:8080/api/account/303059/";

  
  const [valueCredit, setInputValueCredit] = useState("");
  const [valueEstorno, setValueEstorno] = useState("");
  const [currentBalance, setCurrentBalance] = useState("");
  

  const addCredit = (value) => {
    console.log("Entrou no addCredit");

    console.log("currentBalance" + parseFloat(currentBalance));
    console.log("value" + parseFloat(value));
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
    console.log("url" + url)
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
            value={valueCredit}
            onChange={(event) => setInputValueCredit(event.target.value)}
            className="qtt-input"
            placeholder="Valor"
          />
          <FontAwesomeIcon
            icon={faCheck}
            onClick={() => addCredit(valueCredit)}
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
            onClick={() => returnCredit(valueEstorno)}
          />
        </div>
      </div>
    </div>
  );
};

export default Balance;
