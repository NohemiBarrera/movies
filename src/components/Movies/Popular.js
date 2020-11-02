import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPopularMovies } from "../../actions/movies";
import MovieCard from "../Common/MovieCard";
import Grid from "@material-ui/core/Grid";

const Popular = () => {
  const dispatch = useDispatch();
  const popular_movies = useSelector(
    (state) => state.movies.popular_movies
  );

  useEffect(() => {
    dispatch(getPopularMovies());
  }, [dispatch]);

  const movies = popular_movies.map((item, idx) => {
    return (
      <Grid xs={6} lg={3} key={idx}>
        <MovieCard title={item.title} image={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
      </Grid>
    )
  });
  return (movies);
}

export default Popular;