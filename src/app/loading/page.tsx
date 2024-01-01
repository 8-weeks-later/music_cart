"use client";

import { useRouter } from "next/navigation";
import { fetchRecentlyPlayedMusic } from "@/app/api/spotify";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { trackDataQueryKey } from "@/utils/queryKey";

export default function HomePage() {
  const router = useRouter();

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: trackDataQueryKey,
    queryFn: fetchRecentlyPlayedMusic,
    staleTime: Infinity,
  });

  if (isSuccess) {
    router.push("/result");
  }

  return <main>{isLoading && <p>계산중입니다.</p>}</main>;
}
