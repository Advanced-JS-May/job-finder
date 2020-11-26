import React , { useState } from "react";
import { Formik } from 'formik';
 
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
import { Button } from "@material-ui/core";


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



// export default function ProfileContactEdit ( {  country,  city,  address,  tel,  mail,  website } ) {
//   const classes = useStyles();
//   const [company,setCompany]=useState({});
//   const { user } = useAuth();
  

//   const handleCompanyInput = ({ target:{ value,name } })=> {
//     setCompany((e)=>({
//       ...e,
//       [name]:value,
//       id:user.uid,
//       }))
//  };
//  console.log(company)

//  const handleSubmitButton = () => {
//    createCompany(company)
//    console.log(company)
//  }

//  return(
//         <div className={classes.root}>
//             <h3>Contacts</h3>
//             <div className={classes.element}>
//               <LocationCityIcon />
//                State: 
//                <TextField
//                 id="outlined-basic"
//                 label={country}
//                 variant="outlined"
//                 name="country"
//                 onChange={handleCompanyInput}
//                 value={company.country}
//                 width="300px"
//              />
//                City:
//                <TextField
//                 id="outlined-basic"
//                 label={city}
//                 variant="outlined"
//                 name="city"
//                 onChange={handleCompanyInput}
//                 value={company.city}
//                 width="300px"
//              />
//             </div>
//             <div className={classes.element}>
//               <BusinessIcon />
//                Address: 
//               <TextField
//                 id="outlined-basic"
//                 label={address}
//                 variant="outlined"
//                 name="address"
//                 onChange={handleCompanyInput}
//                 value={company.address}
//                 width="300px">
//               </TextField>
//             </div>
//             <div className={classes.element}>
//               <PhoneIcon />
//                Tel:
//               <TextField
//                 id="outlined-basic"
//                 label={tel}
//                 variant="outlined"
//                 name="tel"
//                 onChange={handleCompanyInput}
//                 value={company.tel}
//                 width="300px">
//               </TextField>
//             </div>
//             <div className={classes.element}>
//               <MailIcon />
//               Mail:
//               <TextField
//                 id="outlined-basic"
//                 label={mail}
//                 variant="outlined"
//                 name="mail"
//                 onChange={handleCompanyInput}
//                 value={company.mail}
//                 width="300px">
//               </TextField>
//             </div>
//             <div className={classes.element}>
//               <LanguageIcon className={classes.edit} /> 
//               Website:
//               <TextField
//                 id="outlined-basic"
//                 label={website}
//                 variant="outlined"
//                 name="website"
//                 onChange={handleCompanyInput}
//                 value={company.website}
//                 width="300px">
//               </TextField>
//             </div>
//             <Button onClick={handleSubmitButton}>
//               Submit
//             </Button>
//           </div>
//   );
// }

//USing Formik


export default  function ProfileContactEdit( {  country,  city,  address,  tel,  mail,  website } ){
  const classes = useStyles();
  const { user } = useAuth()
  

  return (
  <div className={classes.root}>
    <Formik 
      initialValues={{ 
        country: "",
        city:"",
        address:"",
        tel:"",
        mail:"",
        website:"",
        image:"",
        id:[user.uid]
      }}


      onSubmit={(values) => {
        createCompany(values,"contacts")
        console.log(values)
      }}
    >
      {props => (
        <form onSubmit={props.handleSubmit} className={classes.root}>
            <div>
                  <LocationCityIcon />
                   State:
                  <TextField
                    label={country}
                    id="outlined-basic"
                    type="text"
                    variant="outlined"
                    name="address"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.name}
                    name="country"
                  />
                  {props.errors.name && <div id="feedback">{props.errors.name}</div>}
            </div>
            <div>
                  <LocationCityIcon />
                   City:
                  <TextField
                    label={city}
                    id="outlined-basic"
                    type="text"
                    variant="outlined"
                    name="address"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.name}
                    name="city"
                  />
                  {props.errors.name && <div id="feedback">{props.errors.name}</div>}
            </div>
            <div>
                  <BusinessIcon />
                   Address:
                  <TextField
                    label={address}
                    id="outlined-basic"
                    type="text"
                    variant="outlined"
                    name="address"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.name}
                    name="address"
                  />
                  {props.errors.name && <div id="feedback">{props.errors.name}</div>}
            </div>
            <div>
                  <PhoneIcon />
                  Tel:
                  <TextField
                    label={tel}
                    id="outlined-basic"
                    type="text"
                    variant="outlined"
                    name="tel"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.name}
                    name="tel"
                  />
                  {props.errors.name && <div id="feedback">{props.errors.name}</div>}
            </div>
            <div>
                  <MailIcon />
                   Mail:
                  <TextField
                    label={mail}
                    id="outlined-basic"
                    type="text"
                    variant="outlined"
                    name="address"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.name}
                    name="mail"
                  />
                  {props.errors.name && <div id="feedback">{props.errors.name}</div>}
            </div>
            <div>
                  <LanguageIcon />
                   Website:
                  <TextField
                    label={website}
                    id="outlined-basic"
                    type="text"
                    variant="outlined"
                    name="website"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.name}
                    name="website"
                  />
                  {props.errors.name && <div id="feedback">{props.errors.name}</div>}
            </div>
                <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  </div>
  );
 }