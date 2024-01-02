import axios from "axios";

import { SPOTIFY_CLIENT_ID, SPOTIFY_REDIRECT_URI } from "@/constants";
import {
  getAccessToken,
  getIssueTime,
  getRefreshToken,
} from "@/app/api/instance";

async function fetchAccessToken(
  clientId: string,
  code: string,
): Promise<{
  accessToken: string;
  expiresIn: number;
  issueTime: number;
  refreshToken: string;
}> {
  const verifier = localStorage.getItem("verifier");

  const params = new URLSearchParams();
  params.append("client_id", clientId);
  params.append("grant_type", "authorization_code");
  params.append("code", code);
  params.append("redirect_uri", SPOTIFY_REDIRECT_URI);
  params.append("code_verifier", verifier!);

  const result = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params,
  });

  if (!result.ok) {
    return Promise.reject(result);
  }

  const {
    access_token: accessToken,
    expires_in: expiresIn,
    refresh_token: refreshToken,
  } = await result.json();
  const issueTime = new Date().getTime();
  return {
    accessToken,
    expiresIn,
    issueTime,
    refreshToken,
  };
}

async function fetchRefreshToken({
  refreshToken,
}: {
  refreshToken: string;
}): Promise<{
  accessToken: string;
  expiresIn: number;
  issueTime: number;
  refreshToken: string;
}> {
  const url = "https://accounts.spotify.com/api/token";

  const payload = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
      client_id: SPOTIFY_CLIENT_ID,
    }),
  };
  const result = await fetch(url, payload);

  const {
    access_token: accessToken,
    expires_in: expiresIn,
    refresh_token,
  } = await result.json();
  const issueTime = new Date().getTime();
  return {
    accessToken,
    expiresIn,
    issueTime,
    refreshToken: refresh_token,
  };
}

const fetchRecentlyPlayedMusic = async () => {
  try {
    const { data } = await axios.post("/api/spotify", {
      accessToken: getAccessToken(),
      refreshToken: getRefreshToken(),
      issueTime: getIssueTime(),
    });
    return data;
  } catch (e) {
    return e;
  }
};

export { fetchAccessToken, fetchRefreshToken, fetchRecentlyPlayedMusic };
