import React from "react";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";

//components
import ProfileCardEdit from "../ProfileCardEdit/ProfileCardEdit";
import Profile from "../../../pages/Profile/Profile";
//services
import { useAuth } from "../../../services/authentication";
import { updateProfileInfo } from "../../../services/company.service";

//UI
import Card from "@material-ui/core/Card";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import DateRangeIcon from "@material-ui/icons/DateRange";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import GavelIcon from "@material-ui/icons/Gavel";
import Button from "@material-ui/core/Button";
import FolderSpecialIcon from "@material-ui/icons/FolderSpecial";

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

export default function ProfileBusinessInfoEdit({
  field,
  employee,
  establishment,
  taxId,
}) {
  const classes = useStyles();
  const { user } = useAuth();
  const history = useHistory();

  return (
    <ProfileCardEdit
      cardName="Business Info"
      cardContent={
        <Formik
          initialValues={{
            field: "",
            employee: "",
            taxId: "",
            establishment: "",
          }}
          onSubmit={(values) => {
            updateProfileInfo(user.uid, values);
            setTimeout(() => history.goBack(), 1500);
          }}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit} className={classes.root}>
              <div>
                <FolderSpecialIcon />
                Field:
                <TextField
                  label={field}
                  id="outlined-basic"
                  type="text"
                  variant="outlined"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.name}
                  name="field"
                />
                {props.errors.name && (
                  <div id="feedback">{props.errors.name}</div>
                )}
              </div>
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
                  label={employee}
                  id="outlined-basic"
                  type="text"
                  variant="outlined"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.name}
                  name="employee"
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
                  Save
                </Button>
              </div>
            </form>
          )}
        </Formik>
      }
      page={<Profile />}
    />
  );
}
