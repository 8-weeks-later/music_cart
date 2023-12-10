"use client";

import { ShoppingCartModel } from "@/components/Cart/ShoppingCartModel";
import { OrbitControls } from "@react-three/drei";
import { Physics, Debug } from "@react-three/cannon";

import Album from "@/components/Cart/Album";
import Plane from "@/components/Cart/Plane";
import Basket from "@/components/Cart/Basekt";
import ThreeCanvas from "@/components/Cart/ThreeCanvas";
import { getAlbumList } from "@/api/appleMusic";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";

export default function Cart() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const alubmList = async () => {
      const data = await getAlbumList();
      // @ts-ignore
      setAlbums(data);
    };

    alubmList();
  });

  return (
    <Container>
      <ThreeCanvas>
        <Physics gravity={[0, -80, 0]}>
          {/* TODO 주석 제거 <Debug color="green" scale={1.1}>*/}
          <Plane position={[0, -2.5, 0]} />
          {/*@ts-ignore*/}
          {albums.map(({ cover }, idx) => {
            const x = -3.1 + Math.floor(Math.random() * 5) + 1;
            return <Album position={[x, 30, 0]} cover={cover} key={cover} />;
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
