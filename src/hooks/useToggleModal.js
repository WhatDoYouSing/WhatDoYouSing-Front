import { useRecoilState } from "recoil";
import { modalState } from "../assets/recoil/modal";

export function useToggleModal() {
  //modal 관리
  const [isModalOpen, setIsModalOpen] = useRecoilState(modalState);

  const openModal = () => {
    setIsModalOpen((cur) => !cur);
  };

  return { isModalOpen, openModal };
}
