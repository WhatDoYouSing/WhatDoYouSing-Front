import { ReactNode } from "react";
import { atom, selector } from "recoil";

//Recoil Atom 선언
export const modalState = atom({
  key: "modalState",
  default: false,
});

export const modalContent = atom({
  key: "modalContent",
  default: null,
});
