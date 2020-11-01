import React from "react";
//import { useDispatch, useSelector } from "react-redux";
//import { useEffect } from "react";
//import { getNowPlayingMovies } from "../../actions/movies";
import NowPlaying from "./NowPlaying";
import Popular from "./Popular";
import TopRated from "./TopRated";
import Upcoming from "./Upcoming";

const Movies = () => {
  const now_playing = <NowPlaying />;
  const popular = <Popular/>;
  const top_rated = <TopRated/>;
  const upcoming = <Upcoming/>;

  return (
    <div>
      {now_playing}
      {popular}
      {top_rated}
      {upcoming}
    </div>
  );
}

export default Movies;
