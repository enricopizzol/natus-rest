export const OrderHistoryExample = () => {
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