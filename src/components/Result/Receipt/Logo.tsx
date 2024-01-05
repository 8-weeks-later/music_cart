import Image from "next/image";
import styled from "@emotion/styled";

export default function Logo() {
  return (
    <Container>
      <LogoText>
        <span>뮤직마켓</span>
        <Image
          alt="logo"
          src="/assets/images/logo-black.png"
          width={55}
          height={46}
        />
      </LogoText>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 0 32px;
`;

const LogoText = styled.div`
  display: flex;
  justify-content: center;

  color: #000;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
`;
