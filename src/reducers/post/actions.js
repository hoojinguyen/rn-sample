import axios from "axios";

import {
  FETCH_LOADING,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  LOAD_MORE,
} from "./types";

import DATA_SAMPLE from "../../services/instructions";

const API_URL =
  "https://my-json-server.typicode.com/mesandigital/demo/instructions";

export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_LOADING,
    });

    await axios
      .get(API_URL)
      .then(({ data }) => {
        dispatch({
          type: FETCH_SUCCESS,
          posts: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCH_FAILURE,
        });
        throw new Error(err);
      });
  };
};

export const loadMorePosts = () => {
  return async (dispatch) => {
    dispatch({ type: LOAD_MORE, posts: DATA_SAMPLE });
  };
};
