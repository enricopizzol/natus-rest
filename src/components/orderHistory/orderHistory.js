import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { avalaibleProducts } from "../productList/products";
import {
  faChevronRight,
  faChevronLeft,
  faCircle,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./orderHistory.css";

const OrderHistory = () => {
  const [items, setItems] = useState(avalaibleProducts());
  const [userHistory, setUserHistory] = useState("{}")

  const _requestUserOrderHistory = (userId) => {
    return(
        `{
            "orders": [
                {"products": [
                    {"name":"Pão de Queijo", "quantity": 10, "price": 3.0},
                    {"name":"Todinho", "quantity": 4, "price": 1.5},
                    {"name":"7Bello", "quantity": 8, "price": 0.5},
                ]},
                {"products": [
                    {"name":"Cachorro Quente", "quantity": 1, "price": 8.0},
                    {"name":"Coca-Cola", "quantity": 1, "price": 5.5},
                    {"name":"Pastel", "quantity": 2, "price": 7.5},
                ]},
                {"products": [
                    {"name":"Banana", "quantity": 4, "price": 4.75},
                    {"name":"Água (600mL)", "quantity": 1, "price": 1.5},
                ]},
            ]
        }`
    )
  };

  const getUserOrderHistory = (userId) => {
    history = _requestUserOrderHistory(userId)
    setUserHistory(JSON.parse(history))
  };

  const handleQuantityIncrease = (index) => {
    const newItems = [...items];

    newItems[index].quantity++;

    setItems(newItems);
    calculateBill();
  };

  return (
    <>
        <div className="hs-container">
            {userHistory.map((order, orderIndex) => (
                <table className="hs-order-container">
                    <tr>
                        <th>Produto</th>
                        <th>Quantidade</th>
                        <th>Preço</th>
                    </tr>
                    <tr>
                        {order.map((product, productIndex) => (
                            <>
                                <td className = "hs-product-data">{product.name}</td>
                                <td className = "hs-product-data">{product.quantity}</td>
                                <td className = "hs-product-data">{product.price}</td>
                            </>
                        ))}
                    </tr>
                </table>
            ))}
        </div>
    </>
  )
};

export default OrderHistory;
