import { Canvas, useThree } from "@react-three/fiber";

export default function ThreeCanvas({ children }: any) {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ alpha: false }}
      camera={{
        position: [0, 20, 0],
        fov: 45,
      }}
    >
      <color attach="background" args={["white"]} />
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
      {children}
    </Canvas>
  );
}
