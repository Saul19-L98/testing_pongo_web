import axios from "axios";

export const api = axios.create({
  baseURL: "https://run.mocky.io/v3/1e9976e8-b7c0-4e8d-a3e6-8f6a14b28e8c",
  withCredentials: true,
});
