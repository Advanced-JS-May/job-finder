import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";

//services
import { updateProfileInfo } from "../../../services/company.service";
import { useAuth } from "../../../services/authentication";

//UI
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

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

export default function ProfileDescriptionEdit() {
  const classes = useStyles();
  const { user } = useAuth();
  const history = useHistory();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Formik
          initialValues={{
            summary: "",
          }}
          onSubmit={(values) => {
            updateProfileInfo(user.uid, values);
            setTimeout(() => history.goBack(), 1500);
          }}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit} className={classes.root}>
              <div>
                {/* <LocationCityIcon /> */}
                <h1> Biography </h1>
                <TextField
                  // label={country}
                  id="outlined-basic"
                  type="text"
                  variant="outlined"
                  name="address"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.name}
                  name="summary"
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
                  Submit
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
}
