import React from 'react'

import { makeStyles } from "@material-ui/core/styles";
import BusinessIcon from "@material-ui/icons/Business";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import LanguageIcon from "@material-ui/icons/Language";
import LocationCityIcon from "@material-ui/icons/LocationCity";

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

export default function DetailInfoCompanies({  country,  city,  address,  tel,  mail,  website}) {
  const classes = useStyles();

  return (
  	<div className={classes.root}>
        <h2>More Info: </h2>
        <div className={classes.element}>
          <LocationCityIcon />
          City: {country ? country : 'No Info'} ,{city ? city : 'No Info'}
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
          <MailIcon />
          Mail: <a href={"mailto:"+mail}> {mail ? mail : 'No Info'} </a>
        </div>
        <div className={classes.element}>
          <LanguageIcon />
          Website: <a href={website}> {website ? website : 'No Info'} </a>
        </div>
    </div>
  );
}
