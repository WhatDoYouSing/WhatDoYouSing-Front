import { axiosInstance } from "../apis/http";
import { isTokenExpired } from "../apis/user";

// POST : 게시글 저장
export const PostScrap = async (pk, scrapped) => {
  try {
    const response = await axiosInstance.post(`/posts/scrap/${pk}/`, {
      pk: pk,
      scrapped: scrapped,
    });
    console.log(response);
    return Promise.resolve(response);
  } catch (error) {
    isTokenExpired(error);
    console.error("게시글 저장 실패", error.response);
  }
};

// POST : 게시글 저장 취소
export const PostCancelScrap = async (pk, scrapped) => {
  try {
    const response = await axiosInstance.post(`/posts/scrap/${pk}/`, {
      pk: pk,
      scrapped: scrapped,
    });
    console.log(response);
    return Promise.resolve(response);
  } catch (error) {
    isTokenExpired(error);
    console.error("게시글 저장 취소 실패", error.response);
  }
};
