import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//UI
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import defaultDescription from "./../../../../src/constants/defaultDescription";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles({
  root: {
    width: "800px",
    height: "180px",
    boxShadow: "10px  8px 10px #888888",
    border: "1px solid #808080 ",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function ProfileDescriptionCard({ summary }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Button className={classes.edit}>
            <Link to="/profile/profileDescriptionCard/edit">
              <EditIcon />
            </Link>
          </Button>

          <Typography
            className={classes.title}
            color="textPriamry"
            gutterBottom
          >
            <h3> Biography </h3>
          </Typography>
        </Grid>
        <Typography className={classes.pos} color="textSecondary">
          {!summary ? (
            <div>
              <p>{defaultDescription}</p>
            </div>
          ) : (
            <div>
              <p>{summary}</p>
            </div>
          )}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
