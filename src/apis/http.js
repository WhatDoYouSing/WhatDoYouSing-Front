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
const musicToken =
  "BQAF8pSuZhqTkGrznSKTm310EUKmxd-RZzTHYS0Bsq21Cn9G46r6KGMgmNbVDd5LnJDuDOEcdnbD30vBYoQeHleqT9dnYORwV0mwETDzpBTvH6btwZoXCjhqbubHglHEVHbVG9KPEVC9KU5XJnW4Br99A-wBO1rGH8J51XyCe4QZy5RqSRXa9k1XAHhf13JA8NathA";

export const api = axios.create({
  headers: {
    Authorization: `Bearer ${musicToken}`,
  },
});

api.defaults.withCredentials = true;
