import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUpcomingMovies } from "../../actions/movies";
import MovieCard from "../Common/MovieCard";
import Grid from "@material-ui/core/Grid";

const Upcoming = () => {
  const dispatch = useDispatch();
  const upcoming_movies = useSelector(
    (state) => state.movies.upcoming_movies
  );

  useEffect(() => {
    dispatch(getUpcomingMovies());
  }, [dispatch]);

  const movies = upcoming_movies.map((item, idx) => {
    return (
      <Grid xs={6} lg={3} key={idx}>
        <MovieCard title={item.title} image={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
      </Grid>
    );
  });

  return (movies);
}

export default Upcoming;