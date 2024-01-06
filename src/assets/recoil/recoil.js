import { atom, selector } from "recoil";

import emotionData from "../data/EmotionData";

export const emotionListAtom = atom({
  key: "emotionListAtom",
  default: emotionData[0],
});
