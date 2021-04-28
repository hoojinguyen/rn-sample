import {
  FETCH_LOADING,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  LOAD_MORE,
} from "./types";

const initialState = {
  posts: [],
  post: null,
  isLoading: true,
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOADING:
      return { ...state, isLoading: true };
    case FETCH_FAILURE:
      return { ...state, isLoading: false };
    case FETCH_SUCCESS:
      return { ...state, isLoading: false, posts: [...action.posts] };
    case LOAD_MORE:
      const posts = state.posts.concat(action.posts);
      return { ...state, posts: [...posts] };
    default:
      return state;
  }
};
