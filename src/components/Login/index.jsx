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
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { render } from "@testing-library/react";
import ShopView from "../../views/Shopview";

export const Login = () => {
  const [typePassword, setTypePassword] = useState("password");
  const [email, setEmail] = useState();
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
          <FaEnvelope />
          <Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <StyledLink to="shopview" disabled={!email || !password}>
          Entrar
        </StyledLink>
      </Content>
    </Container>
  );
};