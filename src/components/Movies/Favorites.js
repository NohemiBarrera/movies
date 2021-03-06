import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavoriteMovie, deleteFavoriteMovie } from "../../actions/movies";
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
  let isFavorite;
  const classes = useStyles();
  const dispatch = useDispatch();
  const favorite_movies = useSelector((state) => state.movies.favorite_movies);

  const handleClick = (id, poster_path) => {
    if (favorite_movies.some((e) => e.id === id)) {
      isFavorite = true;
    } else {
      isFavorite = false;
    }
    isFavorite
      ? dispatch(deleteFavoriteMovie(id))
      : dispatch(addFavoriteMovie({ id: id, poster_path: poster_path }));
  };

  return (
    <>
      <h1>Mis favoritas</h1>
      {favorite_movies.length === 0 ? (
        <h3>Aún no has agregado ninguna película a tus favoritas</h3>
      ) : (
        <Grid container spacing={2}>
          {favorite_movies.map((item, idx) => {
            return (
              <Grid
                item
                xs={12}
                md={3}
                lg={3}
                key={idx}
                className={classes.mediaContainer}
              >
                <MovieCard
                  title={"Pelicula"}
                  url={item.id}
                  image={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  onClick={() => handleClick(item.id, item.poster_path)}
                  iconClass={
                    favorite_movies.some((e) => e.id === item.id)
                      ? "red-button"
                      : "gray-button"
                  }
                />
              </Grid>
            );
          })}
        </Grid>
      )}
    </>
  );
};

export default Favorites;
