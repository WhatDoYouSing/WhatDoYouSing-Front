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
