"use client";
import { useEffect, useState } from "react";
import { SPOTIFY_CLIENT_ID } from "@/constants";
import { fetchAccessToken } from "@/app/api/spotify";
import {
  getAccessToken,
  getIssueTime,
  getRefreshToken,
  setAccessToken,
  setIssueTime,
  setRefreshToken,
} from "@/app/api/instance";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
export default function Home() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code") || "";

  const router = useRouter();

  const [isTokenFetched, setIsTokenFetched] = useState(false);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const { accessToken, refreshToken, issueTime, expiresIn } =
          await fetchAccessToken(SPOTIFY_CLIENT_ID, code);
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
        setIssueTime(issueTime);
        setIsTokenFetched(true);
      } catch (e) {
        console.log("error", e, isTokenFetched);
      }
    };
    fetchToken();
  }, []);

  useEffect(() => {
    if (isTokenFetched) {
      router.push("/loading");
    }
  }, [isTokenFetched]);
  return <main></main>;
}
