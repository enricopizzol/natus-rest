export const OrderHistoryExample = () => {
  return `{
            "orders": [
                {
                    "products": [
                        { "name": "Sanduba", "quantity": 2, "price": 10.0, "category": "Salgado" },
                        { "name": "Baguete", "quantity": 2, "price": 5, "category": "Salgado"},
                        { "name": "Coca - Cola", "quantity": 1, "price": 5.5, "category": "Bebida"}
                    ],
                    "total": 35.5,
                    "date": "22/04/2022"
                },
                {
                    "products": [
                        { "name": "Hamburguer", "quantity": 0, "price": 10.0, "category": "Salgado"},
                        { "name": "Enroladinho", "quantity": 0, "price": 5.0, "category": "Salgado"},
                        { "name": "Fanta", "quantity": 0, "price": 5.5, "category": "Bebida"}
                    ],
                    "total": 28.5,
                    "date": "18/03/2022"
                },
                {
                    "products": [
                        { "name": "Salada de fruta", "quantity": 0, "price": 5.5, "category": "Bebida" },
                        { "name": "Mousse de chocolate", "quantity": 0, "price": 5.5, "category": "Doce" },
                        { "name": "Pudim", "quantity": 0, "price": 6.8, "category": "Doce" },
                        { "name": "Toddynho", "quantity": 0, "price": 6.8, "category": "Bebida" },
                        { "name": "Banana", "quantity": 0, "price": 6.8, "category": "Saudável" },
                        { "name": "H2O", "quantity": 0, "price": 6.8, "category": "Bebida" },
                        { "name": "manga", "quantity": 0, "price": 2.0, "category": "Saudável" }
                    ],
                    "total": 20.5,
                    "date": "12/01/2022"
                }
            ]
        }`;
};
