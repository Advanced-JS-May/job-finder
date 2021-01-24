import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 10,
  },
});

function JobCard({
  companyName,
  jobTitle,
  companyLogo,
  onUnFollow,
  onFollow,
  id,
  arr,
}) {
  const classes = useStyles();

  return (
    <Card key={id} className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="#" //change
          height="140"
          image={companyLogo}
          title="#" //change
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
        {/*@TODO: create Follow Component */}
        {arr.includes(id) ? (
          <Button id={id} onClick={onUnFollow}>
            <FavoriteBorderIcon color="secondary" />
            unFollow
          </Button>
        ) : (
          <Button id={id} onClick={onFollow}>
            <FavoriteIcon color="secondary" />
            Follow
          </Button>
        )}
        {/* </Button> */}
      </CardActions>
    </Card>
  );
}

export default JobCard;
