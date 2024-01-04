"use client";

import { useRouter } from "next/navigation";
import { fetchRecentlyPlayedMusic } from "@/app/api/spotify";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { trackDataQueryKey } from "@/utils/queryKey";
import styled from "@emotion/styled";

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

  const text = "계산중입니다...";

  return (
    <Container>
      {isLoading && (
        <>
          <LoadingTextContainer>
            {text.split("").map((v) => (
              <LoadingText>{v}</LoadingText>
            ))}
          </LoadingTextContainer>
          <Spinner />
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 40%;

  margin: 0 auto;
  width: 100%;

  background: #fff;

  font-family: Galmuri11;
`;

const LoadingTextContainer = styled.div`
  text-align: center;
`;

const LoadingText = styled.span`
  @keyframes move {
    0%,
    100% {
      transform: translateY(0px);
    }

    50% {
      transform: translateY(15px);
    }
  }
  display: inline-block;

  margin-bottom: 12px;

  color: #10299f;
  text-align: center;
  font-size: 20px;
  font-weight: 400;

  animation: move 2s ease-in-out infinite;

  &:nth-child(2n) {
    animation-delay: 0.1s;
  }

  &:nth-child(2n + 1) {
    animation-delay: 0.2s;
  }
`;

const Spinner = styled.div`
  margin: 0 auto;
  width: 91px;
  height: 91px;
  border-radius: 100%;

  background: #10299f;
`;
