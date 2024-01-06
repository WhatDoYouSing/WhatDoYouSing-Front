import { axiosInstance } from "../apis/http";
import { useNavigate } from "react-router-dom";

// POST : 로그인
export const PostLogin = async (user_id, password) => {
  try {
    const response = await axiosInstance.post("/accounts/login/", {
      username: user_id,
      password: password,
    });

    localStorage.setItem("userId", response.data.data.id);
    localStorage.setItem("token", response.data.data.access_token);

    console.log(response.data);
    window.location.replace("/");

    return Promise.resolve(response);
  } catch (error) {
    if (error.response && error.response.status === 400) {
      alert(error.response.data.error.non_field_errors);
    }
    console.error("로그인 실패", error.response);

    return Promise.reject(error);
  }
};

// POST : 회원가입
export const PostSignup = async (user_id, password, nickname, navigate) => {
  try {
    const response = await axiosInstance.post("/accounts/signup/", {
      username: user_id,
      password: password,
      nickname: nickname,
    });
    console.log(response.data);
    alert("가입이 완료되었습니다.");
    navigate("/profile");
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

// POST : 프로필 사진 선택
export const PostProfile = async (profile) => {
  try {
    const response = await axiosInstance.post("/accounts/profile/", {
      profile: profile,
    });
    console.log(response.data);
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
    const response = await axiosInstance.post("/accounts/access/", {
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
export const PatchNicname = async (nickname) => {
  try {
    const response = await axiosInstance.patch("/accounts/update/nickname", {
      nickname: nickname,
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

// PATCH : 비밀번호 수정
export const PatchPassword = async (new_password) => {
  try {
    const response = await axiosInstance.patch("/accounts/update/password", {
      new_password: new_password,
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

//DELETE
// DELETE : 회원 탈퇴
export const DelAccount = async (password) => {
  try {
    const response = await axiosInstance.patch("/accounts/delete/", {
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

//GET
// GET : 카카오 로그인
export const KaKaoLogin = async (code) => {
  try {
    const response = await axiosInstance.get(`/accounts/kakao/`);
    const ACCESS_TOKEN = response.data.data.access_token;
    const REFRESH_TOKEN = response.data.data.refresh_token;

    localStorage.setItem("token", ACCESS_TOKEN);
    localStorage.setItem("refresh_token", REFRESH_TOKEN);

    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

// // GET : 카카오 로그인
// export const KaKaoLogin = async (code) => {
//   try {
//     const response = await http.get(
//       `/accounts/kakao/login/?code=${code}&redirect_uri=https://cheer-charm.vercel.app/oauth`
//     );
//     const ACCESS_TOKEN = response.data.data.access_token;
//     const REFRESH_TOKEN = response.data.data.refresh_token;

//     localStorage.setItem("token", ACCESS_TOKEN);
//     localStorage.setItem("refresh_token", REFRESH_TOKEN);

//     return Promise.resolve(response);
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };
