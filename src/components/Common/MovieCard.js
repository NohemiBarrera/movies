import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginBottom: "20px",
    width: "90%",
  },
  actions: {
    height: "2rem",
    justifyContent: "end",
  },
}));

const MovieCard = (props) => {
  const classes = useStyles();

  return (
    <Card  className={classes.root}>
      <CardActions disableSpacing className={classes.actions}>
        <IconButton aria-label="add to favorites" onClick={props.onClick}>
          <FavoriteIcon className={props.isFavorite ? "red-button" : "gray-button"}/>
        </IconButton>
      </CardActions>
      <Link to={`/movie/detail/${props.url}`}>
        <CardMedia
          component="img"
          alt={props.title}
          image={props.image}
          title={props.title}
        />
      </Link>
    </Card>
  );
};

export default MovieCard;
