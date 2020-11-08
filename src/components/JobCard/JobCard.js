import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 10
  },
});

function JobCard({companyName,jobTitle,companyLogo}) {
  const classes = useStyles();
                                        // create separate Card component
  return (
    <Card className={classes.root}>  
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile" //change
          height="140"
          image={companyLogo}
          title="Contemplative Reptile" //change
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {companyName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {jobTitle}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default JobCard;
