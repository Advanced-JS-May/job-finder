import React, { useState } from "react";
import { useHistory } from "react-router-dom";

//UI
import { makeStyles, useTheme } from "@material-ui/core/styles";

// import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles({
  closeIcon: {
    position: "absolute",
    top: "0px",
    right: "0px",
    cursor: "pointer",
  },
  edit: {
    alignItems: "baseline",
    height: "2px",
    // border: "3px solid green",
  },
  card: {
    position: "absolute",
    top: "40%",
    left: "30%",
    right: "80%",
    textAlign: "center",
    width: "700px",
    // height: "000px",
    zIndex: 1,
  },
  page: {
    opasity: 0,
    filter: "blur(8px)",
  },
  element: {
    position: "absolute",
    left: "100px",
    top: "150px",
  },
});

export default function ProfileCardEdit({ cardContent, page }) {
  const classes = useStyles();
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <div>
      <Card className={classes.card}>
        <Grid
          className={classes.edit}
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
        >
          <div className={classes.element}></div>
          <div>
            <CloseIcon className={classes.closeIcon} onClick={handleGoBack} />
          </div>
        </Grid>
        <br></br>
        <hr></hr>
        <Grid>
          <CardContent>{cardContent}</CardContent>
        </Grid>
      </Card>
      <div className={classes.page}>{page}</div>
    </div>
  );
}
