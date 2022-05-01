import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faCheckCircle,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import "./payMethod.css";

const PayMethod = () => {
  const [inputValue, setInputValue] = useState("");
  const [creditSelected, setCreditValue] = useState(false);
  const [modalSelected, setModal] = useState(false);
  const [debitSelected, setDebitValue] = useState(false);
  const [cashSelected, setCashValue] = useState(false);
  const [currentOption, setCurrentOption] = useState("");
  const [paymentButton, setPaymentButton] = useState(false);
  const [credentialStatus, setCredentialStatus] = useState("");

  const toggleCredit = (value) => {
    disableLastToggle(currentOption);
    setCurrentOption("credit");
    setCreditValue(!value);
    setModal(!value);
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
      setModal(false);
    }
    if (option === "debit") {
      setDebitValue(false);
      setModal(false);
    }
    if (option === "cash") {
      setCashValue(false);
      setModal(false);
    }
  };

  const buyButtonPressed = () => {
    setPaymentButton(true);
  };

  let saldo = -40;

  const validateId = (id) => {
    if ((id === "707070" || id === "123456") && (saldo > -30)){
      setCredentialStatus("valid");
    } else if ((id === "808080" || id === "808080" ) || (saldo <= -30)) {
      setCredentialStatus("invalid");
    }
  };

  return (
    <>
      <div className = "pm-wrapper">
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
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faCircle} />
                  <span>{"Crédito"}</span>
                </>
              )}
            </div>
            <div
              className="payment-name"
              onClick={() => toggleDebit(debitSelected)}
            >
              {debitSelected ? (
                <>
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <span>{"Débito"}</span>
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faCircle} />
                  <span>{"Débito"}</span>
                </>
              )}
            </div>
            <div
              className="payment-name"
              onClick={() => toggleCash(cashSelected)}
            >
              {cashSelected ? (
                <>
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
            <div class="payment-button-container">
              <button class="payment-button" onClick={() => buyButtonPressed()}>
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
      {modalSelected ? (
        <div className="id-box">
          <input
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            className="id-input"
            placeholder="ID do Estudante"
          />
          <FontAwesomeIcon
            icon={faCheck}
            onClick={() => validateId(inputValue)}
          />
        </div>
      ) : null}
      {paymentButton ? (
        <div className="id-box">
          <label>Compra efetuada com sucesso!</label>
        </div>
      ) : null}
      {credentialStatus === "valid" ? (
        <div className="id-box">
          <label>ID confirmado!</label>
        </div>
      ) : credentialStatus === "invalid" ? (
        <div className="id-box">
          <label>ID inválido ou Saldo Insuficiente!</label>
        </div>
      ) : null}
    </>
  );
};

export default PayMethod;
