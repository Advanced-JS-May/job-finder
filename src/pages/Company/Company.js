import React, { useEffect, useState } from "react";
import { getCompanyById } from "../../services/company.service";
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    getCompanyById(user.uid).then((company) => {
      setCompany(company);
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
              country={company.country}
              city={company.city}
              address={company.address}
              tel={company.phone}
              mail={company.email}
              website={company.website}
            />
          </div>
          <div className={classes.basicInfo}>
            <div>
              <ProfileBusinessCard
                employee={company.employee}
                establishment={company.establishment}
                taxId={company.taxId}
              />
            </div>
            <div>
              <ProfileDescriptionCard
                summary={company.summary}
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

/*KFeJMrAtOjOGhtW4bdOIY5PwwE62
address: "Mamikonyans 56/1";
city: "Yerevan";
email: "gor.sharoyan95@gmail.com";
employee: 152;
establishment: 1995;
facebook: "https://www.linkedin.com/mynetwork/";
field: "Marketing ";
following: "";
headline: "https://www.linkedin.com/mynetwork/";
linkedIn: "https://www.linkedin.com/mynetwork/";
name: "Grdon Production ";
phone: "+374 95 010248";
summary: "https://www.linkedin.com/mynetwork/";
taxId: 7889545;
twitter: "https://www.linkedin.com/mynetwork/";
website: "https://www.linkedin.com/mynetwork/";*/
