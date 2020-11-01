import { GET_NOW_PLAYING_MOVIES } from "../actions/types";

const initialState = {
  now_playing_movies: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_NOW_PLAYING_MOVIES:
      return {
        ...state,
        now_playing_movies: action.payload,
      };
    default:
      return state;
  }
}
