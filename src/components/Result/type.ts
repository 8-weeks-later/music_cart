export type TopAlbum = {
  artist: string;
  count: number;
  cover: Image;
  name: string;
};

export type TopTrack = {
  artist: string;
  count: number;
  cover: Image;
  name: string;
};

interface Image {
  height: number;
  url: string;
  width: number;
}
