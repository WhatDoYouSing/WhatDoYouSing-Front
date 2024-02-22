import { api } from "../apis/http";

// GET : chart tracks
export const GetChartTracks = async (title) => {
  try {
    const response = await api.get(`search?q=${title}&type=track&limit=5`);
    console.log(response.data.tracks.items);

    return Promise.resolve(response.data.tracks.items);
  } catch (error) {
    return Promise.reject(error);
  }
};
