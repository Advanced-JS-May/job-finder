import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCompanyById } from "../../services/company";
import { Link } from "react-router-dom";

//UI
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AddBoxIcon from "@material-ui/icons/AddBox";
import Fab from "@material-ui/core/Fab";

//components
import TabPanel from "../../components/TabPanel/TabPanel";
import ProfileHeader from "../../components/Company/ProfileHeader/ProfileHeader";
import ProfileContactCard from "../../components/Company/ProfileContactCard/ProfileContactCard";
import { useAuth } from "../../services/authentication";
import ProfileDescriptionCard from "../../components/Company/ProfileDescriptionCard/ProfileDescriptionCard";
import ProfileBusinessCard from "../../components/Company/ProfileBusinessCard/ProfileBusinessCard";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    marginRight: "24px",
  },
  snapshot: {
    display: "flex",
    // flexDirection:"row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "3px solid green",
  },
  basicInfo: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  bussinessInfo: {
    width: "1000px",
    height: "250px",
  },
  description: {
    width: "1000px",
    height: "250px",
  },
}));

export default function Company() {
  const classes = useStyles();
  const theme = useTheme();
  const { user } = useAuth();

  const [value, setValue] = React.useState(0);
  const [company, setCompany] = useState({});
  const [bio, setBio] = useState({});
  const [contacts, setContacts] = useState({});
  const [business, setBusiness] = useState({});

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    getCompanyById(user.uid).then((c) => {
      setCompany(c);
      setBio(c.bio);
      setContacts(c.contacts);
      setBusiness(c.business);
    });
  }, [user.uid]);

  return (
    <div className={classes.root}>
      <ProfileHeader
        image={company.image}
        coverImage={company.coverImage}
        name={company.companyName}
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
        <div className={classes.snapshot}>
          <div>
            <ProfileContactCard
              country={contacts.country}
              city={contacts.city}
              address={contacts.address}
              tel={contacts.tel}
              mail={contacts.mail}
              website={contacts.website}
            />
          </div>
          <div className={classes.basicInfo}>
            <div>
              <ProfileBusinessCard
                numberOfEmployees={business.numberOfEmployees}
                establishment={business.establishment}
                taxId={business.taxId}
              />
            </div>
            <div>
              <ProfileDescriptionCard
                description={bio.description}
                // name={company.name}
              />
            </div>
          </div>
        </div>
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
