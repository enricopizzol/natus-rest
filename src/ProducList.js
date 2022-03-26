import React, { useState, useEffect } from "react";
import "./productList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faCircle,
  faCheckCircle,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const ProductList = () => {
  

  const defaultValue = 0
  const [items, setItems] = useState([
    {
      itemName: "Sanduba",
      quantity: defaultValue,
      price: 10,
      isSelected: false,
    },
    {
      itemName: "Pão de queijo",
      quantity: defaultValue,
      price: 5,
      isSelected: false,
    },
    {
      itemName: "Coca - Cola",
      quantity: defaultValue,
      price: 5.5,
      isSelected: false,
    },
    {
      itemName: "Hamburgão",
      quantity: defaultValue,
      price: 10,
      isSelected: false,
    },
    {
      itemName: "Enroladinho",
      quantity: defaultValue,
      price: 5,
      isSelected: false,
    },
    {
      itemName: "Guaraná",
      quantity: defaultValue,
      price: 5.5,
      isSelected: false,
    },
    {
      itemName: "Salada de fruta",
      quantity: defaultValue,
      price: 7.5,
      isSelected: false,
    }
   
  ]);

  const [inputValue, setInputValue] = useState("");
  const [totalItemCount, setTotalItemCount] = useState(0);
  const [bill, setBill] = useState(0);

  const handleAddButtonClick = () => {
    const newItem = {
      itemName: inputValue,
      quantity: 1,
      price: 0,
      isSelected: false,
    };

    const newItems = [...items, newItem];

    setItems(newItems);
    setInputValue("");
    calculateTotal();
  };

  const handleQuantityIncrease = (index) => {
    const newItems = [...items];

    newItems[index].quantity++;

    setItems(newItems);
    calculateTotal();
    calculateBill();
  };

  const handleQuantityDecrease = (index) => {
    const newItems = [...items];

    if (newItems[index].quantity > 0)
      newItems[index].quantity--;

    setItems(newItems);
    calculateBill();
    calculateTotal();
  };


// desativa o produto quando clicado
  const toggleComplete = (index) => {
    const newItems = [...items];

    newItems[index].isSelected = !newItems[index].isSelected;

    setItems(newItems);
  };

  const calculateTotal = () => {
    const totalItemCount = items.reduce((total, item) => {
      return total + item.quantity;
    }, 0);

    setTotalItemCount(totalItemCount);
  };

   const calculateBill = () => {
     const totalBill = items.reduce((total, item) => {
       return total + item.price*item.quantity;
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
