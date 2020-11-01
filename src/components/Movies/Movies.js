import React from "react";
//import { useDispatch, useSelector } from "react-redux";
//import { useEffect } from "react";
//import { getNowPlayingMovies } from "../../actions/movies";
import NowPlaying from "./NowPlaying";

const Movies = () => {
  const now_playing = <NowPlaying />;

  return (
    <div>
      {now_playing}
    </div>
  );
}

export default Movies;
