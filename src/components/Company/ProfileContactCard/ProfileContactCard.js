import React from "react";
import { makeStyles } from "@material-ui/core/styles";

//UI
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import BusinessIcon from '@material-ui/icons/Business';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import LanguageIcon from '@material-ui/icons/Language';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 10,
    display:"flex",
    flexDirection:"column"
  },
  element: {
    display:"flex",
    alignItems:"center",
  },

  edit:{
    position:"relative",
    top:0,
    left:0,
  }
 
});

export default function ProfileContactCard (props) {
  const classes = useStyles();

  return (
    <Card >
        <CardContent className={classes.root}>
        <EditIcon className={classes.edit} />
          <h3>Contacts</h3>
          <div className={classes.element}>
            <LocationCityIcon />State:{props.country} City:{props.city}
          </div>
          <div className={classes.element}>
            <BusinessIcon />Address:{props.address}
          </div>
          <div className={classes.element}>
            <PhoneIcon />Tel:{props.tel}
          </div>
          <div className={classes.element}>
            <MailIcon />Mail:{props.mail}
          </div>
          <div className={classes.element}>
            <LanguageIcon /> Website:{props.website}
          </div>
         </CardContent>
    </Card>
  );
}

          {/* <div className={classes.element}>
            <WorkIcon /> <div>Jobs available:</div>
          </div>
          <div className={classes.element}>
            <AssignmentIcon />Field:
          </div>
          <div className={classes.element}>
            <CalendarTodayIcon />Establishment:
          </div> */}
