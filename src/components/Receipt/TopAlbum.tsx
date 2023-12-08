import Title from "@/components/Receipt/Title";
import styled from "@emotion/styled";

export default function TopAlbum() {
  return (
    <section style={{ marginBottom: "40px" }}>
      <Title>당신이 가장 많이 들은 앨범</Title>

      <TopAlbumList>
        <TopAlbumItem>
          <div className="rank">1</div>
          <div className="cover">
            <img
              src="https://i1.sndcdn.com/artworks-jeB67cUz0GJzdP7r-OzRlXw-t500x500.jpg"
              alt="name"
            />
          </div>
        </TopAlbumItem>
        <TopAlbumItem>
          <div className="rank">1</div>
          <div className="cover">
            <img
              src="https://i1.sndcdn.com/artworks-jeB67cUz0GJzdP7r-OzRlXw-t500x500.jpg"
              alt="name"
            />
          </div>
        </TopAlbumItem>
        <TopAlbumItem>
          <div className="rank">1</div>
          <div className="cover">
            <img
              src="https://i1.sndcdn.com/artworks-jeB67cUz0GJzdP7r-OzRlXw-t500x500.jpg"
              alt="name"
            />
          </div>
        </TopAlbumItem>
      </TopAlbumList>
      <List>
        <Item>
          <span className="name">New Jeans’ OMG</span>
          <span className="count">12.308</span>
        </Item>
        <Item>
          <span className="name">UNFORGIVEN</span>
          <span className="count">12.308</span>
        </Item>

        <Item>
          <span className="name">Red Flavor</span>
          <span className="count">12.308</span>
        </Item>
      </List>
    </section>
  );
}

const TopAlbumList = styled.div`
  display: flex;
  gap: 10px;

  padding: 0 32px;
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
    width: 100px;
    height: 100px;
    background: gray;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;

      width: 100%;
      height: 100%;

      opacity: 1;
      background-image: url("/assets/images/texture.png");
    }
    img {
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
