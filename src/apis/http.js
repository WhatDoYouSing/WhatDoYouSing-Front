import axios from "axios";

const BASE_URL = "http://whatdoyousing.com";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.defaults.withCredentials = true;

const token = localStorage.getItem("token") ?? false;

axiosInstance.defaults.headers.common["Authorization"] = token
  ? `Bearer ${token}`
  : null;
