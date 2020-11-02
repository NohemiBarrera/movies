import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieDetail, getMovieVideos, addFavoriteMovie, deleteFavoriteMovie } from "../../actions/movies";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import ReactPlayer from "react-player/youtube";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import "../../App.css";

const useStyles = makeStyles({
  container: {
    paddingTop: "2rem",
  },
  root: {
    flexRoot: 1,
  },
  media: {
    width: "50%",
  },
  mediaContainer: {
    display: "flex",
    justifyContent: "center",
  },
  playerWrapper: {
    position: "relative",
    paddingTop: "56.25%" /* Player ratio: 100 / (1280 / 720) */,
  },
  reactPlayer: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  noVideo: {
    textAlign: "center",
  },
});

const Detail = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const favorite_movies = useSelector((state) => state.movies.favorite_movies);
  const overview = useSelector((state) => state.movies.overview);
  const vote_average = useSelector((state) => state.movies.vote_average);
  const release_date = useSelector((state) => state.movies.release_date);
  const title = useSelector((state) => state.movies.title);
  const runtime = useSelector((state) => state.movies.runtime);
  const poster_path = useSelector((state) => state.movies.poster_path);

  
  
  console.log(favorite_movies);

  const { id } = useParams();
  console.log("Esta es la película a agregar:" + id);
  const isFavorite = favorite_movies.includes(id);
  console.log(isFavorite);

  useEffect(() => {
    dispatch(getMovieDetail(id));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getMovieVideos(id));
  }, [dispatch]);

  const handleClick = (e, i) => {
    e.preventDefault();
    isFavorite ? (
      dispatch(deleteFavoriteMovie(i))
    ) : dispatch(addFavoriteMovie(id))
  };

  const videos = useSelector((state) => state.movies.videos);
  const videoKey = videos.length !== 0 ? videos[0].key : "";

  return (
    <div className={classes.root}>
      <Grid container className={classes.container}>
        <Grid lg={6} xs={12} className={classes.mediaContainer}>
          <Card className={classes.media}>
            <CardMedia
              component="img"
              alt={title}
              height="auto"
              image={`https://image.tmdb.org/t/p/w500${poster_path}`}
              title={title}
            />
          </Card>
        </Grid>
        <Grid lg={6} xs={12}>
          <h1>{title}</h1>
          <Grid container>
            <Grid xs={6}>
              <p>
                Fecha de estreno <b>{release_date}</b>
              </p>
            </Grid>
            <Grid xs={6}>
              <p>
                Duración <b>{runtime} min</b>
              </p>
            </Grid>
          </Grid>
          <Grid container>
            <Grid xs={6}>
              <p>
                Calificación <b>{vote_average}</b>
              </p>
            </Grid>
            <Grid xs={6}>
              <IconButton aria-label="add to favorites" onClick={handleClick}>
                <FavoriteIcon className={isFavorite ? "red-button" : "gray-button"}/>
              </IconButton>
            </Grid>
          </Grid>
          <h3>Resumen</h3>
          <p>{overview}</p>
        </Grid>
        {videoKey !== "" ? (
          <Grid lg={12} xs={12} className={classes.mediaContainer}>
            <Box textAlign="center" width="100%">
              <h2>Trailer</h2>
              <div className={classes.playerWrapper}>
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${videoKey}`}
                  className={classes.reactPlayer}
                  width="100%"
                  height="100%"
                />
              </div>
            </Box>
          </Grid>
        ) : (
          <h2 className={classes.noVideo}>No hay videos disponibles</h2>
        )}
      </Grid>
    </div>
  );
};

export default Detail;
