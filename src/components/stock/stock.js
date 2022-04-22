import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { avalaibleProducts } from "../productList/products";
import {
  faTrashCan,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import "./stock.css";


const Stock = () => {

    const [items, setItems] = useState(avalaibleProducts());

    const handleQuantityIncrease = (index) => {
      const newItems = [...items];
  
      newItems[index].quantity++;
  
      setItems(newItems);
    };

    const handleQuantityDecrease = (index) => {
      const newItems = [...items];
  
      if(newItems[index].quantity > 0)
        newItems[index].quantity--;
  
      setItems(newItems);
    };

    const handleAddProduct = () => {

      const itemsCopy = [...items];
      var prodName = prompt("Nome do Produto", "Insira o nome do produto")
      var prodPrice = prompt("Preço", "0")
      var prodQtt = prompt("Quantidade em estoque", "Insira a quantidade em estoque")
      var newItem = {
          itemName: prodName,
          quantity: parseInt(prodQtt),
          price: prodPrice,
          isSelected: false
      }

      itemsCopy.push(newItem)
      setItems(itemsCopy)
    }

    const handleItemDelete = (index) => {
      const itemsCopy = [...items];
      itemsCopy.splice(index,1)
      setItems(itemsCopy)

    }

    return (
        <>  
            <div className = "stock-container">
                <div className = "stock-title">
                    <h>Estoque</h>
                </div>
                <div className="stock-item-container">
                    {items.map((item, index) => (
                            <div className = "stock-item-data">
                                <div className ="stock-itemName">
                                    <h className = "stock-h">{item.itemName}</h>
                                </div>
                                <p className = "stock-p">Quantidade: {item.quantity}</p>
                                <p className = "stock-p">Preço: R${item.price}</p>
                                <div className = "stock-item-buttons">
                                  <FontAwesomeIcon className = "stock-button" icon={faPlus} onClick={() => handleQuantityIncrease(index)}/>
                                  <FontAwesomeIcon className = "stock-button" icon={faMinus} onClick={() => handleQuantityDecrease(index)}/>
                                  <FontAwesomeIcon className = "stock-button" icon={faTrashCan} onClick = {() => handleItemDelete(index)} />
                                </div>
                            </div> 
                    ))}
                </div>
                <button onClick = {() => handleAddProduct()} className = "stock-new-item">Novo item</button>
            </div>
        </>
    )
}

export default Stock
