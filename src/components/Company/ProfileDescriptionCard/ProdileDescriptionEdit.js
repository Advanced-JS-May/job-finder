import React , { useState } from "react";
import { Formik } from 'formik';
import { Link } from "react-router-dom"; 


//services
import  { createCompany } from '../../../services/company';
import { useAuth } from '../../../services/authentication';

//UI
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  root: {
    width: "500px",
    margin: 10,
    display: "flex",
    flexDirection: "column",
    },
  element: {
    display: "flex",
    alignItems: "center",
  },
});


export default function ProfileDescriptionEdit (){

  const classes = useStyles();
  const { user } = useAuth()

  return (

  <Card className={classes.root}>
    <CardContent>
      <Formik 
        initialValues={{ 
          description: "",
        }}

        onSubmit={(values) => {
          createCompany(user.uid,"bio",values)
        }}
      >
        {props => (
          <form onSubmit={props.handleSubmit} className={classes.root}>
              <div>
                    {/* <LocationCityIcon /> */}
                    State:
                    <TextField
                      // label={country}
                      id="outlined-basic"
                      type="text"
                      variant="outlined"
                      name="address"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.description}
                      name="description"
                    />
                    {props.errors.name && <div id="feedback">{props.errors.name}</div>}
              </div>
              <div>
              <Button variant="contained" color="primary" >
                <Link to="/profile/:id">
                  Submit
                </Link>
              </Button>
              </div>
          </form>
        )}
      </Formik>
    </CardContent>
  </Card>
  );
 }
 
      