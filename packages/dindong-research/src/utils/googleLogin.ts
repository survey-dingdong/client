"use client";
import { loginOauthUsersLoginOauthPost } from "src/client";
import { token } from "./token";
import { REFRESH_TOKEN_KEY, TOKEN_KEY } from "src/constants/token";

/**
 *
 */
export async function fetchUserProfile(accessToken: string) {
  let userInfo;

  try {
    userInfo = await fetch(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${accessToken}`
    ).then((response) => response.json());

    const res = await loginOauthUsersLoginOauthPost({
      provider: "google",
      requestBody: {
        oauthId: userInfo.id,
        email: userInfo.email,
        username: userInfo.name,
      },
    });

    token.set(TOKEN_KEY, res.token);
    token.set(REFRESH_TOKEN_KEY, res.refreshToken);

    window.location.href = "/workspaces";
  } catch (error: any) {
    // error 객체에 직접 접근하기 전에 error.response가 존재하는지 확인
    if (error.response && error.response.code === "USER__ALREADY_EXISTS") {
      window.location.href = `/login/provider-error?provider=dingdong&email=${userInfo?.email}`;
      return;
    }

    console.error("Error fetching user profile data:", error);
  }
}

/**
 *
 */
export function handleCallback() {
  if (typeof window === "undefined") {
    return;
  }

  var fragmentString = window.location.hash.substring(1);
  var params: { access_token?: string } = {};
  var regex = /([^&=]+)=([^&]*)/g,
    m;
  while ((m = regex.exec(fragmentString))) {
    (params as any)[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
  }

  if (params.access_token) {
    fetchUserProfile(params.access_token);
  } else {
    window.location.href = "/";
  }
}
