"use client";

import Album from "@/components/Result/Cart/Album";
import { Physics } from "@react-three/cannon";

import Basket from "@/components/Result/Cart/Basekt";
import Plane from "@/components/Result/Cart/Plane";
import ThreeCanvas from "@/components/Result/Cart/ThreeCanvas";
import { TopAlbum } from "@/components/Result/type";
import styled from "@emotion/styled";
import { Container as _Container } from "@/components/Common/Container.styled";

export default function Cart({ albums: _albums }: { albums: TopAlbum[] }) {
  const albums = _albums.slice(0, 5);

  return (
    <Container>
      <ThreeCanvas>
        <Physics gravity={[0, -60, 0]}>
          {/* TODO 주석 제거 <Debug color="green" scale={1.1}>*/}
          <Plane position={[0, -2.5, 0]} />
          {/*@ts-ignore*/}
          {albums.map(({ cover }, idx) => {
            const x = Math.floor(Math.random() * 3) + 0.2;
            return (
              <Album position={[x, 20, 0]} cover={cover.url} key={cover} />
            );
          })}
          <Basket />
          {/*<ShoppingCartModel />*/}
          {/*  TODO 주석 제거
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
          />
          </Debug>
          */}
        </Physics>
      </ThreeCanvas>
    </Container>
  );
}

const Container = styled(_Container)`
  margin: 0 auto;

  height: 80svh;
`;
