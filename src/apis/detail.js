import { axiosInstance } from "../apis/http";

// GET : 가사 상세 조회
export const GetLyricsDetail = async (pk) => {
  try {
    const response = await axiosInstance.get(`/posts/${pk}/`);

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

// PATCH : 가사 상세페이지 감정 수정
export const PatchDetailEmo = async (pk, content) => {
  try {
    const response = await axiosInstance.patch(`/posts/${pk}/emotions/`, {
      content: content,
    });
    console.log(response.data);
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

// PATCH : 가사 상세페이지 감정 조회
export const GetDetailEmo = async (pk) => {
  try {
    const response = await axiosInstance.get(`/posts/${pk}/emotions/`);
    console.log(response.data);
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

// DELETE : 가사 상세페이지 감정 삭제
export const DelDetailEmo = async (pk) => {
  try {
    const response = await axiosInstance.delete(`/posts/${pk}/emotions/del/`);
    console.log(response.data);
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
};
