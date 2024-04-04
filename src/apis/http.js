import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

axiosInstance.defaults.withCredentials = true;

const token = localStorage.getItem("token") ?? false;

axiosInstance.defaults.headers.common["Authorization"] = token
  ? `Bearer ${token}`
  : null;

//오픈 API 관련
export const lyricApi = axios.create({
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_LYRICS_API_KEY}`,
  },
});
