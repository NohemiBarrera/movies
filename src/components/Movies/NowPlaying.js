import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getNowPlayingMovies } from "../../actions/movies";

const NowPlaying = () => {
  const dispatch = useDispatch();
  const now_playing_movies = useSelector(
    (state) => state.movies.now_playing_movies
  );

  useEffect(() => {
    dispatch(getNowPlayingMovies());
  }, [dispatch]);

  const movies = now_playing_movies.map((item, idx) => {
    return <p key={idx}>Título {item.title}</p>;
  });
  return (
    <div>
      <h1>Estrenos</h1>
      {movies}
    </div>
  );
}

export default NowPlaying;
