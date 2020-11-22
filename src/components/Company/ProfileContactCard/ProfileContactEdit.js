import React , { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

//services
import  { createCompany } from '../../../services/company';
import { useAuth } from '../../../services/authentication';

//UI
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import BusinessIcon from '@material-ui/icons/Business';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import LanguageIcon from '@material-ui/icons/Language';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import EditIcon from '@material-ui/icons/Edit';
import Fab from "@material-ui/core/Fab";
import CheckIcon from '@material-ui/icons/Check';
import TextField from '@material-ui/core/TextField';



export default function ProfileContactCard (props) {
 return(
       <Card >
        <CardContent className={classes.root}>
            <Fab className={classes.edit}>
              <CheckIcon className={classes.edit} onClick={handleEdit} />
            </Fab>
            <h3>Contacts</h3>
            <div className={classes.element}>
              <LocationCityIcon />
               State: 
               <TextField
                id="outlined-basic"
                label={props.country}
                variant="outlined"
                name="description"
                // onChange={handleCompanyInput}
                // value={company.description}
                width="300px"
             />
               City:
               <TextField
                id="outlined-basic"
                label={props.city}
                variant="outlined"
                name="description"
                // onChange={handleCompanyInput}
                // value={company.description}
                width="300px"
             />
            </div>
            <div className={classes.element}>
              <BusinessIcon />
               Address: 
              <TextField
                id="outlined-basic"
                label={props.address}
                variant="outlined"
                name="description"
                onChange={handleCompanyInput}
                value={company.description}
                width="300px">
              </TextField>
            </div>
            <div className={classes.element}>
              <PhoneIcon />
               Tel:
              <TextField
                id="outlined-basic"
                label={props.tel}
                variant="outlined"
                name="description"
                // onChange={handleCompanyInput}
                // value={company.description}
                width="300px">
              </TextField>
            </div>
            <div className={classes.element}>
              <MailIcon />Mail:
              <TextField
                id="outlined-basic"
                label={props.mail}
                variant="outlined"
                name="description"
                // onChange={handleCompanyInput}
                // value={company.description}
                width="300px">
              </TextField>
            </div>
            <div className={classes.element}>
              <LanguageIcon className={classes.edit} /> 
              Website:
              <TextField
                id="outlined-basic"
                label={props.mail}
                variant="outlined"
                name="description"
                // onChange={handleCompanyInput}
                // value={company.description}
                width="300px">
              </TextField>
            </div>
          </CardContent>
        </Card> 
    </>
  );
}

