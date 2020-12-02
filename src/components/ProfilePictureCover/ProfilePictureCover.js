import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  profile: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    border: "solid white 7px",
    display: "flex",
    position: "absolute",
    marginLeft: "35px",
    marginTop: "25px",
    zIndex: 2,
    img: {
      transform: "scale(2)",
    },
  },
  cover: {
    width: theme.spacing(125),
    height: theme.spacing(35),
    borderRadius: theme.spacing(5),
    display: "flex",
    marginLeft: "100px",
    zIndex: "1",
  },
}));

export function CoverImage({ imageLink }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar
        alt="C"
        src={imageLink}
        className={classes.cover}
        variant="rounded"
      />
    </div>
  );
}

export function ProfilePicture({ imageLink }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="P" src={imageLink} className={classes.profile} />
    </div>
  );
}
