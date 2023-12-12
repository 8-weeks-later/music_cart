import { Item, TopAlbum, TopData, TopTrack } from "@/app/api/spotify/type";

export function GET() {
  const accessToken = "";
  const timeStamps = get30DaysTimeSamp();

  let topAlbumData: TopAlbum = {}; // 앨범 횟수 데이터
  let topTrackData: TopTrack = {}; // 트랙 횟수 데이터

  timeStamps.map((timestamp) => {
    const data = fetchSpotifyRecentlyPlayed({ timestamp, accessToken });
    const topData = countTopData({ data });

    const { topAlbumData: topAlbumData_, topTrackData: topTrackData_ } =
      countTotalTopData({ topTrackData, topAlbumData, topData });
    topAlbumData = topAlbumData_;
    topTrackData = topTrackData_;
  });

  return Response.json({ name: "John Doe" });
}

/**
 * 현재부터 30일 전까지의 타임스탬프를 반환합니다.
 */
function get30DaysTimeSamp() {
  const timestamp: number[] = [];
  for (let i = 1; i <= 30; i += 1) {
    timestamp.push(new Date(Date.now() - i * 24 * 60 * 60 * 1000).getTime());
  }
  return timestamp;
}

async function fetchSpotifyRecentlyPlayed({
  accessToken,
  timestamp,
}: {
  accessToken: string;
  timestamp: number;
}) {
  const res = await fetch(
    `https://api.spotify.com/v1/me/player/recently-played?limit=50&after=${timestamp}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  const data = res.json();
  return data;
}

/**
 * 앨범, 트랙의 들은 횟수를 카운트 하고 반환합니다.
 * @param data
 */
function countTopData({ data }: { data: any }) {
  const items: Item[] = data.items;

  const topData = items.reduce<TopData>(
    (prev, cur) => {
      const track = cur.track;

      const [trackName, artist, albumName, cover] = [
        track.name,
        track.artists[0].name,
        track.album.name,
        track.album.images[0],
      ];

      // 앨범 들은 횟수
      const topAlbumKey = [albumName, artist].join("-");
      prev.topAlbum[topAlbumKey] = prev.topAlbum[topAlbumKey] || {
        count: 0,
        name: albumName,
        artist,
        cover,
      };
      prev.topAlbum[topAlbumKey].count += 1;

      // 트랙 들은 횟수
      const topTrackKey = [trackName, artist].join("-");
      prev.topTrack[topTrackKey] = prev.topTrack[topTrackKey] || {
        count: 0,
        name: trackName,
        artist,
        cover,
      };
      prev.topTrack[topTrackKey].count += 1;

      return prev;
    },
    { topAlbum: {}, topTrack: {} },
  );

  return topData;
}

/**
 * 기존 값과 병합합니다.
 */
function countTotalTopData({
  topAlbumData,
  topTrackData,
  topData,
}: {
  topAlbumData: TopAlbum;
  topTrackData: TopTrack;
  topData: TopData;
}) {
  const topAlbumData_ = { ...topAlbumData };
  const topTrackData_ = { ...topTrackData };

  Object.keys(topData.topAlbum).map((key) => {
    if (topAlbumData[key]) {
      topAlbumData_[key].count += topData.topAlbum[key].count;
    } else {
      topAlbumData_[key] = topData.topAlbum[key];
    }
  });

  Object.keys(topData.topTrack).map((key) => {
    if (topTrackData[key]) {
      topTrackData_[key].count += topData.topTrack[key].count;
    } else {
      topTrackData_[key] = topData.topTrack[key];
    }
  });

  return { topAlbumData: topAlbumData_, topTrackData: topTrackData_ };
}

export { countTopData, countTotalTopData };
