import React from "react";
import { Grid, Box } from "@material-ui/core";
import { LinkedIn, Email, Phone, GitHub } from "@material-ui/icons";

function Contact() {
  return (
    <Box mt="4.5rem" mx="auto" maxWidth="1280px" width="90%">
      <Grid container spacing={2} justify="flex-start" alignItems="flex-start">
        <Grid item xs={12}>
          <h1>Mason Waller</h1>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Email /> masonwaller805@gmail.com
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Phone /> (805)-889-1264
        </Grid>
        <Grid item xs={6} sm={6} md={2} lg={2}>
          <a href="https://www.linkedin.com/in/meet-mason-waller/" id="link">
            <LinkedIn />
          </a>
        </Grid>
        <Grid item xs={6} sm={6} md={2} lg={2}>
          <a href="https://github.com/masonwaller" id="link">
            <GitHub />
          </a>
        </Grid>
        <Grid item xs={12}>
          Everyone wants to know what they are going to be when they grow up. In
          high school I had no idea what I wanted to be, my only plan was to get
          good grades and move on to college. In my junior year I took a Web
          Design class in order to complete my computer literacy requirement, I
          learned basic HTML and CSS. I ended up loving it and it was my
          favorite class in high school. I attended Flatiron School a couple
          years later and I was totally immersed, trying to learn as much as
          possible. Coding is my way of expressing myself and it is a great
          creativity outlet for me. When I am not coding I enjoy watching NBA
          Basketball, working out, and surfing.
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contact;
