import React from "react";
import styled from "styled-components";
import "./shopView.css";
import ProductList from "../components/productList/ProducList";
import PayMethod from "../components/payMethod/payMethod";
import SideBar from "../components/sidebar/sidebar";

const ShopView = () => {
  return (
    <>
      <Container>
        <SideBar/>
        <ContainerProducts>
          <ProductList />
          <PayMethod/>
        </ContainerProducts>
      </Container>
    </>
  );
};


export default ShopView;

const Container = styled.div`
  width: auto;
  margin: auto;
  height: 100%;
  background: #a0d6b4;
  overflow: auto;
  display: flex;
  justify-content: center;
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

