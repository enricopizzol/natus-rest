export const OrderHistoryTemplate = () => {
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
                }
            ]
        }`;
};
