import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginBottom: "20px",
  },
  media: {
    height: "auto",
    paddingTop: "141.25%", // 16:9
    backgroundSize: "contain",
  },
  actions: {
    height: "2rem",
    justifyContent: "end"
  }
}));

const MovieCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActions disableSpacing className={classes.actions}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>

      <CardMedia
        className={classes.media}
        image={props.image}
        title={props.title}
      />
    </Card>
  );
};

export default MovieCard;
