import axios from "axios";
import {
  GET_NOW_PLAYING_MOVIES,
  GET_POPULAR_MOVIES,
  GET_TOP_RATED_MOVIES,
  GET_UPCOMING_MOVIES,
} from "./types";

let APIKey = "2c2295ea8b7a115e319ed2ddd08aa9a3";
let config = { Authorization: "2c2295ea8b7a115e319ed2ddd08aa9a3" };

export const getNowPlayingMovies = () => (dispatch) => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKey}&language=es-ES&page=1`,
      { headers: config }
    )
    .then((res) => {
      dispatch({
        type: GET_NOW_PLAYING_MOVIES,
        payload: res.data.results,
      });
    })
    .catch((err) => console.log(err));
};

export const getPopularMovies = () => (dispatch) => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=es-ES&page=1`,
      { headers: config }
    )
    .then((res) => {
      dispatch({
        type: GET_POPULAR_MOVIES,
        payload: res.data.results,
      });
    })
    .catch((err) => console.log(err));
};

export const getTopRatedMovies = () => (dispatch) => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKey}&language=es-ES&page=1`,
      { headers: config }
    )
    .then((res) => {
      dispatch({
        type: GET_TOP_RATED_MOVIES,
        payload: res.data.results,
      });
    })
    .catch((err) => console.log(err));
};

export const getUpcomingMovies = () => (dispatch) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKey}&language=es-ES&page=1`,
        { headers: config }
      )
      .then((res) => {
        dispatch({
          type: GET_UPCOMING_MOVIES,
          payload: res.data.results,
        });
      })
      .catch((err) => console.log(err));
  };
