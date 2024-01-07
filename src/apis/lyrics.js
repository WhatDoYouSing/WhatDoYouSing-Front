import { axiosInstance } from "../apis/http";

// GET : 가사 목록 조회
export const GetLyricsList = async () => {
  try {
    const response = await axiosInstance.get(`/posts/`);

    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

// GET : 가사 상세 조회
export const GetLyricsDetail = async (lyrics_id) => {
  try {
    const response = await axiosInstance.get(`/posts/${lyrics_id}/`);

    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

// POST : 아이디 중복 확인
export const PostLyrics = async (
  lyrics,
  content,
  title,
  singer,
  link,
  sings_emotion
) => {
  try {
    const response = await axiosInstance.post("/posts/add/", {
      lyrics: lyrics,
      content: content,
      title: title,
      singer: singer,
      link: link,
      sings_emotion: sings_emotion,
    });
    console.log(response.data);
    return Promise.resolve(response.data);
  } catch (error) {
    console.error("중복확인 실패", error.response);
  }
};

// DELETE : 가사 삭제
export const DelLyrics = async (lyrics_id) => {
  try {
    const response = await axiosInstance.delete(`/posts/${lyrics_id}/`, {
      lyrics_id: lyrics_id,
    });

    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};
