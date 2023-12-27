import React, { useState, useRef } from "react";
import styled, { css } from "styled-components";

// import Reply from "../BottomSheet/Reply";
import profile from "../images/profile.svg";
import { ReactComponent as Like } from "../images/like.svg";
import { ReactComponent as LikeClick } from "../images/likeclick.svg";

const CommentBox = ({ onReply }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(6); //6은 임시값 (초기 좋아요 수)
  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount((prevCount) => (isLiked ? prevCount - 1 : prevCount + 1));
  };

  const [addReply, setAddReply] = useState(false);
  const handleReply = () => {
    setAddReply(!addReply);
    onReply();
  };

  return (
    <>
      <Background
        style={{ backgroundColor: addReply ? "#FFF5F5" : "var(--white)" }}
      >
        <Container>
          <ProfileContainer>
            <img src={`${profile}`} alt="profileimg"></img>
          </ProfileContainer>
          <ContentContainer>
            <Id>채오니</Id>
            <Content>
              나 혼자선 이 세상도 별 다를게 없겠지 내 하루를 물들여줘 너만의
              단어들로
            </Content>
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
                {likeCount}
              </Count>
              <span>·</span>
              <AddReply
                onClick={() => {
                  handleReply();
                }}
              >
                답글달기
              </AddReply>
              <span>·</span>
              <div>삭제하기</div>
            </Plus>
          </ContentContainer>
        </Container>
      </Background>
    </>
  );
};

export default CommentBox;

const Background = styled.div`
  width: calc(100% + 1.6rem * 2);
  margin-left: -1.6rem;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 2.5rem 1.6rem;
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
  font-family: "Pretendard-Regular";
  font-style: normal;
`;

const Id = styled.div`
  color: var(--veryDarkGray);
  font-size: 12px;
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
const AddReply = styled.div``;

const InputBoxPosition = styled.div`
  z-index: 2;
  width: 350px;
  height: 83px;
  padding: 21px 0px;
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #161524;
  gap: 6px;

  img {
    width: 35px;
    height: 35px;
    cursor: pointer;
  }

  div {
    display: flex;
    flex-direction: row;
  }
`;

const Mention = styled.div`
  position: absolute;
  bottom: 83px;
  left: 0;
  display: flex;
  align-items: center;
  width: 350px;
  padding: 0px 20px;
  height: 32px;
  background: #242237;

  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
`;

const Inputbox = styled.div`
  width: 309px;
  height: 35px;
  border-radius: 20px;
  box-shadow: 0 0 0 1px #fff inset;
  background-color: #161524;
  display: flex;
  align-items: center;

  font-size: 12px;
  font-weight: 500;
  line-height: normal;

  div {
    padding-left: 10px;
    width: auto;
    color: #a397ff;
  }

  input {
    background-color: transparent;
    border: none;
    outline: none;
    flex: 1;
    padding-left: 10px;
    color: white;

    font-style: normal;
    font-size: 12px;
    font-weight: 500;
    line-height: normal;
  }
`;
