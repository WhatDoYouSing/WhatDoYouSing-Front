import axios from "axios";

const BASE_URL = "http://43.203.57.226";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.defaults.withCredentials = true;
