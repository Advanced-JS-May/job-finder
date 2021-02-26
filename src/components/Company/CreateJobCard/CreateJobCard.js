import React from "react";
import { Link } from "react-router-dom";

//UI
import { makeStyles } from "@material-ui/core/styles";
import AddBoxIcon from "@material-ui/icons/AddBox";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    maxWidth: 200,
    marginRight: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function CreateJobCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container direction="column" justify="center" alignItems="center">
          <div>
            <Link to="/profile/addJob">
              <AddBoxIcon style={{ fontSize: 70 }} />
            </Link>
          </div>
        </Grid>
      </CardContent>
    </Card>
  );
}
