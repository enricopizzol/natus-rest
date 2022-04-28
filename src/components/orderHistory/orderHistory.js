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
                    <>
                        <table className="hs-order-container">
                            <tbody>
                                <tr className = "hs">
                                    <th className = "hs">Produto</th>
                                    <th className = "hs">Quantidade</th>
                                    <th className = "hs">Preço</th>
                                </tr>
                                {order["products"].map((product, productIndex) => (
                                    <tr className = "hs">
                                        <td className = "hs">{product.name}</td>
                                        <td className = "hs">{product.quantity}</td>
                                        <td className = "hs">{product.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <span>Total do pedido: {order["total"]}</span>
                        <span>Data: {order["date"]}</span>
                    </>
                ))}
            </div>
        </>
    )
};

export default OrderHistory;
