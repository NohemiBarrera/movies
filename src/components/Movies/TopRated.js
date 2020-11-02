import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTopRatedMovies } from "../../actions/movies";
import MovieCard from "../Common/MovieCard";
import Grid from "@material-ui/core/Grid";

const TopRated = () => {
  const dispatch = useDispatch();
  const top_rated_movies = useSelector(
    (state) => state.movies.top_rated_movies
  );

  useEffect(() => {
    dispatch(getTopRatedMovies());
  }, [dispatch]);

  const movies = top_rated_movies.map((item, idx) => {
    return (
      <Grid xs={6} lg={3} key={idx}>
        <MovieCard title={item.title} image={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
      </Grid>
    )
  });

  return (movies);
}

export default TopRated;