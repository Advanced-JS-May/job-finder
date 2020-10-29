import React from "react";
import EmployeeSignIn from "../../components/JobSeekerSignIn/JobSeekerSignIn";
import CompanySignIn from "../../components/EmployerSignIn/EmployerSignIn";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "../../components/TabPanel/TabPanel";

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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Job-seeker" />
          <Tab label="Employer" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
        <EmployeeSignIn />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <CompanySignIn />
      </TabPanel>
    </div>
  );
}
