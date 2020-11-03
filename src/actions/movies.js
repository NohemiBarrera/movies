import axios from "axios";
import {
  GET_NOW_PLAYING_MOVIES,
  GET_POPULAR_MOVIES,
  GET_TOP_RATED_MOVIES,
  GET_UPCOMING_MOVIES,
  GET_MOVIE_DETAIL,
  GET_MOVIE_VIDEO,
  ADD_FAVORITE_MOVIE,
  DELETE_FAVORITE_MOVIE,
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

export const getMovieDetail = (id) => (dispatch) => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=es-ES&page=1`,
      { headers: config }
    )
    .then((res) => {
      dispatch({
        type: GET_MOVIE_DETAIL,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const getMovieVideos = (id) => (dispatch) => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${APIKey}&language=es-ES&page=1`,
      { headers: config }
    )
    .then((res) => {
      dispatch({
        type: GET_MOVIE_VIDEO,
        payload: res.data.results,
      });
    })
    .catch((err) => console.log(err));
};

export const addFavoriteMovie = movie => (dispatch, getState) => {
  const favorite_movies = getState().movies.favorite_movies;
  const newFavorites = [...favorite_movies, movie];

  dispatch({
    type: ADD_FAVORITE_MOVIE,
    favorite_movies: newFavorites
  })
};

export const deleteFavoriteMovie = (id) => (dispatch, getState) => {

  const favorite_movies = getState().movies.favorite_movies;
  //const newFavorites = favorite_movies.filter(item => item !== id)

  const newFavorites = favorite_movies.filter(item => item.id !== id)
 
  dispatch({
    type: DELETE_FAVORITE_MOVIE,
    favorite_movies: newFavorites
  });
};
