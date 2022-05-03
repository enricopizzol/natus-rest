export const OrderHistoryExample = () => {
  return `{
            "orders": [
                {
                    "products": [
                        { "name": "Sanduba", "quantity": 10, "price": 10.0, "category": "Salgado" },
                        { "name": "Baguete", "quantity": 20, "price": 5, "category": "Salgado"},
                        { "name": "Coca - Cola", "quantity": 30, "price": 5.5, "category": "Bebida"}
                    ],
                    "total": 40.0,
                    "date": "22/04/2022"
                },
                {
                    "products": [
                        { "name": "Hamburguer", "quantity": 25, "price": 10.0, "category": "Salgado"},
                        { "name": "Enroladinho", "quantity": 15, "price": 5.0, "category": "Salgado"},
                        { "name": "Fanta", "quantity": 40, "price": 5.5, "category": "Bebida"}
                    ],
                    "total": 28.5,
                    "date": "18/03/2022"
                },
                {
                    "products": [
                        { "name": "Salada de fruta", "quantity": 5, "price": 5.5, "category": "Bebida" },
                        { "name": "Mousse de chocolate", "quantity": 5, "price": 5.5, "category": "Doce" },
                        { "name": "Pudim", "quantity": 8, "price": 6.8, "category": "Doce" },
                        { "name": "Toddynho", "quantity": 12, "price": 6.8, "category": "Bebida" },
                        { "name": "Banana", "quantity": 20, "price": 6.8, "category": "Saudável" },
                        { "name": "H2O", "quantity": 40, "price": 6.8, "category": "Bebida" }
                    ],
                    "total": 20.5,
                    "date": "12/01/2022"
                }
            ]
        }`;
};
