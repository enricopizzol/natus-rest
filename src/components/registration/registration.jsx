import React, { useState } from "react";
import {
  Container,
  Content,
  InputContent,
  Input,
  StyledLink
} from "./registration.js";
import { FaFingerprint, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

export const Registration = () => {
  const [typePassword, setTypePassword] = useState("password");
  const [userId, setID] = useState();
  const [password, setPasword] = useState("");
  const [confirmationPassword, setConfirmationPasword] = useState("");

  const changeTypePassword = () => {
    if (typePassword === "password") {
      setTypePassword("text");
    } else {
      setTypePassword("password");
    }
  };

  const registerLoginAndRedirect = (userId, password) => {
      //Falta implementar a parte de criação de novos registros e de login
      window.location.replace("/shopview")
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
        <InputContent>
          <FaLock />
          <Input
            type={typePassword}
            placeholder="Confirme sua senha"
            value={confirmationPassword}
            onChange={(e) => setConfirmationPasword(e.target.value)}
          />

          {typePassword === "password" ? (
            <FaEye onClick={changeTypePassword} />
          ) : (
            <FaEyeSlash onClick={changeTypePassword} />
          )}
        </InputContent>
        <StyledLink onClick= {() => registerLoginAndRedirect(userId, password)} to = "" disabled={!password || !confirmationPassword}>
          Registrar
        </StyledLink>
      </Content>
    </Container>
  );
};

export default Registration