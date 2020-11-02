import {
  GET_NOW_PLAYING_MOVIES,
  GET_POPULAR_MOVIES,
  GET_TOP_RATED_MOVIES,
  GET_UPCOMING_MOVIES,
  GET_MOVIE_DETAIL,
  GET_MOVIE_VIDEO,
} from "../actions/types";

const initialState = {
  now_playing_movies: [],
  popular_movies: [],
  top_rated_movies: [],
  upcoming_movies: [],
  videos: [],
  favorite_movies: [],
  title: "",
  release_date: "",
  poster_path: "",
  runtime: "",
  overview: "",
  vote_average: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_NOW_PLAYING_MOVIES:
      return {
        ...state,
        now_playing_movies: action.payload,
      };
    case GET_POPULAR_MOVIES:
      return {
        ...state,
        popular_movies: action.payload,
      };
    case GET_TOP_RATED_MOVIES:
      return {
        ...state,
        top_rated_movies: action.payload,
      };
    case GET_UPCOMING_MOVIES:
      return {
        ...state,
        upcoming_movies: action.payload,
      };
    case GET_MOVIE_DETAIL:
      return {
        ...state,
        title: action.payload.title,
        release_date:action.payload.release_date,
        poster_path: action.payload.poster_path,
        runtime: action.payload.runtime,
        overview: action.payload.overview,
        vote_average: action.payload.vote_average,
      };
    case GET_MOVIE_VIDEO:
      return {
        ...state,
        videos: action.payload
      }
    default:
      return state;
  }
}
