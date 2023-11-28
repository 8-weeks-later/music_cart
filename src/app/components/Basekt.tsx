import { useBox } from "@react-three/cannon";

function BasketWall({
  width,
  height,
  positionX = 0,
  positionY = 0,
  positionZ = 0,
  rotation,
}: any) {
  const [ref, api] = useBox(() => ({
    args: [width, height, 0.1],
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
  height,
  positionY,
}: {
  width: number;
  height: number;
  positionY: number;
}) {
  const [ref, api] = useBox(() => ({
    args: [width, height, 0.1],
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, positionY, 0],
  }));

  return (
    // @ts-ignore
    <mesh receiveShadow ref={ref}></mesh>
  );
}

export default function Basket(props: any) {
  const [width, height, positionY] = [10, 8, 4];
  const [halfWidth, halfHeight] = [
    Number((width / 2).toFixed(1)),
    Number((height / 2).toFixed(1)),
  ];

  const walls = {
    east: {
      width,
      height,
      positionX: halfWidth,
      positionY: halfHeight + positionY,
      rotation: [0, -Math.PI / 2, 0],
    },
    west: {
      width,
      height,
      positionX: -halfWidth,
      positionY: halfHeight + positionY,
      rotation: [0, -Math.PI / 2, 0],
    },
    south: {
      width,
      height,
      positionZ: halfWidth,
      positionY: halfHeight + positionY,
      rotation: [0, 0, 0],
    },
    north: {
      width,
      height,
      positionZ: -halfWidth,
      positionY: halfHeight + positionY,
      rotation: [0, 0, 0],
    },
  };

  return (
    <>
      <BasketWall {...walls.east} />
      <BasketWall {...walls.west} />
      <BasketWall {...walls.south} />
      <BasketWall {...walls.north} />
      <BaseketFloor width={width} height={width} positionY={positionY} />
    </>
  );
}
