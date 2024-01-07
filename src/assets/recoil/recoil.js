import { atom, selector } from "recoil";

import emotionData from "../data/EmotionData";
import userProfileData from "../data/UserProfileData";

export const emotionListAtom = atom({
  key: "emotionListAtom",
  default: emotionData,
});

export const profileListAtom = atom({
  key: "emotionListAtom",
  default: userProfileData,
});
