import { axiosInstance } from "../apis/http";
import { isTokenExpired } from "../apis/user";

// GET : 댓글순 정렬
export const GetSortCom = async () => {
  try {
    const response = await axiosInstance.get("/sings/");

    return Promise.resolve(response.data);
  } catch (error) {
    isTokenExpired(error);
    return Promise.reject(error);
  }
};

// GET : 최신순 정렬
export const GetSortLatest = async () => {
  try {
    const response = await axiosInstance.get("/sings/latest/");

    return Promise.resolve(response.data);
  } catch (error) {
    isTokenExpired(error);
    return Promise.reject(error);
  }
};

// GET : 좋아요순 정렬
export const GetSortLike = async () => {
  try {
    const response = await axiosInstance.get("/sings/likes/");

    return Promise.resolve(response.data);
  } catch (error) {
    isTokenExpired(error);
    return Promise.reject(error);
  }
};

// GET : 추천 페이지
export const GetRecommend = async () => {
  try {
    const response = await axiosInstance.get("/sings/recommend/");

    return Promise.resolve(response.data);
  } catch (error) {
    isTokenExpired(error);
    return Promise.reject(error);
  }
};
