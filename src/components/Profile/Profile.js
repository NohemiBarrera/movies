import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions/auth";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Button from '@material-ui/core/Button';
import { Redirect } from "react-router";

const useStyles = makeStyles({
  container: {
    justifyContent: "center",
    marginTop: "2rem"
  },
  root: {
    flexRoot: 1,
    maxWidth: 345,
    marginBottom: "20px",
    width: "90%",
  },
  media: {
    width: "50%",
  },
  mediaContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  },
  userName: {
    textAlign: "center",
  }
});

const Profile = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const name = useSelector((state) => state.auth.name);
  const picture = useSelector((state) => state.auth.picture);

  const handleClick = () => {
    window.FB.logout();
    dispatch(logout());
    localStorage.removeItem("token");
    localStorage.removeItem("state");
  };

  return localStorage.getItem("token") ? (
    <Grid container className={classes.container}>
      <Grid xs={6} lg={3} spacing={2} className={classes.mediaContainer}>
        <Card className={classes.root}>
          <CardMedia component="img" alt={name} image={picture} title={name} />
          <h3 className={classes.userName}>{name}</h3>
        </Card>
        <CardActions disableSpacing className={classes.actions}>
          <Button variant="contained" color="primary" onClick={handleClick}>
            Cerrar Sesión
          </Button>
        </CardActions>
      </Grid>
    </Grid>
  ): (
    <Redirect to="/login" />
  );
};

export default Profile;
