import React, { useState } from "react";


//UI
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
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
  },
  element: {
    display: "flex",
    alignItems: "center",
  },
});

export default function ProfileContactInfo( {  country,  city,  address,  tel,  mail,  website } ) {
    const classes = useStyles();

        return (
         <Card>  
            <CardContent className={classes.root}>
            <h3>Contacts</h3>
            <div className={classes.element}>
                <LocationCityIcon />
                State: {country} , City: {city}
            </div>
            <div className={classes.element}>
                <BusinessIcon />
                Address: {address}
            </div>
            <div className={classes.element}>
                <PhoneIcon />
                Tel: {tel}
            </div>
            <div className={classes.element}>
                <MailIcon />
                Mail: {mail}
            </div>
            <div className={classes.element}>
                <LanguageIcon /> Website: {website}
            </div>
            </CardContent>
         </ Card>  
        );
}
