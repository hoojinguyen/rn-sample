import axios from "axios";

export const SONG_LOADING = "SONG_LOADING";
export const SONG_FETCH_SUCCESS = "SONG_FETCH_SUCCESS";
export const SONG_FETCH_FAILURE = "SONG_FETCH_FAILURE";
export const SONG_FETCH_LOAD_MORE = "SONG_FETCH_LOAD_MORE";

const API_URL = "https://music-serverasp.herokuapp.com/music/today_music";

export const fetchSongs = () => {
  return async (dispatch) => {
    dispatch({
      type: SONG_LOADING,
    });

    await axios
      .get(API_URL)
      .then(({ data }) => {
        dispatch({
          type: SONG_FETCH_SUCCESS,
          songs: data.today,
        });
      })
      .catch((err) => {
        dispatch({
          type: SONG_FETCH_FAILURE,
        });
        throw new Error(err);
      });
  };
};
