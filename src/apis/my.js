import { axiosInstance } from "../apis/http";

// GET : 마이 페이지
export const GetMyPage = async () => {
  try {
    const response = await axiosInstance.get("/mypage/profile/");

    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

// GET : 사용자가 저장한 게시글 모아보기
export const GetMySaved = async (page) => {
  try {
    const response = await axiosInstance.get(`/mypage/scraps/?page=${page}`, {
      page: page,
    });
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

// GET : 사용자가 작성한 게시글 모아보기
export const GetMyLyrics = async (page) => {
  try {
    const response = await axiosInstance.get(`/mypage/sings/?page=${page}`, {
      page: page,
    });

    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

// GET : 사용자가 작성한 댓글 모아보기
export const GetMyComment = async (page) => {
  try {
    const response = await axiosInstance.get(`/mypage/comments/?page=${page}`, {
      page: page,
    });

    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

// GET : 사용자가 남긴 감정과 감정을 남긴 가사 게시글 모아보기
export const GetMyEmo = async (emotion, page) => {
  try {
    const response = await axiosInstance.get(
      `/mypage/emotions/?emotion=${emotion}&page=${page}`,
      { emotion: emotion, page: page }
    );

    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
};
