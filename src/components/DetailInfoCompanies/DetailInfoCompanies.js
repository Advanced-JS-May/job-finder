import React, { useState } from 'react'

import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import BusinessIcon from "@material-ui/icons/Business";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import LanguageIcon from "@material-ui/icons/Language";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import GroupIcon from '@material-ui/icons/Group';
import LabelIcon from '@material-ui/icons/Label';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 10,
    display: "flex",
    flexDirection: "column",
    backgroundSize: "cover",
  },
  element: {
    display: "flex",
    alignItems: "center",
    fontSize: '18px'
  },
});

export default function DetailInfoCompanies({ field, country,  city,  address,  tel,  mail,  website, emp, LinkedIn, facebook, twitter}) {
  const classes = useStyles();
  const [whichInfo , setWhichInfo] = useState('about')
  return (
  	<div className={classes.root}>
      { whichInfo === 'about' ? 
      <div>
        <h2>About Info: </h2>

        <div className={classes.element}>
          <LabelIcon />
          Field: {field ? field : 'No Info'}
        </div>
        <br />
        <div className={classes.element}>
          <LocationCityIcon />
          City: {country ? country : 'No Info'} , {city ? city : 'No Info'}
        </div>
        <div className={classes.element}>
          <BusinessIcon />
          Address: {address ? address : 'No Info'}
        </div>
        <div className={classes.element}>
          <PhoneIcon />
          Tel: {tel ? tel : 'No Info'}
        </div>
        <div className={classes.element}>
          <GroupIcon />
          employees: {emp ? emp : 'No Info'}
        </div>
        <br />
        <Button variant="contained" color="primary" onClick={() => setWhichInfo('contacts')}>
          Contacts <NavigateNextIcon />
        </Button>
      </div> :
      <div>
        <h2>Contacts: </h2>
        <div className={classes.element}>
          <MailIcon />
          Mail: <a href={"mailto:"+mail}> {mail ? mail : 'No Info'} </a>
        </div>
        <div className={classes.element}>
          <LanguageIcon />
          Website: <a href={website}> {website ? website : 'No Info'} </a>
        </div><br />
        <div className={classes.element}>
          <LinkedInIcon />
          LinkedIn: <a href={LinkedIn}> {LinkedIn ? LinkedIn : 'No Info'} </a>
        </div>
        <div className={classes.element}>
          <FacebookIcon />
          Facebook: <a href={facebook}> {facebook ? facebook : 'No Info'} </a>
        </div>
        <div className={classes.element}>
          <TwitterIcon />
          Twitter: <a href={twitter}> {twitter ? twitter : 'No Info'} </a>
        </div><br />
        <Button variant="contained" color="primary" onClick={() => setWhichInfo('about')}>
          Back <NavigateBeforeIcon />
        </Button>
      </div>
     }
      
      
    </div>
  );
}
