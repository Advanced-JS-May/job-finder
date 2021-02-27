import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";

//components
import Profile from "../../../pages/Profile/Profile";
import ProfileCardEdit from "../ProfileCardEdit/ProfileCardEdit";
import { FormRow } from "../../FormElements/FormRow/FormRow";
//services
import { updateProfileInfo } from "../../../services/company.service";
import { useAuth } from "../../../services/authentication";

//UI
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import BusinessIcon from "@material-ui/icons/Business";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import LanguageIcon from "@material-ui/icons/Language";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  element: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    heigh: "15px",
    border: "15px soild green",
  },
});

export default function ProfileContactEdit({
  country,
  city,
  address,
  tel,
  mail,
  website,
}) {
  const classes = useStyles();
  const { user } = useAuth();
  const history = useHistory();

  return (
    // <div>
    //   <ProfileCardEdit
    //     cardName="Contacts"
    //     cardContent={
    //       <Formik
    //         initialValues={{
    //           country: "",
    //           city: "",
    //           address: "",
    //           tel: "",
    //           mail: "",
    //           website: "",
    //         }}
    //         onSubmit={(values) => {
    //           updateProfileInfo(user.uid, values);
    //           setTimeout(() => history.goBack(), 1500);
    //         }}
    //       >
    //         {(props) => (
    //           <form onSubmit={props.handleSubmit} className={classes.root}>
    //             <Grid
    //               container
    //               spacing={2}
    //               direction="column"
    //               justify="center"
    //               alignItems="flex-end"
    //             >
    //               <Grid
    //                 container
    //                 direction="row"
    //                 justify="space-evenly"
    //                 alignItems="flex-start"
    //               >
    //                 <div>
    //                   <LocationCityIcon />
    //                 </div>
    //                 <div>State:</div>
    //                 <TextField
    //                   label={country}
    //                   id="outlined-basic"
    //                   type="text"
    //                   variant="outlined"
    //                   onChange={props.handleChange}
    //                   onBlur={props.handleBlur}
    //                   value={props.values.name}
    //                   name="country"
    //                 />
    //                 {props.errors.name && (
    //                   <div id="feedback">{props.errors.name}</div>
    //                 )}
    //               </Grid>
    //               <Grid
    //                 container
    //                 direction="row"
    //                 justify="space-evenly"
    //                 alignItems="flex-start"
    //               >
    //                 <div>
    //                   <LocationCityIcon />
    //                 </div>
    //                 <div>City:</div>
    //                 <TextField
    //                   label={city}
    //                   id="outlined-basic"
    //                   type="text"
    //                   variant="outlined"
    //                   onChange={props.handleChange}
    //                   onBlur={props.handleBlur}
    //                   value={props.values.name}
    //                   name="city"
    //                 />
    //                 {props.errors.name && (
    //                   <div id="feedback">{props.errors.name}</div>
    //                 )}
    //               </Grid>
    //               <Grid
    //                 container
    //                 direction="row"
    //                 justify="space-evenly"
    //                 alignItems="flex-start"
    //               >
    //                 <div>
    //                   <BusinessIcon />
    //                 </div>
    //                 <div>Address:</div>
    //                 <TextField
    //                   label={address}
    //                   id="outlined-basic"
    //                   type="text"
    //                   variant="outlined"
    //                   onChange={props.handleChange}
    //                   onBlur={props.handleBlur}
    //                   value={props.values.name}
    //                   name="address"
    //                 />
    //                 {props.errors.name && (
    //                   <div id="feedback">{props.errors.name}</div>
    //                 )}
    //               </Grid>
    //               <Grid
    //                 container
    //                 direction="row"
    //                 justify="space-evenly"
    //                 alignItems="flex-start"
    //               >
    //                 <div>
    //                   <PhoneIcon />
    //                 </div>
    //                 <div> Tel:</div>
    //                 <TextField
    //                   label={tel}
    //                   id="outlined-basic"
    //                   type="text"
    //                   variant="outlined"
    //                   onChange={props.handleChange}
    //                   onBlur={props.handleBlur}
    //                   value={props.values.name}
    //                   name="tel"
    //                 />
    //                 {props.errors.name && (
    //                   <div id="feedback">{props.errors.name}</div>
    //                 )}
    //               </Grid>
    //               <Grid
    //                 container
    //                 direction="row"
    //                 justify="space-evenly"
    //                 alignItems="flex-start"
    //               >
    //                 <div>
    //                   <MailIcon />
    //                 </div>
    //                 <div> Mail:</div>
    //                 <TextField
    //                   label={mail}
    //                   id="outlined-basic"
    //                   type="text"
    //                   variant="outlined"
    //                   onChange={props.handleChange}
    //                   onBlur={props.handleBlur}
    //                   value={props.values.name}
    //                   name="mail"
    //                 />
    //                 {props.errors.name && (
    //                   <div id="feedback">{props.errors.name}</div>
    //                 )}
    //               </Grid>
    //               <Grid
    //                 container
    //                 spacing={2}
    //                 direction="row"
    //                 justify="space-evenly"
    //                 alignItems="flex-start"
    //                 item
    //                 xs={25}
    //               >
    //                 <div>
    //                   <LanguageIcon />
    //                 </div>
    //                 <div> Website:</div>

    //                 <TextField
    //                   label={website}
    //                   id="outlined-basic"
    //                   type="text"
    //                   variant="outlined"
    //                   onChange={props.handleChange}
    //                   onBlur={props.handleBlur}
    //                   value={props.values.name}
    //                   name="website"
    //                 />

    //                 {props.errors.name && (
    //                   <div id="feedback">{props.errors.name}</div>
    //                 )}
    //               </Grid>
    //               <div>
    //                 <Button
    //                   variant="contained"
    //                   color="primary"
    //                   onClick={props.handleSubmit}
    //                 >
    //                   Save
    //                 </Button>
    //               </div>
    //             </Grid>
    //           </form>
    //         )}
    //       </Formik>
    //     }
    //     page={<Profile />}
    //   />
    <div>
      <ProfileCardEdit
        cardName="Contacts"
        cardContent={
          <div>
            <div>
              <FormRow
                rowitem1={<BusinessIcon />}
                rowitem2={"State"}
                rowitem3={
                  <TextField
                    label={country}
                    id="outlined-basic"
                    type="text"
                    variant="outlined"
                    // onChange={props.handleChange}
                    // onBlur={props.handleBlur}
                    // value={props.values.name}
                  />
                }
              />
            </div>
            <div>
              <FormRow
                rowitem1={<BusinessIcon />}
                rowitem2={"City:"}
                rowitem3={
                  <TextField
                    label={country}
                    id="outlined-basic"
                    type="text"
                    variant="outlined"
                    // onChange={props.handleChange}
                    // onBlur={props.handleBlur}
                    // value={props.values.name}
                  />
                }
              />
            </div>
            <div>
              <FormRow
                rowitem1={<BusinessIcon />}
                rowitem2={"Address:"}
                rowitem3={
                  <TextField
                    label={country}
                    id="outlined-basic"
                    type="text"
                    variant="outlined"
                    // onChange={props.handleChange}
                    // onBlur={props.handleBlur}
                    // value={props.values.name}
                  />
                }
              />
            </div>
            <div>
              <FormRow
                rowitem1={<PhoneIcon />}
                rowitem2={"Tel:"}
                rowitem3={
                  <TextField
                    label={country}
                    id="outlined-basic"
                    type="text"
                    variant="outlined"
                    // onChange={props.handleChange}
                    // onBlur={props.handleBlur}
                    // value={props.values.name}
                  />
                }
              />
            </div>
            <div>
              <FormRow
                rowitem1={<MailIcon />}
                rowitem2={"Mail:"}
                rowitem3={
                  <TextField
                    label={country}
                    id="outlined-basic"
                    type="text"
                    variant="outlined"
                    // onChange={props.handleChange}
                    // onBlur={props.handleBlur}
                    // value={props.values.name}
                  />
                }
              />
            </div>
            <div>
              <FormRow
                rowitem1={<LinkedInIcon />}
                rowitem2={"LinkedIn:"}
                rowitem3={
                  <TextField
                    label={country}
                    id="outlined-basic"
                    type="text"
                    variant="outlined"
                    // onChange={props.handleChange}
                    // onBlur={props.handleBlur}
                    // value={props.values.name}
                  />
                }
              />
            </div>
            <div>
              <FormRow
                rowitem1={<TwitterIcon />}
                rowitem2={"Twitter:"}
                rowitem3={
                  <TextField
                    label={country}
                    id="outlined-basic"
                    type="text"
                    variant="outlined"
                    // onChange={props.handleChange}
                    // onBlur={props.handleBlur}
                    // value={props.values.name}
                  />
                }
              />
            </div>
            <div>
              <FormRow
                rowitem1={<FacebookIcon />}
                rowitem2={"Facebook:"}
                rowitem3={
                  <TextField
                    label={country}
                    id="outlined-basic"
                    type="text"
                    variant="outlined"
                    // onChange={props.handleChange}
                    // onBlur={props.handleBlur}
                    // value={props.values.name}
                  />
                }
              />
            </div>
            <div>
              <FormRow
                rowitem1={<LanguageIcon />}
                rowitem2={"Website:"}
                rowitem3={
                  <TextField
                    label={country}
                    id="outlined-basic"
                    type="text"
                    variant="outlined"
                    // onChange={props.handleChange}
                    // onBlur={props.handleBlur}
                    // value={props.values.name}
                  />
                }
              />
            </div>
          </div>
        }
        page={<Profile />}
      />
    </div>
  );
}
