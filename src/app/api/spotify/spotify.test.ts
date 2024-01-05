import { describe, expect, test } from "@jest/globals";
import {
  countTopData,
  countTotalTopData,
  isTokenExpiredWithIssueTime,
} from "@/app/api/spotify/route";

describe("앨범과 노래를 들은 횟수를 카운트 한다.", () => {
  test("스포티파이 API에서 가져온 데이터별 앨범과 노래를 들은 횟수를 카운트", () => {
    expect(countTopData({ data: spotifyData[0] }));
  });
  test("앨범과 노래를 들은 횟수를 카운트", () => {
    expect(countTopData({ data })).toStrictEqual({
      topAlbum: {
        ["Next Level-aespa"]: {
          artist: "aespa",
          count: 5,
          cover: {
            height: 640,
            url: "https://i.scdn.co/image/ab67616d0000b2737a393b04e8ced571618223e8",
            width: 640,
          },
          name: "Next Level",
        },

        ["Roller Coaster-NMIXX"]: {
          artist: "NMIXX",
          count: 5,
          cover: {
            height: 640,
            url: "https://i.scdn.co/image/ab67616d0000b2736a1a2d9019156adcacc33476",
            width: 640,
          },
          name: "Roller Coaster",
        },
      },
      topTrack: {
        ["Next Level-aespa"]: {
          artist: "aespa",
          count: 5,
          cover: {
            height: 640,
            url: "https://i.scdn.co/image/ab67616d0000b2737a393b04e8ced571618223e8",
            width: 640,
          },
          name: "Next Level",
        },
        "Roller Coaster-NMIXX": {
          artist: "NMIXX",
          count: 5,
          cover: {
            height: 640,
            url: "https://i.scdn.co/image/ab67616d0000b2736a1a2d9019156adcacc33476",
            width: 640,
          },
          name: "Roller Coaster",
        },
      },
    });
  });
  test("기존의 값과 병합", () => {
    expect(
      countTotalTopData({
        topAlbumData: {
          ["Next Level-aespa"]: {
            artist: "aespa",
            count: 5,
            cover: {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b2737a393b04e8ced571618223e8",
              width: 640,
            },
            name: "Next Level",
          },

          ["Roller Coaster-NMIXX"]: {
            artist: "NMIXX",
            count: 5,
            cover: {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b2736a1a2d9019156adcacc33476",
              width: 640,
            },
            name: "Roller Coaster",
          },
        },
        topTrackData: {
          ["Jindol"]: {
            artist: "aespa",
            count: 5,
            cover: {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b2737a393b04e8ced571618223e8",
              width: 640,
            },
            name: "Next Level",
          },
          ["Next Level-aespa"]: {
            artist: "aespa",
            count: 5,
            cover: {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b2737a393b04e8ced571618223e8",
              width: 640,
            },
            name: "Next Level",
          },
          "Roller Coaster-NMIXX": {
            artist: "NMIXX",
            count: 5,
            cover: {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b2736a1a2d9019156adcacc33476",
              width: 640,
            },
            name: "Roller Coaster",
          },
        },
        topData: {
          topAlbum: {
            ["Jindol"]: {
              artist: "aespa",
              count: 5,
              cover: {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b2737a393b04e8ced571618223e8",
                width: 640,
              },
              name: "Next Level",
            },
            ["Next Level-aespa"]: {
              artist: "aespa",
              count: 5,
              cover: {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b2737a393b04e8ced571618223e8",
                width: 640,
              },
              name: "Next Level",
            },

            ["Roller Coaster-NMIXX"]: {
              artist: "NMIXX",
              count: 5,
              cover: {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b2736a1a2d9019156adcacc33476",
                width: 640,
              },
              name: "Roller Coaster",
            },
          },
          topTrack: {
            ["Next Level-aespa"]: {
              artist: "aespa",
              count: 5,
              cover: {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b2737a393b04e8ced571618223e8",
                width: 640,
              },
              name: "Next Level",
            },
            "Roller Coaster-NMIXX": {
              artist: "NMIXX",
              count: 5,
              cover: {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b2736a1a2d9019156adcacc33476",
                width: 640,
              },
              name: "Roller Coaster",
            },
          },
        },
      }),
    ).toStrictEqual({
      topAlbumData: {
        ["Jindol"]: {
          artist: "aespa",
          count: 5,
          cover: {
            height: 640,
            url: "https://i.scdn.co/image/ab67616d0000b2737a393b04e8ced571618223e8",
            width: 640,
          },
          name: "Next Level",
        },
        ["Next Level-aespa"]: {
          artist: "aespa",
          count: 10,
          cover: {
            height: 640,
            url: "https://i.scdn.co/image/ab67616d0000b2737a393b04e8ced571618223e8",
            width: 640,
          },
          name: "Next Level",
        },

        ["Roller Coaster-NMIXX"]: {
          artist: "NMIXX",
          count: 10,
          cover: {
            height: 640,
            url: "https://i.scdn.co/image/ab67616d0000b2736a1a2d9019156adcacc33476",
            width: 640,
          },
          name: "Roller Coaster",
        },
      },
      topTrackData: {
        ["Jindol"]: {
          artist: "aespa",
          count: 5,
          cover: {
            height: 640,
            url: "https://i.scdn.co/image/ab67616d0000b2737a393b04e8ced571618223e8",
            width: 640,
          },
          name: "Next Level",
        },
        ["Next Level-aespa"]: {
          artist: "aespa",
          count: 10,
          cover: {
            height: 640,
            url: "https://i.scdn.co/image/ab67616d0000b2737a393b04e8ced571618223e8",
            width: 640,
          },
          name: "Next Level",
        },
        "Roller Coaster-NMIXX": {
          artist: "NMIXX",
          count: 10,
          cover: {
            height: 640,
            url: "https://i.scdn.co/image/ab67616d0000b2736a1a2d9019156adcacc33476",
            width: 640,
          },
          name: "Roller Coaster",
        },
      },
    });
  });

  const data = {
    items: [
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6YVMFz59CuY7ngCxTxjpxE",
                },
                href: "https://api.spotify.com/v1/artists/6YVMFz59CuY7ngCxTxjpxE",
                id: "6YVMFz59CuY7ngCxTxjpxE",
                name: "aespa",
                type: "artist",
                uri: "spotify:artist:6YVMFz59CuY7ngCxTxjpxE",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/2CzbrboOLzeRoaaH1N5K0N",
            },
            href: "https://api.spotify.com/v1/albums/2CzbrboOLzeRoaaH1N5K0N",
            id: "2CzbrboOLzeRoaaH1N5K0N",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b2737a393b04e8ced571618223e8",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e027a393b04e8ced571618223e8",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d000048517a393b04e8ced571618223e8",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Next Level",
            release_date: "2021-05-17",
            release_date_precision: "day",
            total_tracks: 1,
            type: "album",
            uri: "spotify:album:2CzbrboOLzeRoaaH1N5K0N",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/6YVMFz59CuY7ngCxTxjpxE",
              },
              href: "https://api.spotify.com/v1/artists/6YVMFz59CuY7ngCxTxjpxE",
              id: "6YVMFz59CuY7ngCxTxjpxE",
              name: "aespa",
              type: "artist",
              uri: "spotify:artist:6YVMFz59CuY7ngCxTxjpxE",
            },
          ],
          disc_number: 1,
          duration_ms: 221573,
          explicit: false,
          external_ids: {
            isrc: "KRA302100169",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/2zrhoHlFKxFTRF5aMyxMoQ",
          },
          href: "https://api.spotify.com/v1/tracks/2zrhoHlFKxFTRF5aMyxMoQ",
          id: "2zrhoHlFKxFTRF5aMyxMoQ",
          is_local: false,
          is_playable: true,
          name: "Next Level",
          popularity: 74,
          preview_url:
            "https://p.scdn.co/mp3-preview/e231722c5e5c751091f8dff8a96c59719ab8fcb2?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:2zrhoHlFKxFTRF5aMyxMoQ",
        },
        played_at: "2023-12-11T10:40:35.262Z",
        context: {
          type: "playlist",
          href: "https://api.spotify.com/v1/playlists/37i9dQZF1E4xGcU10nFpkR",
          external_urls: {
            spotify: "https://open.spotify.com/playlist/37i9dQZF1E4xGcU10nFpkR",
          },
          uri: "spotify:playlist:37i9dQZF1E4xGcU10nFpkR",
        },
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6YVMFz59CuY7ngCxTxjpxE",
                },
                href: "https://api.spotify.com/v1/artists/6YVMFz59CuY7ngCxTxjpxE",
                id: "6YVMFz59CuY7ngCxTxjpxE",
                name: "aespa",
                type: "artist",
                uri: "spotify:artist:6YVMFz59CuY7ngCxTxjpxE",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/2CzbrboOLzeRoaaH1N5K0N",
            },
            href: "https://api.spotify.com/v1/albums/2CzbrboOLzeRoaaH1N5K0N",
            id: "2CzbrboOLzeRoaaH1N5K0N",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b2737a393b04e8ced571618223e8",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e027a393b04e8ced571618223e8",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d000048517a393b04e8ced571618223e8",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Next Level",
            release_date: "2021-05-17",
            release_date_precision: "day",
            total_tracks: 1,
            type: "album",
            uri: "spotify:album:2CzbrboOLzeRoaaH1N5K0N",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/6YVMFz59CuY7ngCxTxjpxE",
              },
              href: "https://api.spotify.com/v1/artists/6YVMFz59CuY7ngCxTxjpxE",
              id: "6YVMFz59CuY7ngCxTxjpxE",
              name: "aespa",
              type: "artist",
              uri: "spotify:artist:6YVMFz59CuY7ngCxTxjpxE",
            },
          ],
          disc_number: 1,
          duration_ms: 221573,
          explicit: false,
          external_ids: {
            isrc: "KRA302100169",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/2zrhoHlFKxFTRF5aMyxMoQ",
          },
          href: "https://api.spotify.com/v1/tracks/2zrhoHlFKxFTRF5aMyxMoQ",
          id: "2zrhoHlFKxFTRF5aMyxMoQ",
          is_local: false,
          is_playable: true,
          name: "Next Level",
          popularity: 74,
          preview_url:
            "https://p.scdn.co/mp3-preview/e231722c5e5c751091f8dff8a96c59719ab8fcb2?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:2zrhoHlFKxFTRF5aMyxMoQ",
        },
        played_at: "2023-12-11T10:40:35.262Z",
        context: {
          type: "playlist",
          href: "https://api.spotify.com/v1/playlists/37i9dQZF1E4xGcU10nFpkR",
          external_urls: {
            spotify: "https://open.spotify.com/playlist/37i9dQZF1E4xGcU10nFpkR",
          },
          uri: "spotify:playlist:37i9dQZF1E4xGcU10nFpkR",
        },
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6YVMFz59CuY7ngCxTxjpxE",
                },
                href: "https://api.spotify.com/v1/artists/6YVMFz59CuY7ngCxTxjpxE",
                id: "6YVMFz59CuY7ngCxTxjpxE",
                name: "aespa",
                type: "artist",
                uri: "spotify:artist:6YVMFz59CuY7ngCxTxjpxE",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/2CzbrboOLzeRoaaH1N5K0N",
            },
            href: "https://api.spotify.com/v1/albums/2CzbrboOLzeRoaaH1N5K0N",
            id: "2CzbrboOLzeRoaaH1N5K0N",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b2737a393b04e8ced571618223e8",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e027a393b04e8ced571618223e8",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d000048517a393b04e8ced571618223e8",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Next Level",
            release_date: "2021-05-17",
            release_date_precision: "day",
            total_tracks: 1,
            type: "album",
            uri: "spotify:album:2CzbrboOLzeRoaaH1N5K0N",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/6YVMFz59CuY7ngCxTxjpxE",
              },
              href: "https://api.spotify.com/v1/artists/6YVMFz59CuY7ngCxTxjpxE",
              id: "6YVMFz59CuY7ngCxTxjpxE",
              name: "aespa",
              type: "artist",
              uri: "spotify:artist:6YVMFz59CuY7ngCxTxjpxE",
            },
          ],
          disc_number: 1,
          duration_ms: 221573,
          explicit: false,
          external_ids: {
            isrc: "KRA302100169",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/2zrhoHlFKxFTRF5aMyxMoQ",
          },
          href: "https://api.spotify.com/v1/tracks/2zrhoHlFKxFTRF5aMyxMoQ",
          id: "2zrhoHlFKxFTRF5aMyxMoQ",
          is_local: false,
          is_playable: true,
          name: "Next Level",
          popularity: 74,
          preview_url:
            "https://p.scdn.co/mp3-preview/e231722c5e5c751091f8dff8a96c59719ab8fcb2?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:2zrhoHlFKxFTRF5aMyxMoQ",
        },
        played_at: "2023-12-11T10:40:35.262Z",
        context: {
          type: "playlist",
          href: "https://api.spotify.com/v1/playlists/37i9dQZF1E4xGcU10nFpkR",
          external_urls: {
            spotify: "https://open.spotify.com/playlist/37i9dQZF1E4xGcU10nFpkR",
          },
          uri: "spotify:playlist:37i9dQZF1E4xGcU10nFpkR",
        },
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6YVMFz59CuY7ngCxTxjpxE",
                },
                href: "https://api.spotify.com/v1/artists/6YVMFz59CuY7ngCxTxjpxE",
                id: "6YVMFz59CuY7ngCxTxjpxE",
                name: "aespa",
                type: "artist",
                uri: "spotify:artist:6YVMFz59CuY7ngCxTxjpxE",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/2CzbrboOLzeRoaaH1N5K0N",
            },
            href: "https://api.spotify.com/v1/albums/2CzbrboOLzeRoaaH1N5K0N",
            id: "2CzbrboOLzeRoaaH1N5K0N",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b2737a393b04e8ced571618223e8",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e027a393b04e8ced571618223e8",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d000048517a393b04e8ced571618223e8",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Next Level",
            release_date: "2021-05-17",
            release_date_precision: "day",
            total_tracks: 1,
            type: "album",
            uri: "spotify:album:2CzbrboOLzeRoaaH1N5K0N",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/6YVMFz59CuY7ngCxTxjpxE",
              },
              href: "https://api.spotify.com/v1/artists/6YVMFz59CuY7ngCxTxjpxE",
              id: "6YVMFz59CuY7ngCxTxjpxE",
              name: "aespa",
              type: "artist",
              uri: "spotify:artist:6YVMFz59CuY7ngCxTxjpxE",
            },
          ],
          disc_number: 1,
          duration_ms: 221573,
          explicit: false,
          external_ids: {
            isrc: "KRA302100169",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/2zrhoHlFKxFTRF5aMyxMoQ",
          },
          href: "https://api.spotify.com/v1/tracks/2zrhoHlFKxFTRF5aMyxMoQ",
          id: "2zrhoHlFKxFTRF5aMyxMoQ",
          is_local: false,
          is_playable: true,
          name: "Next Level",
          popularity: 74,
          preview_url:
            "https://p.scdn.co/mp3-preview/e231722c5e5c751091f8dff8a96c59719ab8fcb2?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:2zrhoHlFKxFTRF5aMyxMoQ",
        },
        played_at: "2023-12-11T10:40:35.262Z",
        context: {
          type: "playlist",
          href: "https://api.spotify.com/v1/playlists/37i9dQZF1E4xGcU10nFpkR",
          external_urls: {
            spotify: "https://open.spotify.com/playlist/37i9dQZF1E4xGcU10nFpkR",
          },
          uri: "spotify:playlist:37i9dQZF1E4xGcU10nFpkR",
        },
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6YVMFz59CuY7ngCxTxjpxE",
                },
                href: "https://api.spotify.com/v1/artists/6YVMFz59CuY7ngCxTxjpxE",
                id: "6YVMFz59CuY7ngCxTxjpxE",
                name: "aespa",
                type: "artist",
                uri: "spotify:artist:6YVMFz59CuY7ngCxTxjpxE",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/2CzbrboOLzeRoaaH1N5K0N",
            },
            href: "https://api.spotify.com/v1/albums/2CzbrboOLzeRoaaH1N5K0N",
            id: "2CzbrboOLzeRoaaH1N5K0N",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b2737a393b04e8ced571618223e8",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e027a393b04e8ced571618223e8",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d000048517a393b04e8ced571618223e8",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Next Level",
            release_date: "2021-05-17",
            release_date_precision: "day",
            total_tracks: 1,
            type: "album",
            uri: "spotify:album:2CzbrboOLzeRoaaH1N5K0N",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/6YVMFz59CuY7ngCxTxjpxE",
              },
              href: "https://api.spotify.com/v1/artists/6YVMFz59CuY7ngCxTxjpxE",
              id: "6YVMFz59CuY7ngCxTxjpxE",
              name: "aespa",
              type: "artist",
              uri: "spotify:artist:6YVMFz59CuY7ngCxTxjpxE",
            },
          ],
          disc_number: 1,
          duration_ms: 221573,
          explicit: false,
          external_ids: {
            isrc: "KRA302100169",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/2zrhoHlFKxFTRF5aMyxMoQ",
          },
          href: "https://api.spotify.com/v1/tracks/2zrhoHlFKxFTRF5aMyxMoQ",
          id: "2zrhoHlFKxFTRF5aMyxMoQ",
          is_local: false,
          is_playable: true,
          name: "Next Level",
          popularity: 74,
          preview_url:
            "https://p.scdn.co/mp3-preview/e231722c5e5c751091f8dff8a96c59719ab8fcb2?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:2zrhoHlFKxFTRF5aMyxMoQ",
        },
        played_at: "2023-12-11T10:40:35.262Z",
        context: {
          type: "playlist",
          href: "https://api.spotify.com/v1/playlists/37i9dQZF1E4xGcU10nFpkR",
          external_urls: {
            spotify: "https://open.spotify.com/playlist/37i9dQZF1E4xGcU10nFpkR",
          },
          uri: "spotify:playlist:37i9dQZF1E4xGcU10nFpkR",
        },
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/28ot3wh4oNmoFOdVajibBl",
                },
                href: "https://api.spotify.com/v1/artists/28ot3wh4oNmoFOdVajibBl",
                id: "28ot3wh4oNmoFOdVajibBl",
                name: "NMIXX",
                type: "artist",
                uri: "spotify:artist:28ot3wh4oNmoFOdVajibBl",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/7AShWpCGBxsv3XMxXI3geX",
            },
            href: "https://api.spotify.com/v1/albums/7AShWpCGBxsv3XMxXI3geX",
            id: "7AShWpCGBxsv3XMxXI3geX",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b2736a1a2d9019156adcacc33476",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e026a1a2d9019156adcacc33476",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d000048516a1a2d9019156adcacc33476",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Roller Coaster",
            release_date: "2023-07-03",
            release_date_precision: "day",
            total_tracks: 1,
            type: "album",
            uri: "spotify:album:7AShWpCGBxsv3XMxXI3geX",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/28ot3wh4oNmoFOdVajibBl",
              },
              href: "https://api.spotify.com/v1/artists/28ot3wh4oNmoFOdVajibBl",
              id: "28ot3wh4oNmoFOdVajibBl",
              name: "NMIXX",
              type: "artist",
              uri: "spotify:artist:28ot3wh4oNmoFOdVajibBl",
            },
          ],
          disc_number: 1,
          duration_ms: 179373,
          explicit: false,
          external_ids: {
            isrc: "US5TA2300064",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/2AlNztYMWRJOg13xhUGwOj",
          },
          href: "https://api.spotify.com/v1/tracks/2AlNztYMWRJOg13xhUGwOj",
          id: "2AlNztYMWRJOg13xhUGwOj",
          is_local: false,
          is_playable: true,
          name: "Roller Coaster",
          popularity: 56,
          preview_url:
            "https://p.scdn.co/mp3-preview/28579308844c5c22d1b4541d87e9d2533690e8f4?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:2AlNztYMWRJOg13xhUGwOj",
        },
        played_at: "2023-12-11T08:31:38.848Z",
        context: {
          type: "playlist",
          href: "https://api.spotify.com/v1/playlists/37i9dQZF1E4xGcU10nFpkR",
          external_urls: {
            spotify: "https://open.spotify.com/playlist/37i9dQZF1E4xGcU10nFpkR",
          },
          uri: "spotify:playlist:37i9dQZF1E4xGcU10nFpkR",
        },
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/28ot3wh4oNmoFOdVajibBl",
                },
                href: "https://api.spotify.com/v1/artists/28ot3wh4oNmoFOdVajibBl",
                id: "28ot3wh4oNmoFOdVajibBl",
                name: "NMIXX",
                type: "artist",
                uri: "spotify:artist:28ot3wh4oNmoFOdVajibBl",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/7AShWpCGBxsv3XMxXI3geX",
            },
            href: "https://api.spotify.com/v1/albums/7AShWpCGBxsv3XMxXI3geX",
            id: "7AShWpCGBxsv3XMxXI3geX",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b2736a1a2d9019156adcacc33476",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e026a1a2d9019156adcacc33476",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d000048516a1a2d9019156adcacc33476",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Roller Coaster",
            release_date: "2023-07-03",
            release_date_precision: "day",
            total_tracks: 1,
            type: "album",
            uri: "spotify:album:7AShWpCGBxsv3XMxXI3geX",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/28ot3wh4oNmoFOdVajibBl",
              },
              href: "https://api.spotify.com/v1/artists/28ot3wh4oNmoFOdVajibBl",
              id: "28ot3wh4oNmoFOdVajibBl",
              name: "NMIXX",
              type: "artist",
              uri: "spotify:artist:28ot3wh4oNmoFOdVajibBl",
            },
          ],
          disc_number: 1,
          duration_ms: 179373,
          explicit: false,
          external_ids: {
            isrc: "US5TA2300064",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/2AlNztYMWRJOg13xhUGwOj",
          },
          href: "https://api.spotify.com/v1/tracks/2AlNztYMWRJOg13xhUGwOj",
          id: "2AlNztYMWRJOg13xhUGwOj",
          is_local: false,
          is_playable: true,
          name: "Roller Coaster",
          popularity: 56,
          preview_url:
            "https://p.scdn.co/mp3-preview/28579308844c5c22d1b4541d87e9d2533690e8f4?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:2AlNztYMWRJOg13xhUGwOj",
        },
        played_at: "2023-12-11T08:31:38.848Z",
        context: {
          type: "playlist",
          href: "https://api.spotify.com/v1/playlists/37i9dQZF1E4xGcU10nFpkR",
          external_urls: {
            spotify: "https://open.spotify.com/playlist/37i9dQZF1E4xGcU10nFpkR",
          },
          uri: "spotify:playlist:37i9dQZF1E4xGcU10nFpkR",
        },
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/28ot3wh4oNmoFOdVajibBl",
                },
                href: "https://api.spotify.com/v1/artists/28ot3wh4oNmoFOdVajibBl",
                id: "28ot3wh4oNmoFOdVajibBl",
                name: "NMIXX",
                type: "artist",
                uri: "spotify:artist:28ot3wh4oNmoFOdVajibBl",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/7AShWpCGBxsv3XMxXI3geX",
            },
            href: "https://api.spotify.com/v1/albums/7AShWpCGBxsv3XMxXI3geX",
            id: "7AShWpCGBxsv3XMxXI3geX",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b2736a1a2d9019156adcacc33476",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e026a1a2d9019156adcacc33476",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d000048516a1a2d9019156adcacc33476",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Roller Coaster",
            release_date: "2023-07-03",
            release_date_precision: "day",
            total_tracks: 1,
            type: "album",
            uri: "spotify:album:7AShWpCGBxsv3XMxXI3geX",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/28ot3wh4oNmoFOdVajibBl",
              },
              href: "https://api.spotify.com/v1/artists/28ot3wh4oNmoFOdVajibBl",
              id: "28ot3wh4oNmoFOdVajibBl",
              name: "NMIXX",
              type: "artist",
              uri: "spotify:artist:28ot3wh4oNmoFOdVajibBl",
            },
          ],
          disc_number: 1,
          duration_ms: 179373,
          explicit: false,
          external_ids: {
            isrc: "US5TA2300064",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/2AlNztYMWRJOg13xhUGwOj",
          },
          href: "https://api.spotify.com/v1/tracks/2AlNztYMWRJOg13xhUGwOj",
          id: "2AlNztYMWRJOg13xhUGwOj",
          is_local: false,
          is_playable: true,
          name: "Roller Coaster",
          popularity: 56,
          preview_url:
            "https://p.scdn.co/mp3-preview/28579308844c5c22d1b4541d87e9d2533690e8f4?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:2AlNztYMWRJOg13xhUGwOj",
        },
        played_at: "2023-12-11T08:31:38.848Z",
        context: {
          type: "playlist",
          href: "https://api.spotify.com/v1/playlists/37i9dQZF1E4xGcU10nFpkR",
          external_urls: {
            spotify: "https://open.spotify.com/playlist/37i9dQZF1E4xGcU10nFpkR",
          },
          uri: "spotify:playlist:37i9dQZF1E4xGcU10nFpkR",
        },
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/28ot3wh4oNmoFOdVajibBl",
                },
                href: "https://api.spotify.com/v1/artists/28ot3wh4oNmoFOdVajibBl",
                id: "28ot3wh4oNmoFOdVajibBl",
                name: "NMIXX",
                type: "artist",
                uri: "spotify:artist:28ot3wh4oNmoFOdVajibBl",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/7AShWpCGBxsv3XMxXI3geX",
            },
            href: "https://api.spotify.com/v1/albums/7AShWpCGBxsv3XMxXI3geX",
            id: "7AShWpCGBxsv3XMxXI3geX",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b2736a1a2d9019156adcacc33476",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e026a1a2d9019156adcacc33476",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d000048516a1a2d9019156adcacc33476",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Roller Coaster",
            release_date: "2023-07-03",
            release_date_precision: "day",
            total_tracks: 1,
            type: "album",
            uri: "spotify:album:7AShWpCGBxsv3XMxXI3geX",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/28ot3wh4oNmoFOdVajibBl",
              },
              href: "https://api.spotify.com/v1/artists/28ot3wh4oNmoFOdVajibBl",
              id: "28ot3wh4oNmoFOdVajibBl",
              name: "NMIXX",
              type: "artist",
              uri: "spotify:artist:28ot3wh4oNmoFOdVajibBl",
            },
          ],
          disc_number: 1,
          duration_ms: 179373,
          explicit: false,
          external_ids: {
            isrc: "US5TA2300064",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/2AlNztYMWRJOg13xhUGwOj",
          },
          href: "https://api.spotify.com/v1/tracks/2AlNztYMWRJOg13xhUGwOj",
          id: "2AlNztYMWRJOg13xhUGwOj",
          is_local: false,
          is_playable: true,
          name: "Roller Coaster",
          popularity: 56,
          preview_url:
            "https://p.scdn.co/mp3-preview/28579308844c5c22d1b4541d87e9d2533690e8f4?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:2AlNztYMWRJOg13xhUGwOj",
        },
        played_at: "2023-12-11T08:31:38.848Z",
        context: {
          type: "playlist",
          href: "https://api.spotify.com/v1/playlists/37i9dQZF1E4xGcU10nFpkR",
          external_urls: {
            spotify: "https://open.spotify.com/playlist/37i9dQZF1E4xGcU10nFpkR",
          },
          uri: "spotify:playlist:37i9dQZF1E4xGcU10nFpkR",
        },
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/28ot3wh4oNmoFOdVajibBl",
                },
                href: "https://api.spotify.com/v1/artists/28ot3wh4oNmoFOdVajibBl",
                id: "28ot3wh4oNmoFOdVajibBl",
                name: "NMIXX",
                type: "artist",
                uri: "spotify:artist:28ot3wh4oNmoFOdVajibBl",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/7AShWpCGBxsv3XMxXI3geX",
            },
            href: "https://api.spotify.com/v1/albums/7AShWpCGBxsv3XMxXI3geX",
            id: "7AShWpCGBxsv3XMxXI3geX",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b2736a1a2d9019156adcacc33476",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e026a1a2d9019156adcacc33476",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d000048516a1a2d9019156adcacc33476",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Roller Coaster",
            release_date: "2023-07-03",
            release_date_precision: "day",
            total_tracks: 1,
            type: "album",
            uri: "spotify:album:7AShWpCGBxsv3XMxXI3geX",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/28ot3wh4oNmoFOdVajibBl",
              },
              href: "https://api.spotify.com/v1/artists/28ot3wh4oNmoFOdVajibBl",
              id: "28ot3wh4oNmoFOdVajibBl",
              name: "NMIXX",
              type: "artist",
              uri: "spotify:artist:28ot3wh4oNmoFOdVajibBl",
            },
          ],
          disc_number: 1,
          duration_ms: 179373,
          explicit: false,
          external_ids: {
            isrc: "US5TA2300064",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/2AlNztYMWRJOg13xhUGwOj",
          },
          href: "https://api.spotify.com/v1/tracks/2AlNztYMWRJOg13xhUGwOj",
          id: "2AlNztYMWRJOg13xhUGwOj",
          is_local: false,
          is_playable: true,
          name: "Roller Coaster",
          popularity: 56,
          preview_url:
            "https://p.scdn.co/mp3-preview/28579308844c5c22d1b4541d87e9d2533690e8f4?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:2AlNztYMWRJOg13xhUGwOj",
        },
        played_at: "2023-12-11T08:31:38.848Z",
        context: {
          type: "playlist",
          href: "https://api.spotify.com/v1/playlists/37i9dQZF1E4xGcU10nFpkR",
          external_urls: {
            spotify: "https://open.spotify.com/playlist/37i9dQZF1E4xGcU10nFpkR",
          },
          uri: "spotify:playlist:37i9dQZF1E4xGcU10nFpkR",
        },
      },
    ],
  };
});

describe("현재 토큰이 유효한지 판별한다.", () => {
  test("현재 토큰이 유요함", () => {
    expect(
      isTokenExpiredWithIssueTime({ expiresIn: 3600, issueTime: Date.now() }),
    ).toBe(false);
  });
  test("현재 토큰이 만료됨", () => {
    expect(
      isTokenExpiredWithIssueTime({
        expiresIn: 3600,
        issueTime: Date.now() - 3600,
      }),
    ).toBe(true);
  });
});

