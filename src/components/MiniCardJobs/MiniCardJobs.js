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
    minWidth: 200,
    maxWidth: 200,
    marginRight: 20,
    boxShadow: "10px  8px 10px #888888",
    border: "1px solid #808080 ",
  },
  media: {
    height: 70,
  },
});

export default function MiniCardJobs({ image, jobName, jobDesc, buttonFunc }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image ? image : "No image"}
          alt="This Job has no image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {jobName ? jobName : "No name"}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {jobDesc
              ? jobDesc.length > 30
                ? jobDesc.substr(0, 30) + "..."
                : jobDesc
              : "No description"}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            buttonFunc();
          }}
        >
          More Info
        </Button>
      </CardActions>
    </Card>
  );
}
