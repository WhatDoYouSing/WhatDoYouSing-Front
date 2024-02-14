import { api } from "../apis/http";

// GET : chart tracks
export const GetChartTracks = async (
  country,
  page,
  page_size,
  chart_name,
  f_has_lyrics
) => {
  try {
    const response = await api.get(
      `/chart.tracks.get?chart_name=${chart_name}&page=${page}&page_size=${page_size}&country=${country}&f_has_lyrics=${f_has_lyrics}`
    );
    console.log(response);

    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const GetDetailLyrics = async (track_id, commontrack_id) => {
  try {
    const response = await api.get(
      `track.lyrics.get?track_id=${track_id}&commontrack_id=${commontrack_id}&apikey=${process.env.REACT_APP_LYRICS_API_KEY}`
    );
    console.log(response);

    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
};
