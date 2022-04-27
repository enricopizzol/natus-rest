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
  const [userHistory, setUserHistory] = useState(OrderHistoryExample());

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
