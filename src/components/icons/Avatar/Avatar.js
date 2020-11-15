import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  icon: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  profile: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  cover: {
    width: theme.spacing(125),
    height: theme.spacing(35),
    borderRadius:theme.spacing(5)
  },
}));

export function CoverImage(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar
        alt="C"
        src={props.imageLink}
        className={classes.cover}
        variant="rounded"
      />
    </div>
  );
}

export function ProfilePicture(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="P" src={props.imageLink} className={classes.profile} />
    </div>
  );
}
