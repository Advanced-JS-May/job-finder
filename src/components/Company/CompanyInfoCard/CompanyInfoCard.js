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
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 10,
  },
});

export default function CompanyInfoCard ({ companyName, jobTitle, companyLogo }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        {/* <CardMedia
          component="img"
          alt="#" //change
          height="140"
          image="https://hirebee-main-new.s3.amazonaws.com/staff.am/upload/7/3/3/a/733aaf94.png",

          title="#" //change
        /> */}
        <CardMedia >
            <PhotoCamera />
        
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {companyName}
            adadadad
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {jobTitle}
            adadaz
          </Typography>
        </CardContent>
      </CardActionArea>

    </Card>
  );
}

