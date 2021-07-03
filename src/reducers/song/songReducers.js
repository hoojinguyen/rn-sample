import {
  SONG_LOADING,
  SONG_FETCH_SUCCESS,
  SONG_FETCH_FAILURE,
  SONG_FETCH_LOAD_MORE,
} from "./songActions";

const initialState = {
  songs: [],
  song: null,
  isLoading: true,
};

export const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case SONG_LOADING:
      return { ...state, isLoading: true };
    case SONG_FETCH_FAILURE:
      return { ...state, isLoading: false };
    case SONG_FETCH_SUCCESS:
      return { ...state, isLoading: false, songs: [...action.songs] };
    case SONG_FETCH_LOAD_MORE:
      const songs = state.songs.concat(action.songs);
      return { ...state, songs: [...songs] };
    default:
      return state;
  }
};
