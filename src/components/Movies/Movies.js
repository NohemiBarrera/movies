import React from "react";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import NowPlaying from "./NowPlaying";
import Popular from "./Popular";
import TopRated from "./TopRated";
import Upcoming from "./Upcoming";

const Movies = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);

  const options = [
    "",
    "En exhibición",
    "Populares",
    "Mejor calificadas",
    "Próximas a Estrenarse",
  ];

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const auth = useSelector((state) => state.auth.name);

  console.log(auth);

  return (
    <>
      <List component="nav" aria-label="Device settings">
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          onClick={handleClickListItem}
        >
          <ListItemText
            primary="Organizar por:"
            secondary={options[selectedIndex]}
          />
        </ListItem>
      </List>

      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>

      <ListItemText primary={`Mostrando Películas ${options[selectedIndex]}`} />

      <Grid container>
        {selectedIndex === 1 ? (
          <NowPlaying />
        ) : selectedIndex === 2 ? (
          <Popular />
        ) : selectedIndex === 3 ? (
          <TopRated />
        ) : (
          <Upcoming />
        )}
      </Grid>
    </>
  );
};

export default Movies;
