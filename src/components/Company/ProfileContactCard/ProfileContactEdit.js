import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";

//services
import { updateProfileInfo } from "../../../services/company.service";
import { useAuth } from "../../../services/authentication";
// import { getCompanyById } from "../../../services/company";
import { getProfileById } from "../../../services/company.service";

//UI
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import BusinessIcon from "@material-ui/icons/Business";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import LanguageIcon from "@material-ui/icons/Language";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

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
  const [profile, setProfile] = useState();

  // useEffect(() => {
  //   // getProfileById("/company/", user.uid).then((profile) => {
  //   //   setProfile(profile);
  //   //   console.log(profile);
  //   // });

  // }, [user.uid]);

  return (
    <Card className={classes.root}>
      <CardContent>
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
                {/* <SubmitButton>Submit</SubmitButton> */}
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
