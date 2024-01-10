import React, { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";

// import Reply from "../BottomSheet/Reply";
import profile from "../images/profile.svg";
import { ReactComponent as Like } from "../images/like.svg";
import { ReactComponent as LikeClick } from "../images/likeclick.svg";
import Reply from "./Reply";

import { DelComment, PostCommentLike } from "../apis/comment";
import { useRecoilValue } from "recoil";
import { profileListAtom } from "../assets/recoil/recoil";

const CommentBox = ({
  content,
  onReply,
  render,
  setRender,
  isActive,
  showReply = true,
  deleteCom,
  setDeleteCom,
  setComNum,
  deleteRe,
  setDeleteRe,
  setReNum,
}) => {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(
    localStorage.getItem(`comment_${content.comment_id}_isLiked`) === "true"
  );
  // const [likeCount, setLikeCount] = useState(6); //6은 임시값 (초기 좋아요 수)
  const [addReply, setAddReply] = useState(false);
  const profiles = useRecoilValue(profileListAtom);

  // 로그인 여부 확인 및 현재 사용자 정보 가져오기
  const isLoggedIn = !!localStorage.getItem("token");
  const currentUserID = +localStorage.getItem("user_id");
  // 작성자와 현재 사용자를 비교하여 삭제 버튼 표시 여부 결정
  const showDeleteButton = isLoggedIn && currentUserID === content.author;

  const handleLike = () => {
    const PostComLike = async (comment_pk, liked) => {
      const response = await PostCommentLike(comment_pk, liked);
      setRender(render + 1);
      console.log(response);
    };
    PostComLike(content.comment_id, isLiked);
    setIsLiked(!isLiked);
    // setLikeCount((prevCount) => (isLiked ? prevCount - 1 : prevCount + 1));
  };

  const handleReply = () => {
    if (isActive) {
      setAddReply(!addReply);
      onReply(content.comment_id);
    } else {
      setAddReply(true);
      onReply(content.comment_id);
    }
  };

  //댓글 삭제
  const handleDelete = () => {
    setDeleteCom(!deleteCom);
    setComNum(content.comment_id);

    // const DelComData = async (comment_pk) => {
    //   const response = await DelComment(comment_pk);
    //   setRender(render + 1);
    //   console.log(response);
    // };
    // DelComData(content.comment_id);
  };

  const handleNavigate = () => {
    if (!showReply) {
      if (content.post === null) {
        alert("해당 게시글은 삭제되었습니다!");
      } else {
        navigate(`/detail/${content.post}`);
      }
    }
  };

  useEffect(() => {
    // isLiked가 변경될 때마다 localStorage를 업데이트합니다.
    localStorage.setItem(
      `comment_${content.comment_id}_isLiked`,
      isLiked.toString()
    );
  }, [content.comment_id, isLiked]);

  return (
    <>
      <Background
        onClick={handleNavigate}
        style={{ backgroundColor: isActive ? "#FFF5F5" : "var(--white)" }}
      >
        <Container>
          <ProfileContainer>
            <img
              src={profiles[content.author_profile - 1]?.none_filled}
              alt="profileimg"
            ></img>
          </ProfileContainer>
          <ContentContainer>
            <Id>{content.author_nickname}</Id>
            <Content>{content.com_content}</Content>

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
                {content.likes_count}
              </Count>
              {showReply && (
                <>
                  <span>·</span>
                  <AddReply
                    onClick={() => {
                      handleReply();
                    }}
                  >
                    답글달기
                  </AddReply>
                </>
              )}

              {showDeleteButton && (
                <>
                  <span>·</span>
                  <div onClick={handleDelete}>삭제하기</div>
                </>
              )}
            </Plus>
            {/* {content.recomments_count > 0 && (
              <Replies>
                {content.recomments.map((reply) => (
                  <Reply
                    key={reply.comment_id}
                    replyContent={reply}
                    render={render}
                    setRender={setRender}
                    commentId={content.comment_id}
                    deleteRe={deleteRe}
                    setDeleteRe={setDeleteRe}
                    setReNum={setReNum}
                  />
                ))}
              </Replies>
            )} */}
          </ContentContainer>
        </Container>
        {content.recomments_count > 0 && (
          <Replies>
            {content.recomments.map((reply) => (
              <Reply
                key={reply.comment_id}
                replyContent={reply}
                render={render}
                setRender={setRender}
                commentId={content.comment_id}
                deleteRe={deleteRe}
                setDeleteRe={setDeleteRe}
                setReNum={setReNum}
              />
            ))}
          </Replies>
        )}
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
  padding: 2.5rem 1.6rem 0rem 1.6rem;
  gap: 1rem;
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
    width: 4rem;
    height: 21px;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-style: normal;
  padding-right: 1.6rem;
`;

const Id = styled.div`
  color: var(--veryDarkGray);
  font-size: 14px;
  font-weight: 600;
  line-height: normal;
`;

const Content = styled.div`
  width: 100%;
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

  margin-bottom: 2.5rem;

  img {
    width: 9px;
    height: 9.212px;
    cursor: pointer;
  }

  div {
    cursor: pointer;
    color: var(--darkGray);
    font-size: 1.4rem;
  }

  span {
    color: var(--darkGray);
    font-size: 1.4rem;
  }
`;

const LikeBtn = styled.div``;
const Count = styled.div``;
const AddReply = styled.div``;
const Replies = styled.div``;

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
