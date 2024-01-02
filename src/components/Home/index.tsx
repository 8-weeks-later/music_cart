"use client";

import styled from "@emotion/styled";

import Logo from "@/components/Home/Logo";
import Album from "@/components/Home/Album";
import Link from "next/link";
import { redirectToAuthCodeFlow } from "@/utils/spotify";
import { useEffect, useState } from "react";

export default function Home() {
  const [redirectURI, setRedirectURI] = useState("");
  useEffect(() => {
    redirectToAuthCodeFlow().then((uri) => setRedirectURI(uri));
  }, []);

  return (
    <Container>
      <Logo />
      <Text>
        당신이 좋아하는 노래는 무엇인가요?
        <br /> 뮤직마켓에서 영수증으로 뽑아보세요.
      </Text>
      <Cart>
        <div className="img"></div>
        <Album />
      </Cart>
      <LoginWrapper>
        <a href={redirectURI}>
          <SpotifyButton>Spotify로 계속하기</SpotifyButton>
        </a>
      </LoginWrapper>
    </Container>
  );
}

const Text = styled.p`
  margin-top: 44px;

  text-align: center;
  color: #10299f;
`;

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 388px;
  min-width: 300px;

  background: #fff;

  font-family: Galmuri11;
`;

const Cart = styled.div`
  position: relative;

  margin: 0 52px 77px;

  .img {
    //position: absolute;
    left: 0;
    top: 0;

    width: 325px;
    height: 497px;
  }
`;

const LoginWrapper = styled.div`
  cursor: pointer;
`;

const SpotifyButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 auto 40px;
  width: 264px;
  height: 40px;
  border-radius: 16px;

  background: #1ed760;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  color: #fff;
  font-family: Galmuri11;
  font-size: 16px;
`;
