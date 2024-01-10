import React, { useEffect, useState } from "react";
import styled from "styled-components";

import profile from "../images/profile.svg";
import { ReactComponent as Like } from "../images/like.svg";
import { ReactComponent as LikeClick } from "../images/likeclick.svg";

import { DelReply, PostReplyLike } from "../apis/comment";
import { useRecoilValue } from "recoil";
import { profileListAtom } from "../assets/recoil/recoil";

const Reply = ({
  replyContent,
  render,
  setRender,
  commentId,
  deleteRe,
  setDeleteRe,
  setReNum,
}) => {
  const [isLiked, setIsLiked] = useState(
    localStorage.getItem(`reply_${replyContent.recomment_id}_isLiked`) ===
      "true"
  );
  const [likeCount, setLikeCount] = useState(replyContent.relikes_count || 0);
  const profiles = useRecoilValue(profileListAtom);

  // 로그인 여부 확인 및 현재 사용자 정보 가져오기
  const isLoggedIn = !!localStorage.getItem("token");
  const currentUserID = +localStorage.getItem("user_id");
  // 작성자와 현재 사용자를 비교하여 삭제 버튼 표시 여부 결정
  const showDeleteButton = isLoggedIn && currentUserID === replyContent.author;

  const handleLike = () => {
    const PostReLike = async (comment_pk, recomment_pk) => {
      const response = await PostReplyLike(comment_pk, recomment_pk);
      setRender(render + 1);
      console.log(response);
    };
    PostReLike(commentId, replyContent.recomment_id);
    setIsLiked(!isLiked);
    //setLikeCount((prevCount) => (isLiked ? prevCount - 1 : prevCount + 1));
  };

  useEffect(() => {
    localStorage.setItem(
      `reply_${replyContent.recomment_id}_isLiked`,
      isLiked.toString()
    );
  }, [replyContent.recomment_id, isLiked]);

  //답댓글 삭제
  const handleDeleteRe = () => {
    setDeleteRe(!deleteRe);
    setReNum(replyContent.recomment_id);

    // const DelReData = async (recomment_pk) => {
    //   const response = await DelReply(recomment_pk);
    //   setRender(render + 1);
    //   console.log(response);
    // };
    // DelReData(replyContent.recomment_id);
  };

  return (
    <>
      <Container>
        <ProfileContainer>
          <img
            src={profiles[replyContent.author_profile - 1]?.none_filled}
            alt="profileimg"
          ></img>
        </ProfileContainer>
        <ContentContainer>
          <Id>{replyContent.author_nickname}</Id>
          <Content>{replyContent.com_content}</Content>
          <Plus>
            <LikeBtn onClick={handleLike}>
              {isLiked ? <LikeClick /> : <Like />}
            </LikeBtn>
            <Count
              isLiked={isLiked}
              style={{
                color: isLiked ? "var(--pointPink)" : "var(--darkGray)",
              }}
            >
              {replyContent.relikes_count}
            </Count>
            {showDeleteButton && (
              <>
                <span>·</span>
                <div onClick={handleDeleteRe}>삭제하기</div>
              </>
            )}
          </Plus>
        </ContentContainer>
      </Container>
    </>
  );
};

export default Reply;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  /* padding: 2.5rem 0; */
  margin-left: -1rem;
  padding: 2.5rem 0;
  background-color: var(--lightGray);
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: var(--lightGray);

  img {
    width: 21px;
    height: 21px;
  }
`;

const ContentContainer = styled.div`
  width: 296px;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  font-style: normal;
`;

const Id = styled.div`
  color: var(--veryDarkGray);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Content = styled.div`
  margin-top: 5px;
  margin-bottom: 10px;
  color: var(--veryDarkGray);
  font-size: 14px;
  font-weight: 500;
  line-height: 125%;
`;

const Plus = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;

  color: rgba(255, 255, 255, 0.7);
  font-size: 10px;
  font-weight: 500;
  line-height: normal;

  img {
    width: 9px;
    height: 9.212px;
    cursor: pointer;
  }

  div {
    cursor: pointer;
    font-size: 1.4rem;
    color: var(--darkGray);
  }

  span {
    color: var(--darkGray);
    font-size: 1.4rem;
  }
`;

const LikeBtn = styled.div``;
const Count = styled.div``;
