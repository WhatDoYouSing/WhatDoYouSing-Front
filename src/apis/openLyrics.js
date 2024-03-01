import { spotifyApi, lyricApi } from "../apis/http";

// GET : chart tracks
export const GetChartTracks = async (title) => {
  try {
    const response = await spotifyApi.get(
      `search?q=${title}&type=track&limit=5`
    );
    console.log(response.data.tracks.items);

    return Promise.resolve(response.data.tracks.items);
  } catch (error) {
    return Promise.reject(error);
  }
};

// GET : chart tracks
export const GetTrackLyric = async (id) => {
  try {
    const response = await lyricApi.get(
      `https://zylalabs.com/api/1103/spotify+tracks+api/962/fetch+spotify+track+lyrics?id=${id}`
    );
    console.log(response.data);

    return Promise.resolve(response.data.lyrics.lines);
  } catch (error) {
    return Promise.reject(error);
  }
};
