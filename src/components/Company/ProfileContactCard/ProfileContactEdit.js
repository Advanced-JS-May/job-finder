import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";

//components
import Profile from "../../../pages/Profile/Profile";
import ProfileCardEdit from "../ProfileCardEdit/ProfileCardEdit";

//services
import { updateProfileInfo } from "../../../services/company.service";
import { useAuth } from "../../../services/authentication";

//UI
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import BusinessIcon from "@material-ui/icons/Business";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import LanguageIcon from "@material-ui/icons/Language";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  element: {
    display: "flex",
    alignItems: "center",
  },
});

export default function ProfileContactEdit({
  country,
  city,
  address,
  tel,
  mail,
  website,
}) {
  const classes = useStyles();
  const { user } = useAuth();
  const history = useHistory();

  return (
    <div>
      <ProfileCardEdit
        cardContent={
          <Grid
            container
            direction="column"
            justify="flex-end"
            alignItems="center"
          >
            <Formik
              initialValues={{
                country: "",
                city: "",
                address: "",
                tel: "",
                mail: "",
                website: "",
              }}
              onSubmit={(values) => {
                updateProfileInfo(user.uid, values);
                setTimeout(() => history.goBack(), 1500);
              }}
            >
              {(props) => (
                <form onSubmit={props.handleSubmit} className={classes.root}>
                  <div>
                    <LocationCityIcon />
                    State:
                    <TextField
                      label={country}
                      id="outlined-basic"
                      type="text"
                      variant="outlined"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.name}
                      name="country"
                    />
                    {props.errors.name && (
                      <div id="feedback">{props.errors.name}</div>
                    )}
                  </div>
                  <div>
                    <LocationCityIcon />
                    City:
                    <TextField
                      label={city}
                      id="outlined-basic"
                      type="text"
                      variant="outlined"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.name}
                      name="city"
                    />
                    {props.errors.name && (
                      <div id="feedback">{props.errors.name}</div>
                    )}
                  </div>
                  <div>
                    <BusinessIcon />
                    Address:
                    <TextField
                      label={address}
                      id="outlined-basic"
                      type="text"
                      variant="outlined"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.name}
                      name="address"
                    />
                    {props.errors.name && (
                      <div id="feedback">{props.errors.name}</div>
                    )}
                  </div>
                  <div>
                    <PhoneIcon />
                    Tel:
                    <TextField
                      label={tel}
                      id="outlined-basic"
                      type="text"
                      variant="outlined"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.name}
                      name="tel"
                    />
                    {props.errors.name && (
                      <div id="feedback">{props.errors.name}</div>
                    )}
                  </div>
                  <div>
                    <MailIcon />
                    Mail:
                    <TextField
                      label={mail}
                      id="outlined-basic"
                      type="text"
                      variant="outlined"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.name}
                      name="mail"
                    />
                    {props.errors.name && (
                      <div id="feedback">{props.errors.name}</div>
                    )}
                  </div>
                  <div>
                    <LanguageIcon />
                    Website:
                    <TextField
                      label={website}
                      id="outlined-basic"
                      type="text"
                      variant="outlined"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.name}
                      name="website"
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
                      Save
                    </Button>
                  </div>
                </form>
              )}
            </Formik>
          </Grid>
        }
        page={<Profile />}
      />
    </div>
  );
}
