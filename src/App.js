import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Project from "./components/Project.js";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <video
        autoPlay
        loop
        muted
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transfom: "translate(-50%, -50%)",
          zIndex: "-1"
        }}
      >
        <source src="/waves.mp4" type="video/mp4" />
      </video>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/projects">
        <Project />
      </Route>
      <Route exact path="/resume">
        <Home />
      </Route>
      <Route exact path="/contact">
        <Home />
      </Route>
    </div>
  );
}
