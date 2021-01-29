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
  root: {
    width: "720px",
    height: "30px",
    display: "flex",
  },
  element: {
    display: "flex",
    alignItems: "center",
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
    <Card>
      <CardContent className={classes.root}>
        <div>
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
          <div>
            <DateRangeIcon />
            Establishment:
            <p>{establishment}</p>
          </div>
          <div>
            <SupervisorAccountIcon />
            Employees:
            <p>{employee}</p>
          </div>
          <div>
            <GavelIcon />
            TaxID:
            <p>{taxId}</p>
          </div>
        </Grid>
      </CardContent>
    </Card>
  );
}
