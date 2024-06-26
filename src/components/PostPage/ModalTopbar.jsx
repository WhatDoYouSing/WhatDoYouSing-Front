import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Delete } from "../../images/delete.svg";
import { ReactComponent as Back } from "../../images/back.svg";

import { PostLyrics } from "../../apis/lyrics";
import { useResetRecoilState } from "recoil";
import { LyricState } from "../../assets/recoil/apiRecoil";

const ModalTopbar = ({
  text = "로그인",
  del = true,
  btnText = "다음으로",
  isFilled = false,
  setUploCheckModal,
  setSelectedTrack,
  selectedTrack,
  setLyricInputModal,
  saveInputLyric,
}) => {
  const navigate = useNavigate();

  const handlePostModal = () => {
    navigate(-1);
    setSelectedTrack(null);
    window.sessionStorage.removeItem("from");
  };

  const handleLyricModal = () => {
    setLyricInputModal(false);
  };

  const resetSavedLines = useResetRecoilState(LyricState);
  const postLyric = async () => {
    const response = await PostLyrics(
      selectedTrack.lyric,
      selectedTrack.content,
      selectedTrack.name,
      selectedTrack.artist,
      selectedTrack.link,
      selectedTrack.emotion
    );

    const postId = response.data.id;
    resetSavedLines();
    navigate(`/detail/${postId}`);
  };

  const handleClick = async () => {
    if (isFilled) {
      switch (text) {
        case "직접 가사 입력하기":
          saveInputLyric();
          handleLyricModal();
          break;
        case "게시글 작성":
          postLyric();
          break;
      }
    } else {
      setUploCheckModal(true);
    }
  };

  return (
    <Wrapper>
      <Container>
        <ImgDiv>
          {del ? (
            <Delete onClick={handlePostModal} />
          ) : (
            <Back onClick={handleLyricModal} />
          )}
        </ImgDiv>
        <Title>{text}</Title>
        <NextBtn
          className="buttonDiv"
          isFilled={isFilled}
          onClick={handleClick}
        >
          {btnText}
        </NextBtn>
      </Container>
    </Wrapper>
  );
};

export default ModalTopbar;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-end;

  width: 100%;
  height: 7.9rem;
  background: var(--white);

  color: var(--black);
  z-index: 260;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 0 1.6rem 2.7rem;

  @media (min-width: 1100px) {
    padding: 0 16.8rem 2.7rem;
  }
`;

const ImgDiv = styled.div`
  position: absolute;
  left: 0;

  cursor: pointer;

  @media (min-width: 1100px) {
    left: 16.8rem;
  }
`;

const Title = styled.div`
  color: var(--Black, #262121);
  text-align: center;
  font-size: 2rem;
  font-style: normal;
  font-weight: 800;
`;

const NextBtn = styled.button`
  position: absolute;
  display: flex;
  width: 8.1rem;
  height: 4.1rem;
  padding: 1.2rem 1.6rem;
  justify-content: center;
  align-items: center;
  right: 1.6rem;

  @media (min-width: 1100px) {
    right: 16.8rem;
  }

  flex-shrink: 0;
  border-radius: 1.6rem;
  background-color: ${(props) =>
    props.isFilled ? "var(--black)" : "var(--lightGray)"};
  color: ${(props) => (props.isFilled ? "var(--white)" : "var(--darkGray)")};
  text-align: center;

  font-size: 1.4rem;
  font-weight: 500;

  &:active {
    background-color: ${(props) =>
      props.isFilled ? "var(--pointPink)" : "var(--lightGray)"};
  }
`;
