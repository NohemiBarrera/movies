import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getNowPlayingMovies } from "../../actions/movies";
import MovieCard from "../Common/MovieCard";
import Grid from "@material-ui/core/Grid";

const NowPlaying = () => {
  const dispatch = useDispatch();
  const now_playing_movies = useSelector(
    (state) => state.movies.now_playing_movies
  );

  useEffect(() => {
    dispatch(getNowPlayingMovies());
  }, [dispatch]);

  const movies = now_playing_movies.map((item, idx) => {
    return (
      <Grid xs={6} lg={3} key={idx}>
        <MovieCard title={item.title} image={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
      </Grid>
    );
  });

  return (movies);
};

export default NowPlaying;
