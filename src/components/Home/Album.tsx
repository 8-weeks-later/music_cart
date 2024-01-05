import styled, { StyledComponent } from "@emotion/styled";
import { useEffect, useState } from "react";
import { css } from "@emotion/react";

function AlbumItem({
  top,
  left,
  right,
  width,
  height,
  Cube,
}: {
  top?: string;
  left?: string;
  right?: string;
  width: number;
  height: number;
  Cube: StyledComponent<any>;
}) {
  return (
    <Scene style={{ top, left, right }} $width={width} $height={height}>
      <Cube>
        <Front $width={width} $height={height}>
          ?
        </Front>
        <Back $width={width} $height={height}>
          ?
        </Back>
        <Right $width={width} $height={height} />
        <Left $width={width} $height={height} />
        <Bottom $width={width} $height={height} />
        <Top $width={width} $height={height} />
      </Cube>
    </Scene>
  );
}

export default function Album() {
  const [{ width, height }, setWindowDimensions] = useState<{
    width: number;
    height: number;
  }>({ width: 135, height: 135 });

  useEffect(() => {
    function getWindowDimensions() {
      const { innerWidth, innerHeight } = window;

      // 앨범 px
      const width = innerHeight >= 736 ? 135 : 95;

      return {
        width: width,
        height: width,
      };
    }
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <AlbumItem
        top="7.2%"
        left="16.7%"
        width={width}
        height={height}
        Cube={Cube1}
      />
      <AlbumItem
        top="31%"
        right="9.2%"
        width={width}
        height={height}
        Cube={Cube2}
      />
      <AlbumItem
        top="52.9%"
        left="16.7%"
        width={width}
        height={height}
        Cube={Cube3}
      />
    </>
  );
}

const depth = 20;

const Scene = styled.div<{ $width: number; $height: number }>`
  position: absolute;

  width: ${({ $width }) => `${$width}px`};
  height: ${({ $height }) => `${$height}px`};
  perspective: 600px;
`;

const Cube = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  transform-style: preserve-3d;
`;

const Cube1 = styled(Cube)`
  @keyframes rotation1 {
    0% {
      transform: translateZ(-100px) rotate3d(0, 1, 0, 0deg);
    }
    100% {
      transform: translateZ(-100px) rotate3d(0, 1, 0, 180deg);
    }
  }

  transform: translateZ(-100px) rotate3d(0, 1, 0, 0deg);

  animation: rotation1 2s linear infinite;
`;

const Cube2 = styled(Cube)`
  @keyframes rotation2 {
    0% {
      transform: translateZ(-100px) rotate3d(0, 1, 0, 20deg);
    }
    100% {
      transform: translateZ(-100px) rotate3d(0, 1, 0, 200deg);
    }
  }

  transform: translateZ(-100px) rotate3d(0, 1, 0, 20deg);
  animation: rotation2 2s linear infinite;
`;

const Cube3 = styled.div`
  @keyframes rotation3 {
    0% {
      transform: translateZ(-100px) rotate3d(0, 1, 0, 40deg);
    }
    100% {
      transform: translateZ(-100px) rotate3d(0, 1, 0, 220deg);
    }
  }

  transform: translateZ(-100px) rotate3d(0, 1, 0, 40deg);
  animation: rotation3 2s linear infinite;
`;

const Face = styled.div`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #000;

  color: #fff;
`;

const Front = styled(Face)<{ $width: number; $height: number }>`
  width: ${({ $width }) => `${$width}px`};
  height: ${({ $height }) => `${$height}px`};

  transform: translateZ(${depth / 2}px);
`;

const Back = styled(Face)<{ $width: number; $height: number }>`
  width: ${({ $width }) => `${$width}px`};
  height: ${({ $height }) => `${$height}px`};

  transform: rotateY(180deg) translateZ(${depth / 2}px);
`;

const Right = styled(Face)<{ $width: number; $height: number }>`
  width: ${depth}px;
  height: ${({ $height }) => `${$height}px`};

  right: ${({ $width }) => `${($width - depth) / 2}px`};
  transform: rotateY(90deg) ${({ $width }) => `translateZ(${$width / 2}px)`};
`;

const Left = styled(Face)<{ $width: number; $height: number }>`
  width: ${depth}px;
  height: ${({ $height }) => `${$height}px`};

  left: ${({ $width }) => `${($width - depth) / 2}px`};
  transform: rotateY(-90deg) ${({ $width }) => `translateZ(${$width / 2}px)`};
`;

const Top = styled(Face)<{ $width: number; $height: number }>`
  height: ${depth}px;
  width: ${({ $height }) => `${$height}px`};

  top: ${({ $height }) => `${($height - depth) / 2}px`};
  transform: rotateX(90deg) ${({ $height }) => `translateZ(${$height / 2}px)`};
`;

const Bottom = styled(Face)<{ $width: number; $height: number }>`
  height: ${depth}px;
  width: ${({ $height }) => `${$height}px`};

  bottom: ${({ $height }) => `${($height - depth) / 2}px`};
  transform: rotateX(-90deg) ${({ $height }) => `translateZ(${$height / 2}px)`};
`;
