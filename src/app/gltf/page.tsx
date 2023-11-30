"use client";

import { ShoppingCartModel } from "@/app/components/ShoppingCartModel";
import { OrbitControls } from "@react-three/drei";
import { Physics, Debug } from "@react-three/cannon";

import "./styles.css";
import Album from "@/app/components/Album";
import Plane from "@/app/components/Plane";
import Basket from "@/app/components/Basekt";
import ThreeCanvas from "@/app/components/ThreeCanvas";
import { getAlbumList } from "@/api/appleMusic";
import { useEffect, useState } from "react";

export default function App() {
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
    <ThreeCanvas>
      <Physics>
        <Debug color="green" scale={1.1}>
          <Plane position={[0, -2.5, 0]} />
          {/*@ts-ignore*/}
          {albums.map(({ cover }, idx) => {
            const x = -2 + Math.floor(Math.random() * 5) + 1;
            return <Album position={[x, 12, 0]} cover={cover} key={cover} />;
          })}
          <Basket />
          <ShoppingCartModel />
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
          />
        </Debug>
      </Physics>
    </ThreeCanvas>
  );
}
