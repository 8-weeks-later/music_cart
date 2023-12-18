import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";
import { isTokenExpiredWithIssueTime } from "@/app/api/spotify/route";
import { fetchRefreshToken } from "@/app/api/spotify";

let _accessToken = "";
let _refreshToken = "";
let _issueTime = 0;

export const setAccessToken = (token: string) => {
  _accessToken = token;
};
export const getAccessToken = () => _accessToken;
export const setRefreshToken = (token: string) => {
  _refreshToken = token;
};
export const getRefreshToken = () => _refreshToken;
export const setIssueTime = (time: number) => {
  _issueTime = time;
};
export const getIssueTime = () => _issueTime;

const spotifyInstance = axios.create();

spotifyInstance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig<any>) => {
    const accessToken = getAccessToken();
    const issueTime = getIssueTime();
    const expiresIn = 3600;

    if (!accessToken) {
      return Promise.reject("no access token");
    }

    // 토큰이 만료됨
    if (isTokenExpiredWithIssueTime({ expiresIn, issueTime })) {
      const refreshToken = getRefreshToken();
      const refreshTokenInfo = await fetchRefreshToken({
        refreshToken,
      });
      setAccessToken(refreshTokenInfo.accessToken);
      setIssueTime(refreshTokenInfo.issueTime);
      setRefreshToken(refreshTokenInfo.refreshToken);
    }

    config.headers.Authorization = `Bearer ${getAccessToken()}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default spotifyInstance;
