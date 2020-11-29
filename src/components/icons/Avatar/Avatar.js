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
  icon: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  profile: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    border: "solid white 7px",
  },
  cover: {
    width: theme.spacing(125),
    height: theme.spacing(35),
    borderRadius: theme.spacing(5),
   },
}));

export function CoverImage( { imageLink } ) {
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

export function ProfilePicture( { imageLink } ) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar 
      alt="P" 
      src={imageLink} 
      className={classes.profile} />
    </div>
  );
}
