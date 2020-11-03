import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTopRatedMovies, addFavoriteMovie, deleteFavoriteMovie } from "../../actions/movies";
import MovieCard from "../Common/MovieCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import "../../App.css";

const useStyles = makeStyles({
  root: {
    flexRoot: 1,
  },
  info: {
    paddingLeft: "1rem",
  },
  media: {
    width: "50%",
  },
  mediaContainer: {
    display: "flex",
    justifyContent: "center",
  },
});

const TopRated = () => {
  let isFavorite;
  const classes = useStyles();
  const dispatch = useDispatch();
  const favorite_movies = useSelector((state) => state.movies.favorite_movies);
  const top_rated_movies = useSelector(
    (state) => state.movies.top_rated_movies
  );

  useEffect(() => {
    dispatch(getTopRatedMovies());
  }, [dispatch]);

  const handleClick = (id, poster_path) => {
    if(favorite_movies.some(e => e.id === id)){
      isFavorite = true
    } else {
      isFavorite = false
    }
    isFavorite
      ? dispatch(deleteFavoriteMovie(id))
      : dispatch(addFavoriteMovie({id: id, poster_path: poster_path}));
  };

  const movies = top_rated_movies.map((item, idx) => {
    return (
      <Grid
        xs={12}
        md={3}
        lg={3}
        key={idx}
        spacing={2}
        className={classes.mediaContainer}
      >
        <MovieCard
          title={item.title}
          url={item.id}
          image={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
          onClick={() => handleClick(item.id, item.poster_path)}
          iconClass={favorite_movies.some(e => e.id === item.id) ? "red-button" : "gray-button"}
        />
      </Grid>
    );
  });

  return movies;
};

export default TopRated;
