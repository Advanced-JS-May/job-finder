//React
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCompanyById } from '../../services/company'

//UI
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Avatar from '@material-ui/core/Avatar';

//components
import TabPanel from "../../components/TabPanel/TabPanel";
import CompanyInfo from "../../components/Company/CompanyInfo/CompanyInfo";
import CreateJob from "../../components/Company/CreateJob/CreateJob";
import ImageUpload from '../../components/Company/ImageUpload/ImageUpload' 
import { ProfilePicture, CoverImage} from '../../components/icons/Avatar/Avatar'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 1000,
  },
  companyInfo: {
    width: 300,
    border: "5px solid",
    display: "flex",
    flexDirection: "center",
    justifyContent: "center",
  },
}));

export  default function Company () {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const [company, setCompany] = useState({});
  const { id } = useParams ();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const handleChangeIndex = (index) => {
  //   setValue(index);
  // };

  useEffect(() => {
    getCompanyById(id).then((c) => {
      setCompany(c);
    });
  }, [id]);


 return (
<div className={classes.root}>
  <div style={{ display: "flex", flexDirection: "row" }}>
    <div>
       <ProfilePicture imageLink={company.image}/>
       <CoverImage imageLink={company.image} />
    </div>
  </div>
  <div>
    <h1>{company.comapnyName}</h1>
    <p>{company.description}</p>
  </div>
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
        <Tab label="Location" />
        <Tab label="Contacts" />
        <Tab label="Employees" />
        <Tab label="Pending Jobs" />
      </Tabs>
    </AppBar>
    <TabPanel value={value} index={0} dir={theme.direction}>
      Country : {company.country}
      <br />
      City : {company.city}
      <br />
      Address : {company.adress}
      <br />
      Industry : {company.industry}
      <br />
      Date of Establishemnt : {company.dateOfEstablishment}
    </TabPanel>
    <TabPanel value={value} index={1} dir={theme.direction}>
      Website : {company.website}
      <br />
      Tel : {company.tel}
    </TabPanel>
    <TabPanel value={value} index={2} dir={theme.direction}>
      {company.employees}
    </TabPanel>
    <TabPanel value={value} index={3} dir={theme.direction}
    ></TabPanel>
  </div>
  <div>
    {/* <CompanyInfo /> */}
    <ImageUpload />
    <CreateJob />
    {/* <CreateJob /> */}
  </div>
</div>
);
}
