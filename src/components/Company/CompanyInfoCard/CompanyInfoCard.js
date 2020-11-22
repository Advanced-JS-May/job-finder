import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PhotoCamera from "@material-ui/icons/PhotoCamera";


//UI
import PeopleIcon from '@material-ui/icons/People';
import WorkIcon from '@material-ui/icons/Work';
import BusinessIcon from '@material-ui/icons/Business';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Fab from '@material-ui/core/Fab';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 10,
    display:"flex",
    flexDirection:"column"
  },
});

export default function CompanyInfoCard ({ companyName, jobTitle, companyLogo }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardContent>
          <div>
            <WorkIcon />Jobs available:
          </div>
          <div>
            <MailIcon />Mail:
          </div>
          <div>
            <PhoneIcon />Tel:
          </div>
          <div>
            <AssignmentIcon />Field:
          </div>
          <div>
            <CalendarTodayIcon />Date of Establishment:
          </div>
          <div>
            <BusinessIcon />Address:
          </div>
         </CardContent>
    </Card>
  );
}

