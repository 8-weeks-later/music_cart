import Image from "next/image";
import styled from "@emotion/styled";

export default function Logo() {
  return (
    <Container>
      <LogoText>
        <span>뮤직마켓</span>
        <Image
          alt="logo"
          src="/assets/images/logo.png"
          width={55}
          height={46}
        />
      </LogoText>
    </Container>
  );
}

const Container = styled.div`
  margin: 20px 0 32px;
  padding: 7px 0;

  border-top: 14px solid #10299f;
  border-bottom: 14px solid #10299f;
`;

const LogoText = styled.div`
  display: flex;
  justify-content: center;

  color: #10299f;

  font-size: 40px;
  font-style: normal;
  font-weight: 700;
`;
