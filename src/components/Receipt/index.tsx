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
  padding: 38px 0 24px;
  width: 100%;
  max-width: 388px;
  min-width: 300px;

  background: #fff;

  font-family: Galmuri11;
`;
