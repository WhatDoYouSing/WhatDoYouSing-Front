import axios from "axios";

const BASE_URL = "https://whatdoyousing.com";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.defaults.withCredentials = true;

const token = localStorage.getItem("token") ?? false;

axiosInstance.defaults.headers.common["Authorization"] = token
  ? `Bearer ${token}`
  : null;

//카카오 로그인
export const KAKAO_AUTH_URL = "http://whatdoyousing.com/accounts/kakao/";

//오픈 API 관련
export const lyricApi = axios.create({
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_LYRICS_API_KEY}`,
  },
});
