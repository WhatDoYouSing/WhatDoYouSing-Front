import { axiosInstance } from "../apis/http";
import { isTokenExpired } from "../apis/user";

// GET : 댓글 조회
export const GetComment = async (pk) => {
  try {
    const response = await axiosInstance.get(`/comments/${pk}/`, {
      pk: pk,
    });
    console.log(response.data);
    return Promise.resolve(response.data);
  } catch (error) {
    isTokenExpired(error);
    return Promise.reject(error);
  }
};

// POST : 댓글 등록
export const PostComment = async (pk, com_content) => {
  try {
    const response = await axiosInstance.post(`/comments/${pk}/`, {
      pk: pk,
      com_content: com_content,
    });
    console.log(response.data);
    return Promise.resolve(response.data);
  } catch (error) {
    isTokenExpired(error);
    console.error("댓글 등록 실패", error.response);
  }
};

// DELETE : 댓글 삭제
export const DelComment = async (comment_pk) => {
  try {
    const response = await axiosInstance.delete(
      `/comments/del/${comment_pk}/`,
      {
        comment_pk: comment_pk,
      }
    );
    console.log(response);
    return Promise.resolve(response);
  } catch (error) {
    isTokenExpired(error);
    console.error(error.response);
  }
};

// POST : 댓글 공감
export const PostCommentLike = async (comment_pk, liked) => {
  try {
    const response = await axiosInstance.post(
      `/comments/${comment_pk}/likes/`,
      {
        comment_pk: comment_pk,
        liked: liked,
      }
    );
    console.log(response.data);
    return Promise.resolve(response);
  } catch (error) {
    isTokenExpired(error);
    console.error("댓글 공감 등록 실패", error.response);
  }
};

// POST : 댓글 공감 취소
export const CancelCommentLike = async (comment_pk, liked) => {
  try {
    const response = await axiosInstance.post(
      `/comments/${comment_pk}/likes/`,
      {
        comment_pk: comment_pk,
        liked: liked,
      }
    );
    console.log(response);
    return Promise.resolve(response);
  } catch (error) {
    isTokenExpired(error);
    console.error("댓글 공감 취소 실패", error.response);
  }
};

// POST : 답댓글 등록
export const PostReply = async (pk, post, com_content) => {
  try {
    const response = await axiosInstance.post(`/comments/${pk}/recomments/`, {
      pk: pk,
      post: post,
      com_content: com_content,
    });
    console.log(response.data);
    return Promise.resolve(response.data);
  } catch (error) {
    isTokenExpired(error);
    console.error("답댓글 등록 실패", error.response);
  }
};

// DELETE : 답댓글 삭제
export const DelReply = async (recomment_pk) => {
  try {
    const response = await axiosInstance.delete(
      `/comments/del/recomments/${recomment_pk}/`,
      {
        recomment_pk: recomment_pk,
      }
    );
    console.log(response);
    return Promise.resolve(response);
  } catch (error) {
    isTokenExpired(error);
    console.error(error.response);
  }
};

// POST : 답댓글 공감
export const PostReplyLike = async (comment_pk, recomment_pk) => {
  try {
    const response = await axiosInstance.post(
      `/comments/${comment_pk}/recomments/${recomment_pk}/relikes/`,
      {
        comment_pk: comment_pk,
        recomment_pk: recomment_pk,
      }
    );
    console.log(response);
    return Promise.resolve(response);
  } catch (error) {
    isTokenExpired(error);
    console.error("답댓글 공감 등록 실패", error.response);
  }
};

// POST : 답댓글 공감 취소
export const CancelReplyLike = async (comment_pk, recomment_pk) => {
  try {
    const response = await axiosInstance.post(
      `/comments/${comment_pk}/recomments/${recomment_pk}/relikes/`,
      {
        comment_pk: comment_pk,
        recomment_pk: recomment_pk,
      }
    );
    console.log(response);
    return Promise.resolve(response);
  } catch (error) {
    isTokenExpired(error);
    console.error("답댓글 공감 취소 실패", error.response);
  }
};
