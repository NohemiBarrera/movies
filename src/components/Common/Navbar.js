import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonIcon from "@material-ui/icons/Person";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ROOT_URL, FAVORITE_MOVIES, PROFILE } from "../../urls";
import "../../App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "start",
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  const token = localStorage.getItem("token");

  return (
    token && (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Películas
            </Typography>
            <Link to={ROOT_URL}>
              <IconButton>
                <HomeIcon className="white-button"/>
              </IconButton>
            </Link>
            <Link to={FAVORITE_MOVIES}>
              <IconButton>
                <FavoriteIcon className="white-button" id="fav"/>
              </IconButton>
            </Link>
            <Link to={PROFILE}>
              <IconButton>
                <PersonIcon className="white-button"/>
              </IconButton>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    )
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Navbar);
