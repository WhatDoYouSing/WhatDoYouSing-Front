import { axiosInstance } from "../apis/http";
import { useNavigate } from "react-router-dom";

// POST : 로그인
export const PostLogin = async (user_id, password) => {
  try {
    const response = await axiosInstance.post("/accounts/login/", {
      username: user_id,
      password: password,
    });

    localStorage.setItem("user_id", response.data.data.id);
    localStorage.setItem("username", response.data.data.username);
    localStorage.setItem("nickname", response.data.data.nickname);
    localStorage.setItem("token", response.data.data.access_token);
    localStorage.setItem("user_profile", response.data.data.profile);

    console.log(response.data);
    window.location.replace("/");

    return Promise.resolve(response);
  } catch (error) {
    if (error.response && error.response.status === 400) {
      alert(error.response.data.error.non_field_errors);
    }
    console.error("로그인 실패", error.response);
  }
};

// POST : 회원가입
export const PostSignup = async (
  user_id,
  password,
  nickname,
  profile,
  navigate
) => {
  try {
    const response = await axiosInstance.post("/accounts/signup/", {
      username: user_id,
      password: password,
      nickname: nickname,
      profile: profile,
    });
    console.log(response.data);
    alert("가입이 완료되었습니다.");
    navigate("/login");
    return Promise.resolve(response.data);
  } catch (error) {
    if (error.response && error.response.status === 400) {
      alert(error.response.data.error.non_field_errors);
    }
    console.error("회원가입 실패", error.response);
  }
};

// POST : 아이디 중복 확인
export const PostCheckId = async (username) => {
  try {
    const response = await axiosInstance.post("/accounts/duplicate/", {
      username: username,
    });
    console.log(response.data);
    return Promise.resolve(response.data);
  } catch (error) {
    console.error("중복확인 실패", error.response);
  }
};

// PATCH : 프로필 사진 선택
export const PostProfile = async (profile) => {
  try {
    const response = await axiosInstance.patch("/accounts/profile/", {
      profile: profile,
    });

    console.log(response.data);
    localStorage.setItem("user_profile", response.data.data.profile);
    window.location.replace("/");

    return Promise.resolve(response.data);
  } catch (error) {
    if (error.response && error.response.status === 400) {
      alert(error.response.data.error.non_field_errors);
    }
    console.error("프로필 사진 선택 실패", error.response);
  }
};

// POST : 수정 전 비밀번호 확인
export const PostCheckPassword = async (password) => {
  try {
    const response = await axiosInstance.get("/accounts/access/", {
      password: password,
    });
    console.log(response.data);

    return Promise.resolve(response.data);
  } catch (error) {
    if (error.response && error.response.status === 400) {
      alert(error.response.data.error.non_field_errors);
    }
    console.error(error.response);
  }
};

//PATCH
// PATCH : 닉네임 수정 / 카카오 닉네임 생성
export const PatchNickname = async (nickname) => {
  try {
    const response = await axiosInstance.patch("/accounts/update/nickname/", {
      nickname: nickname,
    });
    console.log(response.data);
    localStorage.setItem("nickname", response.data.data.nickname);
    return Promise.resolve(response.data);
  } catch (error) {
    if (error.response && error.response.status === 400) {
      alert(error.response.data.error.non_field_errors);
    }
    console.error(error.response);
  }
};

// PATCH : 비밀번호 수정
export const PatchPassword = async (
  current_password,
  new_password,
  navigate
) => {
  try {
    const response = await axiosInstance.patch("/accounts/update/password/", {
      current_password: current_password,
      new_password: new_password,
    });
    console.log(response.data);
    alert(response.data.message);
    navigate("/");
    return Promise.resolve(response.data);
  } catch (error) {
    if (error.response && error.response.status === 400) {
      console.log(error.response.data);
      alert(error.response.data.message);
      navigate("/modifyintro/pas");
    }
    console.error(error.response);
  }
};

//DELETE
// DELETE : 회원 탈퇴
export const DelAccount = async (password, navigate) => {
  try {
    const response = await axiosInstance.post("/accounts/delete/", {
      password: password,
    });
    console.log(response.data);
    alert("회원탈퇴가 완료되었습니다.");
    window.localStorage.removeItem("user_id");
    window.localStorage.removeItem("username");
    window.localStorage.removeItem("nickname");
    window.localStorage.removeItem("user_profile");
    window.localStorage.removeItem("token");
    window.location.replace("/");
    return Promise.resolve(response.data);
  } catch (error) {
    if (error.response && error.response.status === 400) {
      alert(error.response.data.error.non_field_errors);
    }
    console.error(error.response);
  }
};

// DELETE : 카카오 회원 탈퇴
export const DelKakaoAccount = async (navigate) => {
  try {
    const response = await axiosInstance.post("/accounts/kakao/delete/");
    console.log(response.data);
    alert("회원탈퇴가 완료되었습니다.");
    window.localStorage.removeItem("user_id");
    window.localStorage.removeItem("username");
    window.localStorage.removeItem("nickname");
    window.localStorage.removeItem("user_profile");
    window.localStorage.removeItem("token");
    window.location.replace("/");
    return Promise.resolve(response.data);
  } catch (error) {
    if (error.response && error.response.status === 400) {
      alert(error.response.data.error.non_field_errors);
    }
    console.error(error.response);
  }
};

//GET
// GET : 카카오 로그인
export const KakaoLogin = async (code) => {
  try {
    const response = await axiosInstance.get(
      `/accounts/kakao/callback/?code=${code}`
    );

    console.log(response.data);

    localStorage.setItem("user_id", response.data.data.id);
    localStorage.setItem("username", response.data.data.username);
    localStorage.setItem("nickname", response.data.data.nickname);
    localStorage.setItem("token", response.data.data.access_token);
    localStorage.setItem("user_profile", response.data.data.profile);

    window.location.replace(
      response.data.message === "카카오 로그인 성공" ? "/" : "/kakao-nicname"
    );

    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

//Logout
export const Logout = () => {
  window.localStorage.removeItem("user_id");
  window.localStorage.removeItem("username");
  window.localStorage.removeItem("nickname");
  window.localStorage.removeItem("user_profile");
  window.localStorage.removeItem("token");

  const navigate = useNavigate();
  navigate("/");
};

export const isTokenExpired = async (error) => {
  if (error.response.data.code === "token_not_valid") {
    alert("세션 만료. 다시 로그인해주세요.");
    Logout();
  }
};
