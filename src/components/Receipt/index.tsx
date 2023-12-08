"use client";

import styled from "@emotion/styled";

import Logo from "@/components/Receipt/Logo";
import Header from "@/components/Receipt/Header";
import TopAlbum from "@/components/Receipt/TopAlbum";
import FavTracks from "@/components/Receipt/FavTracks";
import Footer from "@/components/Receipt/Footer";

export default function Receipt() {
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
  width: 388px;

  background: #fff;

  font-family: Galmuri11;
`;
