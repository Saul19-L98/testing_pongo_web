import axios from "axios";

export const api = axios.create({
  baseURL: "https://run.mocky.io/v3/681968a0-a744-4c39-bae4-64d45b3b9499",
  withCredentials: true,
});
