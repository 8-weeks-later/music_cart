"use client";

import { Physics } from "@react-three/cannon";
import Album from "@/components/Result/Cart/Album";

import ShoppingCartModel from "@/components/Result/Cart/ShoppingCartModel";
import Plane from "@/components/Result/Cart/Plane";
import Basket from "@/components/Result/Cart/Basekt";
import ThreeCanvas from "@/components/Result/Cart/ThreeCanvas";
import styled from "@emotion/styled";
import { TopAlbum } from "@/components/Result/type";

export default function Cart({ albums }: { albums: TopAlbum[] }) {
  return (
    <Container>
      <ThreeCanvas>
        <Physics gravity={[0, -80, 0]}>
          {/*<Debug color="green" scale={1.1}>*/}
          <Plane position={[0, -2.5, 0]} />
          {/*@ts-ignore*/}
          {albums.map(({ cover }, idx) => {
            const x = -3.1 + Math.floor(Math.random() * 5) + 1;
            return (
              <Album position={[x, 30, 0]} cover={cover.url} key={cover} />
            );
          })}
          <Basket />
          <ShoppingCartModel
            rotation={[0, -Math.PI / 1, 0]}
            position={[0, 0, -2.2]}
          />
          {/**
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
  min-width: 300px;
  height: 700px;
`;
