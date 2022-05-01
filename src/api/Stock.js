import axios from "axios";

const BASE_URL = "http://localhost:8080/api/products";


const newProduct = (name,price,quantity) => {
  return { name: name, price: price, quantity: quantity };
};

export function getProducts() {
  axios
    .get(BASE_URL)
    .then((response) => {
      const data = response.data;
      console.log(data);
      return response.data;
    })
    .catch((error) => {
      console.log("error:" + error);
    });
}

export function getProductByName(name) {

    const url = BASE_URL + '/' + name;

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


export function deleteProduct(name) {
  const url = BASE_URL + "/" + name;

  axios
    .delete(url)
    .then((response) => {
      const data = response.data;
      console.log(data);
      return response.data;
    })
    .catch((error) => {
      console.log("error:" + error);
    });
}

export function updateProductQuantity(name,quantity) {
  const url = BASE_URL + "/" + name + "/" + quantity;

  axios
    .put(url)
    .then((response) => {
      const data = response.data;
      console.log(data);
      return response.data;
    })
    .catch((error) => {
      console.log("error:" + error);
    });
}

export function updateProductPrice(name, price) {
  const url = BASE_URL + "/" + name + "/" + price;

  axios
    .put(url)
    .then((response) => {
      const data = response.data;
      console.log(data);
      return response.data;
    })
    .catch((error) => {
      console.log("error:" + error);
    });
}


export function insertStudent(name, price, quantity) {
  axios
    .post(BASE_URL, newProduct(name, price, quantity))
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => console.log(error));
}
