import axios from "axios";

const apiUrl =
  process.env.NODE_ENV === "build"
    ? "https://blulab-api.herokuapp.com/"
    : "http://localhost:3333";

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
