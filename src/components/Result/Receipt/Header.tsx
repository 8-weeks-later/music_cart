import styled from "@emotion/styled";

export default function Header() {
  const date = new Date();
  let [year, month, day] = [
    date.getFullYear().toString(),
    (date.getMonth() + 1).toString(),
    date.getDay().toString(),
  ];

  if (month.length === 1) month = `0${month}`;
  if (day.length === 1) day = `0${day}`;
  const dateText = `${year}.${month}.${day}`;

  return (
    <Container>
      <p className="receipt">영수증</p>
      <div className="info">
        <span>[결제일]</span>
        &nbsp;
        <span>{dateText}</span>
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
