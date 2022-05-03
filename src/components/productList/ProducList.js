import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { avalaibleProducts } from "./products";
import {
  faChevronRight,
  faChevronLeft,
  faCircle,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./productList.css";

const ProductList = () => {
  const [bill, setBill] = useState(0);
  const [items, setItems] = useState(avalaibleProducts());

  const handleQuantityIncrease = (index) => {
    const newItems = [...items];

    newItems[index].quantity++;

    setItems(newItems);
    updateStock(newItems[index].itemName, newItems[index].quantity);
    calculateBill();
  };

  const updateStock = (name, quantity) => {
    const BASE_URL = "http://localhost:8080/api/products";
    const url = BASE_URL + "/" + name + "/" + quantity;

    axios
      .put(url)
      .then((response) => {
        const data = response.data;
        console.log(data);
        return response.data;
      })
      .catch((error) => {
        console.log("error:" + error);
      });
  };

  const handleQuantityDecrease = (index) => {
    const newItems = [...items];

    if (newItems[index].quantity > 0) newItems[index].quantity--;

    setItems(newItems);
    updateStock(newItems[index].itemName, newItems[index].quantity);
    calculateBill();
  };

  // desativa o produto quando clicado
  const toggleComplete = (index) => {
    const newItems = [...items];

    newItems[index].isSelected = !newItems[index].isSelected;

    setItems(newItems);
  };

  const calculateBill = () => {
    const totalBill = items.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);

    setBill(totalBill);
  };

  return (
    <div className="app-background">
      <div className="main-container">
        <div className="add-item-box">
          <label>Lista de Produtos</label>
        </div>
        <div className="item-list">
          {items.map((item, index) => (
            <div className="item-container">
              <div className="item-name" onClick={() => toggleComplete(index)}>
                {item.isSelected ? (
                  <>
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <span className="completed">{item.itemName}</span>
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faCircle} />
                    <span>{item.itemName}</span>
                  </>
                )}
              </div>
              <div className="quantity">
                <button>
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    onClick={() => handleQuantityDecrease(index)}
                  />
                </button>
                <span> {item.quantity} </span>
                <button>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    onClick={() => handleQuantityIncrease(index)}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="total">Total a pagar: R$ {bill}</div>
      </div>
    </div>
  );
};

export default ProductList;
