import { ReactNode } from "react";
import { atom, selector } from "recoil";

//Recoil Atom 선언
export const modalState1 = atom({
  key: "modalState1",
  default: false,
});

export const modalState2 = atom({
  key: "modalState2",
  default: false,
});

export const modalContent1 = atom({
  key: "modalContent1",
  default: null,
});

export const modalContent2 = atom({
  key: "modalContent2",
  default: null,
});
