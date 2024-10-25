import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketnotes-api-d5j2.onrender.com",
});
