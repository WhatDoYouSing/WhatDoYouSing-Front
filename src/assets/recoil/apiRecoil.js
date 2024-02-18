import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const LoginState = atom({
  key: "LoginState",
  default: !!localStorage.getItem("accessToken"),
});

export const SignupState = atom({
  key: "SignupState",
  default: { username: null, password: null, nickname: null },
});

export const ProfileState = atom({
  key: "ProfileState",
  default: null,
});

export const PasCheckState = atom({
  key: "PasCheckState",
  default: null,
});

export const PasModifyState = atom({
  key: "PasModifyState",
  default: null,
});

export const NicModifyState = atom({
  key: "NicModifyState",
  default: null,
});

export const DropdownState = atom({
  key: "DropdownState",
  default: "최신순",
});

//홈 관련 state
export const LikeListState = atom({
  key: "LikeListState",
  default: [1, 2, 3, 4, 5],
});

export const LankingListState = atom({
  key: "LankingListState",
  default: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
});

export const SearchDropdownState = atom({
  key: "SearchDropdownState",
  default: "최신순",
});

export const SearchEmotionState = atom({
  key: "SearchEmotionState",
  default: 0,
});

export const MyEmotionState = atom({
  key: "MyEmotionState",
  default: 0,
});

export const LyricState = atom({
  key: "LyricState",
  default: {
    lyrics: "",
    content: "",
    title: "",
    singer: "",
    link: "",
    sings_emotion: "",
  },
});

export const SelectEmotionState = atom({
  key: "SelectEmotionState",
  default: "",
}); //감정칩으로 검색 들어갔을 때

export const KeywordState = atom({
  key: "KeywordState",
  default: "",
}); //검색 키워드
