import React from 'react';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import CITIES from '../../constants/armenianCities';
import GENDERS from '../../constants/gender';
import FormSection from '../FormElements/FormSection/FormSection';
import { makeStyles } from '@material-ui/core/styles';
import FormField from '../FormElements/FormField/FormField';

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
  return (
    <FormSection>
      <FormField
        label="Name"
        name="name"
        value={nameValue}
        onChange={handleNameChange}
        onBlur={handleNameBlur}
        error={nameError}
        InputProps={{ style: { padding: 5 } }}
      />
      <FormField
        label="Surname"
        name="surname"
        value={surnameValue}
        onChange={handleSurnameChange}
        onBlur={handleSurnameBlur}
        error={surnameError}
        variant="outlined"
        InputProps={{ style: { padding: 5 } }}
      />
      <FormField
        type="number"
        label="Age"
        value={ageValue}
        onChange={handleAgeChange}
        onBlur={handleAgeBlur}
        error={ageError}
        name="age"
        variant="outlined"
        fullWidth
        InputProps={{ style: { padding: 5 } }}
      />
      <FormField
        select
        label="gender"
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
      </FormField>
      <FormField
        select
        label="city"
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
      </FormField>
    </FormSection>
  );
}

export default FormPersonalDataSection;
