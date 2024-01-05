import Title from "@/components/Result/Receipt/Title";
import styled from "@emotion/styled";

import { TopAlbum } from "@/components/Result/type";

export default function TopAlbum({
  topAlbum: topAlbumData,
}: {
  topAlbum: TopAlbum[];
}) {
  const topAlbum = topAlbumData.slice(0, 3);

  return (
    <section style={{ marginBottom: "40px" }}>
      <Title>당신이 가장 많이 들은 앨범</Title>

      <TopAlbumList>
        {topAlbum.map((album, idx) => (
          <TopAlbumItem key={album.name}>
            <div className="rank">{idx + 1}</div>
            <div className="cover">
              <img src={album.cover.url} alt="name" />
            </div>
          </TopAlbumItem>
        ))}
      </TopAlbumList>
      <List>
        {topAlbum.map((album, idx) => (
          <Item>
            <span className="name">{album.name}</span>
            <span className="count">
              {new Intl.NumberFormat("en-IN", {
                maximumSignificantDigits: 3,
              }).format(album.count)}
            </span>
          </Item>
        ))}
      </List>
    </section>
  );
}

const TopAlbumList = styled.div`
  display: flex;
  gap: 10px;

  padding: 0 8.25%;
  margin-bottom: 50px;
`;

const TopAlbumItem = styled.div`
  .rank {
    width: 38px;
    height: 18px;
    margin-bottom: 4px;

    background: no-repeat url("/assets/images/circle.png");
    background-size: cover;

    color: #fff;
    text-align: center;
    font-size: 12px;
  }

  .cover {
    position: relative;
    width: 100%;
    height: 100%;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;

      width: 100%;

      opacity: 1;
      background-image: url("/assets/images/texture.png");
    }
    img {
      width: 100%;
      height: auto;

      filter: grayscale(1);
    }
  }
`;

const List = styled.ul`
  padding: 0 26px;
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;

  font-size: 12px;
`;
