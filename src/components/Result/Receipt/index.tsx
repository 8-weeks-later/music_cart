"use client";

import styled from "@emotion/styled";

import Logo from "@/components/Result/Receipt/Logo";
import Header from "@/components/Result/Receipt/Header";
import TopAlbum from "@/components/Result/Receipt/TopAlbum";
import FavTracks from "@/components/Result/Receipt/FavTracks";
import Footer from "@/components/Result/Receipt/Footer";
import { TopAlbum as TTopAlbum, TopTrack } from "@/app/api/spotify/type";

export default function Receipt({
  track,
}: {
  track: {
    topAlbum: TTopAlbum[];
    topTrack: TopTrack[];
  };
}) {
  if (!Object.keys(track).length) {
    return;
  }

  return (
    <Container>
      <Logo />
      <Header />
      <TopAlbum />
      <FavTracks />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  padding: 38px 0 24px;
  width: 100%;
  max-width: 388px;
  min-width: 300px;

  background: #fff;

  font-family: Galmuri11;
`;
