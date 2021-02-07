import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";

//components
import Profile from "../../../pages/Profile/Profile";

//services
import { updateProfileInfo } from "../../../services/company.service";
import { useAuth } from "../../../services/authentication";

//UI
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FormSection from "../../FormElements/FormSection/FormSection";

// import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  page: {
    opasity: 0,
    filter: "blur(8px)",
  },
  card: {
    position: "absolute",
    top: "40%",
    left: "30%",
    right: "80%",
    textAlign: "center",
    width: "500px",
    zIndex: 1,
  },
  element: {
    display: "flex",
    alignItems: "center",
    height: "250px",
  },
});

export default function ProfileDescriptionEdit() {
  const classes = useStyles();
  const { user } = useAuth();
  const history = useHistory();

  return (
    <div>
      <Card className={classes.card}>
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
              <form onSubmit={props.handleSubmit}>
                <div>
                  <h3> Biography </h3>
                  <TextField
                    className={classes.element}
                    margin="normal"
                    id="outlined-basic"
                    type="text"
                    fullWidth
                    multiline
                    rows={12}
                    variant="outlined"
                    name="address"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.name}
                    name="summary"
                    inputProps={{
                      maxLength: 450,
                    }}
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
      <div className={classes.page}>
        <Profile />
      </div>
    </div>
  );
}