const spotifyData = [
  {
    items: [
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/69K447yK7IW0NCZGEh79e1",
                },
                href: "https://api.spotify.com/v1/artists/69K447yK7IW0NCZGEh79e1",
                id: "69K447yK7IW0NCZGEh79e1",
                name: "한동근",
                type: "artist",
                uri: "spotify:artist:69K447yK7IW0NCZGEh79e1",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/4thvEEDY1tQFGeIcTbgwMy",
            },
            href: "https://api.spotify.com/v1/albums/4thvEEDY1tQFGeIcTbgwMy",
            id: "4thvEEDY1tQFGeIcTbgwMy",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b2736c50cbc00d297cf578c34423",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e026c50cbc00d297cf578c34423",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d000048516c50cbc00d297cf578c34423",
                width: 64,
              },
            ],
            is_playable: true,
            name: "The 3rd Digital Single '그대라는 사치'",
            release_date: "2016-08-24",
            release_date_precision: "day",
            total_tracks: 1,
            type: "album",
            uri: "spotify:album:4thvEEDY1tQFGeIcTbgwMy",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/69K447yK7IW0NCZGEh79e1",
              },
              href: "https://api.spotify.com/v1/artists/69K447yK7IW0NCZGEh79e1",
              id: "69K447yK7IW0NCZGEh79e1",
              name: "한동근",
              type: "artist",
              uri: "spotify:artist:69K447yK7IW0NCZGEh79e1",
            },
          ],
          disc_number: 1,
          duration_ms: 296832,
          explicit: false,
          external_ids: {
            isrc: "KRA381601597",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/37dkyQQNJLaqk09kkNr7In",
          },
          href: "https://api.spotify.com/v1/tracks/37dkyQQNJLaqk09kkNr7In",
          id: "37dkyQQNJLaqk09kkNr7In",
          is_local: false,
          is_playable: true,
          name: "그대라는 사치",
          popularity: 43,
          preview_url:
            "https://p.scdn.co/mp3-preview/390f6eefb2aa92055562643fc455aa6745fc6d42?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:37dkyQQNJLaqk09kkNr7In",
        },
        played_at: "2024-01-04T22:18:55.040Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "album",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1rpgxJZxZMLnFNc1Jmyov5",
                },
                href: "https://api.spotify.com/v1/artists/1rpgxJZxZMLnFNc1Jmyov5",
                id: "1rpgxJZxZMLnFNc1Jmyov5",
                name: "YB",
                type: "artist",
                uri: "spotify:artist:1rpgxJZxZMLnFNc1Jmyov5",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/4S5PRo1gVG9BvRnCcdYzdS",
            },
            href: "https://api.spotify.com/v1/albums/4S5PRo1gVG9BvRnCcdYzdS",
            id: "4S5PRo1gVG9BvRnCcdYzdS",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273be123bb6b40736bf093870bd",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02be123bb6b40736bf093870bd",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851be123bb6b40736bf093870bd",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Why Be?",
            release_date: "2010-01-01",
            release_date_precision: "day",
            total_tracks: 23,
            type: "album",
            uri: "spotify:album:4S5PRo1gVG9BvRnCcdYzdS",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1rpgxJZxZMLnFNc1Jmyov5",
              },
              href: "https://api.spotify.com/v1/artists/1rpgxJZxZMLnFNc1Jmyov5",
              id: "1rpgxJZxZMLnFNc1Jmyov5",
              name: "YB",
              type: "artist",
              uri: "spotify:artist:1rpgxJZxZMLnFNc1Jmyov5",
            },
          ],
          disc_number: 1,
          duration_ms: 214906,
          explicit: false,
          external_ids: {
            isrc: "KRA661000070",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/3I71PFicYG614VGl6hqcUK",
          },
          href: "https://api.spotify.com/v1/tracks/3I71PFicYG614VGl6hqcUK",
          id: "3I71PFicYG614VGl6hqcUK",
          is_local: false,
          is_playable: true,
          name: "A Flying Butterfly",
          popularity: 41,
          preview_url:
            "https://p.scdn.co/mp3-preview/a7287c9baf7383e74fb4a1c59bdb231570538873?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 2,
          type: "track",
          uri: "spotify:track:3I71PFicYG614VGl6hqcUK",
        },
        played_at: "2024-01-04T16:09:06.387Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7IrDIIq3j04exsiF3Z7CPg",
                },
                href: "https://api.spotify.com/v1/artists/7IrDIIq3j04exsiF3Z7CPg",
                id: "7IrDIIq3j04exsiF3Z7CPg",
                name: "빈지노",
                type: "artist",
                uri: "spotify:artist:7IrDIIq3j04exsiF3Z7CPg",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/6GzOG46xmgSfB0PQdsnMDU",
            },
            href: "https://api.spotify.com/v1/albums/6GzOG46xmgSfB0PQdsnMDU",
            id: "6GzOG46xmgSfB0PQdsnMDU",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273fce4d97a91b1d51a64ec8a97",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02fce4d97a91b1d51a64ec8a97",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851fce4d97a91b1d51a64ec8a97",
                width: 64,
              },
            ],
            is_playable: true,
            name: "24:26 (5th Anniversary Remaster Edition)",
            release_date: "2017-07-10",
            release_date_precision: "day",
            total_tracks: 9,
            type: "album",
            uri: "spotify:album:6GzOG46xmgSfB0PQdsnMDU",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/7IrDIIq3j04exsiF3Z7CPg",
              },
              href: "https://api.spotify.com/v1/artists/7IrDIIq3j04exsiF3Z7CPg",
              id: "7IrDIIq3j04exsiF3Z7CPg",
              name: "빈지노",
              type: "artist",
              uri: "spotify:artist:7IrDIIq3j04exsiF3Z7CPg",
            },
          ],
          disc_number: 1,
          duration_ms: 211251,
          explicit: false,
          external_ids: {
            isrc: "KRC531700031",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/2y6Ur97SRouk64dvHMMsbu",
          },
          href: "https://api.spotify.com/v1/tracks/2y6Ur97SRouk64dvHMMsbu",
          id: "2y6Ur97SRouk64dvHMMsbu",
          is_local: false,
          is_playable: true,
          name: "Boogie On & On",
          popularity: 42,
          preview_url:
            "https://p.scdn.co/mp3-preview/acf9da21c08daf140d5501cd6b42f8f4723dcab1?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 3,
          type: "track",
          uri: "spotify:track:2y6Ur97SRouk64dvHMMsbu",
        },
        played_at: "2024-01-04T16:05:31.156Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "album",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/4QDcs3XrA8uHUZ7Xt9Ytep",
                },
                href: "https://api.spotify.com/v1/artists/4QDcs3XrA8uHUZ7Xt9Ytep",
                id: "4QDcs3XrA8uHUZ7Xt9Ytep",
                name: "프라이머리",
                type: "artist",
                uri: "spotify:artist:4QDcs3XrA8uHUZ7Xt9Ytep",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/20MnU7TMGi4OEPkPZjZxYA",
            },
            href: "https://api.spotify.com/v1/albums/20MnU7TMGi4OEPkPZjZxYA",
            id: "20MnU7TMGi4OEPkPZjZxYA",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b27330b6adc29d752c16f25ff834",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e0230b6adc29d752c16f25ff834",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d0000485130b6adc29d752c16f25ff834",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Primary And The Messengers LP",
            release_date: "2012-10-31",
            release_date_precision: "day",
            total_tracks: 19,
            type: "album",
            uri: "spotify:album:20MnU7TMGi4OEPkPZjZxYA",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/4QDcs3XrA8uHUZ7Xt9Ytep",
              },
              href: "https://api.spotify.com/v1/artists/4QDcs3XrA8uHUZ7Xt9Ytep",
              id: "4QDcs3XrA8uHUZ7Xt9Ytep",
              name: "프라이머리",
              type: "artist",
              uri: "spotify:artist:4QDcs3XrA8uHUZ7Xt9Ytep",
            },
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/3vvgBPro7lDMdReL1Ct2Hx",
              },
              href: "https://api.spotify.com/v1/artists/3vvgBPro7lDMdReL1Ct2Hx",
              id: "3vvgBPro7lDMdReL1Ct2Hx",
              name: "최자",
              type: "artist",
              uri: "spotify:artist:3vvgBPro7lDMdReL1Ct2Hx",
            },
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/5HenzRvMtSrgtvU16XAoby",
              },
              href: "https://api.spotify.com/v1/artists/5HenzRvMtSrgtvU16XAoby",
              id: "5HenzRvMtSrgtvU16XAoby",
              name: "Zion.T",
              type: "artist",
              uri: "spotify:artist:5HenzRvMtSrgtvU16XAoby",
            },
          ],
          disc_number: 2,
          duration_ms: 194115,
          explicit: false,
          external_ids: {
            isrc: "KRB141200071",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/3y1Aq9UzyzhMGuVaS8i2oA",
          },
          href: "https://api.spotify.com/v1/tracks/3y1Aq9UzyzhMGuVaS8i2oA",
          id: "3y1Aq9UzyzhMGuVaS8i2oA",
          is_local: false,
          is_playable: true,
          name: "question mark (Feat. CHOIZA Of Dynamicduo, Zion.T)",
          popularity: 42,
          preview_url:
            "https://p.scdn.co/mp3-preview/bf0f5a702e1e4b57b7e61fb26351d44784e04215?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 2,
          type: "track",
          uri: "spotify:track:3y1Aq9UzyzhMGuVaS8i2oA",
        },
        played_at: "2024-01-04T16:01:59.563Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/5crpfIGj4lAUNuHYUY2TN9",
                },
                href: "https://api.spotify.com/v1/artists/5crpfIGj4lAUNuHYUY2TN9",
                id: "5crpfIGj4lAUNuHYUY2TN9",
                name: "경서예지",
                type: "artist",
                uri: "spotify:artist:5crpfIGj4lAUNuHYUY2TN9",
              },
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3WFFsW6pFOm0e2yVQLTYCX",
                },
                href: "https://api.spotify.com/v1/artists/3WFFsW6pFOm0e2yVQLTYCX",
                id: "3WFFsW6pFOm0e2yVQLTYCX",
                name: "Jeon Gunho",
                type: "artist",
                uri: "spotify:artist:3WFFsW6pFOm0e2yVQLTYCX",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/1QD2UJupusQ9zBsldpvS3d",
            },
            href: "https://api.spotify.com/v1/albums/1QD2UJupusQ9zBsldpvS3d",
            id: "1QD2UJupusQ9zBsldpvS3d",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273d22351424b334dd54c1c39cf",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02d22351424b334dd54c1c39cf",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851d22351424b334dd54c1c39cf",
                width: 64,
              },
            ],
            is_playable: true,
            name: "다정히 내 이름을 부르면 (경서예지 x 전건호)",
            release_date: "2021-05-19",
            release_date_precision: "day",
            total_tracks: 2,
            type: "album",
            uri: "spotify:album:1QD2UJupusQ9zBsldpvS3d",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/5crpfIGj4lAUNuHYUY2TN9",
              },
              href: "https://api.spotify.com/v1/artists/5crpfIGj4lAUNuHYUY2TN9",
              id: "5crpfIGj4lAUNuHYUY2TN9",
              name: "경서예지",
              type: "artist",
              uri: "spotify:artist:5crpfIGj4lAUNuHYUY2TN9",
            },
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/3WFFsW6pFOm0e2yVQLTYCX",
              },
              href: "https://api.spotify.com/v1/artists/3WFFsW6pFOm0e2yVQLTYCX",
              id: "3WFFsW6pFOm0e2yVQLTYCX",
              name: "Jeon Gunho",
              type: "artist",
              uri: "spotify:artist:3WFFsW6pFOm0e2yVQLTYCX",
            },
          ],
          disc_number: 1,
          duration_ms: 231338,
          explicit: false,
          external_ids: {
            isrc: "KRA382103901",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/0tgxvf4rqBBeEB54h0nnRD",
          },
          href: "https://api.spotify.com/v1/tracks/0tgxvf4rqBBeEB54h0nnRD",
          id: "0tgxvf4rqBBeEB54h0nnRD",
          is_local: false,
          is_playable: true,
          name: "다정히 내 이름을 부르면",
          popularity: 48,
          preview_url:
            "https://p.scdn.co/mp3-preview/74d3be17c8acce141c8687a5fa6717dac4f71bb1?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:0tgxvf4rqBBeEB54h0nnRD",
        },
        played_at: "2024-01-04T15:56:50.081Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6Ycj4hhpz2nOfsYCU1gHqR",
                },
                href: "https://api.spotify.com/v1/artists/6Ycj4hhpz2nOfsYCU1gHqR",
                id: "6Ycj4hhpz2nOfsYCU1gHqR",
                name: "D-Hack",
                type: "artist",
                uri: "spotify:artist:6Ycj4hhpz2nOfsYCU1gHqR",
              },
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/0J372uvAXbRjLFSoAVE2lp",
                },
                href: "https://api.spotify.com/v1/artists/0J372uvAXbRjLFSoAVE2lp",
                id: "0J372uvAXbRjLFSoAVE2lp",
                name: "PATEKO",
                type: "artist",
                uri: "spotify:artist:0J372uvAXbRjLFSoAVE2lp",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/0J1MR2hon6midgXF4kY1b8",
            },
            href: "https://api.spotify.com/v1/albums/0J1MR2hon6midgXF4kY1b8",
            id: "0J1MR2hon6midgXF4kY1b8",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b2734f10712c9170e737a7c212ce",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e024f10712c9170e737a7c212ce",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d000048514f10712c9170e737a7c212ce",
                width: 64,
              },
            ],
            is_playable: true,
            name: "OHAYO MY NIGHT",
            release_date: "2020-06-20",
            release_date_precision: "day",
            total_tracks: 1,
            type: "album",
            uri: "spotify:album:0J1MR2hon6midgXF4kY1b8",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/6Ycj4hhpz2nOfsYCU1gHqR",
              },
              href: "https://api.spotify.com/v1/artists/6Ycj4hhpz2nOfsYCU1gHqR",
              id: "6Ycj4hhpz2nOfsYCU1gHqR",
              name: "D-Hack",
              type: "artist",
              uri: "spotify:artist:6Ycj4hhpz2nOfsYCU1gHqR",
            },
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/0J372uvAXbRjLFSoAVE2lp",
              },
              href: "https://api.spotify.com/v1/artists/0J372uvAXbRjLFSoAVE2lp",
              id: "0J372uvAXbRjLFSoAVE2lp",
              name: "PATEKO",
              type: "artist",
              uri: "spotify:artist:0J372uvAXbRjLFSoAVE2lp",
            },
          ],
          disc_number: 1,
          duration_ms: 238736,
          explicit: false,
          external_ids: {
            isrc: "QZEKE2013840",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/4iJprGt1rt5iy0sxXXaRWn",
          },
          href: "https://api.spotify.com/v1/tracks/4iJprGt1rt5iy0sxXXaRWn",
          id: "4iJprGt1rt5iy0sxXXaRWn",
          is_local: false,
          is_playable: true,
          name: "OHAYO MY NIGHT",
          popularity: 45,
          preview_url:
            "https://p.scdn.co/mp3-preview/cb3626f414737b679f7a4d7274cd5b7f468502b8?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:4iJprGt1rt5iy0sxXXaRWn",
        },
        played_at: "2024-01-04T15:52:58.272Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/4Kxlr1PRlDKEB0ekOCyHgX",
                },
                href: "https://api.spotify.com/v1/artists/4Kxlr1PRlDKEB0ekOCyHgX",
                id: "4Kxlr1PRlDKEB0ekOCyHgX",
                name: "BIGBANG",
                type: "artist",
                uri: "spotify:artist:4Kxlr1PRlDKEB0ekOCyHgX",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/6b08mw1Ggz7UyVYas1iRgj",
            },
            href: "https://api.spotify.com/v1/albums/6b08mw1Ggz7UyVYas1iRgj",
            id: "6b08mw1Ggz7UyVYas1iRgj",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b2733058758c444837fa2fbbe382",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e023058758c444837fa2fbbe382",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d000048513058758c444837fa2fbbe382",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Tonight",
            release_date: "2011-02-24",
            release_date_precision: "day",
            total_tracks: 6,
            type: "album",
            uri: "spotify:album:6b08mw1Ggz7UyVYas1iRgj",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/4Kxlr1PRlDKEB0ekOCyHgX",
              },
              href: "https://api.spotify.com/v1/artists/4Kxlr1PRlDKEB0ekOCyHgX",
              id: "4Kxlr1PRlDKEB0ekOCyHgX",
              name: "BIGBANG",
              type: "artist",
              uri: "spotify:artist:4Kxlr1PRlDKEB0ekOCyHgX",
            },
          ],
          disc_number: 1,
          duration_ms: 219946,
          explicit: false,
          external_ids: {
            isrc: "KRA491100049",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/4mm23jt7cimDkeHu1VcS2v",
          },
          href: "https://api.spotify.com/v1/tracks/4mm23jt7cimDkeHu1VcS2v",
          id: "4mm23jt7cimDkeHu1VcS2v",
          is_local: false,
          is_playable: true,
          name: "Cafe",
          popularity: 43,
          preview_url:
            "https://p.scdn.co/mp3-preview/fe5f0b88a4831486fb6f2aab1eb827e66837ae0f?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 6,
          type: "track",
          uri: "spotify:track:4mm23jt7cimDkeHu1VcS2v",
        },
        played_at: "2024-01-04T15:48:59.239Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6dHoQP2ONf0e9DMH94Obo7",
                },
                href: "https://api.spotify.com/v1/artists/6dHoQP2ONf0e9DMH94Obo7",
                id: "6dHoQP2ONf0e9DMH94Obo7",
                name: "Supreme Team",
                type: "artist",
                uri: "spotify:artist:6dHoQP2ONf0e9DMH94Obo7",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/2RCmDJa0aD81Ob8bVvtDzv",
            },
            href: "https://api.spotify.com/v1/albums/2RCmDJa0aD81Ob8bVvtDzv",
            id: "2RCmDJa0aD81Ob8bVvtDzv",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273a106bab4d185834448da9540",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02a106bab4d185834448da9540",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851a106bab4d185834448da9540",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Supreme Team Guide to Excellent Adventure",
            release_date: "2009-07-14",
            release_date_precision: "day",
            total_tracks: 8,
            type: "album",
            uri: "spotify:album:2RCmDJa0aD81Ob8bVvtDzv",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/6dHoQP2ONf0e9DMH94Obo7",
              },
              href: "https://api.spotify.com/v1/artists/6dHoQP2ONf0e9DMH94Obo7",
              id: "6dHoQP2ONf0e9DMH94Obo7",
              name: "Supreme Team",
              type: "artist",
              uri: "spotify:artist:6dHoQP2ONf0e9DMH94Obo7",
            },
          ],
          disc_number: 1,
          duration_ms: 219053,
          explicit: false,
          external_ids: {
            isrc: "USA2P1341338",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/5B9LYQM9EBdzvVmQO3aQog",
          },
          href: "https://api.spotify.com/v1/tracks/5B9LYQM9EBdzvVmQO3aQog",
          id: "5B9LYQM9EBdzvVmQO3aQog",
          is_local: false,
          is_playable: true,
          name: "Supermagic",
          popularity: 24,
          preview_url:
            "https://p.scdn.co/mp3-preview/fbeb5c65d1401754df9485fb17275759bcf4e8ab?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 2,
          type: "track",
          uri: "spotify:track:5B9LYQM9EBdzvVmQO3aQog",
        },
        played_at: "2024-01-04T15:41:11.053Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7IrDIIq3j04exsiF3Z7CPg",
                },
                href: "https://api.spotify.com/v1/artists/7IrDIIq3j04exsiF3Z7CPg",
                id: "7IrDIIq3j04exsiF3Z7CPg",
                name: "빈지노",
                type: "artist",
                uri: "spotify:artist:7IrDIIq3j04exsiF3Z7CPg",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/6GzOG46xmgSfB0PQdsnMDU",
            },
            href: "https://api.spotify.com/v1/albums/6GzOG46xmgSfB0PQdsnMDU",
            id: "6GzOG46xmgSfB0PQdsnMDU",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273fce4d97a91b1d51a64ec8a97",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02fce4d97a91b1d51a64ec8a97",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851fce4d97a91b1d51a64ec8a97",
                width: 64,
              },
            ],
            is_playable: true,
            name: "24:26 (5th Anniversary Remaster Edition)",
            release_date: "2017-07-10",
            release_date_precision: "day",
            total_tracks: 9,
            type: "album",
            uri: "spotify:album:6GzOG46xmgSfB0PQdsnMDU",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/7IrDIIq3j04exsiF3Z7CPg",
              },
              href: "https://api.spotify.com/v1/artists/7IrDIIq3j04exsiF3Z7CPg",
              id: "7IrDIIq3j04exsiF3Z7CPg",
              name: "빈지노",
              type: "artist",
              uri: "spotify:artist:7IrDIIq3j04exsiF3Z7CPg",
            },
          ],
          disc_number: 1,
          duration_ms: 226612,
          explicit: false,
          external_ids: {
            isrc: "KRC531700032",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/5tEouf2s1SPwAIkOHnvWtQ",
          },
          href: "https://api.spotify.com/v1/tracks/5tEouf2s1SPwAIkOHnvWtQ",
          id: "5tEouf2s1SPwAIkOHnvWtQ",
          is_local: false,
          is_playable: true,
          name: "Aqua Man",
          popularity: 46,
          preview_url:
            "https://p.scdn.co/mp3-preview/9877b33e7eab1c7c23f3c5814d829f53eb5407ca?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 4,
          type: "track",
          uri: "spotify:track:5tEouf2s1SPwAIkOHnvWtQ",
        },
        played_at: "2024-01-04T15:36:35.138Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2dd5mrQZvg6SmahdgVKDzh",
                },
                href: "https://api.spotify.com/v1/artists/2dd5mrQZvg6SmahdgVKDzh",
                id: "2dd5mrQZvg6SmahdgVKDzh",
                name: "싸이",
                type: "artist",
                uri: "spotify:artist:2dd5mrQZvg6SmahdgVKDzh",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/0Nq7k5hqml23K1VlrEnLNR",
            },
            href: "https://api.spotify.com/v1/albums/0Nq7k5hqml23K1VlrEnLNR",
            id: "0Nq7k5hqml23K1VlrEnLNR",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b2738cacbdd7305b0651b4c0fec4",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e028cacbdd7305b0651b4c0fec4",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d000048518cacbdd7305b0651b4c0fec4",
                width: 64,
              },
            ],
            is_playable: true,
            name: "PSY SIX RULES, Pt. 1",
            release_date: "2012-07-15",
            release_date_precision: "day",
            total_tracks: 6,
            type: "album",
            uri: "spotify:album:0Nq7k5hqml23K1VlrEnLNR",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/2dd5mrQZvg6SmahdgVKDzh",
              },
              href: "https://api.spotify.com/v1/artists/2dd5mrQZvg6SmahdgVKDzh",
              id: "2dd5mrQZvg6SmahdgVKDzh",
              name: "싸이",
              type: "artist",
              uri: "spotify:artist:2dd5mrQZvg6SmahdgVKDzh",
            },
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/7MNyflLAWpaH0EPw1fdORD",
              },
              href: "https://api.spotify.com/v1/artists/7MNyflLAWpaH0EPw1fdORD",
              id: "7MNyflLAWpaH0EPw1fdORD",
              name: "박정현",
              type: "artist",
              uri: "spotify:artist:7MNyflLAWpaH0EPw1fdORD",
            },
          ],
          disc_number: 1,
          duration_ms: 243963,
          explicit: false,
          external_ids: {
            isrc: "KRA341205654",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/5Kbpcd3hOqu4ZRAJNAjIcg",
          },
          href: "https://api.spotify.com/v1/tracks/5Kbpcd3hOqu4ZRAJNAjIcg",
          id: "5Kbpcd3hOqu4ZRAJNAjIcg",
          is_local: false,
          is_playable: true,
          name: "What Would Have Been? (Feat. Lena Park)",
          popularity: 46,
          preview_url:
            "https://p.scdn.co/mp3-preview/ed34a7413955b6cf0594d60878f1e3542c01fbd8?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 5,
          type: "track",
          uri: "spotify:track:5Kbpcd3hOqu4ZRAJNAjIcg",
        },
        played_at: "2024-01-04T15:26:05.196Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6dHoQP2ONf0e9DMH94Obo7",
                },
                href: "https://api.spotify.com/v1/artists/6dHoQP2ONf0e9DMH94Obo7",
                id: "6dHoQP2ONf0e9DMH94Obo7",
                name: "Supreme Team",
                type: "artist",
                uri: "spotify:artist:6dHoQP2ONf0e9DMH94Obo7",
              },
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7n7p8oXuygFVSkrCO9FvAt",
                },
                href: "https://api.spotify.com/v1/artists/7n7p8oXuygFVSkrCO9FvAt",
                id: "7n7p8oXuygFVSkrCO9FvAt",
                name: "영준",
                type: "artist",
                uri: "spotify:artist:7n7p8oXuygFVSkrCO9FvAt",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/5MCWiknia0CVi71e67Fdzh",
            },
            href: "https://api.spotify.com/v1/albums/5MCWiknia0CVi71e67Fdzh",
            id: "5MCWiknia0CVi71e67Fdzh",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b27371caa4a66f508c09450d637d",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e0271caa4a66f508c09450d637d",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d0000485171caa4a66f508c09450d637d",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Ames Room",
            release_date: "2010-10-01",
            release_date_precision: "day",
            total_tracks: 5,
            type: "album",
            uri: "spotify:album:5MCWiknia0CVi71e67Fdzh",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/6dHoQP2ONf0e9DMH94Obo7",
              },
              href: "https://api.spotify.com/v1/artists/6dHoQP2ONf0e9DMH94Obo7",
              id: "6dHoQP2ONf0e9DMH94Obo7",
              name: "Supreme Team",
              type: "artist",
              uri: "spotify:artist:6dHoQP2ONf0e9DMH94Obo7",
            },
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/7n7p8oXuygFVSkrCO9FvAt",
              },
              href: "https://api.spotify.com/v1/artists/7n7p8oXuygFVSkrCO9FvAt",
              id: "7n7p8oXuygFVSkrCO9FvAt",
              name: "영준",
              type: "artist",
              uri: "spotify:artist:7n7p8oXuygFVSkrCO9FvAt",
            },
          ],
          disc_number: 1,
          duration_ms: 263079,
          explicit: false,
          external_ids: {
            isrc: "KRA381000915",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/5SQPTxNUunDOhBMOggDmX7",
          },
          href: "https://api.spotify.com/v1/tracks/5SQPTxNUunDOhBMOggDmX7",
          id: "5SQPTxNUunDOhBMOggDmX7",
          is_local: false,
          is_playable: true,
          name: "그땐 그땐 그땐",
          popularity: 41,
          preview_url:
            "https://p.scdn.co/mp3-preview/b03321308b6bdb15758b3eb2c24e62a58cc5387d?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:5SQPTxNUunDOhBMOggDmX7",
        },
        played_at: "2024-01-04T15:21:49.504Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "album",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
                },
                href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
                id: "1yNIb413Bmfs2ZBVuPp9kC",
                name: "Jack Stauber's Micropop",
                type: "artist",
                uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/1PzQlma9FcRRGwMDmJIUyX",
            },
            href: "https://api.spotify.com/v1/albums/1PzQlma9FcRRGwMDmJIUyX",
            id: "1PzQlma9FcRRGwMDmJIUyX",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b27348cc1333d5c15fbf25f7c49d",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e0248cc1333d5c15fbf25f7c49d",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d0000485148cc1333d5c15fbf25f7c49d",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Shop: A Pop Opera",
            release_date: "2020-03-08",
            release_date_precision: "day",
            total_tracks: 8,
            type: "album",
            uri: "spotify:album:1PzQlma9FcRRGwMDmJIUyX",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
              },
              href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
              id: "1yNIb413Bmfs2ZBVuPp9kC",
              name: "Jack Stauber's Micropop",
              type: "artist",
              uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
            },
          ],
          disc_number: 1,
          duration_ms: 56003,
          explicit: false,
          external_ids: {
            isrc: "QMEZE2021302",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/65vHYDVPMWlYMgLV2g1Gip",
          },
          href: "https://api.spotify.com/v1/tracks/65vHYDVPMWlYMgLV2g1Gip",
          id: "65vHYDVPMWlYMgLV2g1Gip",
          is_local: false,
          is_playable: true,
          name: "Paper Towels",
          popularity: 45,
          preview_url:
            "https://p.scdn.co/mp3-preview/1ed196ed409dc7b0dc5c53d5fdc8b273fec318d7?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 4,
          type: "track",
          uri: "spotify:track:65vHYDVPMWlYMgLV2g1Gip",
        },
        played_at: "2024-01-04T15:05:07.053Z",
        context: {
          type: "artist",
          href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
          external_urls: {
            spotify: "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
          },
          uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
        },
      },
      {
        track: {
          album: {
            album_type: "album",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
                },
                href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
                id: "1yNIb413Bmfs2ZBVuPp9kC",
                name: "Jack Stauber's Micropop",
                type: "artist",
                uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/1PzQlma9FcRRGwMDmJIUyX",
            },
            href: "https://api.spotify.com/v1/albums/1PzQlma9FcRRGwMDmJIUyX",
            id: "1PzQlma9FcRRGwMDmJIUyX",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b27348cc1333d5c15fbf25f7c49d",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e0248cc1333d5c15fbf25f7c49d",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d0000485148cc1333d5c15fbf25f7c49d",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Shop: A Pop Opera",
            release_date: "2020-03-08",
            release_date_precision: "day",
            total_tracks: 8,
            type: "album",
            uri: "spotify:album:1PzQlma9FcRRGwMDmJIUyX",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
              },
              href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
              id: "1yNIb413Bmfs2ZBVuPp9kC",
              name: "Jack Stauber's Micropop",
              type: "artist",
              uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
            },
          ],
          disc_number: 1,
          duration_ms: 55715,
          explicit: false,
          external_ids: {
            isrc: "QMEZE2021299",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/78VXkLNQNDNu1fp1SfNVRo",
          },
          href: "https://api.spotify.com/v1/tracks/78VXkLNQNDNu1fp1SfNVRo",
          id: "78VXkLNQNDNu1fp1SfNVRo",
          is_local: false,
          is_playable: true,
          name: "Bread",
          popularity: 47,
          preview_url:
            "https://p.scdn.co/mp3-preview/5fd314fe9c47147a577ef51748922ac668f1885c?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 3,
          type: "track",
          uri: "spotify:track:78VXkLNQNDNu1fp1SfNVRo",
        },
        played_at: "2024-01-04T15:04:10.840Z",
        context: {
          type: "artist",
          href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
          external_urls: {
            spotify: "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
          },
          uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
        },
      },
      {
        track: {
          album: {
            album_type: "album",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
                },
                href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
                id: "1yNIb413Bmfs2ZBVuPp9kC",
                name: "Jack Stauber's Micropop",
                type: "artist",
                uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/1PzQlma9FcRRGwMDmJIUyX",
            },
            href: "https://api.spotify.com/v1/albums/1PzQlma9FcRRGwMDmJIUyX",
            id: "1PzQlma9FcRRGwMDmJIUyX",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b27348cc1333d5c15fbf25f7c49d",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e0248cc1333d5c15fbf25f7c49d",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d0000485148cc1333d5c15fbf25f7c49d",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Shop: A Pop Opera",
            release_date: "2020-03-08",
            release_date_precision: "day",
            total_tracks: 8,
            type: "album",
            uri: "spotify:album:1PzQlma9FcRRGwMDmJIUyX",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
              },
              href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
              id: "1yNIb413Bmfs2ZBVuPp9kC",
              name: "Jack Stauber's Micropop",
              type: "artist",
              uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
            },
          ],
          disc_number: 1,
          duration_ms: 58261,
          explicit: false,
          external_ids: {
            isrc: "QMEZE2021298",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/1w4JPzTHAcMdAGzDLzXCjF",
          },
          href: "https://api.spotify.com/v1/tracks/1w4JPzTHAcMdAGzDLzXCjF",
          id: "1w4JPzTHAcMdAGzDLzXCjF",
          is_local: false,
          is_playable: true,
          name: "Milk",
          popularity: 57,
          preview_url:
            "https://p.scdn.co/mp3-preview/33b70dfa60b8788cae550713d8f01a94a32ee674?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 2,
          type: "track",
          uri: "spotify:track:1w4JPzTHAcMdAGzDLzXCjF",
        },
        played_at: "2024-01-04T15:03:14.720Z",
        context: {
          type: "artist",
          href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
          external_urls: {
            spotify: "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
          },
          uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
        },
      },
      {
        track: {
          album: {
            album_type: "album",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
                },
                href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
                id: "1yNIb413Bmfs2ZBVuPp9kC",
                name: "Jack Stauber's Micropop",
                type: "artist",
                uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/1PzQlma9FcRRGwMDmJIUyX",
            },
            href: "https://api.spotify.com/v1/albums/1PzQlma9FcRRGwMDmJIUyX",
            id: "1PzQlma9FcRRGwMDmJIUyX",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b27348cc1333d5c15fbf25f7c49d",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e0248cc1333d5c15fbf25f7c49d",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d0000485148cc1333d5c15fbf25f7c49d",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Shop: A Pop Opera",
            release_date: "2020-03-08",
            release_date_precision: "day",
            total_tracks: 8,
            type: "album",
            uri: "spotify:album:1PzQlma9FcRRGwMDmJIUyX",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
              },
              href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
              id: "1yNIb413Bmfs2ZBVuPp9kC",
              name: "Jack Stauber's Micropop",
              type: "artist",
              uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
            },
          ],
          disc_number: 1,
          duration_ms: 17951,
          explicit: false,
          external_ids: {
            isrc: "QMEZE2021297",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/1kftorJNhsWrtqjCJyte6j",
          },
          href: "https://api.spotify.com/v1/tracks/1kftorJNhsWrtqjCJyte6j",
          id: "1kftorJNhsWrtqjCJyte6j",
          is_local: false,
          is_playable: true,
          name: "Shop",
          popularity: 8,
          preview_url:
            "https://p.scdn.co/mp3-preview/748156dfb7b3e0e8ad8835f9f2daeab731d5a0c5?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:1kftorJNhsWrtqjCJyte6j",
        },
        played_at: "2024-01-04T15:02:16.182Z",
        context: {
          type: "artist",
          href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
          external_urls: {
            spotify: "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
          },
          uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
        },
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
                },
                href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
                id: "1yNIb413Bmfs2ZBVuPp9kC",
                name: "Jack Stauber's Micropop",
                type: "artist",
                uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/5fj1GdFNLbru8pCOqNmLaK",
            },
            href: "https://api.spotify.com/v1/albums/5fj1GdFNLbru8pCOqNmLaK",
            id: "5fj1GdFNLbru8pCOqNmLaK",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273f8cb08215f05ab786e2e22be",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02f8cb08215f05ab786e2e22be",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851f8cb08215f05ab786e2e22be",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Dinner Is Not Over / There's Something Happening / Keyman / Cupid",
            release_date: "2020-02-07",
            release_date_precision: "day",
            total_tracks: 4,
            type: "album",
            uri: "spotify:album:5fj1GdFNLbru8pCOqNmLaK",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
              },
              href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
              id: "1yNIb413Bmfs2ZBVuPp9kC",
              name: "Jack Stauber's Micropop",
              type: "artist",
              uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
            },
          ],
          disc_number: 1,
          duration_ms: 280350,
          explicit: false,
          external_ids: {
            isrc: "QZFYZ2005194",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/3W2s12opBKPQrUkTyj98MI",
          },
          href: "https://api.spotify.com/v1/tracks/3W2s12opBKPQrUkTyj98MI",
          id: "3W2s12opBKPQrUkTyj98MI",
          is_local: false,
          is_playable: true,
          name: "Dinner Is Not Over",
          popularity: 59,
          preview_url:
            "https://p.scdn.co/mp3-preview/cabb5a7150b08555d42b61d873270f61fc0ec87f?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:3W2s12opBKPQrUkTyj98MI",
        },
        played_at: "2024-01-04T15:01:57.916Z",
        context: {
          type: "artist",
          href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
          external_urls: {
            spotify: "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
          },
          uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
        },
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
                },
                href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
                id: "1yNIb413Bmfs2ZBVuPp9kC",
                name: "Jack Stauber's Micropop",
                type: "artist",
                uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/1AaAZVHtUWpJuLpq96VUuQ",
            },
            href: "https://api.spotify.com/v1/albums/1AaAZVHtUWpJuLpq96VUuQ",
            id: "1AaAZVHtUWpJuLpq96VUuQ",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273a5566f88ef20c171cee29578",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02a5566f88ef20c171cee29578",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851a5566f88ef20c171cee29578",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Baby Hotline / Tea Errors",
            release_date: "2019-03-21",
            release_date_precision: "day",
            total_tracks: 2,
            type: "album",
            uri: "spotify:album:1AaAZVHtUWpJuLpq96VUuQ",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
              },
              href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
              id: "1yNIb413Bmfs2ZBVuPp9kC",
              name: "Jack Stauber's Micropop",
              type: "artist",
              uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
            },
          ],
          disc_number: 1,
          duration_ms: 230019,
          explicit: false,
          external_ids: {
            isrc: "QZES51978189",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/4DdKpYcyTqDpVOiJuT894E",
          },
          href: "https://api.spotify.com/v1/tracks/4DdKpYcyTqDpVOiJuT894E",
          id: "4DdKpYcyTqDpVOiJuT894E",
          is_local: false,
          is_playable: true,
          name: "Tea Errors",
          popularity: 59,
          preview_url:
            "https://p.scdn.co/mp3-preview/2d58ad487cd5a91219f3682c377400218e82d4b1?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 2,
          type: "track",
          uri: "spotify:track:4DdKpYcyTqDpVOiJuT894E",
        },
        played_at: "2024-01-04T14:57:17.277Z",
        context: {
          type: "artist",
          href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
          external_urls: {
            spotify: "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
          },
          uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
        },
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
                },
                href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
                id: "1yNIb413Bmfs2ZBVuPp9kC",
                name: "Jack Stauber's Micropop",
                type: "artist",
                uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/5fj1GdFNLbru8pCOqNmLaK",
            },
            href: "https://api.spotify.com/v1/albums/5fj1GdFNLbru8pCOqNmLaK",
            id: "5fj1GdFNLbru8pCOqNmLaK",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273f8cb08215f05ab786e2e22be",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02f8cb08215f05ab786e2e22be",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851f8cb08215f05ab786e2e22be",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Dinner Is Not Over / There's Something Happening / Keyman / Cupid",
            release_date: "2020-02-07",
            release_date_precision: "day",
            total_tracks: 4,
            type: "album",
            uri: "spotify:album:5fj1GdFNLbru8pCOqNmLaK",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
              },
              href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
              id: "1yNIb413Bmfs2ZBVuPp9kC",
              name: "Jack Stauber's Micropop",
              type: "artist",
              uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
            },
          ],
          disc_number: 1,
          duration_ms: 185503,
          explicit: false,
          external_ids: {
            isrc: "QZFYZ2005195",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/5Q7X2ddA5TjbfYe5FM3WZQ",
          },
          href: "https://api.spotify.com/v1/tracks/5Q7X2ddA5TjbfYe5FM3WZQ",
          id: "5Q7X2ddA5TjbfYe5FM3WZQ",
          is_local: false,
          is_playable: true,
          name: "There's Something Happening",
          popularity: 61,
          preview_url:
            "https://p.scdn.co/mp3-preview/f5c95b4f6d736a68c92f19265b8a710e5d5ee119?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 2,
          type: "track",
          uri: "spotify:track:5Q7X2ddA5TjbfYe5FM3WZQ",
        },
        played_at: "2024-01-04T14:53:26.904Z",
        context: {
          type: "artist",
          href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
          external_urls: {
            spotify: "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
          },
          uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
        },
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
                },
                href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
                id: "1yNIb413Bmfs2ZBVuPp9kC",
                name: "Jack Stauber's Micropop",
                type: "artist",
                uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/45WofTIygcH2QIJq07lMy1",
            },
            href: "https://api.spotify.com/v1/albums/45WofTIygcH2QIJq07lMy1",
            id: "45WofTIygcH2QIJq07lMy1",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273ed163334ca27ba8a7c1c1df1",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02ed163334ca27ba8a7c1c1df1",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851ed163334ca27ba8a7c1c1df1",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Cheeseburger Family / Fighter",
            release_date: "2018-08-06",
            release_date_precision: "day",
            total_tracks: 2,
            type: "album",
            uri: "spotify:album:45WofTIygcH2QIJq07lMy1",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
              },
              href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
              id: "1yNIb413Bmfs2ZBVuPp9kC",
              name: "Jack Stauber's Micropop",
              type: "artist",
              uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
            },
          ],
          disc_number: 1,
          duration_ms: 244811,
          explicit: false,
          external_ids: {
            isrc: "QZDA71841892",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/7oMVBM1xAwavu697KyBQUY",
          },
          href: "https://api.spotify.com/v1/tracks/7oMVBM1xAwavu697KyBQUY",
          id: "7oMVBM1xAwavu697KyBQUY",
          is_local: false,
          is_playable: true,
          name: "Fighter",
          popularity: 61,
          preview_url:
            "https://p.scdn.co/mp3-preview/1bc877d8966f6ad5663a83219009207f578438a6?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 2,
          type: "track",
          uri: "spotify:track:7oMVBM1xAwavu697KyBQUY",
        },
        played_at: "2024-01-04T14:50:21.031Z",
        context: {
          type: "artist",
          href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
          external_urls: {
            spotify: "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
          },
          uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
        },
      },
      {
        track: {
          album: {
            album_type: "album",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
                },
                href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
                id: "1yNIb413Bmfs2ZBVuPp9kC",
                name: "Jack Stauber's Micropop",
                type: "artist",
                uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/1yY9R0IjLXGhf3aPb6Y63k",
            },
            href: "https://api.spotify.com/v1/albums/1yY9R0IjLXGhf3aPb6Y63k",
            id: "1yY9R0IjLXGhf3aPb6Y63k",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b27381315fc54ae8c2da80dd722f",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e0281315fc54ae8c2da80dd722f",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d0000485181315fc54ae8c2da80dd722f",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Micropop",
            release_date: "2019-05-30",
            release_date_precision: "day",
            total_tracks: 99,
            type: "album",
            uri: "spotify:album:1yY9R0IjLXGhf3aPb6Y63k",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
              },
              href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
              id: "1yNIb413Bmfs2ZBVuPp9kC",
              name: "Jack Stauber's Micropop",
              type: "artist",
              uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
            },
          ],
          disc_number: 1,
          duration_ms: 39591,
          explicit: false,
          external_ids: {
            isrc: "QMEZE1935906",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/57YgVR1hxgSVPMhI3ckK92",
          },
          href: "https://api.spotify.com/v1/tracks/57YgVR1hxgSVPMhI3ckK92",
          id: "57YgVR1hxgSVPMhI3ckK92",
          is_local: false,
          is_playable: true,
          name: "Choice",
          popularity: 64,
          preview_url:
            "https://p.scdn.co/mp3-preview/a1aaec9b0192eae9b4ce7b8a12f994727843e7df?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 9,
          type: "track",
          uri: "spotify:track:57YgVR1hxgSVPMhI3ckK92",
        },
        played_at: "2024-01-04T14:46:15.858Z",
        context: {
          type: "artist",
          href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
          external_urls: {
            spotify: "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
          },
          uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
        },
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
                },
                href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
                id: "1yNIb413Bmfs2ZBVuPp9kC",
                name: "Jack Stauber's Micropop",
                type: "artist",
                uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/4MRCHFNTaIipvwa7KGpaWF",
            },
            href: "https://api.spotify.com/v1/albums/4MRCHFNTaIipvwa7KGpaWF",
            id: "4MRCHFNTaIipvwa7KGpaWF",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273ca8ca1a02032c0943de6e136",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02ca8ca1a02032c0943de6e136",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851ca8ca1a02032c0943de6e136",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Inchman / Two Time",
            release_date: "2018-06-04",
            release_date_precision: "day",
            total_tracks: 2,
            type: "album",
            uri: "spotify:album:4MRCHFNTaIipvwa7KGpaWF",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
              },
              href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
              id: "1yNIb413Bmfs2ZBVuPp9kC",
              name: "Jack Stauber's Micropop",
              type: "artist",
              uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
            },
          ],
          disc_number: 1,
          duration_ms: 139850,
          explicit: false,
          external_ids: {
            isrc: "QZB4J1892556",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/7JTGwb6ug0z15F5roNLE0s",
          },
          href: "https://api.spotify.com/v1/tracks/7JTGwb6ug0z15F5roNLE0s",
          id: "7JTGwb6ug0z15F5roNLE0s",
          is_local: false,
          is_playable: true,
          name: "Two Time",
          popularity: 66,
          preview_url:
            "https://p.scdn.co/mp3-preview/58a376ed48a60b20e83d556134a2e3a8f2da5b29?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 2,
          type: "track",
          uri: "spotify:track:7JTGwb6ug0z15F5roNLE0s",
        },
        played_at: "2024-01-04T14:45:35.993Z",
        context: {
          type: "artist",
          href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
          external_urls: {
            spotify: "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
          },
          uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
        },
      },
      {
        track: {
          album: {
            album_type: "album",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
                },
                href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
                id: "1yNIb413Bmfs2ZBVuPp9kC",
                name: "Jack Stauber's Micropop",
                type: "artist",
                uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/1yY9R0IjLXGhf3aPb6Y63k",
            },
            href: "https://api.spotify.com/v1/albums/1yY9R0IjLXGhf3aPb6Y63k",
            id: "1yY9R0IjLXGhf3aPb6Y63k",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b27381315fc54ae8c2da80dd722f",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e0281315fc54ae8c2da80dd722f",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d0000485181315fc54ae8c2da80dd722f",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Micropop",
            release_date: "2019-05-30",
            release_date_precision: "day",
            total_tracks: 99,
            type: "album",
            uri: "spotify:album:1yY9R0IjLXGhf3aPb6Y63k",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
              },
              href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
              id: "1yNIb413Bmfs2ZBVuPp9kC",
              name: "Jack Stauber's Micropop",
              type: "artist",
              uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
            },
          ],
          disc_number: 1,
          duration_ms: 79942,
          explicit: false,
          external_ids: {
            isrc: "QMEZE1935909",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/2dNKGg5Nn1JNVH1GRd41bp",
          },
          href: "https://api.spotify.com/v1/tracks/2dNKGg5Nn1JNVH1GRd41bp",
          id: "2dNKGg5Nn1JNVH1GRd41bp",
          is_local: false,
          is_playable: true,
          name: "Just Take My Wallet",
          popularity: 70,
          preview_url:
            "https://p.scdn.co/mp3-preview/179bb299fe12f59c97cce967c2c538e77759a161?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 12,
          type: "track",
          uri: "spotify:track:2dNKGg5Nn1JNVH1GRd41bp",
        },
        played_at: "2024-01-04T13:30:50.985Z",
        context: {
          type: "artist",
          href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
          external_urls: {
            spotify: "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
          },
          uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
        },
      },
      {
        track: {
          album: {
            album_type: "album",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
                },
                href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
                id: "1yNIb413Bmfs2ZBVuPp9kC",
                name: "Jack Stauber's Micropop",
                type: "artist",
                uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/1PzQlma9FcRRGwMDmJIUyX",
            },
            href: "https://api.spotify.com/v1/albums/1PzQlma9FcRRGwMDmJIUyX",
            id: "1PzQlma9FcRRGwMDmJIUyX",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b27348cc1333d5c15fbf25f7c49d",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e0248cc1333d5c15fbf25f7c49d",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d0000485148cc1333d5c15fbf25f7c49d",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Shop: A Pop Opera",
            release_date: "2020-03-08",
            release_date_precision: "day",
            total_tracks: 8,
            type: "album",
            uri: "spotify:album:1PzQlma9FcRRGwMDmJIUyX",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
              },
              href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
              id: "1yNIb413Bmfs2ZBVuPp9kC",
              name: "Jack Stauber's Micropop",
              type: "artist",
              uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
            },
          ],
          disc_number: 1,
          duration_ms: 58868,
          explicit: false,
          external_ids: {
            isrc: "QMEZE2021309",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/2zmo93xTzKTP0lztR9iy9H",
          },
          href: "https://api.spotify.com/v1/tracks/2zmo93xTzKTP0lztR9iy9H",
          id: "2zmo93xTzKTP0lztR9iy9H",
          is_local: false,
          is_playable: true,
          name: "Coffee",
          popularity: 71,
          preview_url:
            "https://p.scdn.co/mp3-preview/67583afcce5102a96741bb6a8ee5b5644e150097?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 6,
          type: "track",
          uri: "spotify:track:2zmo93xTzKTP0lztR9iy9H",
        },
        played_at: "2024-01-04T13:29:30.625Z",
        context: {
          type: "artist",
          href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
          external_urls: {
            spotify: "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
          },
          uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
        },
      },
    ],
    next: "https://api.spotify.com/v1/me/player/recently-played?after=1704406735040&limit=50",
    cursors: {
      after: "1704406735040",
      before: "1704374970625",
    },
    limit: 50,
    href: "https://api.spotify.com/v1/me/player/recently-played?after=1704352760047&limit=50",
  },
  {
    items: [
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/69K447yK7IW0NCZGEh79e1",
                },
                href: "https://api.spotify.com/v1/artists/69K447yK7IW0NCZGEh79e1",
                id: "69K447yK7IW0NCZGEh79e1",
                name: "한동근",
                type: "artist",
                uri: "spotify:artist:69K447yK7IW0NCZGEh79e1",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/4thvEEDY1tQFGeIcTbgwMy",
            },
            href: "https://api.spotify.com/v1/albums/4thvEEDY1tQFGeIcTbgwMy",
            id: "4thvEEDY1tQFGeIcTbgwMy",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b2736c50cbc00d297cf578c34423",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e026c50cbc00d297cf578c34423",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d000048516c50cbc00d297cf578c34423",
                width: 64,
              },
            ],
            is_playable: true,
            name: "The 3rd Digital Single '그대라는 사치'",
            release_date: "2016-08-24",
            release_date_precision: "day",
            total_tracks: 1,
            type: "album",
            uri: "spotify:album:4thvEEDY1tQFGeIcTbgwMy",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/69K447yK7IW0NCZGEh79e1",
              },
              href: "https://api.spotify.com/v1/artists/69K447yK7IW0NCZGEh79e1",
              id: "69K447yK7IW0NCZGEh79e1",
              name: "한동근",
              type: "artist",
              uri: "spotify:artist:69K447yK7IW0NCZGEh79e1",
            },
          ],
          disc_number: 1,
          duration_ms: 296832,
          explicit: false,
          external_ids: {
            isrc: "KRA381601597",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/37dkyQQNJLaqk09kkNr7In",
          },
          href: "https://api.spotify.com/v1/tracks/37dkyQQNJLaqk09kkNr7In",
          id: "37dkyQQNJLaqk09kkNr7In",
          is_local: false,
          is_playable: true,
          name: "그대라는 사치",
          popularity: 43,
          preview_url:
            "https://p.scdn.co/mp3-preview/390f6eefb2aa92055562643fc455aa6745fc6d42?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:37dkyQQNJLaqk09kkNr7In",
        },
        played_at: "2024-01-04T22:18:55.040Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "album",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1rpgxJZxZMLnFNc1Jmyov5",
                },
                href: "https://api.spotify.com/v1/artists/1rpgxJZxZMLnFNc1Jmyov5",
                id: "1rpgxJZxZMLnFNc1Jmyov5",
                name: "YB",
                type: "artist",
                uri: "spotify:artist:1rpgxJZxZMLnFNc1Jmyov5",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/4S5PRo1gVG9BvRnCcdYzdS",
            },
            href: "https://api.spotify.com/v1/albums/4S5PRo1gVG9BvRnCcdYzdS",
            id: "4S5PRo1gVG9BvRnCcdYzdS",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273be123bb6b40736bf093870bd",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02be123bb6b40736bf093870bd",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851be123bb6b40736bf093870bd",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Why Be?",
            release_date: "2010-01-01",
            release_date_precision: "day",
            total_tracks: 23,
            type: "album",
            uri: "spotify:album:4S5PRo1gVG9BvRnCcdYzdS",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1rpgxJZxZMLnFNc1Jmyov5",
              },
              href: "https://api.spotify.com/v1/artists/1rpgxJZxZMLnFNc1Jmyov5",
              id: "1rpgxJZxZMLnFNc1Jmyov5",
              name: "YB",
              type: "artist",
              uri: "spotify:artist:1rpgxJZxZMLnFNc1Jmyov5",
            },
          ],
          disc_number: 1,
          duration_ms: 214906,
          explicit: false,
          external_ids: {
            isrc: "KRA661000070",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/3I71PFicYG614VGl6hqcUK",
          },
          href: "https://api.spotify.com/v1/tracks/3I71PFicYG614VGl6hqcUK",
          id: "3I71PFicYG614VGl6hqcUK",
          is_local: false,
          is_playable: true,
          name: "A Flying Butterfly",
          popularity: 41,
          preview_url:
            "https://p.scdn.co/mp3-preview/a7287c9baf7383e74fb4a1c59bdb231570538873?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 2,
          type: "track",
          uri: "spotify:track:3I71PFicYG614VGl6hqcUK",
        },
        played_at: "2024-01-04T16:09:06.387Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7IrDIIq3j04exsiF3Z7CPg",
                },
                href: "https://api.spotify.com/v1/artists/7IrDIIq3j04exsiF3Z7CPg",
                id: "7IrDIIq3j04exsiF3Z7CPg",
                name: "빈지노",
                type: "artist",
                uri: "spotify:artist:7IrDIIq3j04exsiF3Z7CPg",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/6GzOG46xmgSfB0PQdsnMDU",
            },
            href: "https://api.spotify.com/v1/albums/6GzOG46xmgSfB0PQdsnMDU",
            id: "6GzOG46xmgSfB0PQdsnMDU",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273fce4d97a91b1d51a64ec8a97",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02fce4d97a91b1d51a64ec8a97",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851fce4d97a91b1d51a64ec8a97",
                width: 64,
              },
            ],
            is_playable: true,
            name: "24:26 (5th Anniversary Remaster Edition)",
            release_date: "2017-07-10",
            release_date_precision: "day",
            total_tracks: 9,
            type: "album",
            uri: "spotify:album:6GzOG46xmgSfB0PQdsnMDU",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/7IrDIIq3j04exsiF3Z7CPg",
              },
              href: "https://api.spotify.com/v1/artists/7IrDIIq3j04exsiF3Z7CPg",
              id: "7IrDIIq3j04exsiF3Z7CPg",
              name: "빈지노",
              type: "artist",
              uri: "spotify:artist:7IrDIIq3j04exsiF3Z7CPg",
            },
          ],
          disc_number: 1,
          duration_ms: 211251,
          explicit: false,
          external_ids: {
            isrc: "KRC531700031",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/2y6Ur97SRouk64dvHMMsbu",
          },
          href: "https://api.spotify.com/v1/tracks/2y6Ur97SRouk64dvHMMsbu",
          id: "2y6Ur97SRouk64dvHMMsbu",
          is_local: false,
          is_playable: true,
          name: "Boogie On & On",
          popularity: 42,
          preview_url:
            "https://p.scdn.co/mp3-preview/acf9da21c08daf140d5501cd6b42f8f4723dcab1?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 3,
          type: "track",
          uri: "spotify:track:2y6Ur97SRouk64dvHMMsbu",
        },
        played_at: "2024-01-04T16:05:31.156Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "album",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/4QDcs3XrA8uHUZ7Xt9Ytep",
                },
                href: "https://api.spotify.com/v1/artists/4QDcs3XrA8uHUZ7Xt9Ytep",
                id: "4QDcs3XrA8uHUZ7Xt9Ytep",
                name: "프라이머리",
                type: "artist",
                uri: "spotify:artist:4QDcs3XrA8uHUZ7Xt9Ytep",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/20MnU7TMGi4OEPkPZjZxYA",
            },
            href: "https://api.spotify.com/v1/albums/20MnU7TMGi4OEPkPZjZxYA",
            id: "20MnU7TMGi4OEPkPZjZxYA",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b27330b6adc29d752c16f25ff834",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e0230b6adc29d752c16f25ff834",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d0000485130b6adc29d752c16f25ff834",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Primary And The Messengers LP",
            release_date: "2012-10-31",
            release_date_precision: "day",
            total_tracks: 19,
            type: "album",
            uri: "spotify:album:20MnU7TMGi4OEPkPZjZxYA",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/4QDcs3XrA8uHUZ7Xt9Ytep",
              },
              href: "https://api.spotify.com/v1/artists/4QDcs3XrA8uHUZ7Xt9Ytep",
              id: "4QDcs3XrA8uHUZ7Xt9Ytep",
              name: "프라이머리",
              type: "artist",
              uri: "spotify:artist:4QDcs3XrA8uHUZ7Xt9Ytep",
            },
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/3vvgBPro7lDMdReL1Ct2Hx",
              },
              href: "https://api.spotify.com/v1/artists/3vvgBPro7lDMdReL1Ct2Hx",
              id: "3vvgBPro7lDMdReL1Ct2Hx",
              name: "최자",
              type: "artist",
              uri: "spotify:artist:3vvgBPro7lDMdReL1Ct2Hx",
            },
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/5HenzRvMtSrgtvU16XAoby",
              },
              href: "https://api.spotify.com/v1/artists/5HenzRvMtSrgtvU16XAoby",
              id: "5HenzRvMtSrgtvU16XAoby",
              name: "Zion.T",
              type: "artist",
              uri: "spotify:artist:5HenzRvMtSrgtvU16XAoby",
            },
          ],
          disc_number: 2,
          duration_ms: 194115,
          explicit: false,
          external_ids: {
            isrc: "KRB141200071",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/3y1Aq9UzyzhMGuVaS8i2oA",
          },
          href: "https://api.spotify.com/v1/tracks/3y1Aq9UzyzhMGuVaS8i2oA",
          id: "3y1Aq9UzyzhMGuVaS8i2oA",
          is_local: false,
          is_playable: true,
          name: "question mark (Feat. CHOIZA Of Dynamicduo, Zion.T)",
          popularity: 42,
          preview_url:
            "https://p.scdn.co/mp3-preview/bf0f5a702e1e4b57b7e61fb26351d44784e04215?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 2,
          type: "track",
          uri: "spotify:track:3y1Aq9UzyzhMGuVaS8i2oA",
        },
        played_at: "2024-01-04T16:01:59.563Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/5crpfIGj4lAUNuHYUY2TN9",
                },
                href: "https://api.spotify.com/v1/artists/5crpfIGj4lAUNuHYUY2TN9",
                id: "5crpfIGj4lAUNuHYUY2TN9",
                name: "경서예지",
                type: "artist",
                uri: "spotify:artist:5crpfIGj4lAUNuHYUY2TN9",
              },
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3WFFsW6pFOm0e2yVQLTYCX",
                },
                href: "https://api.spotify.com/v1/artists/3WFFsW6pFOm0e2yVQLTYCX",
                id: "3WFFsW6pFOm0e2yVQLTYCX",
                name: "Jeon Gunho",
                type: "artist",
                uri: "spotify:artist:3WFFsW6pFOm0e2yVQLTYCX",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/1QD2UJupusQ9zBsldpvS3d",
            },
            href: "https://api.spotify.com/v1/albums/1QD2UJupusQ9zBsldpvS3d",
            id: "1QD2UJupusQ9zBsldpvS3d",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273d22351424b334dd54c1c39cf",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02d22351424b334dd54c1c39cf",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851d22351424b334dd54c1c39cf",
                width: 64,
              },
            ],
            is_playable: true,
            name: "다정히 내 이름을 부르면 (경서예지 x 전건호)",
            release_date: "2021-05-19",
            release_date_precision: "day",
            total_tracks: 2,
            type: "album",
            uri: "spotify:album:1QD2UJupusQ9zBsldpvS3d",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/5crpfIGj4lAUNuHYUY2TN9",
              },
              href: "https://api.spotify.com/v1/artists/5crpfIGj4lAUNuHYUY2TN9",
              id: "5crpfIGj4lAUNuHYUY2TN9",
              name: "경서예지",
              type: "artist",
              uri: "spotify:artist:5crpfIGj4lAUNuHYUY2TN9",
            },
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/3WFFsW6pFOm0e2yVQLTYCX",
              },
              href: "https://api.spotify.com/v1/artists/3WFFsW6pFOm0e2yVQLTYCX",
              id: "3WFFsW6pFOm0e2yVQLTYCX",
              name: "Jeon Gunho",
              type: "artist",
              uri: "spotify:artist:3WFFsW6pFOm0e2yVQLTYCX",
            },
          ],
          disc_number: 1,
          duration_ms: 231338,
          explicit: false,
          external_ids: {
            isrc: "KRA382103901",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/0tgxvf4rqBBeEB54h0nnRD",
          },
          href: "https://api.spotify.com/v1/tracks/0tgxvf4rqBBeEB54h0nnRD",
          id: "0tgxvf4rqBBeEB54h0nnRD",
          is_local: false,
          is_playable: true,
          name: "다정히 내 이름을 부르면",
          popularity: 48,
          preview_url:
            "https://p.scdn.co/mp3-preview/74d3be17c8acce141c8687a5fa6717dac4f71bb1?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:0tgxvf4rqBBeEB54h0nnRD",
        },
        played_at: "2024-01-04T15:56:50.081Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6Ycj4hhpz2nOfsYCU1gHqR",
                },
                href: "https://api.spotify.com/v1/artists/6Ycj4hhpz2nOfsYCU1gHqR",
                id: "6Ycj4hhpz2nOfsYCU1gHqR",
                name: "D-Hack",
                type: "artist",
                uri: "spotify:artist:6Ycj4hhpz2nOfsYCU1gHqR",
              },
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/0J372uvAXbRjLFSoAVE2lp",
                },
                href: "https://api.spotify.com/v1/artists/0J372uvAXbRjLFSoAVE2lp",
                id: "0J372uvAXbRjLFSoAVE2lp",
                name: "PATEKO",
                type: "artist",
                uri: "spotify:artist:0J372uvAXbRjLFSoAVE2lp",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/0J1MR2hon6midgXF4kY1b8",
            },
            href: "https://api.spotify.com/v1/albums/0J1MR2hon6midgXF4kY1b8",
            id: "0J1MR2hon6midgXF4kY1b8",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b2734f10712c9170e737a7c212ce",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e024f10712c9170e737a7c212ce",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d000048514f10712c9170e737a7c212ce",
                width: 64,
              },
            ],
            is_playable: true,
            name: "OHAYO MY NIGHT",
            release_date: "2020-06-20",
            release_date_precision: "day",
            total_tracks: 1,
            type: "album",
            uri: "spotify:album:0J1MR2hon6midgXF4kY1b8",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/6Ycj4hhpz2nOfsYCU1gHqR",
              },
              href: "https://api.spotify.com/v1/artists/6Ycj4hhpz2nOfsYCU1gHqR",
              id: "6Ycj4hhpz2nOfsYCU1gHqR",
              name: "D-Hack",
              type: "artist",
              uri: "spotify:artist:6Ycj4hhpz2nOfsYCU1gHqR",
            },
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/0J372uvAXbRjLFSoAVE2lp",
              },
              href: "https://api.spotify.com/v1/artists/0J372uvAXbRjLFSoAVE2lp",
              id: "0J372uvAXbRjLFSoAVE2lp",
              name: "PATEKO",
              type: "artist",
              uri: "spotify:artist:0J372uvAXbRjLFSoAVE2lp",
            },
          ],
          disc_number: 1,
          duration_ms: 238736,
          explicit: false,
          external_ids: {
            isrc: "QZEKE2013840",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/4iJprGt1rt5iy0sxXXaRWn",
          },
          href: "https://api.spotify.com/v1/tracks/4iJprGt1rt5iy0sxXXaRWn",
          id: "4iJprGt1rt5iy0sxXXaRWn",
          is_local: false,
          is_playable: true,
          name: "OHAYO MY NIGHT",
          popularity: 45,
          preview_url:
            "https://p.scdn.co/mp3-preview/cb3626f414737b679f7a4d7274cd5b7f468502b8?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:4iJprGt1rt5iy0sxXXaRWn",
        },
        played_at: "2024-01-04T15:52:58.272Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/4Kxlr1PRlDKEB0ekOCyHgX",
                },
                href: "https://api.spotify.com/v1/artists/4Kxlr1PRlDKEB0ekOCyHgX",
                id: "4Kxlr1PRlDKEB0ekOCyHgX",
                name: "BIGBANG",
                type: "artist",
                uri: "spotify:artist:4Kxlr1PRlDKEB0ekOCyHgX",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/6b08mw1Ggz7UyVYas1iRgj",
            },
            href: "https://api.spotify.com/v1/albums/6b08mw1Ggz7UyVYas1iRgj",
            id: "6b08mw1Ggz7UyVYas1iRgj",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b2733058758c444837fa2fbbe382",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e023058758c444837fa2fbbe382",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d000048513058758c444837fa2fbbe382",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Tonight",
            release_date: "2011-02-24",
            release_date_precision: "day",
            total_tracks: 6,
            type: "album",
            uri: "spotify:album:6b08mw1Ggz7UyVYas1iRgj",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/4Kxlr1PRlDKEB0ekOCyHgX",
              },
              href: "https://api.spotify.com/v1/artists/4Kxlr1PRlDKEB0ekOCyHgX",
              id: "4Kxlr1PRlDKEB0ekOCyHgX",
              name: "BIGBANG",
              type: "artist",
              uri: "spotify:artist:4Kxlr1PRlDKEB0ekOCyHgX",
            },
          ],
          disc_number: 1,
          duration_ms: 219946,
          explicit: false,
          external_ids: {
            isrc: "KRA491100049",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/4mm23jt7cimDkeHu1VcS2v",
          },
          href: "https://api.spotify.com/v1/tracks/4mm23jt7cimDkeHu1VcS2v",
          id: "4mm23jt7cimDkeHu1VcS2v",
          is_local: false,
          is_playable: true,
          name: "Cafe",
          popularity: 43,
          preview_url:
            "https://p.scdn.co/mp3-preview/fe5f0b88a4831486fb6f2aab1eb827e66837ae0f?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 6,
          type: "track",
          uri: "spotify:track:4mm23jt7cimDkeHu1VcS2v",
        },
        played_at: "2024-01-04T15:48:59.239Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6dHoQP2ONf0e9DMH94Obo7",
                },
                href: "https://api.spotify.com/v1/artists/6dHoQP2ONf0e9DMH94Obo7",
                id: "6dHoQP2ONf0e9DMH94Obo7",
                name: "Supreme Team",
                type: "artist",
                uri: "spotify:artist:6dHoQP2ONf0e9DMH94Obo7",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/2RCmDJa0aD81Ob8bVvtDzv",
            },
            href: "https://api.spotify.com/v1/albums/2RCmDJa0aD81Ob8bVvtDzv",
            id: "2RCmDJa0aD81Ob8bVvtDzv",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273a106bab4d185834448da9540",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02a106bab4d185834448da9540",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851a106bab4d185834448da9540",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Supreme Team Guide to Excellent Adventure",
            release_date: "2009-07-14",
            release_date_precision: "day",
            total_tracks: 8,
            type: "album",
            uri: "spotify:album:2RCmDJa0aD81Ob8bVvtDzv",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/6dHoQP2ONf0e9DMH94Obo7",
              },
              href: "https://api.spotify.com/v1/artists/6dHoQP2ONf0e9DMH94Obo7",
              id: "6dHoQP2ONf0e9DMH94Obo7",
              name: "Supreme Team",
              type: "artist",
              uri: "spotify:artist:6dHoQP2ONf0e9DMH94Obo7",
            },
          ],
          disc_number: 1,
          duration_ms: 219053,
          explicit: false,
          external_ids: {
            isrc: "USA2P1341338",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/5B9LYQM9EBdzvVmQO3aQog",
          },
          href: "https://api.spotify.com/v1/tracks/5B9LYQM9EBdzvVmQO3aQog",
          id: "5B9LYQM9EBdzvVmQO3aQog",
          is_local: false,
          is_playable: true,
          name: "Supermagic",
          popularity: 24,
          preview_url:
            "https://p.scdn.co/mp3-preview/fbeb5c65d1401754df9485fb17275759bcf4e8ab?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 2,
          type: "track",
          uri: "spotify:track:5B9LYQM9EBdzvVmQO3aQog",
        },
        played_at: "2024-01-04T15:41:11.053Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7IrDIIq3j04exsiF3Z7CPg",
                },
                href: "https://api.spotify.com/v1/artists/7IrDIIq3j04exsiF3Z7CPg",
                id: "7IrDIIq3j04exsiF3Z7CPg",
                name: "빈지노",
                type: "artist",
                uri: "spotify:artist:7IrDIIq3j04exsiF3Z7CPg",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/6GzOG46xmgSfB0PQdsnMDU",
            },
            href: "https://api.spotify.com/v1/albums/6GzOG46xmgSfB0PQdsnMDU",
            id: "6GzOG46xmgSfB0PQdsnMDU",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273fce4d97a91b1d51a64ec8a97",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02fce4d97a91b1d51a64ec8a97",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851fce4d97a91b1d51a64ec8a97",
                width: 64,
              },
            ],
            is_playable: true,
            name: "24:26 (5th Anniversary Remaster Edition)",
            release_date: "2017-07-10",
            release_date_precision: "day",
            total_tracks: 9,
            type: "album",
            uri: "spotify:album:6GzOG46xmgSfB0PQdsnMDU",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/7IrDIIq3j04exsiF3Z7CPg",
              },
              href: "https://api.spotify.com/v1/artists/7IrDIIq3j04exsiF3Z7CPg",
              id: "7IrDIIq3j04exsiF3Z7CPg",
              name: "빈지노",
              type: "artist",
              uri: "spotify:artist:7IrDIIq3j04exsiF3Z7CPg",
            },
          ],
          disc_number: 1,
          duration_ms: 226612,
          explicit: false,
          external_ids: {
            isrc: "KRC531700032",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/5tEouf2s1SPwAIkOHnvWtQ",
          },
          href: "https://api.spotify.com/v1/tracks/5tEouf2s1SPwAIkOHnvWtQ",
          id: "5tEouf2s1SPwAIkOHnvWtQ",
          is_local: false,
          is_playable: true,
          name: "Aqua Man",
          popularity: 46,
          preview_url:
            "https://p.scdn.co/mp3-preview/9877b33e7eab1c7c23f3c5814d829f53eb5407ca?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 4,
          type: "track",
          uri: "spotify:track:5tEouf2s1SPwAIkOHnvWtQ",
        },
        played_at: "2024-01-04T15:36:35.138Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2dd5mrQZvg6SmahdgVKDzh",
                },
                href: "https://api.spotify.com/v1/artists/2dd5mrQZvg6SmahdgVKDzh",
                id: "2dd5mrQZvg6SmahdgVKDzh",
                name: "싸이",
                type: "artist",
                uri: "spotify:artist:2dd5mrQZvg6SmahdgVKDzh",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/0Nq7k5hqml23K1VlrEnLNR",
            },
            href: "https://api.spotify.com/v1/albums/0Nq7k5hqml23K1VlrEnLNR",
            id: "0Nq7k5hqml23K1VlrEnLNR",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b2738cacbdd7305b0651b4c0fec4",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e028cacbdd7305b0651b4c0fec4",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d000048518cacbdd7305b0651b4c0fec4",
                width: 64,
              },
            ],
            is_playable: true,
            name: "PSY SIX RULES, Pt. 1",
            release_date: "2012-07-15",
            release_date_precision: "day",
            total_tracks: 6,
            type: "album",
            uri: "spotify:album:0Nq7k5hqml23K1VlrEnLNR",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/2dd5mrQZvg6SmahdgVKDzh",
              },
              href: "https://api.spotify.com/v1/artists/2dd5mrQZvg6SmahdgVKDzh",
              id: "2dd5mrQZvg6SmahdgVKDzh",
              name: "싸이",
              type: "artist",
              uri: "spotify:artist:2dd5mrQZvg6SmahdgVKDzh",
            },
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/7MNyflLAWpaH0EPw1fdORD",
              },
              href: "https://api.spotify.com/v1/artists/7MNyflLAWpaH0EPw1fdORD",
              id: "7MNyflLAWpaH0EPw1fdORD",
              name: "박정현",
              type: "artist",
              uri: "spotify:artist:7MNyflLAWpaH0EPw1fdORD",
            },
          ],
          disc_number: 1,
          duration_ms: 243963,
          explicit: false,
          external_ids: {
            isrc: "KRA341205654",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/5Kbpcd3hOqu4ZRAJNAjIcg",
          },
          href: "https://api.spotify.com/v1/tracks/5Kbpcd3hOqu4ZRAJNAjIcg",
          id: "5Kbpcd3hOqu4ZRAJNAjIcg",
          is_local: false,
          is_playable: true,
          name: "What Would Have Been? (Feat. Lena Park)",
          popularity: 46,
          preview_url:
            "https://p.scdn.co/mp3-preview/ed34a7413955b6cf0594d60878f1e3542c01fbd8?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 5,
          type: "track",
          uri: "spotify:track:5Kbpcd3hOqu4ZRAJNAjIcg",
        },
        played_at: "2024-01-04T15:26:05.196Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6dHoQP2ONf0e9DMH94Obo7",
                },
                href: "https://api.spotify.com/v1/artists/6dHoQP2ONf0e9DMH94Obo7",
                id: "6dHoQP2ONf0e9DMH94Obo7",
                name: "Supreme Team",
                type: "artist",
                uri: "spotify:artist:6dHoQP2ONf0e9DMH94Obo7",
              },
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7n7p8oXuygFVSkrCO9FvAt",
                },
                href: "https://api.spotify.com/v1/artists/7n7p8oXuygFVSkrCO9FvAt",
                id: "7n7p8oXuygFVSkrCO9FvAt",
                name: "영준",
                type: "artist",
                uri: "spotify:artist:7n7p8oXuygFVSkrCO9FvAt",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/5MCWiknia0CVi71e67Fdzh",
            },
            href: "https://api.spotify.com/v1/albums/5MCWiknia0CVi71e67Fdzh",
            id: "5MCWiknia0CVi71e67Fdzh",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b27371caa4a66f508c09450d637d",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e0271caa4a66f508c09450d637d",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d0000485171caa4a66f508c09450d637d",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Ames Room",
            release_date: "2010-10-01",
            release_date_precision: "day",
            total_tracks: 5,
            type: "album",
            uri: "spotify:album:5MCWiknia0CVi71e67Fdzh",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/6dHoQP2ONf0e9DMH94Obo7",
              },
              href: "https://api.spotify.com/v1/artists/6dHoQP2ONf0e9DMH94Obo7",
              id: "6dHoQP2ONf0e9DMH94Obo7",
              name: "Supreme Team",
              type: "artist",
              uri: "spotify:artist:6dHoQP2ONf0e9DMH94Obo7",
            },
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/7n7p8oXuygFVSkrCO9FvAt",
              },
              href: "https://api.spotify.com/v1/artists/7n7p8oXuygFVSkrCO9FvAt",
              id: "7n7p8oXuygFVSkrCO9FvAt",
              name: "영준",
              type: "artist",
              uri: "spotify:artist:7n7p8oXuygFVSkrCO9FvAt",
            },
          ],
          disc_number: 1,
          duration_ms: 263079,
          explicit: false,
          external_ids: {
            isrc: "KRA381000915",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/5SQPTxNUunDOhBMOggDmX7",
          },
          href: "https://api.spotify.com/v1/tracks/5SQPTxNUunDOhBMOggDmX7",
          id: "5SQPTxNUunDOhBMOggDmX7",
          is_local: false,
          is_playable: true,
          name: "그땐 그땐 그땐",
          popularity: 41,
          preview_url:
            "https://p.scdn.co/mp3-preview/b03321308b6bdb15758b3eb2c24e62a58cc5387d?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:5SQPTxNUunDOhBMOggDmX7",
        },
        played_at: "2024-01-04T15:21:49.504Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "album",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
                },
                href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
                id: "1yNIb413Bmfs2ZBVuPp9kC",
                name: "Jack Stauber's Micropop",
                type: "artist",
                uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/1PzQlma9FcRRGwMDmJIUyX",
            },
            href: "https://api.spotify.com/v1/albums/1PzQlma9FcRRGwMDmJIUyX",
            id: "1PzQlma9FcRRGwMDmJIUyX",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b27348cc1333d5c15fbf25f7c49d",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e0248cc1333d5c15fbf25f7c49d",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d0000485148cc1333d5c15fbf25f7c49d",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Shop: A Pop Opera",
            release_date: "2020-03-08",
            release_date_precision: "day",
            total_tracks: 8,
            type: "album",
            uri: "spotify:album:1PzQlma9FcRRGwMDmJIUyX",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
              },
              href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
              id: "1yNIb413Bmfs2ZBVuPp9kC",
              name: "Jack Stauber's Micropop",
              type: "artist",
              uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
            },
          ],
          disc_number: 1,
          duration_ms: 56003,
          explicit: false,
          external_ids: {
            isrc: "QMEZE2021302",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/65vHYDVPMWlYMgLV2g1Gip",
          },
          href: "https://api.spotify.com/v1/tracks/65vHYDVPMWlYMgLV2g1Gip",
          id: "65vHYDVPMWlYMgLV2g1Gip",
          is_local: false,
          is_playable: true,
          name: "Paper Towels",
          popularity: 45,
          preview_url:
            "https://p.scdn.co/mp3-preview/1ed196ed409dc7b0dc5c53d5fdc8b273fec318d7?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 4,
          type: "track",
          uri: "spotify:track:65vHYDVPMWlYMgLV2g1Gip",
        },
        played_at: "2024-01-04T15:05:07.053Z",
        context: {
          type: "artist",
          href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
          external_urls: {
            spotify: "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
          },
          uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
        },
      },
      {
        track: {
          album: {
            album_type: "album",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
                },
                href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
                id: "1yNIb413Bmfs2ZBVuPp9kC",
                name: "Jack Stauber's Micropop",
                type: "artist",
                uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/1PzQlma9FcRRGwMDmJIUyX",
            },
            href: "https://api.spotify.com/v1/albums/1PzQlma9FcRRGwMDmJIUyX",
            id: "1PzQlma9FcRRGwMDmJIUyX",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b27348cc1333d5c15fbf25f7c49d",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e0248cc1333d5c15fbf25f7c49d",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d0000485148cc1333d5c15fbf25f7c49d",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Shop: A Pop Opera",
            release_date: "2020-03-08",
            release_date_precision: "day",
            total_tracks: 8,
            type: "album",
            uri: "spotify:album:1PzQlma9FcRRGwMDmJIUyX",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
              },
              href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
              id: "1yNIb413Bmfs2ZBVuPp9kC",
              name: "Jack Stauber's Micropop",
              type: "artist",
              uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
            },
          ],
          disc_number: 1,
          duration_ms: 55715,
          explicit: false,
          external_ids: {
            isrc: "QMEZE2021299",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/78VXkLNQNDNu1fp1SfNVRo",
          },
          href: "https://api.spotify.com/v1/tracks/78VXkLNQNDNu1fp1SfNVRo",
          id: "78VXkLNQNDNu1fp1SfNVRo",
          is_local: false,
          is_playable: true,
          name: "Bread",
          popularity: 47,
          preview_url:
            "https://p.scdn.co/mp3-preview/5fd314fe9c47147a577ef51748922ac668f1885c?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 3,
          type: "track",
          uri: "spotify:track:78VXkLNQNDNu1fp1SfNVRo",
        },
        played_at: "2024-01-04T15:04:10.840Z",
        context: {
          type: "artist",
          href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
          external_urls: {
            spotify: "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
          },
          uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
        },
      },
      {
        track: {
          album: {
            album_type: "album",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
                },
                href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
                id: "1yNIb413Bmfs2ZBVuPp9kC",
                name: "Jack Stauber's Micropop",
                type: "artist",
                uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/1PzQlma9FcRRGwMDmJIUyX",
            },
            href: "https://api.spotify.com/v1/albums/1PzQlma9FcRRGwMDmJIUyX",
            id: "1PzQlma9FcRRGwMDmJIUyX",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b27348cc1333d5c15fbf25f7c49d",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e0248cc1333d5c15fbf25f7c49d",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d0000485148cc1333d5c15fbf25f7c49d",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Shop: A Pop Opera",
            release_date: "2020-03-08",
            release_date_precision: "day",
            total_tracks: 8,
            type: "album",
            uri: "spotify:album:1PzQlma9FcRRGwMDmJIUyX",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
              },
              href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
              id: "1yNIb413Bmfs2ZBVuPp9kC",
              name: "Jack Stauber's Micropop",
              type: "artist",
              uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
            },
          ],
          disc_number: 1,
          duration_ms: 58261,
          explicit: false,
          external_ids: {
            isrc: "QMEZE2021298",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/1w4JPzTHAcMdAGzDLzXCjF",
          },
          href: "https://api.spotify.com/v1/tracks/1w4JPzTHAcMdAGzDLzXCjF",
          id: "1w4JPzTHAcMdAGzDLzXCjF",
          is_local: false,
          is_playable: true,
          name: "Milk",
          popularity: 57,
          preview_url:
            "https://p.scdn.co/mp3-preview/33b70dfa60b8788cae550713d8f01a94a32ee674?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 2,
          type: "track",
          uri: "spotify:track:1w4JPzTHAcMdAGzDLzXCjF",
        },
        played_at: "2024-01-04T15:03:14.720Z",
        context: {
          type: "artist",
          href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
          external_urls: {
            spotify: "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
          },
          uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
        },
      },
      {
        track: {
          album: {
            album_type: "album",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
                },
                href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
                id: "1yNIb413Bmfs2ZBVuPp9kC",
                name: "Jack Stauber's Micropop",
                type: "artist",
                uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/1PzQlma9FcRRGwMDmJIUyX",
            },
            href: "https://api.spotify.com/v1/albums/1PzQlma9FcRRGwMDmJIUyX",
            id: "1PzQlma9FcRRGwMDmJIUyX",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b27348cc1333d5c15fbf25f7c49d",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e0248cc1333d5c15fbf25f7c49d",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d0000485148cc1333d5c15fbf25f7c49d",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Shop: A Pop Opera",
            release_date: "2020-03-08",
            release_date_precision: "day",
            total_tracks: 8,
            type: "album",
            uri: "spotify:album:1PzQlma9FcRRGwMDmJIUyX",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
              },
              href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
              id: "1yNIb413Bmfs2ZBVuPp9kC",
              name: "Jack Stauber's Micropop",
              type: "artist",
              uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
            },
          ],
          disc_number: 1,
          duration_ms: 17951,
          explicit: false,
          external_ids: {
            isrc: "QMEZE2021297",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/1kftorJNhsWrtqjCJyte6j",
          },
          href: "https://api.spotify.com/v1/tracks/1kftorJNhsWrtqjCJyte6j",
          id: "1kftorJNhsWrtqjCJyte6j",
          is_local: false,
          is_playable: true,
          name: "Shop",
          popularity: 8,
          preview_url:
            "https://p.scdn.co/mp3-preview/748156dfb7b3e0e8ad8835f9f2daeab731d5a0c5?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:1kftorJNhsWrtqjCJyte6j",
        },
        played_at: "2024-01-04T15:02:16.182Z",
        context: {
          type: "artist",
          href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
          external_urls: {
            spotify: "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
          },
          uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
        },
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
                },
                href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
                id: "1yNIb413Bmfs2ZBVuPp9kC",
                name: "Jack Stauber's Micropop",
                type: "artist",
                uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/5fj1GdFNLbru8pCOqNmLaK",
            },
            href: "https://api.spotify.com/v1/albums/5fj1GdFNLbru8pCOqNmLaK",
            id: "5fj1GdFNLbru8pCOqNmLaK",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273f8cb08215f05ab786e2e22be",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02f8cb08215f05ab786e2e22be",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851f8cb08215f05ab786e2e22be",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Dinner Is Not Over / There's Something Happening / Keyman / Cupid",
            release_date: "2020-02-07",
            release_date_precision: "day",
            total_tracks: 4,
            type: "album",
            uri: "spotify:album:5fj1GdFNLbru8pCOqNmLaK",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
              },
              href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
              id: "1yNIb413Bmfs2ZBVuPp9kC",
              name: "Jack Stauber's Micropop",
              type: "artist",
              uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
            },
          ],
          disc_number: 1,
          duration_ms: 280350,
          explicit: false,
          external_ids: {
            isrc: "QZFYZ2005194",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/3W2s12opBKPQrUkTyj98MI",
          },
          href: "https://api.spotify.com/v1/tracks/3W2s12opBKPQrUkTyj98MI",
          id: "3W2s12opBKPQrUkTyj98MI",
          is_local: false,
          is_playable: true,
          name: "Dinner Is Not Over",
          popularity: 59,
          preview_url:
            "https://p.scdn.co/mp3-preview/cabb5a7150b08555d42b61d873270f61fc0ec87f?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:3W2s12opBKPQrUkTyj98MI",
        },
        played_at: "2024-01-04T15:01:57.916Z",
        context: {
          type: "artist",
          href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
          external_urls: {
            spotify: "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
          },
          uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
        },
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
                },
                href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
                id: "1yNIb413Bmfs2ZBVuPp9kC",
                name: "Jack Stauber's Micropop",
                type: "artist",
                uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/1AaAZVHtUWpJuLpq96VUuQ",
            },
            href: "https://api.spotify.com/v1/albums/1AaAZVHtUWpJuLpq96VUuQ",
            id: "1AaAZVHtUWpJuLpq96VUuQ",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273a5566f88ef20c171cee29578",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02a5566f88ef20c171cee29578",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851a5566f88ef20c171cee29578",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Baby Hotline / Tea Errors",
            release_date: "2019-03-21",
            release_date_precision: "day",
            total_tracks: 2,
            type: "album",
            uri: "spotify:album:1AaAZVHtUWpJuLpq96VUuQ",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
              },
              href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
              id: "1yNIb413Bmfs2ZBVuPp9kC",
              name: "Jack Stauber's Micropop",
              type: "artist",
              uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
            },
          ],
          disc_number: 1,
          duration_ms: 230019,
          explicit: false,
          external_ids: {
            isrc: "QZES51978189",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/4DdKpYcyTqDpVOiJuT894E",
          },
          href: "https://api.spotify.com/v1/tracks/4DdKpYcyTqDpVOiJuT894E",
          id: "4DdKpYcyTqDpVOiJuT894E",
          is_local: false,
          is_playable: true,
          name: "Tea Errors",
          popularity: 59,
          preview_url:
            "https://p.scdn.co/mp3-preview/2d58ad487cd5a91219f3682c377400218e82d4b1?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 2,
          type: "track",
          uri: "spotify:track:4DdKpYcyTqDpVOiJuT894E",
        },
        played_at: "2024-01-04T14:57:17.277Z",
        context: {
          type: "artist",
          href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
          external_urls: {
            spotify: "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
          },
          uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
        },
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
                },
                href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
                id: "1yNIb413Bmfs2ZBVuPp9kC",
                name: "Jack Stauber's Micropop",
                type: "artist",
                uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/5fj1GdFNLbru8pCOqNmLaK",
            },
            href: "https://api.spotify.com/v1/albums/5fj1GdFNLbru8pCOqNmLaK",
            id: "5fj1GdFNLbru8pCOqNmLaK",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273f8cb08215f05ab786e2e22be",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02f8cb08215f05ab786e2e22be",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851f8cb08215f05ab786e2e22be",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Dinner Is Not Over / There's Something Happening / Keyman / Cupid",
            release_date: "2020-02-07",
            release_date_precision: "day",
            total_tracks: 4,
            type: "album",
            uri: "spotify:album:5fj1GdFNLbru8pCOqNmLaK",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
              },
              href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
              id: "1yNIb413Bmfs2ZBVuPp9kC",
              name: "Jack Stauber's Micropop",
              type: "artist",
              uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
            },
          ],
          disc_number: 1,
          duration_ms: 185503,
          explicit: false,
          external_ids: {
            isrc: "QZFYZ2005195",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/5Q7X2ddA5TjbfYe5FM3WZQ",
          },
          href: "https://api.spotify.com/v1/tracks/5Q7X2ddA5TjbfYe5FM3WZQ",
          id: "5Q7X2ddA5TjbfYe5FM3WZQ",
          is_local: false,
          is_playable: true,
          name: "There's Something Happening",
          popularity: 61,
          preview_url:
            "https://p.scdn.co/mp3-preview/f5c95b4f6d736a68c92f19265b8a710e5d5ee119?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 2,
          type: "track",
          uri: "spotify:track:5Q7X2ddA5TjbfYe5FM3WZQ",
        },
        played_at: "2024-01-04T14:53:26.904Z",
        context: {
          type: "artist",
          href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
          external_urls: {
            spotify: "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
          },
          uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
        },
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
                },
                href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
                id: "1yNIb413Bmfs2ZBVuPp9kC",
                name: "Jack Stauber's Micropop",
                type: "artist",
                uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/45WofTIygcH2QIJq07lMy1",
            },
            href: "https://api.spotify.com/v1/albums/45WofTIygcH2QIJq07lMy1",
            id: "45WofTIygcH2QIJq07lMy1",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273ed163334ca27ba8a7c1c1df1",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02ed163334ca27ba8a7c1c1df1",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851ed163334ca27ba8a7c1c1df1",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Cheeseburger Family / Fighter",
            release_date: "2018-08-06",
            release_date_precision: "day",
            total_tracks: 2,
            type: "album",
            uri: "spotify:album:45WofTIygcH2QIJq07lMy1",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
              },
              href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
              id: "1yNIb413Bmfs2ZBVuPp9kC",
              name: "Jack Stauber's Micropop",
              type: "artist",
              uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
            },
          ],
          disc_number: 1,
          duration_ms: 244811,
          explicit: false,
          external_ids: {
            isrc: "QZDA71841892",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/7oMVBM1xAwavu697KyBQUY",
          },
          href: "https://api.spotify.com/v1/tracks/7oMVBM1xAwavu697KyBQUY",
          id: "7oMVBM1xAwavu697KyBQUY",
          is_local: false,
          is_playable: true,
          name: "Fighter",
          popularity: 61,
          preview_url:
            "https://p.scdn.co/mp3-preview/1bc877d8966f6ad5663a83219009207f578438a6?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 2,
          type: "track",
          uri: "spotify:track:7oMVBM1xAwavu697KyBQUY",
        },
        played_at: "2024-01-04T14:50:21.031Z",
        context: {
          type: "artist",
          href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
          external_urls: {
            spotify: "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
          },
          uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
        },
      },
      {
        track: {
          album: {
            album_type: "album",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
                },
                href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
                id: "1yNIb413Bmfs2ZBVuPp9kC",
                name: "Jack Stauber's Micropop",
                type: "artist",
                uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/1yY9R0IjLXGhf3aPb6Y63k",
            },
            href: "https://api.spotify.com/v1/albums/1yY9R0IjLXGhf3aPb6Y63k",
            id: "1yY9R0IjLXGhf3aPb6Y63k",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b27381315fc54ae8c2da80dd722f",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e0281315fc54ae8c2da80dd722f",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d0000485181315fc54ae8c2da80dd722f",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Micropop",
            release_date: "2019-05-30",
            release_date_precision: "day",
            total_tracks: 99,
            type: "album",
            uri: "spotify:album:1yY9R0IjLXGhf3aPb6Y63k",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
              },
              href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
              id: "1yNIb413Bmfs2ZBVuPp9kC",
              name: "Jack Stauber's Micropop",
              type: "artist",
              uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
            },
          ],
          disc_number: 1,
          duration_ms: 39591,
          explicit: false,
          external_ids: {
            isrc: "QMEZE1935906",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/57YgVR1hxgSVPMhI3ckK92",
          },
          href: "https://api.spotify.com/v1/tracks/57YgVR1hxgSVPMhI3ckK92",
          id: "57YgVR1hxgSVPMhI3ckK92",
          is_local: false,
          is_playable: true,
          name: "Choice",
          popularity: 64,
          preview_url:
            "https://p.scdn.co/mp3-preview/a1aaec9b0192eae9b4ce7b8a12f994727843e7df?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 9,
          type: "track",
          uri: "spotify:track:57YgVR1hxgSVPMhI3ckK92",
        },
        played_at: "2024-01-04T14:46:15.858Z",
        context: {
          type: "artist",
          href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
          external_urls: {
            spotify: "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
          },
          uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
        },
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
                },
                href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
                id: "1yNIb413Bmfs2ZBVuPp9kC",
                name: "Jack Stauber's Micropop",
                type: "artist",
                uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/4MRCHFNTaIipvwa7KGpaWF",
            },
            href: "https://api.spotify.com/v1/albums/4MRCHFNTaIipvwa7KGpaWF",
            id: "4MRCHFNTaIipvwa7KGpaWF",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273ca8ca1a02032c0943de6e136",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02ca8ca1a02032c0943de6e136",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851ca8ca1a02032c0943de6e136",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Inchman / Two Time",
            release_date: "2018-06-04",
            release_date_precision: "day",
            total_tracks: 2,
            type: "album",
            uri: "spotify:album:4MRCHFNTaIipvwa7KGpaWF",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
              },
              href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
              id: "1yNIb413Bmfs2ZBVuPp9kC",
              name: "Jack Stauber's Micropop",
              type: "artist",
              uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
            },
          ],
          disc_number: 1,
          duration_ms: 139850,
          explicit: false,
          external_ids: {
            isrc: "QZB4J1892556",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/7JTGwb6ug0z15F5roNLE0s",
          },
          href: "https://api.spotify.com/v1/tracks/7JTGwb6ug0z15F5roNLE0s",
          id: "7JTGwb6ug0z15F5roNLE0s",
          is_local: false,
          is_playable: true,
          name: "Two Time",
          popularity: 66,
          preview_url:
            "https://p.scdn.co/mp3-preview/58a376ed48a60b20e83d556134a2e3a8f2da5b29?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 2,
          type: "track",
          uri: "spotify:track:7JTGwb6ug0z15F5roNLE0s",
        },
        played_at: "2024-01-04T14:45:35.993Z",
        context: {
          type: "artist",
          href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
          external_urls: {
            spotify: "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
          },
          uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
        },
      },
      {
        track: {
          album: {
            album_type: "album",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
                },
                href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
                id: "1yNIb413Bmfs2ZBVuPp9kC",
                name: "Jack Stauber's Micropop",
                type: "artist",
                uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/1yY9R0IjLXGhf3aPb6Y63k",
            },
            href: "https://api.spotify.com/v1/albums/1yY9R0IjLXGhf3aPb6Y63k",
            id: "1yY9R0IjLXGhf3aPb6Y63k",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b27381315fc54ae8c2da80dd722f",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e0281315fc54ae8c2da80dd722f",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d0000485181315fc54ae8c2da80dd722f",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Micropop",
            release_date: "2019-05-30",
            release_date_precision: "day",
            total_tracks: 99,
            type: "album",
            uri: "spotify:album:1yY9R0IjLXGhf3aPb6Y63k",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
              },
              href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
              id: "1yNIb413Bmfs2ZBVuPp9kC",
              name: "Jack Stauber's Micropop",
              type: "artist",
              uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
            },
          ],
          disc_number: 1,
          duration_ms: 79942,
          explicit: false,
          external_ids: {
            isrc: "QMEZE1935909",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/2dNKGg5Nn1JNVH1GRd41bp",
          },
          href: "https://api.spotify.com/v1/tracks/2dNKGg5Nn1JNVH1GRd41bp",
          id: "2dNKGg5Nn1JNVH1GRd41bp",
          is_local: false,
          is_playable: true,
          name: "Just Take My Wallet",
          popularity: 70,
          preview_url:
            "https://p.scdn.co/mp3-preview/179bb299fe12f59c97cce967c2c538e77759a161?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 12,
          type: "track",
          uri: "spotify:track:2dNKGg5Nn1JNVH1GRd41bp",
        },
        played_at: "2024-01-04T13:30:50.985Z",
        context: {
          type: "artist",
          href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
          external_urls: {
            spotify: "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
          },
          uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
        },
      },
      {
        track: {
          album: {
            album_type: "album",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
                },
                href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
                id: "1yNIb413Bmfs2ZBVuPp9kC",
                name: "Jack Stauber's Micropop",
                type: "artist",
                uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/1PzQlma9FcRRGwMDmJIUyX",
            },
            href: "https://api.spotify.com/v1/albums/1PzQlma9FcRRGwMDmJIUyX",
            id: "1PzQlma9FcRRGwMDmJIUyX",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b27348cc1333d5c15fbf25f7c49d",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e0248cc1333d5c15fbf25f7c49d",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d0000485148cc1333d5c15fbf25f7c49d",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Shop: A Pop Opera",
            release_date: "2020-03-08",
            release_date_precision: "day",
            total_tracks: 8,
            type: "album",
            uri: "spotify:album:1PzQlma9FcRRGwMDmJIUyX",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
              },
              href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
              id: "1yNIb413Bmfs2ZBVuPp9kC",
              name: "Jack Stauber's Micropop",
              type: "artist",
              uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
            },
          ],
          disc_number: 1,
          duration_ms: 58868,
          explicit: false,
          external_ids: {
            isrc: "QMEZE2021309",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/2zmo93xTzKTP0lztR9iy9H",
          },
          href: "https://api.spotify.com/v1/tracks/2zmo93xTzKTP0lztR9iy9H",
          id: "2zmo93xTzKTP0lztR9iy9H",
          is_local: false,
          is_playable: true,
          name: "Coffee",
          popularity: 71,
          preview_url:
            "https://p.scdn.co/mp3-preview/67583afcce5102a96741bb6a8ee5b5644e150097?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 6,
          type: "track",
          uri: "spotify:track:2zmo93xTzKTP0lztR9iy9H",
        },
        played_at: "2024-01-04T13:29:30.625Z",
        context: {
          type: "artist",
          href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
          external_urls: {
            spotify: "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
          },
          uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
        },
      },
      {
        track: {
          album: {
            album_type: "album",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX",
                },
                href: "https://api.spotify.com/v1/artists/3Nrfpe0tUJi4K4DXYWgMUX",
                id: "3Nrfpe0tUJi4K4DXYWgMUX",
                name: "방탄소년단",
                type: "artist",
                uri: "spotify:artist:3Nrfpe0tUJi4K4DXYWgMUX",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/3sYlurbYenuPBS7EGTiTZh",
            },
            href: "https://api.spotify.com/v1/albums/3sYlurbYenuPBS7EGTiTZh",
            id: "3sYlurbYenuPBS7EGTiTZh",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273da4d50ff045b2a463f56035a",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02da4d50ff045b2a463f56035a",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851da4d50ff045b2a463f56035a",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Skool Luv Affair",
            release_date: "2014-02-12",
            release_date_precision: "day",
            total_tracks: 10,
            type: "album",
            uri: "spotify:album:3sYlurbYenuPBS7EGTiTZh",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX",
              },
              href: "https://api.spotify.com/v1/artists/3Nrfpe0tUJi4K4DXYWgMUX",
              id: "3Nrfpe0tUJi4K4DXYWgMUX",
              name: "방탄소년단",
              type: "artist",
              uri: "spotify:artist:3Nrfpe0tUJi4K4DXYWgMUX",
            },
          ],
          disc_number: 1,
          duration_ms: 239469,
          explicit: false,
          external_ids: {
            isrc: "KRA341404055",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/75SqzI9rTr3MLYaWROLIN8",
          },
          href: "https://api.spotify.com/v1/tracks/75SqzI9rTr3MLYaWROLIN8",
          id: "75SqzI9rTr3MLYaWROLIN8",
          is_local: false,
          is_playable: true,
          name: "하루만",
          popularity: 30,
          preview_url:
            "https://p.scdn.co/mp3-preview/b85cf0429d7c933b36ef5a755ef78582f6595cf2?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 5,
          type: "track",
          uri: "spotify:track:75SqzI9rTr3MLYaWROLIN8",
        },
        played_at: "2024-01-03T16:26:00.717Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "album",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7f4ignuCJhLXfZ9giKT7rH",
                },
                href: "https://api.spotify.com/v1/artists/7f4ignuCJhLXfZ9giKT7rH",
                id: "7f4ignuCJhLXfZ9giKT7rH",
                name: "NCT 127",
                type: "artist",
                uri: "spotify:artist:7f4ignuCJhLXfZ9giKT7rH",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/7sf7G0C6NuW8GjQbWwJlGk",
            },
            href: "https://api.spotify.com/v1/albums/7sf7G0C6NuW8GjQbWwJlGk",
            id: "7sf7G0C6NuW8GjQbWwJlGk",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273b490993919b0c4c0dab29b17",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02b490993919b0c4c0dab29b17",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851b490993919b0c4c0dab29b17",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Sticker - The 3rd Album",
            release_date: "2021-09-17",
            release_date_precision: "day",
            total_tracks: 11,
            type: "album",
            uri: "spotify:album:7sf7G0C6NuW8GjQbWwJlGk",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/7f4ignuCJhLXfZ9giKT7rH",
              },
              href: "https://api.spotify.com/v1/artists/7f4ignuCJhLXfZ9giKT7rH",
              id: "7f4ignuCJhLXfZ9giKT7rH",
              name: "NCT 127",
              type: "artist",
              uri: "spotify:artist:7f4ignuCJhLXfZ9giKT7rH",
            },
          ],
          disc_number: 1,
          duration_ms: 227773,
          explicit: false,
          external_ids: {
            isrc: "KRA302100278",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/4bEa9VAnyVJWBxOUyVvzie",
          },
          href: "https://api.spotify.com/v1/tracks/4bEa9VAnyVJWBxOUyVvzie",
          id: "4bEa9VAnyVJWBxOUyVvzie",
          is_local: false,
          is_playable: true,
          name: "Sticker",
          popularity: 54,
          preview_url:
            "https://p.scdn.co/mp3-preview/15dd68cefdf19dda11587316c385daa559653fea?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:4bEa9VAnyVJWBxOUyVvzie",
        },
        played_at: "2024-01-03T16:22:09.567Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2jOm3cYujQx6o1dxuiuqaX",
                },
                href: "https://api.spotify.com/v1/artists/2jOm3cYujQx6o1dxuiuqaX",
                id: "2jOm3cYujQx6o1dxuiuqaX",
                name: "RIIZE",
                type: "artist",
                uri: "spotify:artist:2jOm3cYujQx6o1dxuiuqaX",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/6mYpshqw0Y8pQTT6iRX8s1",
            },
            href: "https://api.spotify.com/v1/albums/6mYpshqw0Y8pQTT6iRX8s1",
            id: "6mYpshqw0Y8pQTT6iRX8s1",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273de06b9790ac6c49ff680cf70",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02de06b9790ac6c49ff680cf70",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851de06b9790ac6c49ff680cf70",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Memories",
            release_date: "2023-08-21",
            release_date_precision: "day",
            total_tracks: 1,
            type: "album",
            uri: "spotify:album:6mYpshqw0Y8pQTT6iRX8s1",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/2jOm3cYujQx6o1dxuiuqaX",
              },
              href: "https://api.spotify.com/v1/artists/2jOm3cYujQx6o1dxuiuqaX",
              id: "2jOm3cYujQx6o1dxuiuqaX",
              name: "RIIZE",
              type: "artist",
              uri: "spotify:artist:2jOm3cYujQx6o1dxuiuqaX",
            },
          ],
          disc_number: 1,
          duration_ms: 178013,
          explicit: false,
          external_ids: {},
          external_urls: {
            spotify: "https://open.spotify.com/track/7egcmrxRDee6C5M3AtXZ7L",
          },
          href: "https://api.spotify.com/v1/tracks/7egcmrxRDee6C5M3AtXZ7L",
          id: "7egcmrxRDee6C5M3AtXZ7L",
          is_local: false,
          is_playable: true,
          name: "Memories",
          popularity: 68,
          preview_url:
            "https://p.scdn.co/mp3-preview/10cbe5e34ed3a28805e51ce96e3093d14598f01e?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:7egcmrxRDee6C5M3AtXZ7L",
        },
        played_at: "2024-01-03T16:11:02.819Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1SIocsqdEefUTE6XKGUiVS",
                },
                href: "https://api.spotify.com/v1/artists/1SIocsqdEefUTE6XKGUiVS",
                id: "1SIocsqdEefUTE6XKGUiVS",
                name: "BABYMONSTER",
                type: "artist",
                uri: "spotify:artist:1SIocsqdEefUTE6XKGUiVS",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/2CSQuvvt3XHLDX36O3nRv7",
            },
            href: "https://api.spotify.com/v1/albums/2CSQuvvt3XHLDX36O3nRv7",
            id: "2CSQuvvt3XHLDX36O3nRv7",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b27324e7d3f6bcc7f5594638a4f0",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e0224e7d3f6bcc7f5594638a4f0",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d0000485124e7d3f6bcc7f5594638a4f0",
                width: 64,
              },
            ],
            is_playable: true,
            name: "BABYMONSTER Debut Digital Single [BATTER UP]",
            release_date: "2023-11-27",
            release_date_precision: "day",
            total_tracks: 1,
            type: "album",
            uri: "spotify:album:2CSQuvvt3XHLDX36O3nRv7",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1SIocsqdEefUTE6XKGUiVS",
              },
              href: "https://api.spotify.com/v1/artists/1SIocsqdEefUTE6XKGUiVS",
              id: "1SIocsqdEefUTE6XKGUiVS",
              name: "BABYMONSTER",
              type: "artist",
              uri: "spotify:artist:1SIocsqdEefUTE6XKGUiVS",
            },
          ],
          disc_number: 1,
          duration_ms: 188179,
          explicit: false,
          external_ids: {
            isrc: "KRA402300048",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/3VBj0lzjmhTzVFPEDOjNCG",
          },
          href: "https://api.spotify.com/v1/tracks/3VBj0lzjmhTzVFPEDOjNCG",
          id: "3VBj0lzjmhTzVFPEDOjNCG",
          is_local: false,
          is_playable: true,
          name: "BATTER UP",
          popularity: 85,
          preview_url:
            "https://p.scdn.co/mp3-preview/ac4566a780b8143deecef8d5a85c8166009dbfcc?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:3VBj0lzjmhTzVFPEDOjNCG",
        },
        played_at: "2024-01-03T16:08:04.622Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1gBUSTR3TyDdTVFIaQnc02",
                },
                href: "https://api.spotify.com/v1/artists/1gBUSTR3TyDdTVFIaQnc02",
                id: "1gBUSTR3TyDdTVFIaQnc02",
                name: "NCT DREAM",
                type: "artist",
                uri: "spotify:artist:1gBUSTR3TyDdTVFIaQnc02",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/6lqazNXadymQLwUh41qW2K",
            },
            href: "https://api.spotify.com/v1/albums/6lqazNXadymQLwUh41qW2K",
            id: "6lqazNXadymQLwUh41qW2K",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b27358a75e46b114389a2fe762f6",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e0258a75e46b114389a2fe762f6",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d0000485158a75e46b114389a2fe762f6",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Candy - Winter Special Mini Album",
            release_date: "2022-12-16",
            release_date_precision: "day",
            total_tracks: 6,
            type: "album",
            uri: "spotify:album:6lqazNXadymQLwUh41qW2K",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1gBUSTR3TyDdTVFIaQnc02",
              },
              href: "https://api.spotify.com/v1/artists/1gBUSTR3TyDdTVFIaQnc02",
              id: "1gBUSTR3TyDdTVFIaQnc02",
              name: "NCT DREAM",
              type: "artist",
              uri: "spotify:artist:1gBUSTR3TyDdTVFIaQnc02",
            },
          ],
          disc_number: 1,
          duration_ms: 217066,
          explicit: false,
          external_ids: {
            isrc: "KRA302200259",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/27bIik73QCu8Xzt3xpG1bI",
          },
          href: "https://api.spotify.com/v1/tracks/27bIik73QCu8Xzt3xpG1bI",
          id: "27bIik73QCu8Xzt3xpG1bI",
          is_local: false,
          is_playable: true,
          name: "Candy",
          popularity: 74,
          preview_url:
            "https://p.scdn.co/mp3-preview/a970bbec2161d4d336ff03424771cf52e2674821?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:27bIik73QCu8Xzt3xpG1bI",
        },
        played_at: "2024-01-03T16:04:55.979Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "album",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3qNVuliS40BLgXGxhdBdqu",
                },
                href: "https://api.spotify.com/v1/artists/3qNVuliS40BLgXGxhdBdqu",
                id: "3qNVuliS40BLgXGxhdBdqu",
                name: "태연",
                type: "artist",
                uri: "spotify:artist:3qNVuliS40BLgXGxhdBdqu",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/7i2YLTVQ0dyngRuUqtGmr9",
            },
            href: "https://api.spotify.com/v1/albums/7i2YLTVQ0dyngRuUqtGmr9",
            id: "7i2YLTVQ0dyngRuUqtGmr9",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273034c3a8ba89c6a5ecfda3175",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02034c3a8ba89c6a5ecfda3175",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851034c3a8ba89c6a5ecfda3175",
                width: 64,
              },
            ],
            is_playable: true,
            name: "INVU - The 3rd Album",
            release_date: "2022-02-14",
            release_date_precision: "day",
            total_tracks: 13,
            type: "album",
            uri: "spotify:album:7i2YLTVQ0dyngRuUqtGmr9",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/3qNVuliS40BLgXGxhdBdqu",
              },
              href: "https://api.spotify.com/v1/artists/3qNVuliS40BLgXGxhdBdqu",
              id: "3qNVuliS40BLgXGxhdBdqu",
              name: "태연",
              type: "artist",
              uri: "spotify:artist:3qNVuliS40BLgXGxhdBdqu",
            },
          ],
          disc_number: 1,
          duration_ms: 204973,
          explicit: false,
          external_ids: {
            isrc: "KRA302200026",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/7rXcCpIAoOUCydkVDMcoPV",
          },
          href: "https://api.spotify.com/v1/tracks/7rXcCpIAoOUCydkVDMcoPV",
          id: "7rXcCpIAoOUCydkVDMcoPV",
          is_local: false,
          is_playable: true,
          name: "INVU",
          popularity: 71,
          preview_url:
            "https://p.scdn.co/mp3-preview/e9590f3964930840c71bf33f7132f51b147baf63?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:7rXcCpIAoOUCydkVDMcoPV",
        },
        played_at: "2024-01-03T16:01:18.797Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "album",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/48eO052eSDcn8aTxiv6QaG",
                },
                href: "https://api.spotify.com/v1/artists/48eO052eSDcn8aTxiv6QaG",
                id: "48eO052eSDcn8aTxiv6QaG",
                name: "NCT",
                type: "artist",
                uri: "spotify:artist:48eO052eSDcn8aTxiv6QaG",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/1rGpCbxrR8efs4nMPdUj1q",
            },
            href: "https://api.spotify.com/v1/albums/1rGpCbxrR8efs4nMPdUj1q",
            id: "1rGpCbxrR8efs4nMPdUj1q",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b2736db6b8f9ddadc7503eaf4ae8",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e026db6b8f9ddadc7503eaf4ae8",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d000048516db6b8f9ddadc7503eaf4ae8",
                width: 64,
              },
            ],
            is_playable: true,
            name: "NCT RESONANCE Pt. 1 - The 2nd Album",
            release_date: "2020-10-12",
            release_date_precision: "day",
            total_tracks: 13,
            type: "album",
            uri: "spotify:album:1rGpCbxrR8efs4nMPdUj1q",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/3paGCCtX1Xr4Gx53mSeZuQ",
              },
              href: "https://api.spotify.com/v1/artists/3paGCCtX1Xr4Gx53mSeZuQ",
              id: "3paGCCtX1Xr4Gx53mSeZuQ",
              name: "NCT U",
              type: "artist",
              uri: "spotify:artist:3paGCCtX1Xr4Gx53mSeZuQ",
            },
          ],
          disc_number: 1,
          duration_ms: 229400,
          explicit: false,
          external_ids: {
            isrc: "KRA302000484",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/1Q5SpQeocfNXefx76svqkl",
          },
          href: "https://api.spotify.com/v1/tracks/1Q5SpQeocfNXefx76svqkl",
          id: "1Q5SpQeocfNXefx76svqkl",
          is_local: false,
          is_playable: true,
          name: "Make A Wish (Birthday Song)",
          popularity: 64,
          preview_url:
            "https://p.scdn.co/mp3-preview/c5a64a918e191470c35c8a3ddecb19f174005c27?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:1Q5SpQeocfNXefx76svqkl",
        },
        played_at: "2024-01-03T15:57:53.370Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6RHTUrRF63xao58xh9FXYJ",
                },
                href: "https://api.spotify.com/v1/artists/6RHTUrRF63xao58xh9FXYJ",
                id: "6RHTUrRF63xao58xh9FXYJ",
                name: "IVE",
                type: "artist",
                uri: "spotify:artist:6RHTUrRF63xao58xh9FXYJ",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/1BxRutqDtvMJfiovw76gxe",
            },
            href: "https://api.spotify.com/v1/albums/1BxRutqDtvMJfiovw76gxe",
            id: "1BxRutqDtvMJfiovw76gxe",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b2738c475998f5005d0a339b1f0d",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e028c475998f5005d0a339b1f0d",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d000048518c475998f5005d0a339b1f0d",
                width: 64,
              },
            ],
            is_playable: true,
            name: "I WANT",
            release_date: "2023-07-13",
            release_date_precision: "day",
            total_tracks: 1,
            type: "album",
            uri: "spotify:album:1BxRutqDtvMJfiovw76gxe",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/6RHTUrRF63xao58xh9FXYJ",
              },
              href: "https://api.spotify.com/v1/artists/6RHTUrRF63xao58xh9FXYJ",
              id: "6RHTUrRF63xao58xh9FXYJ",
              name: "IVE",
              type: "artist",
              uri: "spotify:artist:6RHTUrRF63xao58xh9FXYJ",
            },
          ],
          disc_number: 1,
          duration_ms: 180626,
          explicit: false,
          external_ids: {
            isrc: "KRA382318567",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/1Xnha5ko8j7yY8O3ATe0Vs",
          },
          href: "https://api.spotify.com/v1/tracks/1Xnha5ko8j7yY8O3ATe0Vs",
          id: "1Xnha5ko8j7yY8O3ATe0Vs",
          is_local: false,
          is_playable: true,
          name: "I WANT",
          popularity: 65,
          preview_url:
            "https://p.scdn.co/mp3-preview/f51f02387be182b05f1563b1d611c764d43bb4c4?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:1Xnha5ko8j7yY8O3ATe0Vs",
        },
        played_at: "2024-01-03T15:54:03.713Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2AfmfGFbe0A0WsTYm0SDTx",
                },
                href: "https://api.spotify.com/v1/artists/2AfmfGFbe0A0WsTYm0SDTx",
                id: "2AfmfGFbe0A0WsTYm0SDTx",
                name: "(여자)아이들",
                type: "artist",
                uri: "spotify:artist:2AfmfGFbe0A0WsTYm0SDTx",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/2cBuoAocFtOZU31Tk6UmTt",
            },
            href: "https://api.spotify.com/v1/albums/2cBuoAocFtOZU31Tk6UmTt",
            id: "2cBuoAocFtOZU31Tk6UmTt",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b27357de3da10da259d0a19a81b4",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e0257de3da10da259d0a19a81b4",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d0000485157de3da10da259d0a19a81b4",
                width: 64,
              },
            ],
            is_playable: true,
            name: "I feel",
            release_date: "2023-05-15",
            release_date_precision: "day",
            total_tracks: 6,
            type: "album",
            uri: "spotify:album:2cBuoAocFtOZU31Tk6UmTt",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/2AfmfGFbe0A0WsTYm0SDTx",
              },
              href: "https://api.spotify.com/v1/artists/2AfmfGFbe0A0WsTYm0SDTx",
              id: "2AfmfGFbe0A0WsTYm0SDTx",
              name: "(여자)아이들",
              type: "artist",
              uri: "spotify:artist:2AfmfGFbe0A0WsTYm0SDTx",
            },
          ],
          disc_number: 1,
          duration_ms: 162786,
          explicit: false,
          external_ids: {
            isrc: "KRA392300002",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/0afnaAYZk1IPQSFDd2MGw0",
          },
          href: "https://api.spotify.com/v1/tracks/0afnaAYZk1IPQSFDd2MGw0",
          id: "0afnaAYZk1IPQSFDd2MGw0",
          is_local: false,
          is_playable: true,
          name: "Allergy",
          popularity: 52,
          preview_url:
            "https://p.scdn.co/mp3-preview/018d97e1cdfa9e2aa59e09ff9879df72323fd728?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 2,
          type: "track",
          uri: "spotify:track:0afnaAYZk1IPQSFDd2MGw0",
        },
        played_at: "2024-01-03T15:51:02.827Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "album",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/48eO052eSDcn8aTxiv6QaG",
                },
                href: "https://api.spotify.com/v1/artists/48eO052eSDcn8aTxiv6QaG",
                id: "48eO052eSDcn8aTxiv6QaG",
                name: "NCT",
                type: "artist",
                uri: "spotify:artist:48eO052eSDcn8aTxiv6QaG",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/3Bd1xSHPmhIEH97idB634s",
            },
            href: "https://api.spotify.com/v1/albums/3Bd1xSHPmhIEH97idB634s",
            id: "3Bd1xSHPmhIEH97idB634s",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273ebee70c4f99963127989d85c",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02ebee70c4f99963127989d85c",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851ebee70c4f99963127989d85c",
                width: 64,
              },
            ],
            is_playable: true,
            name: "NCT RESONANCE Pt. 2 - The 2nd Album",
            release_date: "2020-11-23",
            release_date_precision: "day",
            total_tracks: 21,
            type: "album",
            uri: "spotify:album:3Bd1xSHPmhIEH97idB634s",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/3paGCCtX1Xr4Gx53mSeZuQ",
              },
              href: "https://api.spotify.com/v1/artists/3paGCCtX1Xr4Gx53mSeZuQ",
              id: "3paGCCtX1Xr4Gx53mSeZuQ",
              name: "NCT U",
              type: "artist",
              uri: "spotify:artist:3paGCCtX1Xr4Gx53mSeZuQ",
            },
          ],
          disc_number: 1,
          duration_ms: 213666,
          explicit: false,
          external_ids: {
            isrc: "KRA302000567",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/0B36SbjfDv15ji1bQEEeTN",
          },
          href: "https://api.spotify.com/v1/tracks/0B36SbjfDv15ji1bQEEeTN",
          id: "0B36SbjfDv15ji1bQEEeTN",
          is_local: false,
          is_playable: true,
          name: "90's Love",
          popularity: 64,
          preview_url:
            "https://p.scdn.co/mp3-preview/1f803077f1ccdeb569f42b2d08c7590e80da3ff8?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:0B36SbjfDv15ji1bQEEeTN",
        },
        played_at: "2024-01-03T15:48:19.752Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "album",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2hRQKC0gqlZGPrmUKbcchR",
                },
                href: "https://api.spotify.com/v1/artists/2hRQKC0gqlZGPrmUKbcchR",
                id: "2hRQKC0gqlZGPrmUKbcchR",
                name: "SHINee",
                type: "artist",
                uri: "spotify:artist:2hRQKC0gqlZGPrmUKbcchR",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/2aiM53N5DGm5VXnfjswpI7",
            },
            href: "https://api.spotify.com/v1/albums/2aiM53N5DGm5VXnfjswpI7",
            id: "2aiM53N5DGm5VXnfjswpI7",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273ff8a783336acbef4b6fab82f",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02ff8a783336acbef4b6fab82f",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851ff8a783336acbef4b6fab82f",
                width: 64,
              },
            ],
            is_playable: true,
            name: "The SHINee World - The First Album",
            release_date: "2008-08-28",
            release_date_precision: "day",
            total_tracks: 12,
            type: "album",
            uri: "spotify:album:2aiM53N5DGm5VXnfjswpI7",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/2hRQKC0gqlZGPrmUKbcchR",
              },
              href: "https://api.spotify.com/v1/artists/2hRQKC0gqlZGPrmUKbcchR",
              id: "2hRQKC0gqlZGPrmUKbcchR",
              name: "SHINee",
              type: "artist",
              uri: "spotify:artist:2hRQKC0gqlZGPrmUKbcchR",
            },
          ],
          disc_number: 1,
          duration_ms: 213826,
          explicit: false,
          external_ids: {
            isrc: "KRA300803086",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/1rp986nzkyAX1wFpxzbwlC",
          },
          href: "https://api.spotify.com/v1/tracks/1rp986nzkyAX1wFpxzbwlC",
          id: "1rp986nzkyAX1wFpxzbwlC",
          is_local: false,
          is_playable: true,
          name: "누난 너무 예뻐 (Replay)",
          popularity: 68,
          preview_url:
            "https://p.scdn.co/mp3-preview/b6ab4149f2a5908feac31141aeb806fc1de3a6c1?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 12,
          type: "track",
          uri: "spotify:track:1rp986nzkyAX1wFpxzbwlC",
        },
        played_at: "2024-01-03T15:44:45.998Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6wPBIyIIMxoqgux29bGF8I",
                },
                href: "https://api.spotify.com/v1/artists/6wPBIyIIMxoqgux29bGF8I",
                id: "6wPBIyIIMxoqgux29bGF8I",
                name: "EXO-K",
                type: "artist",
                uri: "spotify:artist:6wPBIyIIMxoqgux29bGF8I",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/3Nyhs0ZYxVmXDVfv4PLsqv",
            },
            href: "https://api.spotify.com/v1/albums/3Nyhs0ZYxVmXDVfv4PLsqv",
            id: "3Nyhs0ZYxVmXDVfv4PLsqv",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b27332d9eb11d9b6b98500ec5fd7",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e0232d9eb11d9b6b98500ec5fd7",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d0000485132d9eb11d9b6b98500ec5fd7",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Overdose - The 2nd Mini Album",
            release_date: "2014-08-06",
            release_date_precision: "day",
            total_tracks: 5,
            type: "album",
            uri: "spotify:album:3Nyhs0ZYxVmXDVfv4PLsqv",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/6wPBIyIIMxoqgux29bGF8I",
              },
              href: "https://api.spotify.com/v1/artists/6wPBIyIIMxoqgux29bGF8I",
              id: "6wPBIyIIMxoqgux29bGF8I",
              name: "EXO-K",
              type: "artist",
              uri: "spotify:artist:6wPBIyIIMxoqgux29bGF8I",
            },
          ],
          disc_number: 1,
          duration_ms: 205611,
          explicit: false,
          external_ids: {
            isrc: "KRA301300505",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/5NSPsOGVNWYOMeeyZPF7HY",
          },
          href: "https://api.spotify.com/v1/tracks/5NSPsOGVNWYOMeeyZPF7HY",
          id: "5NSPsOGVNWYOMeeyZPF7HY",
          is_local: false,
          is_playable: true,
          name: "중독 (Overdose)",
          popularity: 64,
          preview_url:
            "https://p.scdn.co/mp3-preview/637fb3b50ea59970dd1a95827b9769cfd7811801?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:5NSPsOGVNWYOMeeyZPF7HY",
        },
        played_at: "2024-01-03T15:41:11.715Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "album",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/24nUVBIlCGi4twz4nYxJum",
                },
                href: "https://api.spotify.com/v1/artists/24nUVBIlCGi4twz4nYxJum",
                id: "24nUVBIlCGi4twz4nYxJum",
                name: "프로미스나인",
                type: "artist",
                uri: "spotify:artist:24nUVBIlCGi4twz4nYxJum",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/48DcB4A9LV3DugLTILN1D9",
            },
            href: "https://api.spotify.com/v1/albums/48DcB4A9LV3DugLTILN1D9",
            id: "48DcB4A9LV3DugLTILN1D9",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b27385cbf5f5fd777ff74de3bafa",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e0285cbf5f5fd777ff74de3bafa",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d0000485185cbf5f5fd777ff74de3bafa",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Unlock My World",
            release_date: "2023-06-05",
            release_date_precision: "day",
            total_tracks: 10,
            type: "album",
            uri: "spotify:album:48DcB4A9LV3DugLTILN1D9",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/24nUVBIlCGi4twz4nYxJum",
              },
              href: "https://api.spotify.com/v1/artists/24nUVBIlCGi4twz4nYxJum",
              id: "24nUVBIlCGi4twz4nYxJum",
              name: "프로미스나인",
              type: "artist",
              uri: "spotify:artist:24nUVBIlCGi4twz4nYxJum",
            },
          ],
          disc_number: 1,
          duration_ms: 169906,
          explicit: false,
          external_ids: {
            isrc: "USA2P2322997",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/4lIAPwAU6R8PAy2WhykC4i",
          },
          href: "https://api.spotify.com/v1/tracks/4lIAPwAU6R8PAy2WhykC4i",
          id: "4lIAPwAU6R8PAy2WhykC4i",
          is_local: false,
          is_playable: true,
          name: "#menow",
          popularity: 61,
          preview_url:
            "https://p.scdn.co/mp3-preview/e155840aca113f2ce5f5cee8b0fe31b2f6064eab?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 2,
          type: "track",
          uri: "spotify:track:4lIAPwAU6R8PAy2WhykC4i",
        },
        played_at: "2024-01-03T15:37:45.800Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6RHTUrRF63xao58xh9FXYJ",
                },
                href: "https://api.spotify.com/v1/artists/6RHTUrRF63xao58xh9FXYJ",
                id: "6RHTUrRF63xao58xh9FXYJ",
                name: "IVE",
                type: "artist",
                uri: "spotify:artist:6RHTUrRF63xao58xh9FXYJ",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/6gzKQD8JoD775o5EQXATn5",
            },
            href: "https://api.spotify.com/v1/albums/6gzKQD8JoD775o5EQXATn5",
            id: "6gzKQD8JoD775o5EQXATn5",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b2733bbc6a71db1759c3b0053135",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e023bbc6a71db1759c3b0053135",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d000048513bbc6a71db1759c3b0053135",
                width: 64,
              },
            ],
            is_playable: true,
            name: "I'VE MINE",
            release_date: "2023-10-13",
            release_date_precision: "day",
            total_tracks: 6,
            type: "album",
            uri: "spotify:album:6gzKQD8JoD775o5EQXATn5",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/6RHTUrRF63xao58xh9FXYJ",
              },
              href: "https://api.spotify.com/v1/artists/6RHTUrRF63xao58xh9FXYJ",
              id: "6RHTUrRF63xao58xh9FXYJ",
              name: "IVE",
              type: "artist",
              uri: "spotify:artist:6RHTUrRF63xao58xh9FXYJ",
            },
          ],
          disc_number: 1,
          duration_ms: 157186,
          explicit: false,
          external_ids: {
            isrc: "QMDA72364155",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/0sbow2xt3v5AnYBxbciPJu",
          },
          href: "https://api.spotify.com/v1/tracks/0sbow2xt3v5AnYBxbciPJu",
          id: "0sbow2xt3v5AnYBxbciPJu",
          is_local: false,
          is_playable: true,
          name: "OTT",
          popularity: 36,
          preview_url:
            "https://p.scdn.co/mp3-preview/8ece41ae9d3c62ea07f053c38e493668dec4c86f?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 5,
          type: "track",
          uri: "spotify:track:0sbow2xt3v5AnYBxbciPJu",
        },
        played_at: "2024-01-03T15:34:55.608Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0",
                },
                href: "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                id: "7n2Ycct7Beij7Dj7meI4X0",
                name: "TWICE",
                type: "artist",
                uri: "spotify:artist:7n2Ycct7Beij7Dj7meI4X0",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/4wb2ucdEfkt2J0dKFrFVFn",
            },
            href: "https://api.spotify.com/v1/albums/4wb2ucdEfkt2J0dKFrFVFn",
            id: "4wb2ucdEfkt2J0dKFrFVFn",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273294dcbd59f951eb8a7eadaf5",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02294dcbd59f951eb8a7eadaf5",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851294dcbd59f951eb8a7eadaf5",
                width: 64,
              },
            ],
            is_playable: true,
            name: "BETWEEN 1&2",
            release_date: "2022-08-26",
            release_date_precision: "day",
            total_tracks: 7,
            type: "album",
            uri: "spotify:album:4wb2ucdEfkt2J0dKFrFVFn",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0",
              },
              href: "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
              id: "7n2Ycct7Beij7Dj7meI4X0",
              name: "TWICE",
              type: "artist",
              uri: "spotify:artist:7n2Ycct7Beij7Dj7meI4X0",
            },
          ],
          disc_number: 1,
          duration_ms: 177466,
          explicit: false,
          external_ids: {
            isrc: "US5TA2200073",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/646UF6MvpT5PbnLosjfX34",
          },
          href: "https://api.spotify.com/v1/tracks/646UF6MvpT5PbnLosjfX34",
          id: "646UF6MvpT5PbnLosjfX34",
          is_local: false,
          is_playable: true,
          name: "Talk that Talk",
          popularity: 37,
          preview_url:
            "https://p.scdn.co/mp3-preview/7858b400e415b41cac4dd160328d95a318bb2f60?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:646UF6MvpT5PbnLosjfX34",
        },
        played_at: "2024-01-03T15:32:18.162Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7f4ignuCJhLXfZ9giKT7rH",
                },
                href: "https://api.spotify.com/v1/artists/7f4ignuCJhLXfZ9giKT7rH",
                id: "7f4ignuCJhLXfZ9giKT7rH",
                name: "NCT 127",
                type: "artist",
                uri: "spotify:artist:7f4ignuCJhLXfZ9giKT7rH",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/4EEfpF1qcPAl1J4Z770A2U",
            },
            href: "https://api.spotify.com/v1/albums/4EEfpF1qcPAl1J4Z770A2U",
            id: "4EEfpF1qcPAl1J4Z770A2U",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273ca74d3d623930d10f2c3c1f1",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02ca74d3d623930d10f2c3c1f1",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851ca74d3d623930d10f2c3c1f1",
                width: 64,
              },
            ],
            is_playable: true,
            name: "NCT#127 LIMITLESS - The 2nd Mini Album",
            release_date: "2017-01-06",
            release_date_precision: "day",
            total_tracks: 6,
            type: "album",
            uri: "spotify:album:4EEfpF1qcPAl1J4Z770A2U",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/7f4ignuCJhLXfZ9giKT7rH",
              },
              href: "https://api.spotify.com/v1/artists/7f4ignuCJhLXfZ9giKT7rH",
              id: "7f4ignuCJhLXfZ9giKT7rH",
              name: "NCT 127",
              type: "artist",
              uri: "spotify:artist:7f4ignuCJhLXfZ9giKT7rH",
            },
          ],
          disc_number: 1,
          duration_ms: 235192,
          explicit: false,
          external_ids: {
            isrc: "KRA301700013",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/37SqctQhMp3MjvGDXKhnJ3",
          },
          href: "https://api.spotify.com/v1/tracks/37SqctQhMp3MjvGDXKhnJ3",
          id: "37SqctQhMp3MjvGDXKhnJ3",
          is_local: false,
          is_playable: true,
          name: "Back 2 U (AM 01:27)",
          popularity: 59,
          preview_url:
            "https://p.scdn.co/mp3-preview/222badf2f947197e47b1c76611b2ee8bd0e601ca?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 3,
          type: "track",
          uri: "spotify:track:37SqctQhMp3MjvGDXKhnJ3",
        },
        played_at: "2024-01-03T15:29:20.425Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/28ot3wh4oNmoFOdVajibBl",
                },
                href: "https://api.spotify.com/v1/artists/28ot3wh4oNmoFOdVajibBl",
                id: "28ot3wh4oNmoFOdVajibBl",
                name: "NMIXX",
                type: "artist",
                uri: "spotify:artist:28ot3wh4oNmoFOdVajibBl",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/2uB0PgzqqWLdk2R736sMkP",
            },
            href: "https://api.spotify.com/v1/albums/2uB0PgzqqWLdk2R736sMkP",
            id: "2uB0PgzqqWLdk2R736sMkP",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b2731cf26b855e8f7eeb4804b848",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e021cf26b855e8f7eeb4804b848",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d000048511cf26b855e8f7eeb4804b848",
                width: 64,
              },
            ],
            is_playable: true,
            name: "ENTWURF",
            release_date: "2022-09-19",
            release_date_precision: "day",
            total_tracks: 4,
            type: "album",
            uri: "spotify:album:2uB0PgzqqWLdk2R736sMkP",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/28ot3wh4oNmoFOdVajibBl",
              },
              href: "https://api.spotify.com/v1/artists/28ot3wh4oNmoFOdVajibBl",
              id: "28ot3wh4oNmoFOdVajibBl",
              name: "NMIXX",
              type: "artist",
              uri: "spotify:artist:28ot3wh4oNmoFOdVajibBl",
            },
          ],
          disc_number: 1,
          duration_ms: 165746,
          explicit: false,
          external_ids: {
            isrc: "US5TA2200097",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/6C734SmqoIYuRWo2qSCnpC",
          },
          href: "https://api.spotify.com/v1/tracks/6C734SmqoIYuRWo2qSCnpC",
          id: "6C734SmqoIYuRWo2qSCnpC",
          is_local: false,
          is_playable: true,
          name: "DICE",
          popularity: 57,
          preview_url:
            "https://p.scdn.co/mp3-preview/b5512cc7c46d981da08ca09e2bf3ca14c047c637?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:6C734SmqoIYuRWo2qSCnpC",
        },
        played_at: "2024-01-03T15:25:24.912Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "album",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/4SpbR6yFEvexJuaBpgAU5p",
                },
                href: "https://api.spotify.com/v1/artists/4SpbR6yFEvexJuaBpgAU5p",
                id: "4SpbR6yFEvexJuaBpgAU5p",
                name: "LE SSERAFIM",
                type: "artist",
                uri: "spotify:artist:4SpbR6yFEvexJuaBpgAU5p",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/4Oz7K9DRwwGMN49i4NbVDT",
            },
            href: "https://api.spotify.com/v1/albums/4Oz7K9DRwwGMN49i4NbVDT",
            id: "4Oz7K9DRwwGMN49i4NbVDT",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273d71fd77b89d08bc1bda219c7",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02d71fd77b89d08bc1bda219c7",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851d71fd77b89d08bc1bda219c7",
                width: 64,
              },
            ],
            is_playable: true,
            name: "UNFORGIVEN",
            release_date: "2023-05-01",
            release_date_precision: "day",
            total_tracks: 13,
            type: "album",
            uri: "spotify:album:4Oz7K9DRwwGMN49i4NbVDT",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/4SpbR6yFEvexJuaBpgAU5p",
              },
              href: "https://api.spotify.com/v1/artists/4SpbR6yFEvexJuaBpgAU5p",
              id: "4SpbR6yFEvexJuaBpgAU5p",
              name: "LE SSERAFIM",
              type: "artist",
              uri: "spotify:artist:4SpbR6yFEvexJuaBpgAU5p",
            },
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/3yDIp0kaq9EFKe07X1X2rz",
              },
              href: "https://api.spotify.com/v1/artists/3yDIp0kaq9EFKe07X1X2rz",
              id: "3yDIp0kaq9EFKe07X1X2rz",
              name: "Nile Rodgers",
              type: "artist",
              uri: "spotify:artist:3yDIp0kaq9EFKe07X1X2rz",
            },
          ],
          disc_number: 1,
          duration_ms: 182148,
          explicit: false,
          external_ids: {
            isrc: "USA2P2310663",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/51vRumtqbkNW9wrKfESwfu",
          },
          href: "https://api.spotify.com/v1/tracks/51vRumtqbkNW9wrKfESwfu",
          id: "51vRumtqbkNW9wrKfESwfu",
          is_local: false,
          is_playable: true,
          name: "UNFORGIVEN (feat. Nile Rodgers)",
          popularity: 81,
          preview_url:
            "https://p.scdn.co/mp3-preview/ba72474a4c4c3a63f8c6d00c561ad40be6e1e7c7?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 8,
          type: "track",
          uri: "spotify:track:51vRumtqbkNW9wrKfESwfu",
        },
        played_at: "2024-01-03T15:22:38.878Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "album",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1gBUSTR3TyDdTVFIaQnc02",
                },
                href: "https://api.spotify.com/v1/artists/1gBUSTR3TyDdTVFIaQnc02",
                id: "1gBUSTR3TyDdTVFIaQnc02",
                name: "NCT DREAM",
                type: "artist",
                uri: "spotify:artist:1gBUSTR3TyDdTVFIaQnc02",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/1fRqXYwoLDxG3EwP70qnjM",
            },
            href: "https://api.spotify.com/v1/albums/1fRqXYwoLDxG3EwP70qnjM",
            id: "1fRqXYwoLDxG3EwP70qnjM",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273e6d118f2ad157bf0bbfb83cf",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02e6d118f2ad157bf0bbfb83cf",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851e6d118f2ad157bf0bbfb83cf",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Hello Future - The 1st Album Repackage",
            release_date: "2021-06-28",
            release_date_precision: "day",
            total_tracks: 13,
            type: "album",
            uri: "spotify:album:1fRqXYwoLDxG3EwP70qnjM",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1gBUSTR3TyDdTVFIaQnc02",
              },
              href: "https://api.spotify.com/v1/artists/1gBUSTR3TyDdTVFIaQnc02",
              id: "1gBUSTR3TyDdTVFIaQnc02",
              name: "NCT DREAM",
              type: "artist",
              uri: "spotify:artist:1gBUSTR3TyDdTVFIaQnc02",
            },
          ],
          disc_number: 1,
          duration_ms: 220920,
          explicit: false,
          external_ids: {
            isrc: "KRA302100215",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/332GJ8ykVuEt3jOT1sy7j6",
          },
          href: "https://api.spotify.com/v1/tracks/332GJ8ykVuEt3jOT1sy7j6",
          id: "332GJ8ykVuEt3jOT1sy7j6",
          is_local: false,
          is_playable: true,
          name: "Hello Future",
          popularity: 68,
          preview_url:
            "https://p.scdn.co/mp3-preview/48bf1badccaaa761222d92e8cafd0fbfb24c7e9d?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:332GJ8ykVuEt3jOT1sy7j6",
        },
        played_at: "2024-01-03T15:19:36.626Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6RHTUrRF63xao58xh9FXYJ",
                },
                href: "https://api.spotify.com/v1/artists/6RHTUrRF63xao58xh9FXYJ",
                id: "6RHTUrRF63xao58xh9FXYJ",
                name: "IVE",
                type: "artist",
                uri: "spotify:artist:6RHTUrRF63xao58xh9FXYJ",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/1XMYvsHRt52sMi6wittWqI",
            },
            href: "https://api.spotify.com/v1/albums/1XMYvsHRt52sMi6wittWqI",
            id: "1XMYvsHRt52sMi6wittWqI",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273da343b21617aac0c57e332bb",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02da343b21617aac0c57e332bb",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851da343b21617aac0c57e332bb",
                width: 64,
              },
            ],
            is_playable: true,
            name: "ELEVEN",
            release_date: "2021-12-01",
            release_date_precision: "day",
            total_tracks: 2,
            type: "album",
            uri: "spotify:album:1XMYvsHRt52sMi6wittWqI",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/6RHTUrRF63xao58xh9FXYJ",
              },
              href: "https://api.spotify.com/v1/artists/6RHTUrRF63xao58xh9FXYJ",
              id: "6RHTUrRF63xao58xh9FXYJ",
              name: "IVE",
              type: "artist",
              uri: "spotify:artist:6RHTUrRF63xao58xh9FXYJ",
            },
          ],
          disc_number: 1,
          duration_ms: 178453,
          explicit: false,
          external_ids: {
            isrc: "KRA382163861",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/7n2FZQsaLb7ZRfRPfEeIvr",
          },
          href: "https://api.spotify.com/v1/tracks/7n2FZQsaLb7ZRfRPfEeIvr",
          id: "7n2FZQsaLb7ZRfRPfEeIvr",
          is_local: false,
          is_playable: true,
          name: "ELEVEN",
          popularity: 75,
          preview_url:
            "https://p.scdn.co/mp3-preview/a6e8ccc7ece8b0d69aac855584e153c8ab866a62?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:7n2FZQsaLb7ZRfRPfEeIvr",
        },
        played_at: "2024-01-03T15:15:55.109Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2AfmfGFbe0A0WsTYm0SDTx",
                },
                href: "https://api.spotify.com/v1/artists/2AfmfGFbe0A0WsTYm0SDTx",
                id: "2AfmfGFbe0A0WsTYm0SDTx",
                name: "(여자)아이들",
                type: "artist",
                uri: "spotify:artist:2AfmfGFbe0A0WsTYm0SDTx",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/5P2uqhsUdWHQ8sEdsX9xZE",
            },
            href: "https://api.spotify.com/v1/albums/5P2uqhsUdWHQ8sEdsX9xZE",
            id: "5P2uqhsUdWHQ8sEdsX9xZE",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273568f9eafaf4580222d2aa22a",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02568f9eafaf4580222d2aa22a",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851568f9eafaf4580222d2aa22a",
                width: 64,
              },
            ],
            is_playable: true,
            name: "I love",
            release_date: "2022-10-17",
            release_date_precision: "day",
            total_tracks: 6,
            type: "album",
            uri: "spotify:album:5P2uqhsUdWHQ8sEdsX9xZE",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/2AfmfGFbe0A0WsTYm0SDTx",
              },
              href: "https://api.spotify.com/v1/artists/2AfmfGFbe0A0WsTYm0SDTx",
              id: "2AfmfGFbe0A0WsTYm0SDTx",
              name: "(여자)아이들",
              type: "artist",
              uri: "spotify:artist:2AfmfGFbe0A0WsTYm0SDTx",
            },
          ],
          disc_number: 1,
          duration_ms: 178453,
          explicit: false,
          external_ids: {
            isrc: "KRA392200038",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/7Ejqkb9YfldcLoh8B6bXgj",
          },
          href: "https://api.spotify.com/v1/tracks/7Ejqkb9YfldcLoh8B6bXgj",
          id: "7Ejqkb9YfldcLoh8B6bXgj",
          is_local: false,
          is_playable: true,
          name: "Nxde",
          popularity: 56,
          preview_url:
            "https://p.scdn.co/mp3-preview/35463499584b38e96efc6013844937d8bc094520?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:7Ejqkb9YfldcLoh8B6bXgj",
        },
        played_at: "2024-01-03T15:12:56.317Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "album",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7f4ignuCJhLXfZ9giKT7rH",
                },
                href: "https://api.spotify.com/v1/artists/7f4ignuCJhLXfZ9giKT7rH",
                id: "7f4ignuCJhLXfZ9giKT7rH",
                name: "NCT 127",
                type: "artist",
                uri: "spotify:artist:7f4ignuCJhLXfZ9giKT7rH",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/06piaqPGZekE8n3BpSjHlP",
            },
            href: "https://api.spotify.com/v1/albums/06piaqPGZekE8n3BpSjHlP",
            id: "06piaqPGZekE8n3BpSjHlP",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273f6d2f575a95be59afc5e0443",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02f6d2f575a95be59afc5e0443",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851f6d2f575a95be59afc5e0443",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Ay-Yo - The 4th Album Repackage",
            release_date: "2023-01-30",
            release_date_precision: "day",
            total_tracks: 15,
            type: "album",
            uri: "spotify:album:06piaqPGZekE8n3BpSjHlP",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/7f4ignuCJhLXfZ9giKT7rH",
              },
              href: "https://api.spotify.com/v1/artists/7f4ignuCJhLXfZ9giKT7rH",
              id: "7f4ignuCJhLXfZ9giKT7rH",
              name: "NCT 127",
              type: "artist",
              uri: "spotify:artist:7f4ignuCJhLXfZ9giKT7rH",
            },
          ],
          disc_number: 1,
          duration_ms: 221493,
          explicit: false,
          external_ids: {
            isrc: "KRA302300002",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/3ePLUHZ0wpewHpAg6P3wUE",
          },
          href: "https://api.spotify.com/v1/tracks/3ePLUHZ0wpewHpAg6P3wUE",
          id: "3ePLUHZ0wpewHpAg6P3wUE",
          is_local: false,
          is_playable: true,
          name: "Ay-Yo",
          popularity: 61,
          preview_url:
            "https://p.scdn.co/mp3-preview/f0d27017490a60126ecc22ce2256297006ddf4af?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:3ePLUHZ0wpewHpAg6P3wUE",
        },
        played_at: "2024-01-03T15:09:57.422Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/28ot3wh4oNmoFOdVajibBl",
                },
                href: "https://api.spotify.com/v1/artists/28ot3wh4oNmoFOdVajibBl",
                id: "28ot3wh4oNmoFOdVajibBl",
                name: "NMIXX",
                type: "artist",
                uri: "spotify:artist:28ot3wh4oNmoFOdVajibBl",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/2mKUepexXVL69G8bBK9ECB",
            },
            href: "https://api.spotify.com/v1/albums/2mKUepexXVL69G8bBK9ECB",
            id: "2mKUepexXVL69G8bBK9ECB",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273245621ddf8e0d6d27cb14cef",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02245621ddf8e0d6d27cb14cef",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851245621ddf8e0d6d27cb14cef",
                width: 64,
              },
            ],
            is_playable: true,
            name: "expérgo",
            release_date: "2023-03-20",
            release_date_precision: "day",
            total_tracks: 6,
            type: "album",
            uri: "spotify:album:2mKUepexXVL69G8bBK9ECB",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/28ot3wh4oNmoFOdVajibBl",
              },
              href: "https://api.spotify.com/v1/artists/28ot3wh4oNmoFOdVajibBl",
              id: "28ot3wh4oNmoFOdVajibBl",
              name: "NMIXX",
              type: "artist",
              uri: "spotify:artist:28ot3wh4oNmoFOdVajibBl",
            },
          ],
          disc_number: 1,
          duration_ms: 188718,
          explicit: false,
          external_ids: {
            isrc: "US5TA2200195",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/2W8UduoifU1zgjKZlfY79S",
          },
          href: "https://api.spotify.com/v1/tracks/2W8UduoifU1zgjKZlfY79S",
          id: "2W8UduoifU1zgjKZlfY79S",
          is_local: false,
          is_playable: true,
          name: "Love Me Like This",
          popularity: 58,
          preview_url:
            "https://p.scdn.co/mp3-preview/5056710d4aeb684506f96ce0e07c4667efc7c994?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 2,
          type: "track",
          uri: "spotify:track:2W8UduoifU1zgjKZlfY79S",
        },
        played_at: "2024-01-03T15:06:15.640Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "album",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/4SpbR6yFEvexJuaBpgAU5p",
                },
                href: "https://api.spotify.com/v1/artists/4SpbR6yFEvexJuaBpgAU5p",
                id: "4SpbR6yFEvexJuaBpgAU5p",
                name: "LE SSERAFIM",
                type: "artist",
                uri: "spotify:artist:4SpbR6yFEvexJuaBpgAU5p",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/4Oz7K9DRwwGMN49i4NbVDT",
            },
            href: "https://api.spotify.com/v1/albums/4Oz7K9DRwwGMN49i4NbVDT",
            id: "4Oz7K9DRwwGMN49i4NbVDT",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273d71fd77b89d08bc1bda219c7",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02d71fd77b89d08bc1bda219c7",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851d71fd77b89d08bc1bda219c7",
                width: 64,
              },
            ],
            is_playable: true,
            name: "UNFORGIVEN",
            release_date: "2023-05-01",
            release_date_precision: "day",
            total_tracks: 13,
            type: "album",
            uri: "spotify:album:4Oz7K9DRwwGMN49i4NbVDT",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/4SpbR6yFEvexJuaBpgAU5p",
              },
              href: "https://api.spotify.com/v1/artists/4SpbR6yFEvexJuaBpgAU5p",
              id: "4SpbR6yFEvexJuaBpgAU5p",
              name: "LE SSERAFIM",
              type: "artist",
              uri: "spotify:artist:4SpbR6yFEvexJuaBpgAU5p",
            },
          ],
          disc_number: 1,
          duration_ms: 201894,
          explicit: false,
          external_ids: {
            isrc: "USA2P2310661",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/2ahp0wvyEzyvgWfOhStHWp",
          },
          href: "https://api.spotify.com/v1/tracks/2ahp0wvyEzyvgWfOhStHWp",
          id: "2ahp0wvyEzyvgWfOhStHWp",
          is_local: false,
          is_playable: true,
          name: "Blue Flame (2023 Ver.)",
          popularity: 69,
          preview_url:
            "https://p.scdn.co/mp3-preview/33b8fe1e6a058da45a36139ba09c8789299d282a?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 3,
          type: "track",
          uri: "spotify:track:2ahp0wvyEzyvgWfOhStHWp",
        },
        played_at: "2024-01-03T15:03:06.603Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/13rF01aOogvnkuQXOlgTW8",
                },
                href: "https://api.spotify.com/v1/artists/13rF01aOogvnkuQXOlgTW8",
                id: "13rF01aOogvnkuQXOlgTW8",
                name: "태민",
                type: "artist",
                uri: "spotify:artist:13rF01aOogvnkuQXOlgTW8",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/0kNUDDHwjpemplDqSZ72Ct",
            },
            href: "https://api.spotify.com/v1/albums/0kNUDDHwjpemplDqSZ72Ct",
            id: "0kNUDDHwjpemplDqSZ72Ct",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b2738b041a6c21bf569fb424d930",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e028b041a6c21bf569fb424d930",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d000048518b041a6c21bf569fb424d930",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Advice - The 3rd Mini Album",
            release_date: "2021-05-18",
            release_date_precision: "day",
            total_tracks: 5,
            type: "album",
            uri: "spotify:album:0kNUDDHwjpemplDqSZ72Ct",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/13rF01aOogvnkuQXOlgTW8",
              },
              href: "https://api.spotify.com/v1/artists/13rF01aOogvnkuQXOlgTW8",
              id: "13rF01aOogvnkuQXOlgTW8",
              name: "태민",
              type: "artist",
              uri: "spotify:artist:13rF01aOogvnkuQXOlgTW8",
            },
          ],
          disc_number: 1,
          duration_ms: 191640,
          explicit: false,
          external_ids: {
            isrc: "KRA302100170",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/4rOODw637hsmsq0uzT0DN3",
          },
          href: "https://api.spotify.com/v1/tracks/4rOODw637hsmsq0uzT0DN3",
          id: "4rOODw637hsmsq0uzT0DN3",
          is_local: false,
          is_playable: true,
          name: "Advice",
          popularity: 68,
          preview_url:
            "https://p.scdn.co/mp3-preview/6ad844369bd16ff31af745c5e3bfe0d4c0cf1964?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:4rOODw637hsmsq0uzT0DN3",
        },
        played_at: "2024-01-03T14:59:44.375Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6RHTUrRF63xao58xh9FXYJ",
                },
                href: "https://api.spotify.com/v1/artists/6RHTUrRF63xao58xh9FXYJ",
                id: "6RHTUrRF63xao58xh9FXYJ",
                name: "IVE",
                type: "artist",
                uri: "spotify:artist:6RHTUrRF63xao58xh9FXYJ",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/3SxYD7K6tDOvcPGljYEtYt",
            },
            href: "https://api.spotify.com/v1/albums/3SxYD7K6tDOvcPGljYEtYt",
            id: "3SxYD7K6tDOvcPGljYEtYt",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273104c0b477667708d41559de0",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02104c0b477667708d41559de0",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851104c0b477667708d41559de0",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Either Way",
            release_date: "2023-09-25",
            release_date_precision: "day",
            total_tracks: 1,
            type: "album",
            uri: "spotify:album:3SxYD7K6tDOvcPGljYEtYt",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/6RHTUrRF63xao58xh9FXYJ",
              },
              href: "https://api.spotify.com/v1/artists/6RHTUrRF63xao58xh9FXYJ",
              id: "6RHTUrRF63xao58xh9FXYJ",
              name: "IVE",
              type: "artist",
              uri: "spotify:artist:6RHTUrRF63xao58xh9FXYJ",
            },
          ],
          disc_number: 1,
          duration_ms: 166946,
          explicit: false,
          external_ids: {
            isrc: "QMDA72364153",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/0hfgdZKMICdgW84SUk3jfT",
          },
          href: "https://api.spotify.com/v1/tracks/0hfgdZKMICdgW84SUk3jfT",
          id: "0hfgdZKMICdgW84SUk3jfT",
          is_local: false,
          is_playable: true,
          name: "Either Way",
          popularity: 48,
          preview_url:
            "https://p.scdn.co/mp3-preview/bd94f0bc861b67d351f03a895e064e958446c8e9?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:0hfgdZKMICdgW84SUk3jfT",
        },
        played_at: "2024-01-03T14:56:32.424Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6HvZYsbFfjnjFrWF950C9d",
                },
                href: "https://api.spotify.com/v1/artists/6HvZYsbFfjnjFrWF950C9d",
                id: "6HvZYsbFfjnjFrWF950C9d",
                name: "NewJeans",
                type: "artist",
                uri: "spotify:artist:6HvZYsbFfjnjFrWF950C9d",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/1HMLpmZAnNyl9pxvOnTovV",
            },
            href: "https://api.spotify.com/v1/albums/1HMLpmZAnNyl9pxvOnTovV",
            id: "1HMLpmZAnNyl9pxvOnTovV",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b2739d28fd01859073a3ae6ea209",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e029d28fd01859073a3ae6ea209",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d000048519d28fd01859073a3ae6ea209",
                width: 64,
              },
            ],
            is_playable: true,
            name: "NewJeans 1st EP 'New Jeans'",
            release_date: "2022-08-01",
            release_date_precision: "day",
            total_tracks: 4,
            type: "album",
            uri: "spotify:album:1HMLpmZAnNyl9pxvOnTovV",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/6HvZYsbFfjnjFrWF950C9d",
              },
              href: "https://api.spotify.com/v1/artists/6HvZYsbFfjnjFrWF950C9d",
              id: "6HvZYsbFfjnjFrWF950C9d",
              name: "NewJeans",
              type: "artist",
              uri: "spotify:artist:6HvZYsbFfjnjFrWF950C9d",
            },
          ],
          disc_number: 1,
          duration_ms: 235562,
          explicit: false,
          external_ids: {
            isrc: "USA2P2230223",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/2DwUdMJ5uxv20EhAildreg",
          },
          href: "https://api.spotify.com/v1/tracks/2DwUdMJ5uxv20EhAildreg",
          id: "2DwUdMJ5uxv20EhAildreg",
          is_local: false,
          is_playable: true,
          name: "Cookie",
          popularity: 77,
          preview_url:
            "https://p.scdn.co/mp3-preview/d059b8ea163242692099c452cbed3de596c2e624?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 3,
          type: "track",
          uri: "spotify:track:2DwUdMJ5uxv20EhAildreg",
        },
        played_at: "2024-01-03T14:53:45.175Z",
        context: null,
      },
    ],
    next: "https://api.spotify.com/v1/me/player/recently-played?after=1704406735040&limit=50",
    cursors: {
      after: "1704406735040",
      before: "1704293625175",
    },
    limit: 50,
    href: "https://api.spotify.com/v1/me/player/recently-played?after=1704266360047&limit=50",
  },
  {
    items: [
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/69K447yK7IW0NCZGEh79e1",
                },
                href: "https://api.spotify.com/v1/artists/69K447yK7IW0NCZGEh79e1",
                id: "69K447yK7IW0NCZGEh79e1",
                name: "한동근",
                type: "artist",
                uri: "spotify:artist:69K447yK7IW0NCZGEh79e1",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/4thvEEDY1tQFGeIcTbgwMy",
            },
            href: "https://api.spotify.com/v1/albums/4thvEEDY1tQFGeIcTbgwMy",
            id: "4thvEEDY1tQFGeIcTbgwMy",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b2736c50cbc00d297cf578c34423",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e026c50cbc00d297cf578c34423",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d000048516c50cbc00d297cf578c34423",
                width: 64,
              },
            ],
            is_playable: true,
            name: "The 3rd Digital Single '그대라는 사치'",
            release_date: "2016-08-24",
            release_date_precision: "day",
            total_tracks: 1,
            type: "album",
            uri: "spotify:album:4thvEEDY1tQFGeIcTbgwMy",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/69K447yK7IW0NCZGEh79e1",
              },
              href: "https://api.spotify.com/v1/artists/69K447yK7IW0NCZGEh79e1",
              id: "69K447yK7IW0NCZGEh79e1",
              name: "한동근",
              type: "artist",
              uri: "spotify:artist:69K447yK7IW0NCZGEh79e1",
            },
          ],
          disc_number: 1,
          duration_ms: 296832,
          explicit: false,
          external_ids: {
            isrc: "KRA381601597",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/37dkyQQNJLaqk09kkNr7In",
          },
          href: "https://api.spotify.com/v1/tracks/37dkyQQNJLaqk09kkNr7In",
          id: "37dkyQQNJLaqk09kkNr7In",
          is_local: false,
          is_playable: true,
          name: "그대라는 사치",
          popularity: 43,
          preview_url:
            "https://p.scdn.co/mp3-preview/390f6eefb2aa92055562643fc455aa6745fc6d42?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:37dkyQQNJLaqk09kkNr7In",
        },
        played_at: "2024-01-04T22:18:55.040Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "album",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1rpgxJZxZMLnFNc1Jmyov5",
                },
                href: "https://api.spotify.com/v1/artists/1rpgxJZxZMLnFNc1Jmyov5",
                id: "1rpgxJZxZMLnFNc1Jmyov5",
                name: "YB",
                type: "artist",
                uri: "spotify:artist:1rpgxJZxZMLnFNc1Jmyov5",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/4S5PRo1gVG9BvRnCcdYzdS",
            },
            href: "https://api.spotify.com/v1/albums/4S5PRo1gVG9BvRnCcdYzdS",
            id: "4S5PRo1gVG9BvRnCcdYzdS",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273be123bb6b40736bf093870bd",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02be123bb6b40736bf093870bd",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851be123bb6b40736bf093870bd",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Why Be?",
            release_date: "2010-01-01",
            release_date_precision: "day",
            total_tracks: 23,
            type: "album",
            uri: "spotify:album:4S5PRo1gVG9BvRnCcdYzdS",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1rpgxJZxZMLnFNc1Jmyov5",
              },
              href: "https://api.spotify.com/v1/artists/1rpgxJZxZMLnFNc1Jmyov5",
              id: "1rpgxJZxZMLnFNc1Jmyov5",
              name: "YB",
              type: "artist",
              uri: "spotify:artist:1rpgxJZxZMLnFNc1Jmyov5",
            },
          ],
          disc_number: 1,
          duration_ms: 214906,
          explicit: false,
          external_ids: {
            isrc: "KRA661000070",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/3I71PFicYG614VGl6hqcUK",
          },
          href: "https://api.spotify.com/v1/tracks/3I71PFicYG614VGl6hqcUK",
          id: "3I71PFicYG614VGl6hqcUK",
          is_local: false,
          is_playable: true,
          name: "A Flying Butterfly",
          popularity: 41,
          preview_url:
            "https://p.scdn.co/mp3-preview/a7287c9baf7383e74fb4a1c59bdb231570538873?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 2,
          type: "track",
          uri: "spotify:track:3I71PFicYG614VGl6hqcUK",
        },
        played_at: "2024-01-04T16:09:06.387Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7IrDIIq3j04exsiF3Z7CPg",
                },
                href: "https://api.spotify.com/v1/artists/7IrDIIq3j04exsiF3Z7CPg",
                id: "7IrDIIq3j04exsiF3Z7CPg",
                name: "빈지노",
                type: "artist",
                uri: "spotify:artist:7IrDIIq3j04exsiF3Z7CPg",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/6GzOG46xmgSfB0PQdsnMDU",
            },
            href: "https://api.spotify.com/v1/albums/6GzOG46xmgSfB0PQdsnMDU",
            id: "6GzOG46xmgSfB0PQdsnMDU",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273fce4d97a91b1d51a64ec8a97",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02fce4d97a91b1d51a64ec8a97",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851fce4d97a91b1d51a64ec8a97",
                width: 64,
              },
            ],
            is_playable: true,
            name: "24:26 (5th Anniversary Remaster Edition)",
            release_date: "2017-07-10",
            release_date_precision: "day",
            total_tracks: 9,
            type: "album",
            uri: "spotify:album:6GzOG46xmgSfB0PQdsnMDU",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/7IrDIIq3j04exsiF3Z7CPg",
              },
              href: "https://api.spotify.com/v1/artists/7IrDIIq3j04exsiF3Z7CPg",
              id: "7IrDIIq3j04exsiF3Z7CPg",
              name: "빈지노",
              type: "artist",
              uri: "spotify:artist:7IrDIIq3j04exsiF3Z7CPg",
            },
          ],
          disc_number: 1,
          duration_ms: 211251,
          explicit: false,
          external_ids: {
            isrc: "KRC531700031",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/2y6Ur97SRouk64dvHMMsbu",
          },
          href: "https://api.spotify.com/v1/tracks/2y6Ur97SRouk64dvHMMsbu",
          id: "2y6Ur97SRouk64dvHMMsbu",
          is_local: false,
          is_playable: true,
          name: "Boogie On & On",
          popularity: 42,
          preview_url:
            "https://p.scdn.co/mp3-preview/acf9da21c08daf140d5501cd6b42f8f4723dcab1?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 3,
          type: "track",
          uri: "spotify:track:2y6Ur97SRouk64dvHMMsbu",
        },
        played_at: "2024-01-04T16:05:31.156Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "album",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/4QDcs3XrA8uHUZ7Xt9Ytep",
                },
                href: "https://api.spotify.com/v1/artists/4QDcs3XrA8uHUZ7Xt9Ytep",
                id: "4QDcs3XrA8uHUZ7Xt9Ytep",
                name: "프라이머리",
                type: "artist",
                uri: "spotify:artist:4QDcs3XrA8uHUZ7Xt9Ytep",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/20MnU7TMGi4OEPkPZjZxYA",
            },
            href: "https://api.spotify.com/v1/albums/20MnU7TMGi4OEPkPZjZxYA",
            id: "20MnU7TMGi4OEPkPZjZxYA",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b27330b6adc29d752c16f25ff834",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e0230b6adc29d752c16f25ff834",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d0000485130b6adc29d752c16f25ff834",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Primary And The Messengers LP",
            release_date: "2012-10-31",
            release_date_precision: "day",
            total_tracks: 19,
            type: "album",
            uri: "spotify:album:20MnU7TMGi4OEPkPZjZxYA",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/4QDcs3XrA8uHUZ7Xt9Ytep",
              },
              href: "https://api.spotify.com/v1/artists/4QDcs3XrA8uHUZ7Xt9Ytep",
              id: "4QDcs3XrA8uHUZ7Xt9Ytep",
              name: "프라이머리",
              type: "artist",
              uri: "spotify:artist:4QDcs3XrA8uHUZ7Xt9Ytep",
            },
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/3vvgBPro7lDMdReL1Ct2Hx",
              },
              href: "https://api.spotify.com/v1/artists/3vvgBPro7lDMdReL1Ct2Hx",
              id: "3vvgBPro7lDMdReL1Ct2Hx",
              name: "최자",
              type: "artist",
              uri: "spotify:artist:3vvgBPro7lDMdReL1Ct2Hx",
            },
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/5HenzRvMtSrgtvU16XAoby",
              },
              href: "https://api.spotify.com/v1/artists/5HenzRvMtSrgtvU16XAoby",
              id: "5HenzRvMtSrgtvU16XAoby",
              name: "Zion.T",
              type: "artist",
              uri: "spotify:artist:5HenzRvMtSrgtvU16XAoby",
            },
          ],
          disc_number: 2,
          duration_ms: 194115,
          explicit: false,
          external_ids: {
            isrc: "KRB141200071",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/3y1Aq9UzyzhMGuVaS8i2oA",
          },
          href: "https://api.spotify.com/v1/tracks/3y1Aq9UzyzhMGuVaS8i2oA",
          id: "3y1Aq9UzyzhMGuVaS8i2oA",
          is_local: false,
          is_playable: true,
          name: "question mark (Feat. CHOIZA Of Dynamicduo, Zion.T)",
          popularity: 42,
          preview_url:
            "https://p.scdn.co/mp3-preview/bf0f5a702e1e4b57b7e61fb26351d44784e04215?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 2,
          type: "track",
          uri: "spotify:track:3y1Aq9UzyzhMGuVaS8i2oA",
        },
        played_at: "2024-01-04T16:01:59.563Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/5crpfIGj4lAUNuHYUY2TN9",
                },
                href: "https://api.spotify.com/v1/artists/5crpfIGj4lAUNuHYUY2TN9",
                id: "5crpfIGj4lAUNuHYUY2TN9",
                name: "경서예지",
                type: "artist",
                uri: "spotify:artist:5crpfIGj4lAUNuHYUY2TN9",
              },
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3WFFsW6pFOm0e2yVQLTYCX",
                },
                href: "https://api.spotify.com/v1/artists/3WFFsW6pFOm0e2yVQLTYCX",
                id: "3WFFsW6pFOm0e2yVQLTYCX",
                name: "Jeon Gunho",
                type: "artist",
                uri: "spotify:artist:3WFFsW6pFOm0e2yVQLTYCX",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/1QD2UJupusQ9zBsldpvS3d",
            },
            href: "https://api.spotify.com/v1/albums/1QD2UJupusQ9zBsldpvS3d",
            id: "1QD2UJupusQ9zBsldpvS3d",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273d22351424b334dd54c1c39cf",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02d22351424b334dd54c1c39cf",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851d22351424b334dd54c1c39cf",
                width: 64,
              },
            ],
            is_playable: true,
            name: "다정히 내 이름을 부르면 (경서예지 x 전건호)",
            release_date: "2021-05-19",
            release_date_precision: "day",
            total_tracks: 2,
            type: "album",
            uri: "spotify:album:1QD2UJupusQ9zBsldpvS3d",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/5crpfIGj4lAUNuHYUY2TN9",
              },
              href: "https://api.spotify.com/v1/artists/5crpfIGj4lAUNuHYUY2TN9",
              id: "5crpfIGj4lAUNuHYUY2TN9",
              name: "경서예지",
              type: "artist",
              uri: "spotify:artist:5crpfIGj4lAUNuHYUY2TN9",
            },
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/3WFFsW6pFOm0e2yVQLTYCX",
              },
              href: "https://api.spotify.com/v1/artists/3WFFsW6pFOm0e2yVQLTYCX",
              id: "3WFFsW6pFOm0e2yVQLTYCX",
              name: "Jeon Gunho",
              type: "artist",
              uri: "spotify:artist:3WFFsW6pFOm0e2yVQLTYCX",
            },
          ],
          disc_number: 1,
          duration_ms: 231338,
          explicit: false,
          external_ids: {
            isrc: "KRA382103901",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/0tgxvf4rqBBeEB54h0nnRD",
          },
          href: "https://api.spotify.com/v1/tracks/0tgxvf4rqBBeEB54h0nnRD",
          id: "0tgxvf4rqBBeEB54h0nnRD",
          is_local: false,
          is_playable: true,
          name: "다정히 내 이름을 부르면",
          popularity: 48,
          preview_url:
            "https://p.scdn.co/mp3-preview/74d3be17c8acce141c8687a5fa6717dac4f71bb1?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:0tgxvf4rqBBeEB54h0nnRD",
        },
        played_at: "2024-01-04T15:56:50.081Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6Ycj4hhpz2nOfsYCU1gHqR",
                },
                href: "https://api.spotify.com/v1/artists/6Ycj4hhpz2nOfsYCU1gHqR",
                id: "6Ycj4hhpz2nOfsYCU1gHqR",
                name: "D-Hack",
                type: "artist",
                uri: "spotify:artist:6Ycj4hhpz2nOfsYCU1gHqR",
              },
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/0J372uvAXbRjLFSoAVE2lp",
                },
                href: "https://api.spotify.com/v1/artists/0J372uvAXbRjLFSoAVE2lp",
                id: "0J372uvAXbRjLFSoAVE2lp",
                name: "PATEKO",
                type: "artist",
                uri: "spotify:artist:0J372uvAXbRjLFSoAVE2lp",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/0J1MR2hon6midgXF4kY1b8",
            },
            href: "https://api.spotify.com/v1/albums/0J1MR2hon6midgXF4kY1b8",
            id: "0J1MR2hon6midgXF4kY1b8",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b2734f10712c9170e737a7c212ce",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e024f10712c9170e737a7c212ce",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d000048514f10712c9170e737a7c212ce",
                width: 64,
              },
            ],
            is_playable: true,
            name: "OHAYO MY NIGHT",
            release_date: "2020-06-20",
            release_date_precision: "day",
            total_tracks: 1,
            type: "album",
            uri: "spotify:album:0J1MR2hon6midgXF4kY1b8",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/6Ycj4hhpz2nOfsYCU1gHqR",
              },
              href: "https://api.spotify.com/v1/artists/6Ycj4hhpz2nOfsYCU1gHqR",
              id: "6Ycj4hhpz2nOfsYCU1gHqR",
              name: "D-Hack",
              type: "artist",
              uri: "spotify:artist:6Ycj4hhpz2nOfsYCU1gHqR",
            },
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/0J372uvAXbRjLFSoAVE2lp",
              },
              href: "https://api.spotify.com/v1/artists/0J372uvAXbRjLFSoAVE2lp",
              id: "0J372uvAXbRjLFSoAVE2lp",
              name: "PATEKO",
              type: "artist",
              uri: "spotify:artist:0J372uvAXbRjLFSoAVE2lp",
            },
          ],
          disc_number: 1,
          duration_ms: 238736,
          explicit: false,
          external_ids: {
            isrc: "QZEKE2013840",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/4iJprGt1rt5iy0sxXXaRWn",
          },
          href: "https://api.spotify.com/v1/tracks/4iJprGt1rt5iy0sxXXaRWn",
          id: "4iJprGt1rt5iy0sxXXaRWn",
          is_local: false,
          is_playable: true,
          name: "OHAYO MY NIGHT",
          popularity: 45,
          preview_url:
            "https://p.scdn.co/mp3-preview/cb3626f414737b679f7a4d7274cd5b7f468502b8?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:4iJprGt1rt5iy0sxXXaRWn",
        },
        played_at: "2024-01-04T15:52:58.272Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/4Kxlr1PRlDKEB0ekOCyHgX",
                },
                href: "https://api.spotify.com/v1/artists/4Kxlr1PRlDKEB0ekOCyHgX",
                id: "4Kxlr1PRlDKEB0ekOCyHgX",
                name: "BIGBANG",
                type: "artist",
                uri: "spotify:artist:4Kxlr1PRlDKEB0ekOCyHgX",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/6b08mw1Ggz7UyVYas1iRgj",
            },
            href: "https://api.spotify.com/v1/albums/6b08mw1Ggz7UyVYas1iRgj",
            id: "6b08mw1Ggz7UyVYas1iRgj",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b2733058758c444837fa2fbbe382",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e023058758c444837fa2fbbe382",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d000048513058758c444837fa2fbbe382",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Tonight",
            release_date: "2011-02-24",
            release_date_precision: "day",
            total_tracks: 6,
            type: "album",
            uri: "spotify:album:6b08mw1Ggz7UyVYas1iRgj",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/4Kxlr1PRlDKEB0ekOCyHgX",
              },
              href: "https://api.spotify.com/v1/artists/4Kxlr1PRlDKEB0ekOCyHgX",
              id: "4Kxlr1PRlDKEB0ekOCyHgX",
              name: "BIGBANG",
              type: "artist",
              uri: "spotify:artist:4Kxlr1PRlDKEB0ekOCyHgX",
            },
          ],
          disc_number: 1,
          duration_ms: 219946,
          explicit: false,
          external_ids: {
            isrc: "KRA491100049",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/4mm23jt7cimDkeHu1VcS2v",
          },
          href: "https://api.spotify.com/v1/tracks/4mm23jt7cimDkeHu1VcS2v",
          id: "4mm23jt7cimDkeHu1VcS2v",
          is_local: false,
          is_playable: true,
          name: "Cafe",
          popularity: 43,
          preview_url:
            "https://p.scdn.co/mp3-preview/fe5f0b88a4831486fb6f2aab1eb827e66837ae0f?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 6,
          type: "track",
          uri: "spotify:track:4mm23jt7cimDkeHu1VcS2v",
        },
        played_at: "2024-01-04T15:48:59.239Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6dHoQP2ONf0e9DMH94Obo7",
                },
                href: "https://api.spotify.com/v1/artists/6dHoQP2ONf0e9DMH94Obo7",
                id: "6dHoQP2ONf0e9DMH94Obo7",
                name: "Supreme Team",
                type: "artist",
                uri: "spotify:artist:6dHoQP2ONf0e9DMH94Obo7",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/2RCmDJa0aD81Ob8bVvtDzv",
            },
            href: "https://api.spotify.com/v1/albums/2RCmDJa0aD81Ob8bVvtDzv",
            id: "2RCmDJa0aD81Ob8bVvtDzv",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273a106bab4d185834448da9540",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02a106bab4d185834448da9540",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851a106bab4d185834448da9540",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Supreme Team Guide to Excellent Adventure",
            release_date: "2009-07-14",
            release_date_precision: "day",
            total_tracks: 8,
            type: "album",
            uri: "spotify:album:2RCmDJa0aD81Ob8bVvtDzv",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/6dHoQP2ONf0e9DMH94Obo7",
              },
              href: "https://api.spotify.com/v1/artists/6dHoQP2ONf0e9DMH94Obo7",
              id: "6dHoQP2ONf0e9DMH94Obo7",
              name: "Supreme Team",
              type: "artist",
              uri: "spotify:artist:6dHoQP2ONf0e9DMH94Obo7",
            },
          ],
          disc_number: 1,
          duration_ms: 219053,
          explicit: false,
          external_ids: {
            isrc: "USA2P1341338",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/5B9LYQM9EBdzvVmQO3aQog",
          },
          href: "https://api.spotify.com/v1/tracks/5B9LYQM9EBdzvVmQO3aQog",
          id: "5B9LYQM9EBdzvVmQO3aQog",
          is_local: false,
          is_playable: true,
          name: "Supermagic",
          popularity: 24,
          preview_url:
            "https://p.scdn.co/mp3-preview/fbeb5c65d1401754df9485fb17275759bcf4e8ab?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 2,
          type: "track",
          uri: "spotify:track:5B9LYQM9EBdzvVmQO3aQog",
        },
        played_at: "2024-01-04T15:41:11.053Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7IrDIIq3j04exsiF3Z7CPg",
                },
                href: "https://api.spotify.com/v1/artists/7IrDIIq3j04exsiF3Z7CPg",
                id: "7IrDIIq3j04exsiF3Z7CPg",
                name: "빈지노",
                type: "artist",
                uri: "spotify:artist:7IrDIIq3j04exsiF3Z7CPg",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/6GzOG46xmgSfB0PQdsnMDU",
            },
            href: "https://api.spotify.com/v1/albums/6GzOG46xmgSfB0PQdsnMDU",
            id: "6GzOG46xmgSfB0PQdsnMDU",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273fce4d97a91b1d51a64ec8a97",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02fce4d97a91b1d51a64ec8a97",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851fce4d97a91b1d51a64ec8a97",
                width: 64,
              },
            ],
            is_playable: true,
            name: "24:26 (5th Anniversary Remaster Edition)",
            release_date: "2017-07-10",
            release_date_precision: "day",
            total_tracks: 9,
            type: "album",
            uri: "spotify:album:6GzOG46xmgSfB0PQdsnMDU",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/7IrDIIq3j04exsiF3Z7CPg",
              },
              href: "https://api.spotify.com/v1/artists/7IrDIIq3j04exsiF3Z7CPg",
              id: "7IrDIIq3j04exsiF3Z7CPg",
              name: "빈지노",
              type: "artist",
              uri: "spotify:artist:7IrDIIq3j04exsiF3Z7CPg",
            },
          ],
          disc_number: 1,
          duration_ms: 226612,
          explicit: false,
          external_ids: {
            isrc: "KRC531700032",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/5tEouf2s1SPwAIkOHnvWtQ",
          },
          href: "https://api.spotify.com/v1/tracks/5tEouf2s1SPwAIkOHnvWtQ",
          id: "5tEouf2s1SPwAIkOHnvWtQ",
          is_local: false,
          is_playable: true,
          name: "Aqua Man",
          popularity: 46,
          preview_url:
            "https://p.scdn.co/mp3-preview/9877b33e7eab1c7c23f3c5814d829f53eb5407ca?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 4,
          type: "track",
          uri: "spotify:track:5tEouf2s1SPwAIkOHnvWtQ",
        },
        played_at: "2024-01-04T15:36:35.138Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2dd5mrQZvg6SmahdgVKDzh",
                },
                href: "https://api.spotify.com/v1/artists/2dd5mrQZvg6SmahdgVKDzh",
                id: "2dd5mrQZvg6SmahdgVKDzh",
                name: "싸이",
                type: "artist",
                uri: "spotify:artist:2dd5mrQZvg6SmahdgVKDzh",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/0Nq7k5hqml23K1VlrEnLNR",
            },
            href: "https://api.spotify.com/v1/albums/0Nq7k5hqml23K1VlrEnLNR",
            id: "0Nq7k5hqml23K1VlrEnLNR",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b2738cacbdd7305b0651b4c0fec4",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e028cacbdd7305b0651b4c0fec4",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d000048518cacbdd7305b0651b4c0fec4",
                width: 64,
              },
            ],
            is_playable: true,
            name: "PSY SIX RULES, Pt. 1",
            release_date: "2012-07-15",
            release_date_precision: "day",
            total_tracks: 6,
            type: "album",
            uri: "spotify:album:0Nq7k5hqml23K1VlrEnLNR",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/2dd5mrQZvg6SmahdgVKDzh",
              },
              href: "https://api.spotify.com/v1/artists/2dd5mrQZvg6SmahdgVKDzh",
              id: "2dd5mrQZvg6SmahdgVKDzh",
              name: "싸이",
              type: "artist",
              uri: "spotify:artist:2dd5mrQZvg6SmahdgVKDzh",
            },
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/7MNyflLAWpaH0EPw1fdORD",
              },
              href: "https://api.spotify.com/v1/artists/7MNyflLAWpaH0EPw1fdORD",
              id: "7MNyflLAWpaH0EPw1fdORD",
              name: "박정현",
              type: "artist",
              uri: "spotify:artist:7MNyflLAWpaH0EPw1fdORD",
            },
          ],
          disc_number: 1,
          duration_ms: 243963,
          explicit: false,
          external_ids: {
            isrc: "KRA341205654",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/5Kbpcd3hOqu4ZRAJNAjIcg",
          },
          href: "https://api.spotify.com/v1/tracks/5Kbpcd3hOqu4ZRAJNAjIcg",
          id: "5Kbpcd3hOqu4ZRAJNAjIcg",
          is_local: false,
          is_playable: true,
          name: "What Would Have Been? (Feat. Lena Park)",
          popularity: 46,
          preview_url:
            "https://p.scdn.co/mp3-preview/ed34a7413955b6cf0594d60878f1e3542c01fbd8?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 5,
          type: "track",
          uri: "spotify:track:5Kbpcd3hOqu4ZRAJNAjIcg",
        },
        played_at: "2024-01-04T15:26:05.196Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6dHoQP2ONf0e9DMH94Obo7",
                },
                href: "https://api.spotify.com/v1/artists/6dHoQP2ONf0e9DMH94Obo7",
                id: "6dHoQP2ONf0e9DMH94Obo7",
                name: "Supreme Team",
                type: "artist",
                uri: "spotify:artist:6dHoQP2ONf0e9DMH94Obo7",
              },
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7n7p8oXuygFVSkrCO9FvAt",
                },
                href: "https://api.spotify.com/v1/artists/7n7p8oXuygFVSkrCO9FvAt",
                id: "7n7p8oXuygFVSkrCO9FvAt",
                name: "영준",
                type: "artist",
                uri: "spotify:artist:7n7p8oXuygFVSkrCO9FvAt",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/5MCWiknia0CVi71e67Fdzh",
            },
            href: "https://api.spotify.com/v1/albums/5MCWiknia0CVi71e67Fdzh",
            id: "5MCWiknia0CVi71e67Fdzh",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b27371caa4a66f508c09450d637d",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e0271caa4a66f508c09450d637d",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d0000485171caa4a66f508c09450d637d",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Ames Room",
            release_date: "2010-10-01",
            release_date_precision: "day",
            total_tracks: 5,
            type: "album",
            uri: "spotify:album:5MCWiknia0CVi71e67Fdzh",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/6dHoQP2ONf0e9DMH94Obo7",
              },
              href: "https://api.spotify.com/v1/artists/6dHoQP2ONf0e9DMH94Obo7",
              id: "6dHoQP2ONf0e9DMH94Obo7",
              name: "Supreme Team",
              type: "artist",
              uri: "spotify:artist:6dHoQP2ONf0e9DMH94Obo7",
            },
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/7n7p8oXuygFVSkrCO9FvAt",
              },
              href: "https://api.spotify.com/v1/artists/7n7p8oXuygFVSkrCO9FvAt",
              id: "7n7p8oXuygFVSkrCO9FvAt",
              name: "영준",
              type: "artist",
              uri: "spotify:artist:7n7p8oXuygFVSkrCO9FvAt",
            },
          ],
          disc_number: 1,
          duration_ms: 263079,
          explicit: false,
          external_ids: {
            isrc: "KRA381000915",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/5SQPTxNUunDOhBMOggDmX7",
          },
          href: "https://api.spotify.com/v1/tracks/5SQPTxNUunDOhBMOggDmX7",
          id: "5SQPTxNUunDOhBMOggDmX7",
          is_local: false,
          is_playable: true,
          name: "그땐 그땐 그땐",
          popularity: 41,
          preview_url:
            "https://p.scdn.co/mp3-preview/b03321308b6bdb15758b3eb2c24e62a58cc5387d?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:5SQPTxNUunDOhBMOggDmX7",
        },
        played_at: "2024-01-04T15:21:49.504Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "album",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
                },
                href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
                id: "1yNIb413Bmfs2ZBVuPp9kC",
                name: "Jack Stauber's Micropop",
                type: "artist",
                uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/1PzQlma9FcRRGwMDmJIUyX",
            },
            href: "https://api.spotify.com/v1/albums/1PzQlma9FcRRGwMDmJIUyX",
            id: "1PzQlma9FcRRGwMDmJIUyX",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b27348cc1333d5c15fbf25f7c49d",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e0248cc1333d5c15fbf25f7c49d",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d0000485148cc1333d5c15fbf25f7c49d",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Shop: A Pop Opera",
            release_date: "2020-03-08",
            release_date_precision: "day",
            total_tracks: 8,
            type: "album",
            uri: "spotify:album:1PzQlma9FcRRGwMDmJIUyX",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
              },
              href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
              id: "1yNIb413Bmfs2ZBVuPp9kC",
              name: "Jack Stauber's Micropop",
              type: "artist",
              uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
            },
          ],
          disc_number: 1,
          duration_ms: 56003,
          explicit: false,
          external_ids: {
            isrc: "QMEZE2021302",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/65vHYDVPMWlYMgLV2g1Gip",
          },
          href: "https://api.spotify.com/v1/tracks/65vHYDVPMWlYMgLV2g1Gip",
          id: "65vHYDVPMWlYMgLV2g1Gip",
          is_local: false,
          is_playable: true,
          name: "Paper Towels",
          popularity: 45,
          preview_url:
            "https://p.scdn.co/mp3-preview/1ed196ed409dc7b0dc5c53d5fdc8b273fec318d7?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 4,
          type: "track",
          uri: "spotify:track:65vHYDVPMWlYMgLV2g1Gip",
        },
        played_at: "2024-01-04T15:05:07.053Z",
        context: {
          type: "artist",
          href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
          external_urls: {
            spotify: "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
          },
          uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
        },
      },
      {
        track: {
          album: {
            album_type: "album",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
                },
                href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
                id: "1yNIb413Bmfs2ZBVuPp9kC",
                name: "Jack Stauber's Micropop",
                type: "artist",
                uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/1PzQlma9FcRRGwMDmJIUyX",
            },
            href: "https://api.spotify.com/v1/albums/1PzQlma9FcRRGwMDmJIUyX",
            id: "1PzQlma9FcRRGwMDmJIUyX",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b27348cc1333d5c15fbf25f7c49d",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e0248cc1333d5c15fbf25f7c49d",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d0000485148cc1333d5c15fbf25f7c49d",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Shop: A Pop Opera",
            release_date: "2020-03-08",
            release_date_precision: "day",
            total_tracks: 8,
            type: "album",
            uri: "spotify:album:1PzQlma9FcRRGwMDmJIUyX",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
              },
              href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
              id: "1yNIb413Bmfs2ZBVuPp9kC",
              name: "Jack Stauber's Micropop",
              type: "artist",
              uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
            },
          ],
          disc_number: 1,
          duration_ms: 55715,
          explicit: false,
          external_ids: {
            isrc: "QMEZE2021299",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/78VXkLNQNDNu1fp1SfNVRo",
          },
          href: "https://api.spotify.com/v1/tracks/78VXkLNQNDNu1fp1SfNVRo",
          id: "78VXkLNQNDNu1fp1SfNVRo",
          is_local: false,
          is_playable: true,
          name: "Bread",
          popularity: 47,
          preview_url:
            "https://p.scdn.co/mp3-preview/5fd314fe9c47147a577ef51748922ac668f1885c?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 3,
          type: "track",
          uri: "spotify:track:78VXkLNQNDNu1fp1SfNVRo",
        },
        played_at: "2024-01-04T15:04:10.840Z",
        context: {
          type: "artist",
          href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
          external_urls: {
            spotify: "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
          },
          uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
        },
      },
      {
        track: {
          album: {
            album_type: "album",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
                },
                href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
                id: "1yNIb413Bmfs2ZBVuPp9kC",
                name: "Jack Stauber's Micropop",
                type: "artist",
                uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/1PzQlma9FcRRGwMDmJIUyX",
            },
            href: "https://api.spotify.com/v1/albums/1PzQlma9FcRRGwMDmJIUyX",
            id: "1PzQlma9FcRRGwMDmJIUyX",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b27348cc1333d5c15fbf25f7c49d",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e0248cc1333d5c15fbf25f7c49d",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d0000485148cc1333d5c15fbf25f7c49d",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Shop: A Pop Opera",
            release_date: "2020-03-08",
            release_date_precision: "day",
            total_tracks: 8,
            type: "album",
            uri: "spotify:album:1PzQlma9FcRRGwMDmJIUyX",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
              },
              href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
              id: "1yNIb413Bmfs2ZBVuPp9kC",
              name: "Jack Stauber's Micropop",
              type: "artist",
              uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
            },
          ],
          disc_number: 1,
          duration_ms: 58261,
          explicit: false,
          external_ids: {
            isrc: "QMEZE2021298",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/1w4JPzTHAcMdAGzDLzXCjF",
          },
          href: "https://api.spotify.com/v1/tracks/1w4JPzTHAcMdAGzDLzXCjF",
          id: "1w4JPzTHAcMdAGzDLzXCjF",
          is_local: false,
          is_playable: true,
          name: "Milk",
          popularity: 57,
          preview_url:
            "https://p.scdn.co/mp3-preview/33b70dfa60b8788cae550713d8f01a94a32ee674?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 2,
          type: "track",
          uri: "spotify:track:1w4JPzTHAcMdAGzDLzXCjF",
        },
        played_at: "2024-01-04T15:03:14.720Z",
        context: {
          type: "artist",
          href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
          external_urls: {
            spotify: "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
          },
          uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
        },
      },
      {
        track: {
          album: {
            album_type: "album",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
                },
                href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
                id: "1yNIb413Bmfs2ZBVuPp9kC",
                name: "Jack Stauber's Micropop",
                type: "artist",
                uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/1PzQlma9FcRRGwMDmJIUyX",
            },
            href: "https://api.spotify.com/v1/albums/1PzQlma9FcRRGwMDmJIUyX",
            id: "1PzQlma9FcRRGwMDmJIUyX",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b27348cc1333d5c15fbf25f7c49d",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e0248cc1333d5c15fbf25f7c49d",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d0000485148cc1333d5c15fbf25f7c49d",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Shop: A Pop Opera",
            release_date: "2020-03-08",
            release_date_precision: "day",
            total_tracks: 8,
            type: "album",
            uri: "spotify:album:1PzQlma9FcRRGwMDmJIUyX",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
              },
              href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
              id: "1yNIb413Bmfs2ZBVuPp9kC",
              name: "Jack Stauber's Micropop",
              type: "artist",
              uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
            },
          ],
          disc_number: 1,
          duration_ms: 17951,
          explicit: false,
          external_ids: {
            isrc: "QMEZE2021297",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/1kftorJNhsWrtqjCJyte6j",
          },
          href: "https://api.spotify.com/v1/tracks/1kftorJNhsWrtqjCJyte6j",
          id: "1kftorJNhsWrtqjCJyte6j",
          is_local: false,
          is_playable: true,
          name: "Shop",
          popularity: 8,
          preview_url:
            "https://p.scdn.co/mp3-preview/748156dfb7b3e0e8ad8835f9f2daeab731d5a0c5?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:1kftorJNhsWrtqjCJyte6j",
        },
        played_at: "2024-01-04T15:02:16.182Z",
        context: {
          type: "artist",
          href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
          external_urls: {
            spotify: "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
          },
          uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
        },
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
                },
                href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
                id: "1yNIb413Bmfs2ZBVuPp9kC",
                name: "Jack Stauber's Micropop",
                type: "artist",
                uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/5fj1GdFNLbru8pCOqNmLaK",
            },
            href: "https://api.spotify.com/v1/albums/5fj1GdFNLbru8pCOqNmLaK",
            id: "5fj1GdFNLbru8pCOqNmLaK",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273f8cb08215f05ab786e2e22be",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02f8cb08215f05ab786e2e22be",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851f8cb08215f05ab786e2e22be",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Dinner Is Not Over / There's Something Happening / Keyman / Cupid",
            release_date: "2020-02-07",
            release_date_precision: "day",
            total_tracks: 4,
            type: "album",
            uri: "spotify:album:5fj1GdFNLbru8pCOqNmLaK",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
              },
              href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
              id: "1yNIb413Bmfs2ZBVuPp9kC",
              name: "Jack Stauber's Micropop",
              type: "artist",
              uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
            },
          ],
          disc_number: 1,
          duration_ms: 280350,
          explicit: false,
          external_ids: {
            isrc: "QZFYZ2005194",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/3W2s12opBKPQrUkTyj98MI",
          },
          href: "https://api.spotify.com/v1/tracks/3W2s12opBKPQrUkTyj98MI",
          id: "3W2s12opBKPQrUkTyj98MI",
          is_local: false,
          is_playable: true,
          name: "Dinner Is Not Over",
          popularity: 59,
          preview_url:
            "https://p.scdn.co/mp3-preview/cabb5a7150b08555d42b61d873270f61fc0ec87f?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:3W2s12opBKPQrUkTyj98MI",
        },
        played_at: "2024-01-04T15:01:57.916Z",
        context: {
          type: "artist",
          href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
          external_urls: {
            spotify: "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
          },
          uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
        },
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
                },
                href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
                id: "1yNIb413Bmfs2ZBVuPp9kC",
                name: "Jack Stauber's Micropop",
                type: "artist",
                uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/1AaAZVHtUWpJuLpq96VUuQ",
            },
            href: "https://api.spotify.com/v1/albums/1AaAZVHtUWpJuLpq96VUuQ",
            id: "1AaAZVHtUWpJuLpq96VUuQ",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273a5566f88ef20c171cee29578",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02a5566f88ef20c171cee29578",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851a5566f88ef20c171cee29578",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Baby Hotline / Tea Errors",
            release_date: "2019-03-21",
            release_date_precision: "day",
            total_tracks: 2,
            type: "album",
            uri: "spotify:album:1AaAZVHtUWpJuLpq96VUuQ",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
              },
              href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
              id: "1yNIb413Bmfs2ZBVuPp9kC",
              name: "Jack Stauber's Micropop",
              type: "artist",
              uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
            },
          ],
          disc_number: 1,
          duration_ms: 230019,
          explicit: false,
          external_ids: {
            isrc: "QZES51978189",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/4DdKpYcyTqDpVOiJuT894E",
          },
          href: "https://api.spotify.com/v1/tracks/4DdKpYcyTqDpVOiJuT894E",
          id: "4DdKpYcyTqDpVOiJuT894E",
          is_local: false,
          is_playable: true,
          name: "Tea Errors",
          popularity: 59,
          preview_url:
            "https://p.scdn.co/mp3-preview/2d58ad487cd5a91219f3682c377400218e82d4b1?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 2,
          type: "track",
          uri: "spotify:track:4DdKpYcyTqDpVOiJuT894E",
        },
        played_at: "2024-01-04T14:57:17.277Z",
        context: {
          type: "artist",
          href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
          external_urls: {
            spotify: "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
          },
          uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
        },
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
                },
                href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
                id: "1yNIb413Bmfs2ZBVuPp9kC",
                name: "Jack Stauber's Micropop",
                type: "artist",
                uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/5fj1GdFNLbru8pCOqNmLaK",
            },
            href: "https://api.spotify.com/v1/albums/5fj1GdFNLbru8pCOqNmLaK",
            id: "5fj1GdFNLbru8pCOqNmLaK",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273f8cb08215f05ab786e2e22be",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02f8cb08215f05ab786e2e22be",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851f8cb08215f05ab786e2e22be",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Dinner Is Not Over / There's Something Happening / Keyman / Cupid",
            release_date: "2020-02-07",
            release_date_precision: "day",
            total_tracks: 4,
            type: "album",
            uri: "spotify:album:5fj1GdFNLbru8pCOqNmLaK",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
              },
              href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
              id: "1yNIb413Bmfs2ZBVuPp9kC",
              name: "Jack Stauber's Micropop",
              type: "artist",
              uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
            },
          ],
          disc_number: 1,
          duration_ms: 185503,
          explicit: false,
          external_ids: {
            isrc: "QZFYZ2005195",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/5Q7X2ddA5TjbfYe5FM3WZQ",
          },
          href: "https://api.spotify.com/v1/tracks/5Q7X2ddA5TjbfYe5FM3WZQ",
          id: "5Q7X2ddA5TjbfYe5FM3WZQ",
          is_local: false,
          is_playable: true,
          name: "There's Something Happening",
          popularity: 61,
          preview_url:
            "https://p.scdn.co/mp3-preview/f5c95b4f6d736a68c92f19265b8a710e5d5ee119?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 2,
          type: "track",
          uri: "spotify:track:5Q7X2ddA5TjbfYe5FM3WZQ",
        },
        played_at: "2024-01-04T14:53:26.904Z",
        context: {
          type: "artist",
          href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
          external_urls: {
            spotify: "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
          },
          uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
        },
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
                },
                href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
                id: "1yNIb413Bmfs2ZBVuPp9kC",
                name: "Jack Stauber's Micropop",
                type: "artist",
                uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/45WofTIygcH2QIJq07lMy1",
            },
            href: "https://api.spotify.com/v1/albums/45WofTIygcH2QIJq07lMy1",
            id: "45WofTIygcH2QIJq07lMy1",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273ed163334ca27ba8a7c1c1df1",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02ed163334ca27ba8a7c1c1df1",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851ed163334ca27ba8a7c1c1df1",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Cheeseburger Family / Fighter",
            release_date: "2018-08-06",
            release_date_precision: "day",
            total_tracks: 2,
            type: "album",
            uri: "spotify:album:45WofTIygcH2QIJq07lMy1",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
              },
              href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
              id: "1yNIb413Bmfs2ZBVuPp9kC",
              name: "Jack Stauber's Micropop",
              type: "artist",
              uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
            },
          ],
          disc_number: 1,
          duration_ms: 244811,
          explicit: false,
          external_ids: {
            isrc: "QZDA71841892",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/7oMVBM1xAwavu697KyBQUY",
          },
          href: "https://api.spotify.com/v1/tracks/7oMVBM1xAwavu697KyBQUY",
          id: "7oMVBM1xAwavu697KyBQUY",
          is_local: false,
          is_playable: true,
          name: "Fighter",
          popularity: 61,
          preview_url:
            "https://p.scdn.co/mp3-preview/1bc877d8966f6ad5663a83219009207f578438a6?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 2,
          type: "track",
          uri: "spotify:track:7oMVBM1xAwavu697KyBQUY",
        },
        played_at: "2024-01-04T14:50:21.031Z",
        context: {
          type: "artist",
          href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
          external_urls: {
            spotify: "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
          },
          uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
        },
      },
      {
        track: {
          album: {
            album_type: "album",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
                },
                href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
                id: "1yNIb413Bmfs2ZBVuPp9kC",
                name: "Jack Stauber's Micropop",
                type: "artist",
                uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/1yY9R0IjLXGhf3aPb6Y63k",
            },
            href: "https://api.spotify.com/v1/albums/1yY9R0IjLXGhf3aPb6Y63k",
            id: "1yY9R0IjLXGhf3aPb6Y63k",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b27381315fc54ae8c2da80dd722f",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e0281315fc54ae8c2da80dd722f",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d0000485181315fc54ae8c2da80dd722f",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Micropop",
            release_date: "2019-05-30",
            release_date_precision: "day",
            total_tracks: 99,
            type: "album",
            uri: "spotify:album:1yY9R0IjLXGhf3aPb6Y63k",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
              },
              href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
              id: "1yNIb413Bmfs2ZBVuPp9kC",
              name: "Jack Stauber's Micropop",
              type: "artist",
              uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
            },
          ],
          disc_number: 1,
          duration_ms: 39591,
          explicit: false,
          external_ids: {
            isrc: "QMEZE1935906",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/57YgVR1hxgSVPMhI3ckK92",
          },
          href: "https://api.spotify.com/v1/tracks/57YgVR1hxgSVPMhI3ckK92",
          id: "57YgVR1hxgSVPMhI3ckK92",
          is_local: false,
          is_playable: true,
          name: "Choice",
          popularity: 64,
          preview_url:
            "https://p.scdn.co/mp3-preview/a1aaec9b0192eae9b4ce7b8a12f994727843e7df?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 9,
          type: "track",
          uri: "spotify:track:57YgVR1hxgSVPMhI3ckK92",
        },
        played_at: "2024-01-04T14:46:15.858Z",
        context: {
          type: "artist",
          href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
          external_urls: {
            spotify: "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
          },
          uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
        },
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
                },
                href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
                id: "1yNIb413Bmfs2ZBVuPp9kC",
                name: "Jack Stauber's Micropop",
                type: "artist",
                uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/4MRCHFNTaIipvwa7KGpaWF",
            },
            href: "https://api.spotify.com/v1/albums/4MRCHFNTaIipvwa7KGpaWF",
            id: "4MRCHFNTaIipvwa7KGpaWF",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273ca8ca1a02032c0943de6e136",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02ca8ca1a02032c0943de6e136",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851ca8ca1a02032c0943de6e136",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Inchman / Two Time",
            release_date: "2018-06-04",
            release_date_precision: "day",
            total_tracks: 2,
            type: "album",
            uri: "spotify:album:4MRCHFNTaIipvwa7KGpaWF",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
              },
              href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
              id: "1yNIb413Bmfs2ZBVuPp9kC",
              name: "Jack Stauber's Micropop",
              type: "artist",
              uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
            },
          ],
          disc_number: 1,
          duration_ms: 139850,
          explicit: false,
          external_ids: {
            isrc: "QZB4J1892556",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/7JTGwb6ug0z15F5roNLE0s",
          },
          href: "https://api.spotify.com/v1/tracks/7JTGwb6ug0z15F5roNLE0s",
          id: "7JTGwb6ug0z15F5roNLE0s",
          is_local: false,
          is_playable: true,
          name: "Two Time",
          popularity: 66,
          preview_url:
            "https://p.scdn.co/mp3-preview/58a376ed48a60b20e83d556134a2e3a8f2da5b29?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 2,
          type: "track",
          uri: "spotify:track:7JTGwb6ug0z15F5roNLE0s",
        },
        played_at: "2024-01-04T14:45:35.993Z",
        context: {
          type: "artist",
          href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
          external_urls: {
            spotify: "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
          },
          uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
        },
      },
      {
        track: {
          album: {
            album_type: "album",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
                },
                href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
                id: "1yNIb413Bmfs2ZBVuPp9kC",
                name: "Jack Stauber's Micropop",
                type: "artist",
                uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/1yY9R0IjLXGhf3aPb6Y63k",
            },
            href: "https://api.spotify.com/v1/albums/1yY9R0IjLXGhf3aPb6Y63k",
            id: "1yY9R0IjLXGhf3aPb6Y63k",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b27381315fc54ae8c2da80dd722f",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e0281315fc54ae8c2da80dd722f",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d0000485181315fc54ae8c2da80dd722f",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Micropop",
            release_date: "2019-05-30",
            release_date_precision: "day",
            total_tracks: 99,
            type: "album",
            uri: "spotify:album:1yY9R0IjLXGhf3aPb6Y63k",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
              },
              href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
              id: "1yNIb413Bmfs2ZBVuPp9kC",
              name: "Jack Stauber's Micropop",
              type: "artist",
              uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
            },
          ],
          disc_number: 1,
          duration_ms: 79942,
          explicit: false,
          external_ids: {
            isrc: "QMEZE1935909",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/2dNKGg5Nn1JNVH1GRd41bp",
          },
          href: "https://api.spotify.com/v1/tracks/2dNKGg5Nn1JNVH1GRd41bp",
          id: "2dNKGg5Nn1JNVH1GRd41bp",
          is_local: false,
          is_playable: true,
          name: "Just Take My Wallet",
          popularity: 70,
          preview_url:
            "https://p.scdn.co/mp3-preview/179bb299fe12f59c97cce967c2c538e77759a161?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 12,
          type: "track",
          uri: "spotify:track:2dNKGg5Nn1JNVH1GRd41bp",
        },
        played_at: "2024-01-04T13:30:50.985Z",
        context: {
          type: "artist",
          href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
          external_urls: {
            spotify: "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
          },
          uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
        },
      },
      {
        track: {
          album: {
            album_type: "album",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
                },
                href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
                id: "1yNIb413Bmfs2ZBVuPp9kC",
                name: "Jack Stauber's Micropop",
                type: "artist",
                uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/1PzQlma9FcRRGwMDmJIUyX",
            },
            href: "https://api.spotify.com/v1/albums/1PzQlma9FcRRGwMDmJIUyX",
            id: "1PzQlma9FcRRGwMDmJIUyX",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b27348cc1333d5c15fbf25f7c49d",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e0248cc1333d5c15fbf25f7c49d",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d0000485148cc1333d5c15fbf25f7c49d",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Shop: A Pop Opera",
            release_date: "2020-03-08",
            release_date_precision: "day",
            total_tracks: 8,
            type: "album",
            uri: "spotify:album:1PzQlma9FcRRGwMDmJIUyX",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
              },
              href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
              id: "1yNIb413Bmfs2ZBVuPp9kC",
              name: "Jack Stauber's Micropop",
              type: "artist",
              uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
            },
          ],
          disc_number: 1,
          duration_ms: 58868,
          explicit: false,
          external_ids: {
            isrc: "QMEZE2021309",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/2zmo93xTzKTP0lztR9iy9H",
          },
          href: "https://api.spotify.com/v1/tracks/2zmo93xTzKTP0lztR9iy9H",
          id: "2zmo93xTzKTP0lztR9iy9H",
          is_local: false,
          is_playable: true,
          name: "Coffee",
          popularity: 71,
          preview_url:
            "https://p.scdn.co/mp3-preview/67583afcce5102a96741bb6a8ee5b5644e150097?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 6,
          type: "track",
          uri: "spotify:track:2zmo93xTzKTP0lztR9iy9H",
        },
        played_at: "2024-01-04T13:29:30.625Z",
        context: {
          type: "artist",
          href: "https://api.spotify.com/v1/artists/1yNIb413Bmfs2ZBVuPp9kC",
          external_urls: {
            spotify: "https://open.spotify.com/artist/1yNIb413Bmfs2ZBVuPp9kC",
          },
          uri: "spotify:artist:1yNIb413Bmfs2ZBVuPp9kC",
        },
      },
      {
        track: {
          album: {
            album_type: "album",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX",
                },
                href: "https://api.spotify.com/v1/artists/3Nrfpe0tUJi4K4DXYWgMUX",
                id: "3Nrfpe0tUJi4K4DXYWgMUX",
                name: "방탄소년단",
                type: "artist",
                uri: "spotify:artist:3Nrfpe0tUJi4K4DXYWgMUX",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/3sYlurbYenuPBS7EGTiTZh",
            },
            href: "https://api.spotify.com/v1/albums/3sYlurbYenuPBS7EGTiTZh",
            id: "3sYlurbYenuPBS7EGTiTZh",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273da4d50ff045b2a463f56035a",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02da4d50ff045b2a463f56035a",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851da4d50ff045b2a463f56035a",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Skool Luv Affair",
            release_date: "2014-02-12",
            release_date_precision: "day",
            total_tracks: 10,
            type: "album",
            uri: "spotify:album:3sYlurbYenuPBS7EGTiTZh",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX",
              },
              href: "https://api.spotify.com/v1/artists/3Nrfpe0tUJi4K4DXYWgMUX",
              id: "3Nrfpe0tUJi4K4DXYWgMUX",
              name: "방탄소년단",
              type: "artist",
              uri: "spotify:artist:3Nrfpe0tUJi4K4DXYWgMUX",
            },
          ],
          disc_number: 1,
          duration_ms: 239469,
          explicit: false,
          external_ids: {
            isrc: "KRA341404055",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/75SqzI9rTr3MLYaWROLIN8",
          },
          href: "https://api.spotify.com/v1/tracks/75SqzI9rTr3MLYaWROLIN8",
          id: "75SqzI9rTr3MLYaWROLIN8",
          is_local: false,
          is_playable: true,
          name: "하루만",
          popularity: 30,
          preview_url:
            "https://p.scdn.co/mp3-preview/b85cf0429d7c933b36ef5a755ef78582f6595cf2?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 5,
          type: "track",
          uri: "spotify:track:75SqzI9rTr3MLYaWROLIN8",
        },
        played_at: "2024-01-03T16:26:00.717Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "album",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7f4ignuCJhLXfZ9giKT7rH",
                },
                href: "https://api.spotify.com/v1/artists/7f4ignuCJhLXfZ9giKT7rH",
                id: "7f4ignuCJhLXfZ9giKT7rH",
                name: "NCT 127",
                type: "artist",
                uri: "spotify:artist:7f4ignuCJhLXfZ9giKT7rH",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/7sf7G0C6NuW8GjQbWwJlGk",
            },
            href: "https://api.spotify.com/v1/albums/7sf7G0C6NuW8GjQbWwJlGk",
            id: "7sf7G0C6NuW8GjQbWwJlGk",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273b490993919b0c4c0dab29b17",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02b490993919b0c4c0dab29b17",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851b490993919b0c4c0dab29b17",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Sticker - The 3rd Album",
            release_date: "2021-09-17",
            release_date_precision: "day",
            total_tracks: 11,
            type: "album",
            uri: "spotify:album:7sf7G0C6NuW8GjQbWwJlGk",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/7f4ignuCJhLXfZ9giKT7rH",
              },
              href: "https://api.spotify.com/v1/artists/7f4ignuCJhLXfZ9giKT7rH",
              id: "7f4ignuCJhLXfZ9giKT7rH",
              name: "NCT 127",
              type: "artist",
              uri: "spotify:artist:7f4ignuCJhLXfZ9giKT7rH",
            },
          ],
          disc_number: 1,
          duration_ms: 227773,
          explicit: false,
          external_ids: {
            isrc: "KRA302100278",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/4bEa9VAnyVJWBxOUyVvzie",
          },
          href: "https://api.spotify.com/v1/tracks/4bEa9VAnyVJWBxOUyVvzie",
          id: "4bEa9VAnyVJWBxOUyVvzie",
          is_local: false,
          is_playable: true,
          name: "Sticker",
          popularity: 54,
          preview_url:
            "https://p.scdn.co/mp3-preview/15dd68cefdf19dda11587316c385daa559653fea?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:4bEa9VAnyVJWBxOUyVvzie",
        },
        played_at: "2024-01-03T16:22:09.567Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2jOm3cYujQx6o1dxuiuqaX",
                },
                href: "https://api.spotify.com/v1/artists/2jOm3cYujQx6o1dxuiuqaX",
                id: "2jOm3cYujQx6o1dxuiuqaX",
                name: "RIIZE",
                type: "artist",
                uri: "spotify:artist:2jOm3cYujQx6o1dxuiuqaX",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/6mYpshqw0Y8pQTT6iRX8s1",
            },
            href: "https://api.spotify.com/v1/albums/6mYpshqw0Y8pQTT6iRX8s1",
            id: "6mYpshqw0Y8pQTT6iRX8s1",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273de06b9790ac6c49ff680cf70",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02de06b9790ac6c49ff680cf70",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851de06b9790ac6c49ff680cf70",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Memories",
            release_date: "2023-08-21",
            release_date_precision: "day",
            total_tracks: 1,
            type: "album",
            uri: "spotify:album:6mYpshqw0Y8pQTT6iRX8s1",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/2jOm3cYujQx6o1dxuiuqaX",
              },
              href: "https://api.spotify.com/v1/artists/2jOm3cYujQx6o1dxuiuqaX",
              id: "2jOm3cYujQx6o1dxuiuqaX",
              name: "RIIZE",
              type: "artist",
              uri: "spotify:artist:2jOm3cYujQx6o1dxuiuqaX",
            },
          ],
          disc_number: 1,
          duration_ms: 178013,
          explicit: false,
          external_ids: {},
          external_urls: {
            spotify: "https://open.spotify.com/track/7egcmrxRDee6C5M3AtXZ7L",
          },
          href: "https://api.spotify.com/v1/tracks/7egcmrxRDee6C5M3AtXZ7L",
          id: "7egcmrxRDee6C5M3AtXZ7L",
          is_local: false,
          is_playable: true,
          name: "Memories",
          popularity: 68,
          preview_url:
            "https://p.scdn.co/mp3-preview/10cbe5e34ed3a28805e51ce96e3093d14598f01e?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:7egcmrxRDee6C5M3AtXZ7L",
        },
        played_at: "2024-01-03T16:11:02.819Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1SIocsqdEefUTE6XKGUiVS",
                },
                href: "https://api.spotify.com/v1/artists/1SIocsqdEefUTE6XKGUiVS",
                id: "1SIocsqdEefUTE6XKGUiVS",
                name: "BABYMONSTER",
                type: "artist",
                uri: "spotify:artist:1SIocsqdEefUTE6XKGUiVS",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/2CSQuvvt3XHLDX36O3nRv7",
            },
            href: "https://api.spotify.com/v1/albums/2CSQuvvt3XHLDX36O3nRv7",
            id: "2CSQuvvt3XHLDX36O3nRv7",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b27324e7d3f6bcc7f5594638a4f0",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e0224e7d3f6bcc7f5594638a4f0",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d0000485124e7d3f6bcc7f5594638a4f0",
                width: 64,
              },
            ],
            is_playable: true,
            name: "BABYMONSTER Debut Digital Single [BATTER UP]",
            release_date: "2023-11-27",
            release_date_precision: "day",
            total_tracks: 1,
            type: "album",
            uri: "spotify:album:2CSQuvvt3XHLDX36O3nRv7",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1SIocsqdEefUTE6XKGUiVS",
              },
              href: "https://api.spotify.com/v1/artists/1SIocsqdEefUTE6XKGUiVS",
              id: "1SIocsqdEefUTE6XKGUiVS",
              name: "BABYMONSTER",
              type: "artist",
              uri: "spotify:artist:1SIocsqdEefUTE6XKGUiVS",
            },
          ],
          disc_number: 1,
          duration_ms: 188179,
          explicit: false,
          external_ids: {
            isrc: "KRA402300048",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/3VBj0lzjmhTzVFPEDOjNCG",
          },
          href: "https://api.spotify.com/v1/tracks/3VBj0lzjmhTzVFPEDOjNCG",
          id: "3VBj0lzjmhTzVFPEDOjNCG",
          is_local: false,
          is_playable: true,
          name: "BATTER UP",
          popularity: 85,
          preview_url:
            "https://p.scdn.co/mp3-preview/ac4566a780b8143deecef8d5a85c8166009dbfcc?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:3VBj0lzjmhTzVFPEDOjNCG",
        },
        played_at: "2024-01-03T16:08:04.622Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1gBUSTR3TyDdTVFIaQnc02",
                },
                href: "https://api.spotify.com/v1/artists/1gBUSTR3TyDdTVFIaQnc02",
                id: "1gBUSTR3TyDdTVFIaQnc02",
                name: "NCT DREAM",
                type: "artist",
                uri: "spotify:artist:1gBUSTR3TyDdTVFIaQnc02",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/6lqazNXadymQLwUh41qW2K",
            },
            href: "https://api.spotify.com/v1/albums/6lqazNXadymQLwUh41qW2K",
            id: "6lqazNXadymQLwUh41qW2K",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b27358a75e46b114389a2fe762f6",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e0258a75e46b114389a2fe762f6",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d0000485158a75e46b114389a2fe762f6",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Candy - Winter Special Mini Album",
            release_date: "2022-12-16",
            release_date_precision: "day",
            total_tracks: 6,
            type: "album",
            uri: "spotify:album:6lqazNXadymQLwUh41qW2K",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1gBUSTR3TyDdTVFIaQnc02",
              },
              href: "https://api.spotify.com/v1/artists/1gBUSTR3TyDdTVFIaQnc02",
              id: "1gBUSTR3TyDdTVFIaQnc02",
              name: "NCT DREAM",
              type: "artist",
              uri: "spotify:artist:1gBUSTR3TyDdTVFIaQnc02",
            },
          ],
          disc_number: 1,
          duration_ms: 217066,
          explicit: false,
          external_ids: {
            isrc: "KRA302200259",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/27bIik73QCu8Xzt3xpG1bI",
          },
          href: "https://api.spotify.com/v1/tracks/27bIik73QCu8Xzt3xpG1bI",
          id: "27bIik73QCu8Xzt3xpG1bI",
          is_local: false,
          is_playable: true,
          name: "Candy",
          popularity: 74,
          preview_url:
            "https://p.scdn.co/mp3-preview/a970bbec2161d4d336ff03424771cf52e2674821?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:27bIik73QCu8Xzt3xpG1bI",
        },
        played_at: "2024-01-03T16:04:55.979Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "album",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3qNVuliS40BLgXGxhdBdqu",
                },
                href: "https://api.spotify.com/v1/artists/3qNVuliS40BLgXGxhdBdqu",
                id: "3qNVuliS40BLgXGxhdBdqu",
                name: "태연",
                type: "artist",
                uri: "spotify:artist:3qNVuliS40BLgXGxhdBdqu",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/7i2YLTVQ0dyngRuUqtGmr9",
            },
            href: "https://api.spotify.com/v1/albums/7i2YLTVQ0dyngRuUqtGmr9",
            id: "7i2YLTVQ0dyngRuUqtGmr9",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273034c3a8ba89c6a5ecfda3175",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02034c3a8ba89c6a5ecfda3175",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851034c3a8ba89c6a5ecfda3175",
                width: 64,
              },
            ],
            is_playable: true,
            name: "INVU - The 3rd Album",
            release_date: "2022-02-14",
            release_date_precision: "day",
            total_tracks: 13,
            type: "album",
            uri: "spotify:album:7i2YLTVQ0dyngRuUqtGmr9",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/3qNVuliS40BLgXGxhdBdqu",
              },
              href: "https://api.spotify.com/v1/artists/3qNVuliS40BLgXGxhdBdqu",
              id: "3qNVuliS40BLgXGxhdBdqu",
              name: "태연",
              type: "artist",
              uri: "spotify:artist:3qNVuliS40BLgXGxhdBdqu",
            },
          ],
          disc_number: 1,
          duration_ms: 204973,
          explicit: false,
          external_ids: {
            isrc: "KRA302200026",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/7rXcCpIAoOUCydkVDMcoPV",
          },
          href: "https://api.spotify.com/v1/tracks/7rXcCpIAoOUCydkVDMcoPV",
          id: "7rXcCpIAoOUCydkVDMcoPV",
          is_local: false,
          is_playable: true,
          name: "INVU",
          popularity: 71,
          preview_url:
            "https://p.scdn.co/mp3-preview/e9590f3964930840c71bf33f7132f51b147baf63?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:7rXcCpIAoOUCydkVDMcoPV",
        },
        played_at: "2024-01-03T16:01:18.797Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "album",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/48eO052eSDcn8aTxiv6QaG",
                },
                href: "https://api.spotify.com/v1/artists/48eO052eSDcn8aTxiv6QaG",
                id: "48eO052eSDcn8aTxiv6QaG",
                name: "NCT",
                type: "artist",
                uri: "spotify:artist:48eO052eSDcn8aTxiv6QaG",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/1rGpCbxrR8efs4nMPdUj1q",
            },
            href: "https://api.spotify.com/v1/albums/1rGpCbxrR8efs4nMPdUj1q",
            id: "1rGpCbxrR8efs4nMPdUj1q",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b2736db6b8f9ddadc7503eaf4ae8",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e026db6b8f9ddadc7503eaf4ae8",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d000048516db6b8f9ddadc7503eaf4ae8",
                width: 64,
              },
            ],
            is_playable: true,
            name: "NCT RESONANCE Pt. 1 - The 2nd Album",
            release_date: "2020-10-12",
            release_date_precision: "day",
            total_tracks: 13,
            type: "album",
            uri: "spotify:album:1rGpCbxrR8efs4nMPdUj1q",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/3paGCCtX1Xr4Gx53mSeZuQ",
              },
              href: "https://api.spotify.com/v1/artists/3paGCCtX1Xr4Gx53mSeZuQ",
              id: "3paGCCtX1Xr4Gx53mSeZuQ",
              name: "NCT U",
              type: "artist",
              uri: "spotify:artist:3paGCCtX1Xr4Gx53mSeZuQ",
            },
          ],
          disc_number: 1,
          duration_ms: 229400,
          explicit: false,
          external_ids: {
            isrc: "KRA302000484",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/1Q5SpQeocfNXefx76svqkl",
          },
          href: "https://api.spotify.com/v1/tracks/1Q5SpQeocfNXefx76svqkl",
          id: "1Q5SpQeocfNXefx76svqkl",
          is_local: false,
          is_playable: true,
          name: "Make A Wish (Birthday Song)",
          popularity: 64,
          preview_url:
            "https://p.scdn.co/mp3-preview/c5a64a918e191470c35c8a3ddecb19f174005c27?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:1Q5SpQeocfNXefx76svqkl",
        },
        played_at: "2024-01-03T15:57:53.370Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6RHTUrRF63xao58xh9FXYJ",
                },
                href: "https://api.spotify.com/v1/artists/6RHTUrRF63xao58xh9FXYJ",
                id: "6RHTUrRF63xao58xh9FXYJ",
                name: "IVE",
                type: "artist",
                uri: "spotify:artist:6RHTUrRF63xao58xh9FXYJ",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/1BxRutqDtvMJfiovw76gxe",
            },
            href: "https://api.spotify.com/v1/albums/1BxRutqDtvMJfiovw76gxe",
            id: "1BxRutqDtvMJfiovw76gxe",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b2738c475998f5005d0a339b1f0d",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e028c475998f5005d0a339b1f0d",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d000048518c475998f5005d0a339b1f0d",
                width: 64,
              },
            ],
            is_playable: true,
            name: "I WANT",
            release_date: "2023-07-13",
            release_date_precision: "day",
            total_tracks: 1,
            type: "album",
            uri: "spotify:album:1BxRutqDtvMJfiovw76gxe",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/6RHTUrRF63xao58xh9FXYJ",
              },
              href: "https://api.spotify.com/v1/artists/6RHTUrRF63xao58xh9FXYJ",
              id: "6RHTUrRF63xao58xh9FXYJ",
              name: "IVE",
              type: "artist",
              uri: "spotify:artist:6RHTUrRF63xao58xh9FXYJ",
            },
          ],
          disc_number: 1,
          duration_ms: 180626,
          explicit: false,
          external_ids: {
            isrc: "KRA382318567",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/1Xnha5ko8j7yY8O3ATe0Vs",
          },
          href: "https://api.spotify.com/v1/tracks/1Xnha5ko8j7yY8O3ATe0Vs",
          id: "1Xnha5ko8j7yY8O3ATe0Vs",
          is_local: false,
          is_playable: true,
          name: "I WANT",
          popularity: 65,
          preview_url:
            "https://p.scdn.co/mp3-preview/f51f02387be182b05f1563b1d611c764d43bb4c4?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:1Xnha5ko8j7yY8O3ATe0Vs",
        },
        played_at: "2024-01-03T15:54:03.713Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2AfmfGFbe0A0WsTYm0SDTx",
                },
                href: "https://api.spotify.com/v1/artists/2AfmfGFbe0A0WsTYm0SDTx",
                id: "2AfmfGFbe0A0WsTYm0SDTx",
                name: "(여자)아이들",
                type: "artist",
                uri: "spotify:artist:2AfmfGFbe0A0WsTYm0SDTx",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/2cBuoAocFtOZU31Tk6UmTt",
            },
            href: "https://api.spotify.com/v1/albums/2cBuoAocFtOZU31Tk6UmTt",
            id: "2cBuoAocFtOZU31Tk6UmTt",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b27357de3da10da259d0a19a81b4",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e0257de3da10da259d0a19a81b4",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d0000485157de3da10da259d0a19a81b4",
                width: 64,
              },
            ],
            is_playable: true,
            name: "I feel",
            release_date: "2023-05-15",
            release_date_precision: "day",
            total_tracks: 6,
            type: "album",
            uri: "spotify:album:2cBuoAocFtOZU31Tk6UmTt",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/2AfmfGFbe0A0WsTYm0SDTx",
              },
              href: "https://api.spotify.com/v1/artists/2AfmfGFbe0A0WsTYm0SDTx",
              id: "2AfmfGFbe0A0WsTYm0SDTx",
              name: "(여자)아이들",
              type: "artist",
              uri: "spotify:artist:2AfmfGFbe0A0WsTYm0SDTx",
            },
          ],
          disc_number: 1,
          duration_ms: 162786,
          explicit: false,
          external_ids: {
            isrc: "KRA392300002",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/0afnaAYZk1IPQSFDd2MGw0",
          },
          href: "https://api.spotify.com/v1/tracks/0afnaAYZk1IPQSFDd2MGw0",
          id: "0afnaAYZk1IPQSFDd2MGw0",
          is_local: false,
          is_playable: true,
          name: "Allergy",
          popularity: 52,
          preview_url:
            "https://p.scdn.co/mp3-preview/018d97e1cdfa9e2aa59e09ff9879df72323fd728?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 2,
          type: "track",
          uri: "spotify:track:0afnaAYZk1IPQSFDd2MGw0",
        },
        played_at: "2024-01-03T15:51:02.827Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "album",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/48eO052eSDcn8aTxiv6QaG",
                },
                href: "https://api.spotify.com/v1/artists/48eO052eSDcn8aTxiv6QaG",
                id: "48eO052eSDcn8aTxiv6QaG",
                name: "NCT",
                type: "artist",
                uri: "spotify:artist:48eO052eSDcn8aTxiv6QaG",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/3Bd1xSHPmhIEH97idB634s",
            },
            href: "https://api.spotify.com/v1/albums/3Bd1xSHPmhIEH97idB634s",
            id: "3Bd1xSHPmhIEH97idB634s",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273ebee70c4f99963127989d85c",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02ebee70c4f99963127989d85c",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851ebee70c4f99963127989d85c",
                width: 64,
              },
            ],
            is_playable: true,
            name: "NCT RESONANCE Pt. 2 - The 2nd Album",
            release_date: "2020-11-23",
            release_date_precision: "day",
            total_tracks: 21,
            type: "album",
            uri: "spotify:album:3Bd1xSHPmhIEH97idB634s",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/3paGCCtX1Xr4Gx53mSeZuQ",
              },
              href: "https://api.spotify.com/v1/artists/3paGCCtX1Xr4Gx53mSeZuQ",
              id: "3paGCCtX1Xr4Gx53mSeZuQ",
              name: "NCT U",
              type: "artist",
              uri: "spotify:artist:3paGCCtX1Xr4Gx53mSeZuQ",
            },
          ],
          disc_number: 1,
          duration_ms: 213666,
          explicit: false,
          external_ids: {
            isrc: "KRA302000567",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/0B36SbjfDv15ji1bQEEeTN",
          },
          href: "https://api.spotify.com/v1/tracks/0B36SbjfDv15ji1bQEEeTN",
          id: "0B36SbjfDv15ji1bQEEeTN",
          is_local: false,
          is_playable: true,
          name: "90's Love",
          popularity: 64,
          preview_url:
            "https://p.scdn.co/mp3-preview/1f803077f1ccdeb569f42b2d08c7590e80da3ff8?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:0B36SbjfDv15ji1bQEEeTN",
        },
        played_at: "2024-01-03T15:48:19.752Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "album",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2hRQKC0gqlZGPrmUKbcchR",
                },
                href: "https://api.spotify.com/v1/artists/2hRQKC0gqlZGPrmUKbcchR",
                id: "2hRQKC0gqlZGPrmUKbcchR",
                name: "SHINee",
                type: "artist",
                uri: "spotify:artist:2hRQKC0gqlZGPrmUKbcchR",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/2aiM53N5DGm5VXnfjswpI7",
            },
            href: "https://api.spotify.com/v1/albums/2aiM53N5DGm5VXnfjswpI7",
            id: "2aiM53N5DGm5VXnfjswpI7",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273ff8a783336acbef4b6fab82f",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02ff8a783336acbef4b6fab82f",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851ff8a783336acbef4b6fab82f",
                width: 64,
              },
            ],
            is_playable: true,
            name: "The SHINee World - The First Album",
            release_date: "2008-08-28",
            release_date_precision: "day",
            total_tracks: 12,
            type: "album",
            uri: "spotify:album:2aiM53N5DGm5VXnfjswpI7",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/2hRQKC0gqlZGPrmUKbcchR",
              },
              href: "https://api.spotify.com/v1/artists/2hRQKC0gqlZGPrmUKbcchR",
              id: "2hRQKC0gqlZGPrmUKbcchR",
              name: "SHINee",
              type: "artist",
              uri: "spotify:artist:2hRQKC0gqlZGPrmUKbcchR",
            },
          ],
          disc_number: 1,
          duration_ms: 213826,
          explicit: false,
          external_ids: {
            isrc: "KRA300803086",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/1rp986nzkyAX1wFpxzbwlC",
          },
          href: "https://api.spotify.com/v1/tracks/1rp986nzkyAX1wFpxzbwlC",
          id: "1rp986nzkyAX1wFpxzbwlC",
          is_local: false,
          is_playable: true,
          name: "누난 너무 예뻐 (Replay)",
          popularity: 68,
          preview_url:
            "https://p.scdn.co/mp3-preview/b6ab4149f2a5908feac31141aeb806fc1de3a6c1?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 12,
          type: "track",
          uri: "spotify:track:1rp986nzkyAX1wFpxzbwlC",
        },
        played_at: "2024-01-03T15:44:45.998Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6wPBIyIIMxoqgux29bGF8I",
                },
                href: "https://api.spotify.com/v1/artists/6wPBIyIIMxoqgux29bGF8I",
                id: "6wPBIyIIMxoqgux29bGF8I",
                name: "EXO-K",
                type: "artist",
                uri: "spotify:artist:6wPBIyIIMxoqgux29bGF8I",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/3Nyhs0ZYxVmXDVfv4PLsqv",
            },
            href: "https://api.spotify.com/v1/albums/3Nyhs0ZYxVmXDVfv4PLsqv",
            id: "3Nyhs0ZYxVmXDVfv4PLsqv",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b27332d9eb11d9b6b98500ec5fd7",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e0232d9eb11d9b6b98500ec5fd7",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d0000485132d9eb11d9b6b98500ec5fd7",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Overdose - The 2nd Mini Album",
            release_date: "2014-08-06",
            release_date_precision: "day",
            total_tracks: 5,
            type: "album",
            uri: "spotify:album:3Nyhs0ZYxVmXDVfv4PLsqv",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/6wPBIyIIMxoqgux29bGF8I",
              },
              href: "https://api.spotify.com/v1/artists/6wPBIyIIMxoqgux29bGF8I",
              id: "6wPBIyIIMxoqgux29bGF8I",
              name: "EXO-K",
              type: "artist",
              uri: "spotify:artist:6wPBIyIIMxoqgux29bGF8I",
            },
          ],
          disc_number: 1,
          duration_ms: 205611,
          explicit: false,
          external_ids: {
            isrc: "KRA301300505",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/5NSPsOGVNWYOMeeyZPF7HY",
          },
          href: "https://api.spotify.com/v1/tracks/5NSPsOGVNWYOMeeyZPF7HY",
          id: "5NSPsOGVNWYOMeeyZPF7HY",
          is_local: false,
          is_playable: true,
          name: "중독 (Overdose)",
          popularity: 64,
          preview_url:
            "https://p.scdn.co/mp3-preview/637fb3b50ea59970dd1a95827b9769cfd7811801?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:5NSPsOGVNWYOMeeyZPF7HY",
        },
        played_at: "2024-01-03T15:41:11.715Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "album",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/24nUVBIlCGi4twz4nYxJum",
                },
                href: "https://api.spotify.com/v1/artists/24nUVBIlCGi4twz4nYxJum",
                id: "24nUVBIlCGi4twz4nYxJum",
                name: "프로미스나인",
                type: "artist",
                uri: "spotify:artist:24nUVBIlCGi4twz4nYxJum",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/48DcB4A9LV3DugLTILN1D9",
            },
            href: "https://api.spotify.com/v1/albums/48DcB4A9LV3DugLTILN1D9",
            id: "48DcB4A9LV3DugLTILN1D9",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b27385cbf5f5fd777ff74de3bafa",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e0285cbf5f5fd777ff74de3bafa",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d0000485185cbf5f5fd777ff74de3bafa",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Unlock My World",
            release_date: "2023-06-05",
            release_date_precision: "day",
            total_tracks: 10,
            type: "album",
            uri: "spotify:album:48DcB4A9LV3DugLTILN1D9",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/24nUVBIlCGi4twz4nYxJum",
              },
              href: "https://api.spotify.com/v1/artists/24nUVBIlCGi4twz4nYxJum",
              id: "24nUVBIlCGi4twz4nYxJum",
              name: "프로미스나인",
              type: "artist",
              uri: "spotify:artist:24nUVBIlCGi4twz4nYxJum",
            },
          ],
          disc_number: 1,
          duration_ms: 169906,
          explicit: false,
          external_ids: {
            isrc: "USA2P2322997",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/4lIAPwAU6R8PAy2WhykC4i",
          },
          href: "https://api.spotify.com/v1/tracks/4lIAPwAU6R8PAy2WhykC4i",
          id: "4lIAPwAU6R8PAy2WhykC4i",
          is_local: false,
          is_playable: true,
          name: "#menow",
          popularity: 61,
          preview_url:
            "https://p.scdn.co/mp3-preview/e155840aca113f2ce5f5cee8b0fe31b2f6064eab?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 2,
          type: "track",
          uri: "spotify:track:4lIAPwAU6R8PAy2WhykC4i",
        },
        played_at: "2024-01-03T15:37:45.800Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6RHTUrRF63xao58xh9FXYJ",
                },
                href: "https://api.spotify.com/v1/artists/6RHTUrRF63xao58xh9FXYJ",
                id: "6RHTUrRF63xao58xh9FXYJ",
                name: "IVE",
                type: "artist",
                uri: "spotify:artist:6RHTUrRF63xao58xh9FXYJ",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/6gzKQD8JoD775o5EQXATn5",
            },
            href: "https://api.spotify.com/v1/albums/6gzKQD8JoD775o5EQXATn5",
            id: "6gzKQD8JoD775o5EQXATn5",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b2733bbc6a71db1759c3b0053135",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e023bbc6a71db1759c3b0053135",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d000048513bbc6a71db1759c3b0053135",
                width: 64,
              },
            ],
            is_playable: true,
            name: "I'VE MINE",
            release_date: "2023-10-13",
            release_date_precision: "day",
            total_tracks: 6,
            type: "album",
            uri: "spotify:album:6gzKQD8JoD775o5EQXATn5",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/6RHTUrRF63xao58xh9FXYJ",
              },
              href: "https://api.spotify.com/v1/artists/6RHTUrRF63xao58xh9FXYJ",
              id: "6RHTUrRF63xao58xh9FXYJ",
              name: "IVE",
              type: "artist",
              uri: "spotify:artist:6RHTUrRF63xao58xh9FXYJ",
            },
          ],
          disc_number: 1,
          duration_ms: 157186,
          explicit: false,
          external_ids: {
            isrc: "QMDA72364155",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/0sbow2xt3v5AnYBxbciPJu",
          },
          href: "https://api.spotify.com/v1/tracks/0sbow2xt3v5AnYBxbciPJu",
          id: "0sbow2xt3v5AnYBxbciPJu",
          is_local: false,
          is_playable: true,
          name: "OTT",
          popularity: 36,
          preview_url:
            "https://p.scdn.co/mp3-preview/8ece41ae9d3c62ea07f053c38e493668dec4c86f?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 5,
          type: "track",
          uri: "spotify:track:0sbow2xt3v5AnYBxbciPJu",
        },
        played_at: "2024-01-03T15:34:55.608Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0",
                },
                href: "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                id: "7n2Ycct7Beij7Dj7meI4X0",
                name: "TWICE",
                type: "artist",
                uri: "spotify:artist:7n2Ycct7Beij7Dj7meI4X0",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/4wb2ucdEfkt2J0dKFrFVFn",
            },
            href: "https://api.spotify.com/v1/albums/4wb2ucdEfkt2J0dKFrFVFn",
            id: "4wb2ucdEfkt2J0dKFrFVFn",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273294dcbd59f951eb8a7eadaf5",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02294dcbd59f951eb8a7eadaf5",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851294dcbd59f951eb8a7eadaf5",
                width: 64,
              },
            ],
            is_playable: true,
            name: "BETWEEN 1&2",
            release_date: "2022-08-26",
            release_date_precision: "day",
            total_tracks: 7,
            type: "album",
            uri: "spotify:album:4wb2ucdEfkt2J0dKFrFVFn",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0",
              },
              href: "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
              id: "7n2Ycct7Beij7Dj7meI4X0",
              name: "TWICE",
              type: "artist",
              uri: "spotify:artist:7n2Ycct7Beij7Dj7meI4X0",
            },
          ],
          disc_number: 1,
          duration_ms: 177466,
          explicit: false,
          external_ids: {
            isrc: "US5TA2200073",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/646UF6MvpT5PbnLosjfX34",
          },
          href: "https://api.spotify.com/v1/tracks/646UF6MvpT5PbnLosjfX34",
          id: "646UF6MvpT5PbnLosjfX34",
          is_local: false,
          is_playable: true,
          name: "Talk that Talk",
          popularity: 37,
          preview_url:
            "https://p.scdn.co/mp3-preview/7858b400e415b41cac4dd160328d95a318bb2f60?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:646UF6MvpT5PbnLosjfX34",
        },
        played_at: "2024-01-03T15:32:18.162Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7f4ignuCJhLXfZ9giKT7rH",
                },
                href: "https://api.spotify.com/v1/artists/7f4ignuCJhLXfZ9giKT7rH",
                id: "7f4ignuCJhLXfZ9giKT7rH",
                name: "NCT 127",
                type: "artist",
                uri: "spotify:artist:7f4ignuCJhLXfZ9giKT7rH",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/4EEfpF1qcPAl1J4Z770A2U",
            },
            href: "https://api.spotify.com/v1/albums/4EEfpF1qcPAl1J4Z770A2U",
            id: "4EEfpF1qcPAl1J4Z770A2U",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273ca74d3d623930d10f2c3c1f1",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02ca74d3d623930d10f2c3c1f1",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851ca74d3d623930d10f2c3c1f1",
                width: 64,
              },
            ],
            is_playable: true,
            name: "NCT#127 LIMITLESS - The 2nd Mini Album",
            release_date: "2017-01-06",
            release_date_precision: "day",
            total_tracks: 6,
            type: "album",
            uri: "spotify:album:4EEfpF1qcPAl1J4Z770A2U",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/7f4ignuCJhLXfZ9giKT7rH",
              },
              href: "https://api.spotify.com/v1/artists/7f4ignuCJhLXfZ9giKT7rH",
              id: "7f4ignuCJhLXfZ9giKT7rH",
              name: "NCT 127",
              type: "artist",
              uri: "spotify:artist:7f4ignuCJhLXfZ9giKT7rH",
            },
          ],
          disc_number: 1,
          duration_ms: 235192,
          explicit: false,
          external_ids: {
            isrc: "KRA301700013",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/37SqctQhMp3MjvGDXKhnJ3",
          },
          href: "https://api.spotify.com/v1/tracks/37SqctQhMp3MjvGDXKhnJ3",
          id: "37SqctQhMp3MjvGDXKhnJ3",
          is_local: false,
          is_playable: true,
          name: "Back 2 U (AM 01:27)",
          popularity: 59,
          preview_url:
            "https://p.scdn.co/mp3-preview/222badf2f947197e47b1c76611b2ee8bd0e601ca?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 3,
          type: "track",
          uri: "spotify:track:37SqctQhMp3MjvGDXKhnJ3",
        },
        played_at: "2024-01-03T15:29:20.425Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/28ot3wh4oNmoFOdVajibBl",
                },
                href: "https://api.spotify.com/v1/artists/28ot3wh4oNmoFOdVajibBl",
                id: "28ot3wh4oNmoFOdVajibBl",
                name: "NMIXX",
                type: "artist",
                uri: "spotify:artist:28ot3wh4oNmoFOdVajibBl",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/2uB0PgzqqWLdk2R736sMkP",
            },
            href: "https://api.spotify.com/v1/albums/2uB0PgzqqWLdk2R736sMkP",
            id: "2uB0PgzqqWLdk2R736sMkP",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b2731cf26b855e8f7eeb4804b848",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e021cf26b855e8f7eeb4804b848",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d000048511cf26b855e8f7eeb4804b848",
                width: 64,
              },
            ],
            is_playable: true,
            name: "ENTWURF",
            release_date: "2022-09-19",
            release_date_precision: "day",
            total_tracks: 4,
            type: "album",
            uri: "spotify:album:2uB0PgzqqWLdk2R736sMkP",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/28ot3wh4oNmoFOdVajibBl",
              },
              href: "https://api.spotify.com/v1/artists/28ot3wh4oNmoFOdVajibBl",
              id: "28ot3wh4oNmoFOdVajibBl",
              name: "NMIXX",
              type: "artist",
              uri: "spotify:artist:28ot3wh4oNmoFOdVajibBl",
            },
          ],
          disc_number: 1,
          duration_ms: 165746,
          explicit: false,
          external_ids: {
            isrc: "US5TA2200097",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/6C734SmqoIYuRWo2qSCnpC",
          },
          href: "https://api.spotify.com/v1/tracks/6C734SmqoIYuRWo2qSCnpC",
          id: "6C734SmqoIYuRWo2qSCnpC",
          is_local: false,
          is_playable: true,
          name: "DICE",
          popularity: 57,
          preview_url:
            "https://p.scdn.co/mp3-preview/b5512cc7c46d981da08ca09e2bf3ca14c047c637?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:6C734SmqoIYuRWo2qSCnpC",
        },
        played_at: "2024-01-03T15:25:24.912Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "album",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/4SpbR6yFEvexJuaBpgAU5p",
                },
                href: "https://api.spotify.com/v1/artists/4SpbR6yFEvexJuaBpgAU5p",
                id: "4SpbR6yFEvexJuaBpgAU5p",
                name: "LE SSERAFIM",
                type: "artist",
                uri: "spotify:artist:4SpbR6yFEvexJuaBpgAU5p",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/4Oz7K9DRwwGMN49i4NbVDT",
            },
            href: "https://api.spotify.com/v1/albums/4Oz7K9DRwwGMN49i4NbVDT",
            id: "4Oz7K9DRwwGMN49i4NbVDT",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273d71fd77b89d08bc1bda219c7",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02d71fd77b89d08bc1bda219c7",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851d71fd77b89d08bc1bda219c7",
                width: 64,
              },
            ],
            is_playable: true,
            name: "UNFORGIVEN",
            release_date: "2023-05-01",
            release_date_precision: "day",
            total_tracks: 13,
            type: "album",
            uri: "spotify:album:4Oz7K9DRwwGMN49i4NbVDT",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/4SpbR6yFEvexJuaBpgAU5p",
              },
              href: "https://api.spotify.com/v1/artists/4SpbR6yFEvexJuaBpgAU5p",
              id: "4SpbR6yFEvexJuaBpgAU5p",
              name: "LE SSERAFIM",
              type: "artist",
              uri: "spotify:artist:4SpbR6yFEvexJuaBpgAU5p",
            },
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/3yDIp0kaq9EFKe07X1X2rz",
              },
              href: "https://api.spotify.com/v1/artists/3yDIp0kaq9EFKe07X1X2rz",
              id: "3yDIp0kaq9EFKe07X1X2rz",
              name: "Nile Rodgers",
              type: "artist",
              uri: "spotify:artist:3yDIp0kaq9EFKe07X1X2rz",
            },
          ],
          disc_number: 1,
          duration_ms: 182148,
          explicit: false,
          external_ids: {
            isrc: "USA2P2310663",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/51vRumtqbkNW9wrKfESwfu",
          },
          href: "https://api.spotify.com/v1/tracks/51vRumtqbkNW9wrKfESwfu",
          id: "51vRumtqbkNW9wrKfESwfu",
          is_local: false,
          is_playable: true,
          name: "UNFORGIVEN (feat. Nile Rodgers)",
          popularity: 81,
          preview_url:
            "https://p.scdn.co/mp3-preview/ba72474a4c4c3a63f8c6d00c561ad40be6e1e7c7?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 8,
          type: "track",
          uri: "spotify:track:51vRumtqbkNW9wrKfESwfu",
        },
        played_at: "2024-01-03T15:22:38.878Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "album",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1gBUSTR3TyDdTVFIaQnc02",
                },
                href: "https://api.spotify.com/v1/artists/1gBUSTR3TyDdTVFIaQnc02",
                id: "1gBUSTR3TyDdTVFIaQnc02",
                name: "NCT DREAM",
                type: "artist",
                uri: "spotify:artist:1gBUSTR3TyDdTVFIaQnc02",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/1fRqXYwoLDxG3EwP70qnjM",
            },
            href: "https://api.spotify.com/v1/albums/1fRqXYwoLDxG3EwP70qnjM",
            id: "1fRqXYwoLDxG3EwP70qnjM",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273e6d118f2ad157bf0bbfb83cf",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02e6d118f2ad157bf0bbfb83cf",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851e6d118f2ad157bf0bbfb83cf",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Hello Future - The 1st Album Repackage",
            release_date: "2021-06-28",
            release_date_precision: "day",
            total_tracks: 13,
            type: "album",
            uri: "spotify:album:1fRqXYwoLDxG3EwP70qnjM",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1gBUSTR3TyDdTVFIaQnc02",
              },
              href: "https://api.spotify.com/v1/artists/1gBUSTR3TyDdTVFIaQnc02",
              id: "1gBUSTR3TyDdTVFIaQnc02",
              name: "NCT DREAM",
              type: "artist",
              uri: "spotify:artist:1gBUSTR3TyDdTVFIaQnc02",
            },
          ],
          disc_number: 1,
          duration_ms: 220920,
          explicit: false,
          external_ids: {
            isrc: "KRA302100215",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/332GJ8ykVuEt3jOT1sy7j6",
          },
          href: "https://api.spotify.com/v1/tracks/332GJ8ykVuEt3jOT1sy7j6",
          id: "332GJ8ykVuEt3jOT1sy7j6",
          is_local: false,
          is_playable: true,
          name: "Hello Future",
          popularity: 68,
          preview_url:
            "https://p.scdn.co/mp3-preview/48bf1badccaaa761222d92e8cafd0fbfb24c7e9d?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:332GJ8ykVuEt3jOT1sy7j6",
        },
        played_at: "2024-01-03T15:19:36.626Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6RHTUrRF63xao58xh9FXYJ",
                },
                href: "https://api.spotify.com/v1/artists/6RHTUrRF63xao58xh9FXYJ",
                id: "6RHTUrRF63xao58xh9FXYJ",
                name: "IVE",
                type: "artist",
                uri: "spotify:artist:6RHTUrRF63xao58xh9FXYJ",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/1XMYvsHRt52sMi6wittWqI",
            },
            href: "https://api.spotify.com/v1/albums/1XMYvsHRt52sMi6wittWqI",
            id: "1XMYvsHRt52sMi6wittWqI",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273da343b21617aac0c57e332bb",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02da343b21617aac0c57e332bb",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851da343b21617aac0c57e332bb",
                width: 64,
              },
            ],
            is_playable: true,
            name: "ELEVEN",
            release_date: "2021-12-01",
            release_date_precision: "day",
            total_tracks: 2,
            type: "album",
            uri: "spotify:album:1XMYvsHRt52sMi6wittWqI",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/6RHTUrRF63xao58xh9FXYJ",
              },
              href: "https://api.spotify.com/v1/artists/6RHTUrRF63xao58xh9FXYJ",
              id: "6RHTUrRF63xao58xh9FXYJ",
              name: "IVE",
              type: "artist",
              uri: "spotify:artist:6RHTUrRF63xao58xh9FXYJ",
            },
          ],
          disc_number: 1,
          duration_ms: 178453,
          explicit: false,
          external_ids: {
            isrc: "KRA382163861",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/7n2FZQsaLb7ZRfRPfEeIvr",
          },
          href: "https://api.spotify.com/v1/tracks/7n2FZQsaLb7ZRfRPfEeIvr",
          id: "7n2FZQsaLb7ZRfRPfEeIvr",
          is_local: false,
          is_playable: true,
          name: "ELEVEN",
          popularity: 75,
          preview_url:
            "https://p.scdn.co/mp3-preview/a6e8ccc7ece8b0d69aac855584e153c8ab866a62?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:7n2FZQsaLb7ZRfRPfEeIvr",
        },
        played_at: "2024-01-03T15:15:55.109Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2AfmfGFbe0A0WsTYm0SDTx",
                },
                href: "https://api.spotify.com/v1/artists/2AfmfGFbe0A0WsTYm0SDTx",
                id: "2AfmfGFbe0A0WsTYm0SDTx",
                name: "(여자)아이들",
                type: "artist",
                uri: "spotify:artist:2AfmfGFbe0A0WsTYm0SDTx",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/5P2uqhsUdWHQ8sEdsX9xZE",
            },
            href: "https://api.spotify.com/v1/albums/5P2uqhsUdWHQ8sEdsX9xZE",
            id: "5P2uqhsUdWHQ8sEdsX9xZE",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273568f9eafaf4580222d2aa22a",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02568f9eafaf4580222d2aa22a",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851568f9eafaf4580222d2aa22a",
                width: 64,
              },
            ],
            is_playable: true,
            name: "I love",
            release_date: "2022-10-17",
            release_date_precision: "day",
            total_tracks: 6,
            type: "album",
            uri: "spotify:album:5P2uqhsUdWHQ8sEdsX9xZE",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/2AfmfGFbe0A0WsTYm0SDTx",
              },
              href: "https://api.spotify.com/v1/artists/2AfmfGFbe0A0WsTYm0SDTx",
              id: "2AfmfGFbe0A0WsTYm0SDTx",
              name: "(여자)아이들",
              type: "artist",
              uri: "spotify:artist:2AfmfGFbe0A0WsTYm0SDTx",
            },
          ],
          disc_number: 1,
          duration_ms: 178453,
          explicit: false,
          external_ids: {
            isrc: "KRA392200038",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/7Ejqkb9YfldcLoh8B6bXgj",
          },
          href: "https://api.spotify.com/v1/tracks/7Ejqkb9YfldcLoh8B6bXgj",
          id: "7Ejqkb9YfldcLoh8B6bXgj",
          is_local: false,
          is_playable: true,
          name: "Nxde",
          popularity: 56,
          preview_url:
            "https://p.scdn.co/mp3-preview/35463499584b38e96efc6013844937d8bc094520?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:7Ejqkb9YfldcLoh8B6bXgj",
        },
        played_at: "2024-01-03T15:12:56.317Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "album",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7f4ignuCJhLXfZ9giKT7rH",
                },
                href: "https://api.spotify.com/v1/artists/7f4ignuCJhLXfZ9giKT7rH",
                id: "7f4ignuCJhLXfZ9giKT7rH",
                name: "NCT 127",
                type: "artist",
                uri: "spotify:artist:7f4ignuCJhLXfZ9giKT7rH",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/06piaqPGZekE8n3BpSjHlP",
            },
            href: "https://api.spotify.com/v1/albums/06piaqPGZekE8n3BpSjHlP",
            id: "06piaqPGZekE8n3BpSjHlP",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273f6d2f575a95be59afc5e0443",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02f6d2f575a95be59afc5e0443",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851f6d2f575a95be59afc5e0443",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Ay-Yo - The 4th Album Repackage",
            release_date: "2023-01-30",
            release_date_precision: "day",
            total_tracks: 15,
            type: "album",
            uri: "spotify:album:06piaqPGZekE8n3BpSjHlP",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/7f4ignuCJhLXfZ9giKT7rH",
              },
              href: "https://api.spotify.com/v1/artists/7f4ignuCJhLXfZ9giKT7rH",
              id: "7f4ignuCJhLXfZ9giKT7rH",
              name: "NCT 127",
              type: "artist",
              uri: "spotify:artist:7f4ignuCJhLXfZ9giKT7rH",
            },
          ],
          disc_number: 1,
          duration_ms: 221493,
          explicit: false,
          external_ids: {
            isrc: "KRA302300002",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/3ePLUHZ0wpewHpAg6P3wUE",
          },
          href: "https://api.spotify.com/v1/tracks/3ePLUHZ0wpewHpAg6P3wUE",
          id: "3ePLUHZ0wpewHpAg6P3wUE",
          is_local: false,
          is_playable: true,
          name: "Ay-Yo",
          popularity: 61,
          preview_url:
            "https://p.scdn.co/mp3-preview/f0d27017490a60126ecc22ce2256297006ddf4af?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:3ePLUHZ0wpewHpAg6P3wUE",
        },
        played_at: "2024-01-03T15:09:57.422Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/28ot3wh4oNmoFOdVajibBl",
                },
                href: "https://api.spotify.com/v1/artists/28ot3wh4oNmoFOdVajibBl",
                id: "28ot3wh4oNmoFOdVajibBl",
                name: "NMIXX",
                type: "artist",
                uri: "spotify:artist:28ot3wh4oNmoFOdVajibBl",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/2mKUepexXVL69G8bBK9ECB",
            },
            href: "https://api.spotify.com/v1/albums/2mKUepexXVL69G8bBK9ECB",
            id: "2mKUepexXVL69G8bBK9ECB",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273245621ddf8e0d6d27cb14cef",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02245621ddf8e0d6d27cb14cef",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851245621ddf8e0d6d27cb14cef",
                width: 64,
              },
            ],
            is_playable: true,
            name: "expérgo",
            release_date: "2023-03-20",
            release_date_precision: "day",
            total_tracks: 6,
            type: "album",
            uri: "spotify:album:2mKUepexXVL69G8bBK9ECB",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/28ot3wh4oNmoFOdVajibBl",
              },
              href: "https://api.spotify.com/v1/artists/28ot3wh4oNmoFOdVajibBl",
              id: "28ot3wh4oNmoFOdVajibBl",
              name: "NMIXX",
              type: "artist",
              uri: "spotify:artist:28ot3wh4oNmoFOdVajibBl",
            },
          ],
          disc_number: 1,
          duration_ms: 188718,
          explicit: false,
          external_ids: {
            isrc: "US5TA2200195",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/2W8UduoifU1zgjKZlfY79S",
          },
          href: "https://api.spotify.com/v1/tracks/2W8UduoifU1zgjKZlfY79S",
          id: "2W8UduoifU1zgjKZlfY79S",
          is_local: false,
          is_playable: true,
          name: "Love Me Like This",
          popularity: 58,
          preview_url:
            "https://p.scdn.co/mp3-preview/5056710d4aeb684506f96ce0e07c4667efc7c994?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 2,
          type: "track",
          uri: "spotify:track:2W8UduoifU1zgjKZlfY79S",
        },
        played_at: "2024-01-03T15:06:15.640Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "album",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/4SpbR6yFEvexJuaBpgAU5p",
                },
                href: "https://api.spotify.com/v1/artists/4SpbR6yFEvexJuaBpgAU5p",
                id: "4SpbR6yFEvexJuaBpgAU5p",
                name: "LE SSERAFIM",
                type: "artist",
                uri: "spotify:artist:4SpbR6yFEvexJuaBpgAU5p",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/4Oz7K9DRwwGMN49i4NbVDT",
            },
            href: "https://api.spotify.com/v1/albums/4Oz7K9DRwwGMN49i4NbVDT",
            id: "4Oz7K9DRwwGMN49i4NbVDT",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273d71fd77b89d08bc1bda219c7",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02d71fd77b89d08bc1bda219c7",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851d71fd77b89d08bc1bda219c7",
                width: 64,
              },
            ],
            is_playable: true,
            name: "UNFORGIVEN",
            release_date: "2023-05-01",
            release_date_precision: "day",
            total_tracks: 13,
            type: "album",
            uri: "spotify:album:4Oz7K9DRwwGMN49i4NbVDT",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/4SpbR6yFEvexJuaBpgAU5p",
              },
              href: "https://api.spotify.com/v1/artists/4SpbR6yFEvexJuaBpgAU5p",
              id: "4SpbR6yFEvexJuaBpgAU5p",
              name: "LE SSERAFIM",
              type: "artist",
              uri: "spotify:artist:4SpbR6yFEvexJuaBpgAU5p",
            },
          ],
          disc_number: 1,
          duration_ms: 201894,
          explicit: false,
          external_ids: {
            isrc: "USA2P2310661",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/2ahp0wvyEzyvgWfOhStHWp",
          },
          href: "https://api.spotify.com/v1/tracks/2ahp0wvyEzyvgWfOhStHWp",
          id: "2ahp0wvyEzyvgWfOhStHWp",
          is_local: false,
          is_playable: true,
          name: "Blue Flame (2023 Ver.)",
          popularity: 69,
          preview_url:
            "https://p.scdn.co/mp3-preview/33b8fe1e6a058da45a36139ba09c8789299d282a?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 3,
          type: "track",
          uri: "spotify:track:2ahp0wvyEzyvgWfOhStHWp",
        },
        played_at: "2024-01-03T15:03:06.603Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/13rF01aOogvnkuQXOlgTW8",
                },
                href: "https://api.spotify.com/v1/artists/13rF01aOogvnkuQXOlgTW8",
                id: "13rF01aOogvnkuQXOlgTW8",
                name: "태민",
                type: "artist",
                uri: "spotify:artist:13rF01aOogvnkuQXOlgTW8",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/0kNUDDHwjpemplDqSZ72Ct",
            },
            href: "https://api.spotify.com/v1/albums/0kNUDDHwjpemplDqSZ72Ct",
            id: "0kNUDDHwjpemplDqSZ72Ct",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b2738b041a6c21bf569fb424d930",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e028b041a6c21bf569fb424d930",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d000048518b041a6c21bf569fb424d930",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Advice - The 3rd Mini Album",
            release_date: "2021-05-18",
            release_date_precision: "day",
            total_tracks: 5,
            type: "album",
            uri: "spotify:album:0kNUDDHwjpemplDqSZ72Ct",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/13rF01aOogvnkuQXOlgTW8",
              },
              href: "https://api.spotify.com/v1/artists/13rF01aOogvnkuQXOlgTW8",
              id: "13rF01aOogvnkuQXOlgTW8",
              name: "태민",
              type: "artist",
              uri: "spotify:artist:13rF01aOogvnkuQXOlgTW8",
            },
          ],
          disc_number: 1,
          duration_ms: 191640,
          explicit: false,
          external_ids: {
            isrc: "KRA302100170",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/4rOODw637hsmsq0uzT0DN3",
          },
          href: "https://api.spotify.com/v1/tracks/4rOODw637hsmsq0uzT0DN3",
          id: "4rOODw637hsmsq0uzT0DN3",
          is_local: false,
          is_playable: true,
          name: "Advice",
          popularity: 68,
          preview_url:
            "https://p.scdn.co/mp3-preview/6ad844369bd16ff31af745c5e3bfe0d4c0cf1964?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:4rOODw637hsmsq0uzT0DN3",
        },
        played_at: "2024-01-03T14:59:44.375Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6RHTUrRF63xao58xh9FXYJ",
                },
                href: "https://api.spotify.com/v1/artists/6RHTUrRF63xao58xh9FXYJ",
                id: "6RHTUrRF63xao58xh9FXYJ",
                name: "IVE",
                type: "artist",
                uri: "spotify:artist:6RHTUrRF63xao58xh9FXYJ",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/3SxYD7K6tDOvcPGljYEtYt",
            },
            href: "https://api.spotify.com/v1/albums/3SxYD7K6tDOvcPGljYEtYt",
            id: "3SxYD7K6tDOvcPGljYEtYt",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b273104c0b477667708d41559de0",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e02104c0b477667708d41559de0",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d00004851104c0b477667708d41559de0",
                width: 64,
              },
            ],
            is_playable: true,
            name: "Either Way",
            release_date: "2023-09-25",
            release_date_precision: "day",
            total_tracks: 1,
            type: "album",
            uri: "spotify:album:3SxYD7K6tDOvcPGljYEtYt",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/6RHTUrRF63xao58xh9FXYJ",
              },
              href: "https://api.spotify.com/v1/artists/6RHTUrRF63xao58xh9FXYJ",
              id: "6RHTUrRF63xao58xh9FXYJ",
              name: "IVE",
              type: "artist",
              uri: "spotify:artist:6RHTUrRF63xao58xh9FXYJ",
            },
          ],
          disc_number: 1,
          duration_ms: 166946,
          explicit: false,
          external_ids: {
            isrc: "QMDA72364153",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/0hfgdZKMICdgW84SUk3jfT",
          },
          href: "https://api.spotify.com/v1/tracks/0hfgdZKMICdgW84SUk3jfT",
          id: "0hfgdZKMICdgW84SUk3jfT",
          is_local: false,
          is_playable: true,
          name: "Either Way",
          popularity: 48,
          preview_url:
            "https://p.scdn.co/mp3-preview/bd94f0bc861b67d351f03a895e064e958446c8e9?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 1,
          type: "track",
          uri: "spotify:track:0hfgdZKMICdgW84SUk3jfT",
        },
        played_at: "2024-01-03T14:56:32.424Z",
        context: null,
      },
      {
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6HvZYsbFfjnjFrWF950C9d",
                },
                href: "https://api.spotify.com/v1/artists/6HvZYsbFfjnjFrWF950C9d",
                id: "6HvZYsbFfjnjFrWF950C9d",
                name: "NewJeans",
                type: "artist",
                uri: "spotify:artist:6HvZYsbFfjnjFrWF950C9d",
              },
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/1HMLpmZAnNyl9pxvOnTovV",
            },
            href: "https://api.spotify.com/v1/albums/1HMLpmZAnNyl9pxvOnTovV",
            id: "1HMLpmZAnNyl9pxvOnTovV",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b2739d28fd01859073a3ae6ea209",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e029d28fd01859073a3ae6ea209",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d000048519d28fd01859073a3ae6ea209",
                width: 64,
              },
            ],
            is_playable: true,
            name: "NewJeans 1st EP 'New Jeans'",
            release_date: "2022-08-01",
            release_date_precision: "day",
            total_tracks: 4,
            type: "album",
            uri: "spotify:album:1HMLpmZAnNyl9pxvOnTovV",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/6HvZYsbFfjnjFrWF950C9d",
              },
              href: "https://api.spotify.com/v1/artists/6HvZYsbFfjnjFrWF950C9d",
              id: "6HvZYsbFfjnjFrWF950C9d",
              name: "NewJeans",
              type: "artist",
              uri: "spotify:artist:6HvZYsbFfjnjFrWF950C9d",
            },
          ],
          disc_number: 1,
          duration_ms: 235562,
          explicit: false,
          external_ids: {
            isrc: "USA2P2230223",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/2DwUdMJ5uxv20EhAildreg",
          },
          href: "https://api.spotify.com/v1/tracks/2DwUdMJ5uxv20EhAildreg",
          id: "2DwUdMJ5uxv20EhAildreg",
          is_local: false,
          is_playable: true,
          name: "Cookie",
          popularity: 77,
          preview_url:
            "https://p.scdn.co/mp3-preview/d059b8ea163242692099c452cbed3de596c2e624?cid=dce10fdf626d4d10895a18b4c70ec025",
          track_number: 3,
          type: "track",
          uri: "spotify:track:2DwUdMJ5uxv20EhAildreg",
        },
        played_at: "2024-01-03T14:53:45.175Z",
        context: null,
      },
    ],
    next: "https://api.spotify.com/v1/me/player/recently-played?after=1704406735040&limit=50",
    cursors: {
      after: "1704406735040",
      before: "1704293625175",
    },
    limit: 50,
    href: "https://api.spotify.com/v1/me/player/recently-played?after=1704179960047&limit=50",
  },
];
