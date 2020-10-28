import React from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import PhoneIcon from '@material-ui/icons/Phone';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InputMask from 'react-input-mask';
import EmailIcon from '@material-ui/icons/Email';

function TextMaskCustom(props) {
  return <InputMask {...props} mask="+374 ( 99 ) 99-99-99" maskChar=" " />;
}

function FormContactSection() {
  return (
    <div
      style={{
        width: 400,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
      }}
    >
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid
          item
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <PhoneIcon
            style={{
              margin: 10,
            }}
          />
          <TextField
            variant="outlined"
            name="phone"
            label="phone Number"
            fullWidth
            InputProps={{
              inputComponent: TextMaskCustom,
              style: { fontSize: 16, padding: 10 },
            }}
          ></TextField>
        </Grid>
        <Grid
          item
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <EmailIcon
            style={{
              margin: 10,
            }}
          />
          <TextField
            type="email"
            name="email"
            variant="outlined"
            label="email"
            fullWidth
            InputProps={{ style: { fontSize: 16, padding: 10 } }}
          />
        </Grid>
        <Grid
          item
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TwitterIcon
            style={{
              margin: 10,
            }}
          />
          <TextField
            variant="outlined"
            fullWidth
            label="Twitter"
            InputProps={{ style: { fontSize: 16, padding: 10 } }}
          />
        </Grid>

        <Grid
          item
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <FacebookIcon
            style={{
              margin: 10,
            }}
          />
          <TextField
            variant="outlined"
            fullWidth
            label="Facebook"
            InputProps={{ style: { fontSize: 16, padding: 10 } }}
          />
        </Grid>
        <Grid
          item
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <LinkedInIcon
            style={{
              margin: 10,
            }}
          />
          <TextField
            variant="outlined"
            fullWidth
            label="LinkedIn"
            InputProps={{ style: { fontSize: 16, padding: 10 } }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
export default FormContactSection;
