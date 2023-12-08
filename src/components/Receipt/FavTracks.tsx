import styled from "@emotion/styled";
import Title from "@/components/Receipt/Title";

export default function FavTracks() {
  return (
    <section style={{ marginBottom: "40px" }}>
      <Title>당신이 가장 많이 들은 곡</Title>

      <TrackList>
        <TrackItem>
          <div className="track">
            <span className="rank">①</span>
            <div className="track-info">
              <div className="cover">
                <span>
                  <img
                    src="https://i1.sndcdn.com/artworks-jeB67cUz0GJzdP7r-OzRlXw-t500x500.jpg"
                    alt="name"
                  />
                </span>
              </div>
              <div className="info">
                <p className="name">RedFlavor</p>
                <p className="artist">레드벨벳</p>
              </div>
            </div>
          </div>
          <span className="count">12.308회</span>
        </TrackItem>
        <TrackItem>
          <div className="track">
            <span className="rank">①</span>
            <div className="track-info">
              <div className="cover">
                <span>
                  <img
                    src="https://i1.sndcdn.com/artworks-jeB67cUz0GJzdP7r-OzRlXw-t500x500.jpg"
                    alt="name"
                  />
                </span>
              </div>
              <div className="info">
                <p className="name">RedFlavor</p>
                <p className="artist">레드벨벳</p>
              </div>
            </div>
          </div>
          <span className="count">12.308회</span>
        </TrackItem>
        <TrackItem>
          <div className="track">
            <span className="rank">①</span>
            <div className="track-info">
              <div className="cover">
                <span>
                  <img
                    src="https://i1.sndcdn.com/artworks-jeB67cUz0GJzdP7r-OzRlXw-t500x500.jpg"
                    alt="name"
                  />
                </span>
              </div>
              <div className="info">
                <p className="name">RedFlavor</p>
                <p className="artist">레드벨벳</p>
              </div>
            </div>
          </div>
          <span className="count">12.308회</span>
        </TrackItem>
      </TrackList>
    </section>
  );
}

const TrackList = styled.ul`
  font-size: 12px;
  font-weight: 400;
`;

const TrackItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 26px;
  padding: 0 26px;

  &:last-child {
    margin: 0;
  }

  .track {
    display: flex;
    gap: 6px;
    .track-info {
      display: flex;
      align-items: center;
      gap: 10px;

      .cover {
        position: relative;
        width: 42px;
        height: 42px;
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
    }
  }
`;
