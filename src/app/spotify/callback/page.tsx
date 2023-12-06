"use client";

import { useEffect } from "react";
import { getAccessToken } from "@/api/spotify";
import { SPOTIFY_CLIENT_ID } from "@/constants";

export default function Home() {
  const searchParams = new URLSearchParams(window.location.search); //useSearchParams();
  const code = searchParams.get("code") || "";

  useEffect(() => {
    getAccessToken(SPOTIFY_CLIENT_ID, code).then((accessToken) =>
      console.log(accessToken),
    );
  }, []);

  return <main></main>;
}
