import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Content,
  InputContent,
  Input,
  Span,
  ButtonLogin,
  RegisterContent,
  StyledLink
} from "./styles";
import { FaFingerprint, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { render } from "@testing-library/react";
import ShopView from "../../views/Shopview";

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
      </Content>
    </Container>
  );
};