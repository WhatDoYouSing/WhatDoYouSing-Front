import axios from "axios";
import { axiosInstance, lyricApi } from "../apis/http";

// GET : spotify token
export const GetSpotifyToken = async () => {
  try {
    const response = await axiosInstance.get(`posts/spotify/`);
    return Promise.resolve(response.data.data.access_token);
  } catch (error) {
    return Promise.reject(error);
  }
};

// GET : chart tracks
export const GetChartTracks = async (title, token) => {
  try {
    const response = await axios.get(`search?q=${title}&type=track&limit=5`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data.tracks.items);
    return Promise.resolve(response.data.tracks.items);
  } catch (error) {
    return Promise.reject(error);
  }
};

// GET : track lyric
export const GetTrackLyric = async (id) => {
  try {
    const response = await lyricApi.get(
      `https://zylalabs.com/api/1103/spotify+tracks+api/962/fetch+spotify+track+lyrics?id=${id}`
    );
    return Promise.resolve(response.data.lyrics.lines);
  } catch (error) {
    return Promise.reject(error);
  }
};
