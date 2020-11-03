import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  addFavoriteMovie,
  deleteFavoriteMovie,
  getMovieDetail,
} from "../../actions/movies";
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

const Favorites = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(null);
  const favorite_movies = useSelector((state) => state.movies.favorite_movies);
  const upcoming_movies = useSelector((state) => state.movies.upcoming_movies);

  let allFavorites;
  useEffect(() => {
    allFavorites = favorite_movies.map((item) => dispatch(getMovieDetail(item)))
  }, [dispatch]);

  console.log(allFavorites);

  const handleClick = (id, i) => {
    const isFavorite = favorite_movies.includes(id);
    setIsFavorite(isFavorite);
    isFavorite
      ? dispatch(deleteFavoriteMovie(id))
      : dispatch(addFavoriteMovie(id));
  };

  const movies = favorite_movies.map((item, idx) => {
    return (
      <Grid
        xs={6}
        lg={3}
        key={idx}
        spacing={2}
        className={classes.mediaContainer}
      >
        <MovieCard
          title={item.title}
          url={item.id}
          image={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
          onClick={() => handleClick(item.id)}
          iconClass={
            favorite_movies.includes(item.id) ? "red-button" : "gray-button"
          }
        />
      </Grid>
    );
  });

  return movies;
};

export default Favorites;
