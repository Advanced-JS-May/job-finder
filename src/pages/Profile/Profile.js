import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

//UI
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AddBoxIcon from "@material-ui/icons/AddBox";
import Fab from "@material-ui/core/Fab";

//components
import TabPanel from "../../components/TabPanel/TabPanel";
import ProfileHeader from "../../components/Company/ProfileHeader/ProfileHeader";
import ProfileContactCard from "../../components/Company/ProfileContactCard/ProfileContactCard";
import ProfileDescriptionCard from "../../components/Company/ProfileDescriptionCard/ProfileDescriptionCard";
import ProfileBusinessCard from "../../components/Company/ProfileBusinessCard/ProfileBusinessCard";

//Services
import { USER_ROLES } from "../../constants/user.constants";
import { useAuth } from "../../services/authentication";
import { getCompanyById } from "../../services/company.service";
import { getJobSeeker } from "../../services/JobSeeker.service";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    marginRight: "24px",
  },
  element: {
    padding: "10px",
    // border: "15px solid green",
  },
  snapshot: {
    display: "flex",
    // flexDirection:"row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "3px solid green",
  },
}));

export default function Profile() {
  const classes = useStyles();
  const theme = useTheme();
  const { user } = useAuth();
  const id = user.uid;

  const [value, setValue] = React.useState(0);
  const [profile, setProfile] = useState({});

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (user.role === "EMPLOYER") {
      getCompanyById(id).then((profile) => {
        setProfile(profile);
        // console.log(link);
      });
    } else {
      getJobSeeker(id).then((profile) => {
        setProfile(profile);
      });
    }
  }, [user.uid]);

  return (
    <div className={classes.root}>
      <ProfileHeader
        image={profile.image}
        coverImage={profile.coverImage}
        name={profile.name}
      />
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="SnapShot" />
          <Tab label="jobs" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
        <Grid container direction="row" justify="center" alignItems="center">
          <div className={classes.element}>
            <ProfileContactCard
              country={profile.country}
              city={profile.city}
              address={profile.address}
              tel={profile.phone}
              mail={profile.email}
              website={profile.website}
              facebook={profile.facebook}
              twitter={profile.twitter}
              linkedIn={profile.linkedIn}
            />
          </div>
          <div>
            <Grid
              container
              direction="column"
              justify="space-between"
              alignItems="center"
            >
              <div className={classes.element}>
                <ProfileBusinessCard
                  employee={profile.employee}
                  establishment={profile.establishment}
                  taxId={profile.taxId}
                />
              </div>
              <div className={classes.element}>
                <ProfileDescriptionCard summary={profile.summary} />
              </div>
            </Grid>
          </div>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <div>
          <Fab>
            <Link to="/profile/addJob">
              <AddBoxIcon />
            </Link>
          </Fab>
        </div>
      </TabPanel>
    </div>
  );
}
