import React from "react";
import { makeStyles } from "@material-ui/core/styles";
//UI
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export function FormRow({ rowitem1, rowitem2, rowitem3 }) {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={1.5}>
        <div className={classes.paper}>{rowitem1}</div>
      </Grid>
      <Grid item xs={1}>
        <div className={classes.paper}>{rowitem2}</div>
      </Grid>
      <Grid item xs={3}>
        <div className={classes.paper}>{rowitem3}</div>
      </Grid>
    </Grid>
  );
}

// export default
