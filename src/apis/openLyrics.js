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
      `/api/chart.tracks.get?chart_name=${chart_name}&page=${page}&page_size=${page_size}&country=${country}&f_has_lyrics=${f_has_lyrics}`
    );
    console.log(response.data);

    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

// export const GetMusic = async () => {
//   try {
//     const response = await api.get(
//       `/api/chart.tracks.get?chart_name=hot&page=1&page_size=10&country=xw&f_has_lyrics=0&apikey=${process.env.REACT_APP_LYRICS_API_KEY}`
//     );
//     https: console.log(response.data);
//     return response.data;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };
// export const GetArtistAlbums = async (artist_id, page_size, page) => {
//   try {
//     const response = await api.get(
//       `/api/artist.albums.get?artist_id=${artist_id}&s_release_date=desc&g_album_name=1&apikey=${process.env.REACT_APP_LYRICS_API_KEY}`
//     );
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

export const GetAlbum = async (album_id, page_size, page) => {
  try {
    const response = await api.get(
      `/api/album.tracks.get?album_id=${album_id}&page=1&page_size=10&apikey=${process.env.REACT_APP_LYRICS_API_KEY}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const GetMusicSearch = async (q_artist, page_size, page) => {
  try {
    const response = await api.get(
      `/api/track.search?q_artist=${q_artist}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_LYRICS_API_KEY}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const GetDetailLyrics = async (track_id, commontrack_id) => {
  try {
    const response = await api.get(
      `/api/track.lyrics.get?track_id=${track_id}&commontrack_id=${commontrack_id}&apikey=${process.env.REACT_APP_LYRICS_API_KEY}`
    );
    console.log(response.data);

    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
};
