import React, { useState } from 'react';
import { AccordionDetails, Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

import CvImage from '../CvImage/CvImage';
import { useAuth } from '../../../services/authentication';
import FormField from '../../../components/FormElements/FormField/FormField';
import MenuItem from '@material-ui/core/MenuItem';
import CITIES from '../../../constants/armenianCities';
import { changeField } from '../../../store/features/JobSeekerDetails';
import { makeStyles } from '@material-ui/core/styles';
import InputMask from 'react-input-mask';

const useStyles = makeStyles({
  summary: {
    display: 'block',
    margin: '20px 0',
    background: 'white',
    height: '100%',
    '& .MuiInputBase-root': {
      background: 'white',
    },
  },
});

function TextMaskCustom(props) {
  return <InputMask {...props} mask="+374 99 999999" maskChar=" " />;
}

function CvPersonalInfo() {
  const {
    name,
    city,
    email,
    surname,
    headline,
    summary,
    facebook,
    linkedIn,
    twitter,
    phone,
  } = useSelector((state) => state.jobSeeker);
  const dispatch = useDispatch();

  const { user } = useAuth();

  const [socialLinks, setSocialLinks] = useState({
    facebook: false,
    twitter: false,
    linkedIn: false,
    gitHub: false,
    stackOverFlow: false,
  });

  const classes = useStyles();

  const handleFieldChange = (e) => {
    dispatch(changeField({ name: e.target.name, value: e.target.value }));
    /* TODO here */
    /*  if (
      e.target.parentNode.parentNode.parentNode.className === 'social-links'
    ) {
      if(e.target.value === '') {
        const name = e.target.name
        setSocialLinks((prevState)=> ({...prevState, name: !prevState[e.target.name]  }))
      }
    } */
  };

  return (
    <>
      <AccordionDetails
        style={{
          width: '90%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {user ? (
          <>
            {/* <CvImage /> */}
            <FormField
              label="Name"
              name="name"
              value={name || ''}
              onChange={handleFieldChange}
            />
            <FormField
              label="Surname"
              name="surname"
              value={surname || ''}
              onChange={handleFieldChange}
            />
            <FormField
              label="headline"
              name="headline"
              value={headline || ''}
              onChange={handleFieldChange}
            />
            <FormField
              select
              label="city"
              name="city"
              value={city || ''}
              onChange={handleFieldChange}
              fullWidth
              InputProps={{ style: { padding: 0 } }}
            >
              {CITIES.map((option) => {
                if (option === 'All') {
                  return (
                    <MenuItem disabled key={option} value={option}>
                      {option}
                    </MenuItem>
                  );
                }
                return (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                );
              })}
            </FormField>

            <FormField
              label="email"
              name="email"
              type="email"
              value={email || ''}
              onChange={handleFieldChange}
            />
            <FormField
              variant="outlined"
              name="phone"
              label="phone Number"
              value={phone || ''}
              onChange={handleFieldChange}
              InputProps={{
                inputComponent: TextMaskCustom,
                style: { fontSize: 16, padding: 10 },
              }}
            />

            <FormField
              label="summary"
              name="summary"
              value={summary || ''}
              onChange={handleFieldChange}
              multiline
              rows={10}
              inputProps={{
                maxLength: 450,
              }}
              className={classes.summary}
            />
            <div className="social-links">
              <FormField
                label="facebook"
                name="facebook"
                value={facebook || ''}
                onChange={handleFieldChange}
              />
              <FormField
                label="linkedIn"
                name="linkedIn"
                value={linkedIn || ''}
                onChange={handleFieldChange}
              />
              <FormField
                label="twitter"
                name="twitter"
                value={twitter || ''}
                onChange={handleFieldChange}
              />
            </div>

            <Button>+ GitHub</Button>
            <Button>+ Facebook</Button>
            <Button>+ Twitter</Button>
            <Button>+ LinkedIn</Button>
          </>
        ) : null}
        {/*
         */}
      </AccordionDetails>
    </>
  );
}

export default CvPersonalInfo;
