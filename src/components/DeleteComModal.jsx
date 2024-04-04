import styled from "styled-components";
import { DelComment } from "../apis/comment";

const DeleteComModal = ({
  deleteCom,
  setDeleteCom,
  comNum,
  render,
  setRender,
}) => {
  const handleClickDel = () => {
    const DelComData = async (comment_pk) => {
      const response = await DelComment(comment_pk);
      setRender(render + 1);
      console.log(response);
      setDeleteCom(!deleteCom); //모달 닫기
    };
    DelComData(comNum);
  };

  return (
    <Container>
      <TitleAsk>댓글 삭제</TitleAsk>
      <AskComment>정말 댓글을 삭제하시겠습니까?</AskComment>
      <Button onMouseUp={handleClickDel} className="buttonDiv">
        댓글 삭제
      </Button>
    </Container>
  );
};

export default DeleteComModal;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  height: auto;

  padding: 20px 16px;
  align-items: center;
  gap: 16px;
  border-radius: 10px;
  background-color: var(--white);
  z-index: 101;
  .buttonDiv:active {
    background-color: var(--black);
  }
`;

const TitleAsk = styled.div`
  color: var(--black);
  text-align: center;
  font-size: 2rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -0.4px;
`;

const AskComment = styled.div`
  color: var(--black);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.32px;
`;

const Button = styled.button`
  width: 26.8rem;
  height: 4.8rem;
  border-radius: 10px;
  background: var(--pointPink);
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.4rem;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: var(--white);
`;
