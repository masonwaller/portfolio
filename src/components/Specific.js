import React from "react";
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

function Specific(props) {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.data.image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.data.title}
            </Typography>
            <h5>{props.data.lang}</h5>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.data.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <a href={props.data.repo}>Github</a>
          </Button>
          <Button size="small" color="primary">
            <a href={props.data.link}>Demo</a>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
export default Specific;
