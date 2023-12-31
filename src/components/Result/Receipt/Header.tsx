import styled from "@emotion/styled";

export default function Header() {
  return (
    <Container>
      <p className="receipt">영수증</p>
      <div className="info">
        <span>[결제일]</span>
        &nbsp;
        <span>2023.12.07</span>
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 4px;

  .receipt {
    margin-bottom: 24px;

    text-align: center;
    font-size: 16px;
    font-weight: 700;
  }

  .info {
    padding: 0 26px;

    text-align: left;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -1.68px;
  }
`;
