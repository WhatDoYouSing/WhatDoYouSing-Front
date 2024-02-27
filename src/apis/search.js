import { axiosInstance } from "../apis/http";
import { isTokenExpired } from "../apis/user";

// GET : 가사 검색 최신순 정렬
export const GetSearchLatest = async (searchKeyword, searchEmo, searchPage) => {
  try {
    const response = await axiosInstance.get(
      `/sings/searchlatest/?keyword=${searchKeyword}&emo=${searchEmo}&page=${searchPage}`
    );

    console.log(response.data);

    return Promise.resolve(response);
  } catch (error) {
    isTokenExpired(error);
    return Promise.reject(error);
  }
};

// GET : 가사 검색 좋아요순 정렬
export const GetSearchLike = async (searchKeyword, searchEmo, searchPage) => {
  try {
    const response = await axiosInstance.get(
      `/sings/searchlikes/?keyword=${searchKeyword}&emo=${searchEmo}&page=${searchPage}`
    );
    console.log(response.data);

    return Promise.resolve(response);
  } catch (error) {
    isTokenExpired(error);
    return Promise.reject(error);
  }
};

// GET : 가사 검색 댓글순 정렬
export const GetSearchCom = async (searchKeyword, searchEmo, searchPage) => {
  try {
    const response = await axiosInstance.get(
      `/sings/searchcomments/?keyword=${searchKeyword}&emo=${searchEmo}&page=${searchPage}`
    );
    console.log(response.data);

    return Promise.resolve(response);
  } catch (error) {
    if (error.response && error.response.status === 400) {
      alert(error.response);
    }
    isTokenExpired(error);
    return Promise.reject(error);
  }
};

// GET : 감정 검색 최신순 정렬
export const GetSearchEmoLatest = async (searchEmo, searchPage) => {
  try {
    const response = await axiosInstance.get(
      `/sings/emosearchlatest/?emo=${searchEmo}&page=${searchPage}`
    );

    return Promise.resolve(response);
  } catch (error) {
    isTokenExpired(error);
    return Promise.reject(error);
  }
};

// GET : 감정 검색 좋아요순 정렬
export const GetSearchEmoLike = async (searchEmo, searchPage) => {
  try {
    const response = await axiosInstance.get(
      `/sings/emosearchlikes/?emo=${searchEmo}&page=${searchPage}`
    );

    return Promise.resolve(response.data);
  } catch (error) {
    isTokenExpired(error);
    return Promise.reject(error);
  }
};

// GET : 감정 검색 댓글순 정렬
export const GetSearchEmoCom = async (searchEmo, searchPage) => {
  try {
    const response = await axiosInstance.get(
      `/sings/emosearchcomments/?emo=${searchEmo}&page=${searchPage}`
    );

    return Promise.resolve(response.data);
  } catch (error) {
    isTokenExpired(error);
    return Promise.reject(error);
  }
};
