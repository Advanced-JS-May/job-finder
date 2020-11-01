import React from 'react';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import CITIES from '../../constants/armenianCities';
import GENDERS from '../../constants/gender';

function FormPersonalDataSection({
  nameValue,
  HandleNameChange,
  handleSurnameChange,
  surnameValue,
  ageValue,
  handleAgeChange,
  genderValue,
  handleGenderChange,
  cityValue,
  handleCityChange,
}) {
  return (
    <div
      style={{
        width: 400,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TextField
        fullWidth
        label="Name"
        name="name"
        value={nameValue}
        onChange={HandleNameChange}
        variant="outlined"
        InputProps={{ style: { padding: 5, margin: '12px 0' } }}
      />
      <TextField
        fullWidth
        label="Surname"
        name="surname"
        value={surnameValue}
        onChange={handleSurnameChange}
        variant="outlined"
        InputProps={{ style: { margin: '12px 0 ', padding: 5 } }}
      />
      <TextField
        type="number"
        label="Age"
        value={ageValue}
        onChange={handleAgeChange}
        name="age"
        variant="outlined"
        fullWidth
        InputProps={{ style: { margin: '12px 0', padding: 5 } }}
      />
      <TextField
        variant="outlined"
        select
        name="gender"
        value={genderValue}
        onChange={handleGenderChange}
        fullWidth
        InputProps={{ style: { padding: 0, margin: '12px 0' } }}
      >
        {GENDERS.map((option) => {
          if (option === 'Gender') {
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
      <TextField
        variant="outlined"
        select
        name="city"
        value={cityValue}
        onChange={handleCityChange}
        fullWidth
        InputProps={{ style: { padding: 0, margin: '10px 0' } }}
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
    </div>
  );
}

export default FormPersonalDataSection;
