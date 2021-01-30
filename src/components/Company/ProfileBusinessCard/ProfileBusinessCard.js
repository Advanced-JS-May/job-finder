import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

//UI
import Card from "@material-ui/core/Card";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import DateRangeIcon from "@material-ui/icons/DateRange";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import GavelIcon from "@material-ui/icons/Gavel";

const useStyles = makeStyles({
  root: {
    width: 400,
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
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
        <Button className={classes.edit}>
          <Link to="/profile/profileBusinessCard/edit">
            <EditIcon />
          </Link>
        </Button>
        <DateRangeIcon />
        Establishment
        <p>{establishment}</p>
        <SupervisorAccountIcon />
        Employees
        <p>{employee}</p>
        <GavelIcon />
        TaxID
        {taxId}
      </CardContent>
    </Card>
  );
}
