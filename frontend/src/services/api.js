import axios from "axios";

const apiUrl =
  process.env.REACT_APP_ENV === "dev"
    ? "http://localhost:3333"
    : "https://blulab-api.herokuapp.com/";

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
