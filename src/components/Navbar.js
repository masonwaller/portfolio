import React from "react";
import "../App.css";
import { AppBar, Toolbar, Button } from "@material-ui/core";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <img src="WALL.png" alt="WALL Y" width="150"></img>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Projects</Button>
        <Button color="inherit">Resume</Button>
        <Button color="inherit">Contact</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
