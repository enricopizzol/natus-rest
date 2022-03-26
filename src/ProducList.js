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
      itemName: "sanduba",
      quantity: defaultValue,
      price: 10,
      isSelected: false,
    },
    {
      itemName: "pão de queijo",
      quantity: defaultValue,
      price: 5,
      isSelected: false,
    },
    {
      itemName: "cocacola",
      quantity: defaultValue,
      price: 5.5,
      isSelected: false,
    },
    {
      itemName: "hamburgão",
      quantity: defaultValue,
      price: 10,
      isSelected: false,
    },
    {
      itemName: "enroladinho",
      quantity: defaultValue,
      price: 5,
      isSelected: false,
    },
    {
      itemName: "guaraná",
      quantity: defaultValue,
      price: 5.5,
      isSelected: false,
    },
    {
      itemName: "salada de fruta",
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

    newItems[index].quantity--;

    setItems(newItems);
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
    <span className="app-background">
      <div className="main-container">
        <div className="add-item-box">
          <label>Product List</label>
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
        <div className="total">Total: {totalItemCount}</div>
        <div className="total">Bill: {bill}</div>
      </div>
    </span>
  );
};

export default ProductList;
