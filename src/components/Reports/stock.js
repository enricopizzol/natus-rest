import React, { useState } from "react";
import { OrderHistoryExample } from "../orderHistory/orderHistoryExample";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faCircle,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./stock.css";

const StockReport = () => {
    const [userHistory, setUserHistory] = useState(JSON.parse(OrderHistoryExample()));

    return (
        <>
            <div className="hs-container">
                <div className = "hs-title">
                    <h>Relatório de Compra e Venda</h>
                </div>
                 <h>Compra</h>
                {userHistory["orders"].map((order, orderIndex) => (
                    <div className="hs-order-container">
                        <div className = "hs-table-wrapper">
                            <table className="hs-table">
                                <thead classname = "hs-head">
                                    <tr className = "hs">
                                        <th className = "hs">Produto</th>
                                        <th className = "hs">Quantidade</th>
                                        <th className = "hs">Preço</th>
                                        <th className = "hs">Categoria</th>
                                        <th className = "hs">Data de compra</th>
                                        <th className = "hs">Somatório da compra</th>
                                    </tr>
                                </thead>
                                <tbody classname = "hs">
                                    {order["products"].map((product, productIndex) => (
                                        <tr className = "hs">
                                            <td className = "hs">{product.name}</td>
                                            <td className = "hs">{product.quantity}</td>
                                            <td className = "hs">R$ {product.price}</td>
                                            <td className = "hs">{product.category}</td>
                                            <td className = "hs">{order.date}</td>
                                            <td className = "hs">R$ {order["total"]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        
                    </div>
                ))}
                 <h>Venda</h>
                {userHistory["orders"].map((order, orderIndex) => (
                    <div className="hs-order-container">
                        <div className = "hs-table-wrapper">
                            <table className="hs-table">
                                <thead classname = "hs-head">
                                    <tr className = "hs">
                                        <th className = "hs">Produto</th>
                                        <th className = "hs">Quantidade</th>
                                        <th className = "hs">Preço</th>
                                        <th className = "hs">Categoria</th>
                                        <th className = "hs">Data de venda</th>
                                        <th className = "hs">Somatório da venda</th>
                                    </tr>
                                </thead>
                                <tbody classname = "hs">
                                    {order["products"].map((product, productIndex) => (
                                        <tr className = "hs">
                                            <td className = "hs">{product.name}</td>
                                            <td className = "hs">{product.quantity}</td>
                                            <td className = "hs">R$ {product.price}</td>
                                            <td className = "hs">{product.category}</td>
                                            <td className = "hs">{order.date}</td>
                                            <td className = "hs">R$ {order["total"]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
};

export default StockReport;
