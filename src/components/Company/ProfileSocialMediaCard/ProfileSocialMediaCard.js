import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";

//UI
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";

import LanguageIcon from "@material-ui/icons/Language";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles({
  element: {
    margin: "5px",
    height: "30px",
  },
});

export default function ProfileMediaCard({
  facebook,
  twitter,
  linkedIn,
  website,
}) {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <a href={facebook}>
        <FacebookIcon className={classes.element} />
      </a>
      <a href={twitter}>
        <TwitterIcon className={classes.element} />
      </a>
      <a href={linkedIn}>
        <LinkedInIcon className={classes.element} />
      </a>
      <a href={website}>
        <LanguageIcon className={classes.element} />
      </a>
    </Grid>
  );
}
