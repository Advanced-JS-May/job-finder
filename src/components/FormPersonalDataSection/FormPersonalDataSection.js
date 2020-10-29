import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import CITIES from '../../constants/armenianCities';
import GENDERS from '../../constants/gender';

function FormPersonalDataSection() {
  const [gender, setGender] = useState(GENDERS[0]);
  const [city, setCity] = useState(CITIES[0]);

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

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
        variant="outlined"
        InputProps={{ style: { padding: 5, margin: '12px 0' } }}
      />
      <TextField
        fullWidth
        label="Surname"
        variant="outlined"
        InputProps={{ style: { margin: '12px 0 ', padding: 5 } }}
      />
      <TextField
        type="number"
        label="Age"
        variant="outlined"
        fullWidth
        InputProps={{ style: { margin: '12px 0', padding: 5 } }}
      />
      <TextField
        variant="outlined"
        select
        value={gender}
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
        value={city}
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
