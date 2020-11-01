import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPopularMovies } from "../../actions/movies";

const Popular = () => {
  const dispatch = useDispatch();
  const popular_movies = useSelector(
    (state) => state.movies.popular_movies
  );

  useEffect(() => {
    dispatch(getPopularMovies());
  }, [dispatch]);

  const movies = popular_movies.map((item, idx) => {
    return <p key={idx}>Título {item.title}</p>;
  });
  return (
    <div>
      <h1>Tendencia</h1>
      {movies}
    </div>
  );
}

export default Popular;