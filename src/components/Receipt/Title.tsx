import styled from "@emotion/styled";

export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <p>**********************************************</p>
      <p>{children}</p>
      <p>**********************************************</p>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 352px;
  height: 80px;
  margin: 0 auto 30px;
  overflow: hidden;

  text-align: center;
`;
