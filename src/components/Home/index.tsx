"use client";

import styled from "@emotion/styled";

import Logo from "@/components/Home/Logo";
import { redirectToAuthCodeFlow } from "@/utils/spotify";
import { useEffect, useState } from "react";
import { Container as Container_ } from "@/components/Common/Container.styled";
import Album from "@/components/Home/Album";
export default function Home() {
  const [redirectURI, setRedirectURI] = useState("");

  useEffect(() => {
    redirectToAuthCodeFlow().then((uri) => setRedirectURI(uri));
  }, []);

  return (
    <>
      <HomeContainer>
        <Logo />
        <Container>
          <Text>
            당신이 좋아하는 노래는 무엇인가요?
            <br /> 뮤직마켓에서 영수증으로 뽑아보세요.
          </Text>
          <Cart>
            <Basket>
              <img src="/assets/images/basket.jpeg" />
            </Basket>
            <Album />
          </Cart>
          <LoginWrapper>
            <SpotifyButton href={redirectURI}>Spotify로 계속하기</SpotifyButton>
          </LoginWrapper>
        </Container>
      </HomeContainer>
    </>
  );
}

const HomeContainer = styled(Container_)``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: calc(100svh - 92px);
`;

const Text = styled.p`
  margin-top: 14px;

  text-align: center;
  color: #10299f;

  @media (min-height: 640px) {
    margin-top: 30px;
  }
`;

const Cart = styled.div`
  position: relative;
  left: 0;
  top: 0;

  margin: 0 auto;
  min-width: 216px;
  width: 220px;
  height: auto;

  @media (min-height: 736px) {
    width: 336px;
  }
`;

const Basket = styled.div`
  img {
    width: 100%;
  }
`;

const LoginWrapper = styled.div`
  cursor: pointer;
`;

const SpotifyButton = styled.a`
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
