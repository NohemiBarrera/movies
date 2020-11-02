import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieDetail } from "../../actions/movies";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
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
      justifyContent: "center"
  }
});

const Detail = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const overview = useSelector((state) => state.movies.overview);
  const vote_average = useSelector((state) => state.movies.vote_average);
  const release_date = useSelector((state) => state.movies.release_date);
  const title = useSelector((state) => state.movies.title);
  const runtime = useSelector((state) => state.movies.runtime);
  const poster_path = useSelector((state) => state.movies.poster_path);
  console.log(poster_path);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getMovieDetail(id));
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <h2>Detalle</h2>
      <Grid container>
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
          <h2 className={classes.info}>{title}</h2>
          <Grid container>
            <Grid xs={6}>
              <p>
                Fecha de estreno <b>{release_date}</b>
              </p>
            </Grid>
            <Grid xs={6}>
              <p>
                Duración <b>{runtime}</b>
              </p>
            </Grid>
          </Grid>
          <Grid container>
            <Grid xs={6}>
              <p>
                Calificaión <b>{vote_average}</b>
              </p>
            </Grid>
            <Grid xs={6}>
              <p>Agregar a favoritos Icon</p>
            </Grid>
          </Grid>
          <h3>Resumen</h3>
          <p>{overview}</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default Detail;
