import { Item, TopAlbum, TopData, TopTrack } from "@/app/api/spotify/type";
import spotifyInstance, {
  setAccessToken,
  setIssueTime,
  setRefreshToken,
} from "@/app/api/instance";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { accessToken, refreshToken, issueTime } = await request.json();
  setAccessToken(accessToken);
  setRefreshToken(refreshToken);
  setIssueTime(issueTime);

  const today = Date.now();
  const timestamp = (today - 30 * 24 * 60 * 60 * 1000).toString();

  // @ts-ignore
  const { topAlbum, topTrack } = await fetchSpotifyRecentlyPlayedWith30Days({
    timestamp,
    today: today.toString(),
    topData: {
      topTrack: {},
      topAlbum: {},
    },
  });

  return Response.json({ topAlbum, topTrack });
}

/**
 * 30일 전부터 오늘까지의 재생 기록을 가져옵니다.
 * @param timestamp
 * @param today
 * @param topData
 */
async function fetchSpotifyRecentlyPlayedWith30Days({
  timestamp,
  today,
  topData,
}: {
  timestamp: string;
  today: string;
  topData: {
    topAlbum: TopAlbum;
    topTrack: TopTrack;
  };
}) {
  // 이후 데이터가 없음
  if (!timestamp) {
    return topData;
  }
  // 오늘까지의 데이터를 가져옴
  if (timestamp === today) {
    return topData;
  }

  try {
    const data = await fetchSpotifyRecentlyPlayed({ timestamp });
    timestamp = data?.cursors?.after || null;

    const recentlyPlayedTopData = countTopData({ data });
    const { topAlbumData: topAlbumData_, topTrackData: topTrackData_ } =
      countTotalTopData({
        topTrackData: topData.topTrack,
        topAlbumData: topData.topAlbum,
        topData: recentlyPlayedTopData,
      });
    topData.topAlbum = topAlbumData_;
    topData.topTrack = topTrackData_;
  } catch (e) {
    return Promise.reject(e);
  }

  return await fetchSpotifyRecentlyPlayedWith30Days({
    timestamp,
    today,
    topData,
  });
}

/**
async function fetchSpotifyRecentlyPlayedWith30Days({
  timeStamps,
}: {
  timeStamps: number[];
}) {
  let topAlbumData: TopAlbum = {}; // 앨범 횟수 데이터
  let topTrackData: TopTrack = {}; // 트랙 횟수 데이터

  await Promise.all(
    timeStamps.map(async (timestamp) => {
      try {
        const data = await fetchSpotifyRecentlyPlayed({ timestamp });
        const topData = countTopData({ data });

        const { topAlbumData: topAlbumData_, topTrackData: topTrackData_ } =
          countTotalTopData({ topTrackData, topAlbumData, topData });
        topAlbumData = topAlbumData_;
        topTrackData = topTrackData_;
      } catch (e) {
        console.log(e);
      }
    }),
  );

  return { topAlbumData, topTrackData };
}
*/

/**
 * 발급받은 accessToken이 유요한지 확인합니다.
 * @param expiresIn
 * @param issueTime 토큰 발급 시간
 */
function isTokenExpiredWithIssueTime({
  expiresIn,
  issueTime,
}: {
  expiresIn: number;
  issueTime: number;
}) {
  const now = Date.now();
  const expirationTime = issueTime + expiresIn;

  return now >= expirationTime;
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
  timestamp,
}: {
  timestamp: string;
}) {
  const res = await spotifyInstance.get(
    `https://api.spotify.com/v1/me/player/recently-played?limit=50&after=${timestamp}`,
  );

  if (res.status !== 200) {
    return Promise.reject(res);
  }

  return res.data;
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

export { countTopData, countTotalTopData, isTokenExpiredWithIssueTime };
