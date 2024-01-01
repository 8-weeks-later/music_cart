import styled from "@emotion/styled";
import Title from "@/components/Result/Receipt/Title";
import { TopTrack } from "@/components/Result/type";

export default function FavTracks({ topTrack }: { topTrack: TopTrack[] }) {
  return (
    <section style={{ marginBottom: "40px" }}>
      <Title>당신이 가장 많이 들은 곡</Title>

      <TrackList>
        {topTrack.map((track, idx) => (
          <TrackItem>
            <div className="track">
              {/*①의 아스키 코드 값*/}
              <span className="rank">{String.fromCharCode(9312 + idx)}</span>
              <div className="track-info">
                <div className="cover">
                  <span>
                    <img src={track.cover.url} alt="name" />
                  </span>
                </div>
                <div className="info">
                  <p className="name">{track.name}</p>
                  <p className="artist">{track.artist}</p>
                </div>
              </div>
            </div>
            <span className="count">{track.count}회</span>
          </TrackItem>
        ))}
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
