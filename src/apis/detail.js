import { axiosInstance } from "../apis/http";

// GET : 가사 상세 조회
export const GetLyricsDetail = async (lyrics_id) => {
  try {
    const response = await axiosInstance.get(`/posts/${lyrics_id}/`);

    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

// POST : 가사 상세페이지 좋아요
export const PostDetailLike = async (pk) => {
  try {
    const response = await axiosInstance.post(`/posts/${pk}/likes/`, {
      pk: pk,
    });
    console.log(response.data);
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

// POST : 가사 상세페이지 감정 등록
export const PostDetailEmo = async (post_pk) => {
  try {
    const response = await axiosInstance.post(`/posts/${post_pk}/emotions/`, {
      post_pk: post_pk,
    });
    console.log(response.data);
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

// GET : 가사 상세페이지 감정 조회
export const GetDetailEmo = async (post_pk) => {
  try {
    const response = await axiosInstance.get(`/posts/${post_pk}/emotions/`);

    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

// DELETE : 가사 상세페이지 감정 삭제
export const DelLyrics = async (post_pk) => {
  try {
    const response = await axiosInstance.delete(`/posts/${post_pk}/`);

    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
};
