import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUpcomingMovies } from "../../actions/movies";

const Upcoming = () => {
  const dispatch = useDispatch();
  const upcoming_movies = useSelector(
    (state) => state.movies.upcoming_movies
  );

  useEffect(() => {
    dispatch(getUpcomingMovies());
  }, [dispatch]);

  const movies = upcoming_movies.map((item, idx) => {
    return <p key={idx}>Título {item.title}</p>;
  });
  return (
    <div>
      <h1>Proximas a estrenar</h1>
      {movies}
    </div>
  );
}

export default Upcoming;