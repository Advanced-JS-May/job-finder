import React , { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import defaultDescription  from './../../../../src/constants/defaultDescription';
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles({
  root: {
    width :"800px",
    height:"250px"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function ProfileDescriptionCard( { description, name } ) {
  const classes = useStyles();


  return (
    <Card className={classes.root}>
       <Button className={classes.edit}>
        <Link to="/profile/profileContactCard/edit">
          <EditIcon />
        </Link>
      </Button>
      <CardContent>
        <Typography className={classes.title} color="textPriamry" gutterBottom>
          <h1>  { name } </h1>
        </Typography>
       <Typography className={classes.pos} color="textSecondary">
       {!description ? (
         <div>
           <p>{defaultDescription}</p>
        </div>
         ) : (
         <div>
            <p>{description}</p>
         </div>
         )}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}