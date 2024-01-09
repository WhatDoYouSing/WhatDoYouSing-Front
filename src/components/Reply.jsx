import React, { useState } from "react";
import styled from "styled-components";

import profile from "../images/profile.svg";
import { ReactComponent as Like } from "../images/like.svg";
import { ReactComponent as LikeClick } from "../images/likeclick.svg";

import { DelReply } from "../apis/comment";

const Reply = ({ replyContent, render, setRender }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(replyContent.relikes_count || 0);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount((prevCount) => (isLiked ? prevCount - 1 : prevCount + 1));
  };

  //답댓글 삭제
  const handleDeleteRe = () => {
    const DelReData = async (recomment_pk) => {
      const response = await DelReply(recomment_pk);
      setRender(render + 1);
      console.log(response);
    };
    DelReData(replyContent.recomment_id);
  };

  return (
    <>
      <Container>
        <ProfileContainer>
          <img src={`${profile}`} alt="profileimg"></img>
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
            <span>·</span>
            <div onClick={handleDeleteRe}>삭제하기</div>
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
  padding: 2.5rem 0;
  margin-left: -1rem;
`;

const ProfileContainer = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;

  img {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    object-fit: cover;
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
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Content = styled.div`
  margin-top: 5px;
  margin-bottom: 10px;
  color: var(--veryDarkGray);
  font-size: 12px;
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
    color: var(--darkGray);
  }

  span {
    color: var(--darkGray);
  }
`;

const LikeBtn = styled.div``;
const Count = styled.div``;
