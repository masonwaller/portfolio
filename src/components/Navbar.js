import React from "react";
import "../App.css";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <img src="WALL.png" alt="WALL Y" width="150"></img>
        <Button color="inherit">
          <NavLink to="/" id="link">
            Home
          </NavLink>
        </Button>
        <Button color="inherit">
          <NavLink to="/projects" id="link">
            Projects
          </NavLink>
        </Button>
        <Button color="inherit">
          <NavLink to="/resume" id="link">
            Resume
          </NavLink>
        </Button>
        <Button color="inherit">
          <NavLink to="/contact" id="link">
            Contact
          </NavLink>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
