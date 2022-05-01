import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { avalaibleProducts } from "../productList/products";
import {
  faCircle,
  faCheckCircle,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import "./stock.css";


const Stock = () => {

    const [items, setItems] = useState(avalaibleProducts());

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
                                <p className = "stock-p">Quantidade:{item.quantity}</p>
                                <p className = "stock-p">Preço: R${item.price}</p>
                            </div> 
                    ))}
                </div>
            </div>
        </>
    )
}

export default Stock
