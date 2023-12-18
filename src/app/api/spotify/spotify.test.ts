import { describe, expect, test } from "@jest/globals";
import {
  countTopData,
  countTotalTopData,
  isTokenExpiredWithIssueTime,
} from "@/app/api/spotify/route";

describe("앨범과 노래를 들은 횟수를 카운트 한다.", () => {
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
