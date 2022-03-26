import React from "react";
import styled from "styled-components";
//import "./productList.css";
import "./shopView.css";
import ProductList from "./ProducList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faCircle } from "@fortawesome/free-solid-svg-icons";
import PayMethod from "./payMethod";
const ShopView = () => {
  return (
    <>
      <Container>
        <ContainerProducts>
          <ProductList />
          <PayMethod/>
        </ContainerProducts>
      </Container>
      {/* <div className="item-container">
        <div className="menu-buttom">
          <FontAwesomeIcon icon={faCircle} />
          <span>menu</span>
        </div>
      </div> */}
    </>
  );
};


export default ShopView;

const Container = styled.div`
  width: auto;
  margin: auto;
  height: 100%;
  background: #fff;
  overflow: auto;
`;

const TitleContainer = styled.div`
  box-sizing: border-box;
  border: none;
  background: transparent;
  color: #317873;
 
`;

const ButtonContainer = styled.div`
  box-sizing: border-box;
  border: none;
  background: transparent;
  color: #317873;
`;

const PageTitle = styled.label`
  font-size: 58px;
  font-family: sans-serif;
  text-align: center;
`;

const ContainerProducts = styled.div`
  padding: 20px;
  float: left;
`;
