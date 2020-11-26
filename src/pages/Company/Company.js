import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCompanyById } from "../../services/company";

//UI
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";

//components
import TabPanel from "../../components/TabPanel/TabPanel";
import CreateJob from "../../components/Company/CreateJob/CreateJob";
import ProfileHeader from "../../components/Company/ProfileHeader/ProfileHeader";
import ProfileContactCard from "../../components/Company/ProfileContactCard/ProfileContactCard"
import { useAuth } from '../../services/authentication';
import ProfileDescriptionCard from "../../components/Company/ProfileDescriptionCard/ProfileDescriptionCard"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    marginRight:"24px"
  },
  snapshot:{
    display:"flex",
    // flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    margin :"3px solid green"
  },
  description:{
    width:"1000px",
    height: "250px"
  }

}));

export default function Company() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const [company, setCompany] = useState({});
  const { user } =useAuth();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const handleChangeIndex = (index) => {
  //   setValue(index);
  // };

  useEffect(() => {
    getCompanyById(user.uid).then((c) => {
      setCompany(c);
    });
  }, [user.uid]);
  

  return (
    <div className={classes.root}>
          <ProfileHeader
           image={company.image} 
           coverImage={company.coverImage}
           name={company.companyName}
           />
    <div>
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
            <Tab label="Create Job Opening" />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0} dir={theme.direction} >
          <div className={classes.snapshot}>
            <div>
              <ProfileContactCard 
                country={company.country}
                city={company.city}
                address={company.address}
                tel={company.tel} 
                mail={company.mail} 
                website={company.website}
                />
            </div>
            <div>
              <ProfileDescriptionCard
                description={company.description} 
                name={company.name}
              />
              {/* <Card className={classes.description}>
                {/* <CardContent>
                <p> {company.description} </p>
                </ CardContent> 
              </Card> */}
            </div>
          </div>
         </TabPanel>
         <TabPanel value={value} index={1} dir={theme.direction} >
           <div>
             <CreateJob />
           </div>
         </TabPanel>
      </div>
    </div>
  );
}
