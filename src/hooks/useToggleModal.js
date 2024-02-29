import { useRecoilState } from "recoil";
import { modalState1, modalState2 } from "../assets/recoil/modal";

export function useToggleModal() {
  //modal 관리
  const [isModalOpen, setIsModalOpen] = useRecoilState(modalState1);
  const [isModalOpen2, setIsModalOpen2] = useRecoilState(modalState2);

  const openModal = () => {
    setIsModalOpen((cur) => !cur);
  };

  return { isModalOpen, openModal };
}
