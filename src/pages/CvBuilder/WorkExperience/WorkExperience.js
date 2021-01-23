import React, { useState } from 'react';

import AccordionDetails from '@material-ui/core/AccordionDetails';
import FormField from '../../../components/FormElements/FormField/FormField';
import MenuItem from '@material-ui/core/MenuItem';
import { CITIESWITHOUTALL } from '../../../constants/armenianCities';
import Button from '@material-ui/core/Button';

import FormSelect from '../../../components/FormElements/FormSelect/FormSelect';
import StartDatePicker from '../StartDatePicker/StartDatePicker';
import EndDatePicker from '../EndDatePicker/EndDatePicker';
import { green, grey } from '@material-ui/core/colors';

function WorkExperience() {
  const [city, setCity] = useState(CITIESWITHOUTALL[0]);
  const [activeForm, setActiveForm] = useState(true);

  const handleAddButtonClick = () => {
    setActiveForm((state) => !state);
  };

  const handleFieldChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <AccordionDetails
      style={{
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '300px',
      }}
    >
      <div
        className="work-experience__form"
        style={{ display: activeForm ? 'block' : 'none' }}
      >
        <FormField label="Job Title" name="jobTitle" />
        <FormField label="Company" name="company" />
        <FormSelect
          array={CITIESWITHOUTALL}
          value={city}
          onChange={handleFieldChange}
          label="year"
          name="startYear"
        />

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <StartDatePicker />

          <EndDatePicker />
        </div>
        <div
          style={{
            width: '90%',
            margin: '1rem 0',
            display: 'flex',
            gap: '1rem',
            justifyContent: 'space-between',
          }}
        >
          <Button
            style={{ minWidth: '150px', fontSize: '1.2rem' }}
            variant="contained"
            color="primary"
          >
            Save
          </Button>
          <Button
            style={{ minWidth: '150px', fontSize: '1.2rem' }}
            variant="contained"
            color="secondary"
          >
            Reset
          </Button>
        </div>
      </div>
      <div
        style={{
          width: '100%',
          margin: '1rem',
          display: 'flex',
          gap: '1rem',
          justifyContent: 'flex-end',
        }}
      >
        <Button
          disabled={activeForm}
          variant="contained"
          style={{
            background: activeForm ? grey : green[800],
            color: activeForm ? 'grey' : 'white',
          }}
          onClick={handleAddButtonClick}
        >
          Add
        </Button>
      </div>
    </AccordionDetails>
  );
}

export default WorkExperience;
