import React from "react";
import { Grid, Box } from "@material-ui/core";
import data from "./Data.js";
import Specific from "./Specific.js";

function Project() {
  return (
    <Box mt="4.5rem" mx="auto" maxWidth="1280px" width="90%">
      <Grid container spacing={3} justify="center" alignItems="center">
        {data.map(data => (
          <Specific data={data} />
        ))}
      </Grid>
    </Box>
  );
}

export default Project;
