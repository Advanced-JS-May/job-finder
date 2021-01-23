import React from "react";

import Grid from "@material-ui/core/Grid";

import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InputMask from "react-input-mask";
import EmailIcon from "@material-ui/icons/Email";

import FormSection from "../FormElements/FormSection/FormSection";
import FormField from "../FormElements/FormField/FormField";

function TextMaskCustom(props) {
  return <InputMask {...props} mask="+374 99 999999" maskChar=" " />;
}

function FormContactSection({
  //values
  phoneValue,
  emailValue,
  twitterValue,
  facebookValue,
  linkedInValue,
  //event handlers
  handlePhoneChange,
  handleEmailChange,
  handleTwitterChange,
  handleFacebookChange,
  handleLinkedInChange,
  //blurs
  handlePhoneBlur,
  handleEmailBlur,
  handleTwitterBlur,
  handleFacebookBlur,
  handleLinkedInBlur,
  //errrors
  phoneError,
  emailError,
  twitterError,
  facebookError,
  linkedInError,
}) {
  console.log(phoneValue);
  console.log(emailValue);
  console.log(twitterValue);
  console.log(facebookValue);
  console.log(linkedInValue);
  return (
    <FormSection>
      <Grid container direction="column" spacing={0}>
        <Grid
          item
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PhoneIcon
            style={{
              margin: 10,
            }}
          />
          <FormField
            variant="outlined"
            name="phone"
            label="phone Number"
            value={phoneValue}
            onChange={handlePhoneChange}
            onBlur={handlePhoneBlur}
            error={phoneError}
            fullWidth
            InputProps={{
              inputComponent: TextMaskCustom,
              style: { fontSize: 16, padding: 10 },
            }}
          />
        </Grid>
        <Grid
          item
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <EmailIcon
            style={{
              margin: 10,
            }}
          />
          <FormField
            type="email"
            name="email"
            variant="outlined"
            label="email"
            value={emailValue}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            error={emailError}
            fullWidth
            InputProps={{ style: { fontSize: 16, padding: 10 } }}
          />
        </Grid>
        <Grid
          item
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TwitterIcon
            style={{
              margin: "0 10px",
            }}
          />
          <FormField
            variant="outlined"
            fullWidth
            label="Twitter"
            name="twitter"
            value={twitterValue}
            onChange={handleTwitterChange}
            onBlur={handleTwitterBlur}
            error={twitterError}
            InputProps={{ style: { fontSize: 16, padding: 10 } }}
          />
        </Grid>

        <Grid
          item
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <FacebookIcon
            style={{
              margin: 10,
            }}
          />
          <FormField
            variant="outlined"
            fullWidth
            label="Facebook"
            name="facebook"
            value={facebookValue}
            onChange={handleFacebookChange}
            onBlur={handleFacebookBlur}
            error={facebookError}
            InputProps={{ style: { fontSize: 16, padding: 10 } }}
          />
        </Grid>
        <Grid
          item
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <LinkedInIcon
            style={{
              margin: 10,
            }}
          />
          <FormField
            variant="outlined"
            fullWidth
            label="LinkedIn"
            name="linkedIn"
            value={linkedInValue}
            onChange={handleLinkedInChange}
            onBlur={handleLinkedInBlur}
            error={linkedInError}
            InputProps={{ style: { fontSize: 16, padding: 10 } }}
          />
        </Grid>
      </Grid>
    </FormSection>
  );
}
export default FormContactSection;
