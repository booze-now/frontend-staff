import axios from "axios";
const BASE_URL = "http://localhost:8000/api/staff";

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    withCredentials: false,
  },
});
export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    withCredentials: true,
  },
});
