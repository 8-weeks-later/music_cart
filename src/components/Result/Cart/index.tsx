"use client";

import Album from "@/components/Result/Cart/Album";
import { Physics } from "@react-three/cannon";

import Basket from "@/components/Result/Cart/Basekt";
import Plane from "@/components/Result/Cart/Plane";
import ThreeCanvas from "@/components/Result/Cart/ThreeCanvas";
import { TopAlbum } from "@/components/Result/type";
import styled from "@emotion/styled";

export default function Cart({ albums }: { albums: TopAlbum[] }) {
  return (
    <Container>
      <ThreeCanvas>
        <Physics gravity={[0, -80, 0]}>
          {/* TODO 주석 제거 <Debug color="green" scale={1.1}>*/}
          <Plane position={[0, -2.5, 0]} />
          {/*@ts-ignore*/}
          {albums.map(({ cover }, idx) => {
            const x = -3.1 + Math.floor(Math.random() * 5) + 1;
            return (
              <Album position={[x, 30, 0]} cover={cover.url} key={cover} />
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

const Container = styled.div`
  margin: 0 auto;

  width: 100%;
  height: 720px;
`;
