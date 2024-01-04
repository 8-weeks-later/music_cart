import Image from "next/image";
import styled from "@emotion/styled";

export default function Logo() {
  return (
    <Container>
      <LogoText>
        <span>뮤직마켓</span>
        <LogoWrapper>
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            sizes="55px"
            fill
            style={{
              objectFit: "contain",
            }}
          />
        </LogoWrapper>
      </LogoText>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 14px;
  padding: 5px 0;
  height: 78px;

  border-top: 12px solid #10299f;
  border-bottom: 12px solid #10299f;
`;

const LogoWrapper = styled.div`
  position: relative;
  width: 47px;
  height: 41px;
`;

const LogoText = styled.div`
  display: flex;
  justify-content: center;

  color: #10299f;

  font-size: 32px;
  font-style: normal;
  font-weight: 700;
`;
