import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getNowPlayingMovies } from "../../actions/movies";
import MovieCard from "../Common/MovieCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

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

const NowPlaying = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const now_playing_movies = useSelector(
    (state) => state.movies.now_playing_movies
  );

  useEffect(() => {
    dispatch(getNowPlayingMovies());
  }, [dispatch]);

  const movies = now_playing_movies.map((item, idx) => {
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
          onClick={() => console.log("now playing add")}
        />
      </Grid>
    );
  });

  return movies;
};

export default NowPlaying;
