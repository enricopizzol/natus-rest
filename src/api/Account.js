import { getValue } from "@testing-library/user-event/dist/utils";
import axios from "axios";

const BASE_URL = "http://localhost:8080/api/account/";


export function checkBalance(id) {
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

export function checkBalance(id, value) {
  const url = BASE_URL + id + "/" + value;
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