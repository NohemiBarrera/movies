import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTopRatedMovies } from "../../actions/movies";

const TopRated = () => {
  const dispatch = useDispatch();
  const top_rated_movies = useSelector(
    (state) => state.movies.top_rated_movies
  );

  useEffect(() => {
    dispatch(getTopRatedMovies());
  }, [dispatch]);

  const movies = top_rated_movies.map((item, idx) => {
    return <p key={idx}>Título {item.title}</p>;
  });
  return (
    <div>
      <h1>Mejores calificadas</h1>
      {movies}
    </div>
  );
}

export default TopRated;