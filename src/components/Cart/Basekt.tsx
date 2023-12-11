import { useBox } from "@react-three/cannon";

function BasketWall({
  width,
  length,
  positionX = 0,
  positionY = 0,
  positionZ = 0,
  rotation,
}: any) {
  const [ref, api] = useBox(() => ({
    args: [width, length, 0.1],
    position: [positionX, positionY, positionZ],
    rotation,
  }));

  return (
    // @ts-ignore
    <mesh receiveShadow ref={ref}></mesh>
  );
}

function BaseketFloor({
  width,
  length,
  positionY,
}: {
  width: number;
  length: number;
  positionY: number;
}) {
  const [ref, api] = useBox(() => ({
    args: [width, length, 0.1],
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, positionY, 0],
  }));

  return (
    // @ts-ignore
    <mesh receiveShadow ref={ref}></mesh>
  );
}

export default function Basket(props: any) {
  const [width, length, height, positionY] = [8, 12, 8, 0.5];
  const [halfWidth, halfLength] = [
    Number((width / 2).toFixed(1)),
    Number((length / 2).toFixed(1)),
  ];
  const wallsHeight = 4;

  const walls = {
    east: {
      width: length,
      length: wallsHeight,
      positionX: halfWidth,
      positionY: wallsHeight / 2 + positionY,
      rotation: [0, -Math.PI / 2, 0],
    },
    west: {
      width: length,
      length: 4,
      positionX: -halfWidth,
      positionY: wallsHeight / 2 + positionY,
      rotation: [0, -Math.PI / 2, 0],
    },
    south: {
      width,
      length: 4,
      positionZ: halfLength,
      positionY: wallsHeight / 2 + positionY,
      rotation: [0, 0, 0],
    },
    north: {
      width,
      length: 4,
      positionZ: -halfLength,
      positionY: wallsHeight / 2 + positionY,
      rotation: [0, 0, 0],
    },
  };

  return (
    <>
      <mesh
        receiveShadow
        castShadow
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        position={[0, 1, 0]}
      ></mesh>
      <BasketWall {...walls.east} />
      <BasketWall {...walls.west} />
      <BasketWall {...walls.south} />
      <BasketWall {...walls.north} />
      <BaseketFloor width={width} length={length} positionY={positionY} />
    </>
  );
}
