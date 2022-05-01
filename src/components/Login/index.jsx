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

  const doSomething = async () => {
    await sleep(2000);
    //do stuff
  };
  const shopcart = () =>{
    return [{"name":"pao","price":10.0,"quantity":8},{"name":"pao2","price":10.0,"quantity":8},
        {"name":"pao3","price":10.0,"quantity":8}
    ];
  };

  useEffect(() => {
  
    insertOrder(shopcart(),189.0,303059);
    doSomething();
   
    


  }, []);

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
