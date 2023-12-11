import Image from "next/image";
import styled from "@emotion/styled";

export default function Footer() {
  return (
    <Container>
      <div className="share">
        <p>
          공유하기 버튼을 누르면 다른사람들에게 <br />내 계산 결과를 공유할 수
          있습니다.
        </p>
      </div>
      <p className="thanks">감사합니다.</p>
      <div className="barcode-container">
        <Image
          src="/assets/images/barcode.png"
          alt="images"
          width={182}
          height={52}
        />
        <p className="date">20231207</p>
      </div>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  font-size: 14px;

  .share {
    margin-bottom: 45px;
  }

  .thanks {
    margin-bottom: 8px;
  }

  .barcode-container {
    .date {
      font-size: 12px;
      letter-spacing: 7.2px;
    }
  }
`;
