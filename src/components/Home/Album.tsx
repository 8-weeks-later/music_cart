import styled from "@emotion/styled";
import { css } from "@emotion/react";

function AlbumItem({
  top,
  left,
  right,
  bottom,
  rotate,
}: {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  rotate?: boolean;
}) {
  console.log("rotate", rotate);
  return (
    <Scene style={{ top, left, right, bottom }}>
      <Cube $rotate={rotate}>
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
      <AlbumItem top="61px" left="56px" rotate={false} />
      <AlbumItem top="154px" right="31px" rotate />
      <AlbumItem top="263px" left="56px" rotate={false} />
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

const Cube = styled.div<{ $rotate?: boolean }>`
  @keyframes regularRotation {
    0% {
      transform: translateZ(-100px) rotate3d(0, 1, 0, 0deg);
    }
    100% {
      transform: translateZ(-100px) rotate3d(0, 1, 0, 180deg);
    }
  }

  @keyframes mutatedRotation {
    0% {
      transform: translateZ(-100px) rotate3d(0, 1, 0, 20deg);
    }
    100% {
      transform: translateZ(-100px) rotate3d(0, 1, 0, 200deg);
    }
  }

  position: relative;

  width: 100%;
  height: 100%;

  transform: translateZ(-100px)
    ${({ $rotate }) => $rotate && `rotate3d(0, 1, 0, 40deg)`};
  transform-style: preserve-3d;
  animation: ${({ $rotate }) =>
      $rotate ? `mutatedRotation` : `regularRotation`}
    2s linear infinite;
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
