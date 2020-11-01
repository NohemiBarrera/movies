import {
  GET_NOW_PLAYING_MOVIES,
  GET_POPULAR_MOVIES,
  GET_TOP_RATED_MOVIES,
  GET_UPCOMING_MOVIES,
} from "../actions/types";

const initialState = {
  now_playing_movies: [],
  popular_movies: [],
  top_rated_movies: [],
  upcoming_movies: [],
  videos: [],
  favorite_movies: []
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
    default:
      return state;
  }
}
