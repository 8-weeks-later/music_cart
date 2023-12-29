import styled from "@emotion/styled";

function AlbumItem({
  top,
  left,
  right,
  bottom,
}: {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}) {
  return (
    <Scene style={{ top, left, right, bottom }}>
      <Cube>
        <Front>?</Front>
        <Back>?</Back>
        <Right />
        <Left />
        <Bottom />
        <Top />
      </Cube>
    </Scene>
  );
}

export default function Album() {
  return (
    <>
      <AlbumItem top="61px" left="56px" />
      <AlbumItem top="154px" right="31px" />
      <AlbumItem top="263px" left="56px" />
    </>
  );
}

const width = 152;
const height = 152;
const depth = 20;

const Scene = styled.div`
  position: absolute;

  width: ${width}px;
  height: ${height}px;

  perspective: 600px;
`;

const Cube = styled.div`
  @keyframes rotation {
    0% {
      transform: translateZ(-100px) rotate3d(0, 1, 0, 0deg);
    }
    100% {
      transform: translateZ(-100px) rotate3d(0, 1, 0, 180deg);
    }
  }

  position: relative;

  width: 100%;
  height: 100%;

  transform: translateZ(-100px);
  transform-style: preserve-3d;
  animation: rotation 2s linear infinite;
`;

const Face = styled.div`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #000;

  color: #fff;
`;

const Front = styled(Face)`
  width: ${width}px;
  height: ${height}px;

  transform: translateZ(${depth / 2}px);
`;

const Back = styled(Face)`
  width: ${width}px;
  height: ${height}px;

  transform: rotateY(180deg) translateZ(${depth / 2}px);
`;

const Right = styled(Face)`
  width: ${depth}px;
  height: ${height}px;

  right: ${(width - depth) / 2}px;
  transform: rotateY(90deg) translateZ(${width / 2}px);
`;

const Left = styled(Face)`
  width: ${depth}px;
  height: ${height}px;

  left: ${(width - depth) / 2}px;
  transform: rotateY(-90deg) translateZ(${width / 2}px);
`;

const Top = styled(Face)`
  height: ${depth}px;
  width: ${height}px;

  top: ${(height - depth) / 2}px;
  transform: rotateX(90deg) translateZ(${height / 2}px);
`;

const Bottom = styled(Face)`
  height: ${depth}px;
  width: ${height}px;

  bottom: ${(height - depth) / 2}px;
  transform: rotateX(-90deg) translateZ(${height / 2}px);
`;
