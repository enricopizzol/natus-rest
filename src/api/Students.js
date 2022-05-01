import axios from "axios";

const BASE_URL = "http://localhost:8080/api/students";

const newStudent = (id, name) => {
  return {
    id: id,
    name: name,
  };
};

export function getUserCredentials() {
  const url = BASE_URL + "/" + "credentials";
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

export function getStudents() {
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

export function getStudentById(id) {
  const url = BASE_URL + "/" + id;
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

export function insertStudent(id, name) {
  console.log(newStudent(id,name));
  axios
    .post(BASE_URL, newStudent(id, name))
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => console.log(error));
}
