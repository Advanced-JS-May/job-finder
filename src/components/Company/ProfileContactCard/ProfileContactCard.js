import React , { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

//services
import  { createCompany ,getCompanyById} from '../../../services/company';
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

//components
import ProfileContactInfo from "./ProfileContactInfo";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 10,
    display:"flex",
    flexDirection:"column"
  },
  element: {
    display:"flex",
    alignItems:"center",
  },

  edit:{
    position:"relative",
    top:0,
    left:0,
  }
 
});


export default function ProfileContactCard (props) {
  const classes = useStyles();
  const [edit, setEdit] = useState(false);
  const [company,setCompany]=useState({})
  const { user } = useAuth();
  


const handleCompanyInput = ({ target:{ value,name } })=> {
   setCompany((e)=>({
     ...e,
     [name]:value,
     id:user.uid,
     }))
};


  const handleEdit = () => {
    setEdit(!edit);
    createCompany(company);
   };

   
   useEffect(() => {
    getCompanyById(user.uid).then((c) => {
      setCompany(c);
    });
  }, [user.uid]);

  return (
   <>
      {!edit ? (
        <div>
        <div>
        <Fab className={classes.edit}>
          <EditIcon className={classes.edit} onClick={handleEdit} />
        </Fab>
        </div>
      <Card >
        <ProfileContactInfo country = {company.country}  city={company.city}  address={company.address}  tel={company.tel}  mail={company.mail}  website={company.website}/>
      </Card>
      </div>):
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
                label={props.tel}
                variant="outlined"
                name="description"
                // onChange={handleCompanyInput}
                // value={company.description}
                width="300px">
              </TextField>
            </div>
            <div className={classes.element}>
              <MailIcon />
              Mail:
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
        </Card> }
    </>
  );
}

