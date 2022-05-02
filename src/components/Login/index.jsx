import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash, FaFingerprint, FaLock } from "react-icons/fa";
import { checkBalance, updateBalance } from "../../api/Account";
import { getHistory, insertOrder } from "../../api/history";
import {
  deleteProduct,
  getProductByName,
  getProducts,
  insertProduct,
  updateProductQuantity,
} from "../../api/Stock";
import { getStudentById, getStudents, insertStudent } from "../../api/Students";
import { Container, Content, Input, InputContent, StyledLink } from "./styles";
import axios from "axios";


export const Login = () => {
  const [typePassword, setTypePassword] = useState("password");
  const [userId, setID] = useState();
  const [password, setPasword] = useState();

  const changeTypePassword = () => {
    if (typePassword === "password") {
      setTypePassword("text");
    } else {
      setTypePassword("password");
    }
  };

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  return (
    <Container>
      <Content>
        <InputContent>
          <FaFingerprint />
          <Input
            type="text"
            placeholder="ID"
            value={userId}
            onChange={(e) => setID(e.target.value)}
          />
        </InputContent>
        <InputContent>
          <FaLock />
          <Input
            type={typePassword}
            placeholder="Senha"
            value={password}
            onChange={(e) => setPasword(e.target.value)}
          />

          {typePassword === "password" ? (
            <FaEye onClick={changeTypePassword} />
          ) : (
            <FaEyeSlash onClick={changeTypePassword} />
          )}
        </InputContent>
        <StyledLink to="shopview" disabled={!userId || !password}>
          Entrar
        </StyledLink>
        <StyledLink to="/registration" disabled={!true}>
          Registre-se
        </StyledLink>
      </Content>
    </Container>
  );
};
