import React, { useState } from "react";
import { OrderHistoryExample } from "./orderHistoryExample";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faCircle,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./orderHistory.css";

const OrderHistory = () => {
    const [userHistory, setUserHistory] = useState(JSON.parse(OrderHistoryExample()));

    return (
        <>
            <div className="hs-container">
                {userHistory["orders"].map((order, orderIndex) => (
                    <div className="hs-order-container">
                        <div className = "hs-table-wrapper">
                            <table className="hs-table">
                                <thead classname = "hs-head">
                                    <tr className = "hs">
                                        <th className = "hs">Produto</th>
                                        <th className = "hs">Quantidade</th>
                                        <th className = "hs">Preço</th>
                                    </tr>
                                </thead>
                                <tbody classname = "hs">
                                    {order["products"].map((product, productIndex) => (
                                        <tr className = "hs">
                                            <td className = "hs">{product.name}</td>
                                            <td className = "hs">{product.quantity}</td>
                                            <td className = "hs">R$ {product.price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className = "hs-order-values">
                            <span>Total do pedido: R$ {order["total"]}</span>
                            <span>Data: {order["date"]}</span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
};

export default OrderHistory;
