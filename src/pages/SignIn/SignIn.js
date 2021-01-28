import React, { useState } from "react";
import EmployeeSignIn from "../../components/JobSeekerSignIn/JobSeekerSignIn";
import CompanySignIn from "../../components/EmployerSignIn/EmployerSignIn";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import TabPanel from "../../components/TabPanel/TabPanel";
import Typography from "@material-ui/core/Typography";
import SimpleTabs from "../../components/Tabs/Tabs";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 310,
  },
  signInForm: {
    width: 300,
    border: "5px solid",
    display: "flex",
    flexDirection: "center",
    justifyContent: "center",
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ padding: "60px" }}>
      <Backdrop
        open={open}
        onClick={handleClose}
        style={{
          zIndex: 1,
        }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Typography
        variant="h3"
        color="textPrimary"
        align="center"
        style={{
          margin: "2rem 0",
        }}
      >
        Sign In
      </Typography>
      <SimpleTabs
        value={value}
        onChange={handleChange}
        label1="Employer"
        label2="Job-seeker"
      >
        <TabPanel value={value} index={0}>
          <CompanySignIn />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <EmployeeSignIn setProgress={handleClose} />
        </TabPanel>
      </SimpleTabs>
    </div>
  );
}
