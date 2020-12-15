import React from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";

//services
import { createCompany } from "../../../services/company";
import { useAuth } from "../../../services/authentication";

//UI
import Card from "@material-ui/core/Card";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import DateRangeIcon from "@material-ui/icons/DateRange";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import GavelIcon from "@material-ui/icons/Gavel";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles({
  root: {
    width: "500px",
    margin: 10,
    display: "flex",
    flexDirection: "column",
  },
  element: {
    display: "flex",
    alignItems: "center",
  },
});

export default function ProfileBusinessInfoEdit({employees,establishment,taxId}) {
  const classes = useStyles();
  const { user } = useAuth();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Formik
          initialValues={{
            numberOfEmployees: "",
            taxId: "",
            establishment: "",
          }}
          onSubmit={(values) => {
            createCompany(user.uid, "business", values);
          }}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit} className={classes.root}>
              <div>
                <DateRangeIcon />
                Establishment:
                <TextField
                  label={establishment}
                  id="outlined-basic"
                  type="text"
                  variant="outlined"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.name}
                  name="establishment"
                />
                {props.errors.name && (
                  <div id="feedback">{props.errors.name}</div>
                )}
              </div>
              <div>
                <SupervisorAccountIcon />
                Employees:
                <TextField
                  label={employees}
                  id="outlined-basic"
                  type="text"
                  variant="outlined"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.name}
                  name="employees"
                />
                {props.errors.name && (
                  <div id="feedback">{props.errors.name}</div>
                )}
              </div>
              <div>
                <GavelIcon />
                TaxID:
                <TextField
                  label={taxId}
                  id="outlined-basic"
                  type="text"
                  variant="outlined"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.name}
                  name="taxId"
                />
                {props.errors.name && (
                  <div id="feedback">{props.errors.name}</div>
                )}
              </div>
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={props.handleSubmit}
                >
                  <Link to="/company/id">Submit</Link>
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
}