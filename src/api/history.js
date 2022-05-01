import axios from "axios";

const BASE_URL = "http://localhost:8080/api/history/";

const order = (shopCart, totalPrice) => {
  return {
    shopCart: shopCart,
    totalPrice: totalPrice,
  };
};

export function getHistory(id) {
  const url = BASE_URL + id;
  axios
    .get(url)
    .then((response) => {
      const data = response.data;
      console.log(data);
      return response.data;
    })
    .catch((error) => {
      console.log("error:" + error);
    });
}

export function insertOrder(shopCart, totalPrice, id) {
  const url = BASE_URL + id;
  console.log(order(shopCart, totalPrice));
  axios
    .post(url, order(shopCart, totalPrice))
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => console.log(error));
}
