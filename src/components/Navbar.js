import React from "react";
import "../App.css";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";

function Navbar() {
  const wid = window.innerWidth;
  return (
    <AppBar position="fixed">
      <Toolbar>
        <img src="WALL.png" alt="WALL Y" width="150"></img>
        <Button color="inherit">
          <NavLink to="/" id="link">
            {wid > 500 ? "Home" : "H"}
          </NavLink>
        </Button>
        <Button color="inherit">
          <NavLink to="/projects" id="link">
            {wid > 500 ? "Projects" : "P"}
          </NavLink>
        </Button>
        <Button color="inherit">
          <NavLink to="/resume" id="link">
            {wid > 500 ? "Resume" : "R"}
          </NavLink>
        </Button>
        <Button color="inherit">
          <NavLink to="/contact" id="link">
            {wid > 500 ? "Contact" : "C"}
          </NavLink>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
