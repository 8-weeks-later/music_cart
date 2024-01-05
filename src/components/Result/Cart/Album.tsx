import { useBox } from "@react-three/cannon";
import { TextureLoader } from "three";

export default function Album({ position, cover, props }: any) {
  const width = 3.5;
  const height = 3.5;
  const depth = 0.3;
  const [ref] = useBox(() => ({
    args: [width - 0.2, height - 0.2, 0.25],
    mass: 1,
    position,
    rotation: [0.4, 0.2, 0.5],
    ...props,
  }));

  const texture = new TextureLoader().load(cover);

  return (
    // @ts-ignore
    <mesh receiveShadow castShadow ref={ref}>
      <boxGeometry args={[width, height, depth]} />
      <meshBasicMaterial color={"black"} />
      <meshBasicMaterial color={"black"} />
      <meshBasicMaterial color={"black"} />
      <meshBasicMaterial color={"black"} />
      <meshBasicMaterial color={"black"} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}
