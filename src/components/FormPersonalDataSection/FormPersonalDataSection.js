import React from 'react';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import CITIES from '../../constants/armenianCities';
import GENDERS from '../../constants/gender';
import FormSection from '../FormElements/FormSection/FormSection';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    margin: 5,
  },
});

function FormPersonalDataSection({
  nameValue,
  surnameValue,
  ageValue,
  genderValue,
  cityValue,
  handleNameChange,
  handleSurnameChange,
  handleAgeChange,
  handleGenderChange,
  handleCityChange,
  handleNameBlur,
  handleSurnameBlur,
  handleAgeBlur,
  handleGenderBlur,
  handleCityBlur,
  nameError,
  surnameError,
  ageError,
  genderError,
  cityError,
}) {
  const classes = useStyles();

  return (
    <FormSection>
      <TextField
        className={classes.root}
        fullWidth
        label="Name"
        name="name"
        margin="normal"
        value={nameValue}
        onChange={handleNameChange}
        onBlur={handleNameBlur}
        error={nameError}
        variant="outlined"
        InputProps={{ style: { padding: 5 } }}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Surname"
        name="surname"
        value={surnameValue}
        onChange={handleSurnameChange}
        onBlur={handleSurnameBlur}
        error={surnameError}
        variant="outlined"
        InputProps={{ style: { padding: 5 } }}
      />
      <TextField
        type="number"
        label="Age"
        margin="normal"
        value={ageValue}
        onChange={handleAgeChange}
        onBlur={handleAgeBlur}
        error={ageError}
        name="age"
        variant="outlined"
        fullWidth
        InputProps={{ style: { padding: 5 } }}
      />
      <TextField
        variant="outlined"
        select
        label="gender"
        margin="normal"
        name="gender"
        value={genderValue}
        onChange={handleGenderChange}
        onBlur={handleGenderBlur}
        error={genderError}
        fullWidth
        InputProps={{ style: { padding: 0 } }}
      >
        {GENDERS.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        variant="outlined"
        select
        label="city"
        margin="normal"
        name="city"
        value={cityValue}
        onChange={handleCityChange}
        onBlur={handleCityBlur}
        error={cityError}
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
      </TextField>
    </FormSection>
  );
}

export default FormPersonalDataSection;
