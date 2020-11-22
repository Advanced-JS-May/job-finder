import React , { useState } from "react";

//services
import  { createCompany ,getCompanyById} from '../../../services/company';
import { useAuth } from '../../../services/authentication';

//UI
import { makeStyles, useTheme } from "@material-ui/core/styles";
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



export default function ProfileContactEdit ( {  country,  city,  address,  tel,  mail,  website } ) {
  const classes = useStyles();
  const [company,setCompany]=useState({});
  const { user } = useAuth();
  

  const handleCompanyInput = ({ target:{ value,name } })=> {
    setCompany((e)=>({
      ...e,
      [name]:value,
      id:user.uid,
      }))
 };
console.log(company)
 return(
        <CardContent className={classes.root}>
           
            <h3>Contacts</h3>
            <div className={classes.element}>
              <LocationCityIcon />
               State: 
               <TextField
                id="outlined-basic"
                label={country}
                variant="outlined"
                name="country"
                onChange={handleCompanyInput}
                value={company.country}
                width="300px"
             />
               City:
               <TextField
                id="outlined-basic"
                label={city}
                variant="outlined"
                name="city"
                onChange={handleCompanyInput}
                value={company.city}
                width="300px"
             />
            </div>
            <div className={classes.element}>
              <BusinessIcon />
               Address: 
              <TextField
                id="outlined-basic"
                label={address}
                variant="outlined"
                name="address"
                onChange={handleCompanyInput}
                value={company.address}
                width="300px">
              </TextField>
            </div>
            <div className={classes.element}>
              <PhoneIcon />
               Tel:
              <TextField
                id="outlined-basic"
                label={tel}
                variant="outlined"
                name="tel"
                onChange={handleCompanyInput}
                value={company.tel}
                width="300px">
              </TextField>
            </div>
            <div className={classes.element}>
              <MailIcon />
              Mail:
              <TextField
                id="outlined-basic"
                label={mail}
                variant="outlined"
                name="mail"
                onChange={handleCompanyInput}
                value={company.mail}
                width="300px">
              </TextField>
            </div>
            <div className={classes.element}>
              <LanguageIcon className={classes.edit} /> 
              Website:
              <TextField
                id="outlined-basic"
                label={website}
                variant="outlined"
                name="website"
                onChange={handleCompanyInput}
                value={company.website}
                width="300px">
              </TextField>
            </div>
          </CardContent>
  );
}

