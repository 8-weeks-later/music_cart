"use client";

import Logo from "@/components/Result/Receipt/Logo";
import Header from "@/components/Result/Receipt/Header";
import TopAlbum from "@/components/Result/Receipt/TopAlbum";
import FavTracks from "@/components/Result/Receipt/FavTracks";
import Footer from "@/components/Result/Receipt/Footer";
import { TopAlbum as TTopAlbum, TopTrack } from "@/components/Result/type";
import { Container } from "@/components/Common/Container.styled";
import styled from "@emotion/styled";

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
    <ReceiptContainer>
      <Logo />
      <Header />
      <TopAlbum topAlbum={track.topAlbum} />
      <FavTracks topTrack={track.topTrack} />
      <Footer />
    </ReceiptContainer>
  );
}

export const ReceiptContainer = styled(Container)`
  padding: 20px 0 24px;
`;
