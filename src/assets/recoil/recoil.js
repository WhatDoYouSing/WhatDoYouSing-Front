import { atom, selector } from "recoil";

import emotionData from "../data/EmotionData";
import userProfileData from "../data/UserProfileData";

export const emotionListAtom = atom({
  key: "emotionListAtom",
  default: emotionData,
});

export const profileListAtom = atom({
  key: "profileListAtom",
  default: userProfileData,
});

// export const userProfileSelector = selector({
//   key: "userProfileSelector",
//   get: ({ get }, author) => {
//     const profileList = get(profileListAtom);

//     console.log(author);
//     const userProfile = profileList.find((profile) => profile.id === author);
//     return userProfile;
//   },
// });
