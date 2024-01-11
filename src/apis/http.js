import axios from "axios";

const BASE_URL = "https://whatdoyousing.com";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const KAKAO_AUTH_URL = "http://whatdoyousing.com/accounts/kakao/";

axiosInstance.defaults.withCredentials = true;

const token = localStorage.getItem("token") ?? false;

axiosInstance.defaults.headers.common["Authorization"] = token
  ? `Bearer ${token}`
  : null;
