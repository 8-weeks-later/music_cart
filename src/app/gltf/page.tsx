"use client";

import { Canvas } from "@react-three/fiber";
import { ShoppingCartModel } from "@/app/components/ShoppingCartModel";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Physics, Debug } from "@react-three/cannon";

import "./styles.css";
import Album from "@/app/components/Album";
import Plane from "@/app/components/Plane";
import Basket from "@/app/components/Basekt";

export default function App() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{ alpha: false }}
      camera={{ position: [-1, 5, 5], fov: 45 }}
    >
      <color attach="background" args={["lightblue"]} />
      <ambientLight />
      <directionalLight
        position={[10, 10, 10]}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />
      <directionalLight intensity={1} />
      <ambientLight intensity={1.2} />
      <spotLight
        intensity={0.1}
        angle={0.1}
        penumbra={1}
        position={[10, 15, 10]}
        castShadow
      />
      <Physics>
        <Debug color="black" scale={1.1}>
          <Plane position={[0, -2.5, 0]} />
          <Album position={[0.1, 5, 0]} />
          <Basket />
          <ShoppingCartModel />
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
          />
        </Debug>
      </Physics>
    </Canvas>
  );
}
