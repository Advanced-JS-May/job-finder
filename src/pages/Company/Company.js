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


//components
import TabPanel from "../../components/TabPanel/TabPanel";


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

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  // const handleChangeIndex = (index) => {
  //   setValue(index);
  // };

  useEffect(() => {
    getCompanyById(id).then((c) => {
      setCompany(c);
    });
  }, [id]);

  console.log(company)


  return (
<div className={classes.root} >
 <div style={{display:"flex",flexDirection:"row"}}>     
 <div>
       <CardMedia
        component="img"
        alt="Profile Picture"
        height="50px"
        image="./img_avatar.png"
        title="Profile picture"
      />
</div>
<div>
       <CardMedia
        component="img"
        alt="Profile Picture"
        height="50px"
        image="./img_avatar.png"
        title="Profile picture"
      />
</div>
</div>
<div>
  <p>{company.country}</p>
</div>
<div>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          // onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Employees" />
          <Tab label="Average Salary" />
          <Tab label="Average Salary" />
          <Tab label="Tax Id" />
          <Tab label="Industry" />
          <Tab label="Barev" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
        {company.country}
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
  
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
     2
      </TabPanel>
      <TabPanel value={value} index={3} dir={theme.direction}>
     24545
      </TabPanel>
    </div>
</div>  
  );
}
