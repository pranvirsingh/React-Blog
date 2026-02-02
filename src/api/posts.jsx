import axios from "axios";

export const api = axios.create({
  baseURL: "https://json-backend-gzki.onrender.com"
});
