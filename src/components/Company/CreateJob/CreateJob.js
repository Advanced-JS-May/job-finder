import React, { useState } from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";

//services
import createJob from "../../../services/job";
import { useAuth } from "../../../services/authentication";

//UI
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { uniqueId } from "lodash";

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

  return (
    <Card className={classes.root}>
      <CardContent>
        <Formik
          initialValues={{
            position: "",
            responsabilities:"",
            requirements:"",
            salary:"",
            deadline:"",
            jobId:uniqueId()
          }}

          onSubmit={(values) => {
            createJob(values);
          }}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit} className={classes.root}>
                <h1>Post a job</h1>
              <div>
                {/* <LocationCityIcon /> */}
                Position:
                <TextField
                  // label={country}
                  id="outlined-basic"
                  type="text"
                  variant="outlined"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.description}
                  name="position"
                />
                {props.errors.name && (
                  <div id="feedback">{props.errors.name}</div>
                )}
              </div>
              <div>
                {/* <LocationCityIcon /> */}
                Responsabilities:
                <TextField
                  // label={country}
                  id="outlined-basic"
                  type="text"
                  variant="outlined"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.description}
                  name="responsabilities"
                />
                {props.errors.name && (
                  <div id="feedback">{props.errors.name}</div>
                )}
              </div>
              <div>
                {/* <LocationCityIcon /> */}
                Requirements:
                <TextField
                  // label={country}
                  id="outlined-basic"
                  type="text"
                  variant="outlined"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.description}
                  name="requirements"
                />
                {props.errors.name && (
                  <div id="feedback">{props.errors.name}</div>
                )}
              </div>
              <div>
                {/* <LocationCityIcon /> */}
                Salary:
                <TextField
                  // label={country}
                  id="outlined-basic"
                  type="text"
                  variant="outlined"
                  name="address"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.description}
                  name="salary"
                />
                {props.errors.name && (
                  <div id="feedback">{props.errors.name}</div>
                )}
              </div>
              <div>
                {/* <LocationCityIcon /> */}
                Deadline:
                <TextField
                  // label={country}
                  id="outlined-basic"
                  type="text"
                  variant="outlined"
                  name="address"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.description}
                  name="deadline"
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
                  <Link to="/company/:id">Submit</Link>
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
}