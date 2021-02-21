import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

//UI
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
import DateRangeIcon from "@material-ui/icons/DateRange";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import GavelIcon from "@material-ui/icons/Gavel";

const useStyles = makeStyles({
  card: {
    boxShadow: "10px  8px 10px #888888",
    border: "1px solid #808080 ",
  },
  root: {
    width: "765px",
    height: "30px",
    display: "flex",
  },
  element: {
    display: "flex",
    alignItems: "center",
    textAlign: "baseline",
    // padding: "15px",
    border: "3px bold green",
  },

  edit: {
    position: "relative",
    top: 0,
    left: 0,
  },
});

export default function ProfileBusinessCard({
  establishment,
  employee,
  taxId,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.root}>
        <div className={classes.element}>
          <Button className={classes.edit}>
            <Link to="/profile/profileBusinessCard/edit">
              <EditIcon />
            </Link>
          </Button>
        </div>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <div className={classes.element}>
            <DateRangeIcon />
            Establishment:
            <p>{establishment}</p>
          </div>
          <div className={classes.element}>
            <SupervisorAccountIcon />
            Employees:
            <p>{employee}</p>
          </div>
          <div className={classes.element}>
            <GavelIcon />
            TaxID:
            <p>{taxId}</p>
          </div>
        </Grid>
      </CardContent>
    </Card>
  );
}
