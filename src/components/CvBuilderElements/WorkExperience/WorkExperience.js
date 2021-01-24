import React, { useState } from 'react';

import MultiLineFormField from '../../FormElements/MultiLineFormField/MultiLineFormField';
import FormSelect from '../../FormElements/FormSelect/FormSelect';
import FormField from '../../FormElements/FormField/FormField';

import AccordionDetails from '@material-ui/core/AccordionDetails';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import StartDatePicker from '../StartDatePicker/StartDatePicker';
import EndDatePicker from '../EndDatePicker/EndDatePicker';

import { useDispatch, useSelector } from 'react-redux';
import {
  clearFields,
  setJobField,
} from '../../../store/features/workExperienceFormData';
import { CITIESWITHOUTALL } from '../../../constants/armenianCities';
import { addJobToList } from '../../../store/features/jobList';

const WorkExperience = () => {
  const [activeForm, setActiveForm] = useState(true);

  const dispatch = useDispatch();
  const workExperienceFormData = useSelector(
    (state) => state.workExperienceFormData,
  );

  const handleAddButtonClick = () => {
    setActiveForm((state) => !state);
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    dispatch(setJobField({ name, value }));
  };

  const handleSaveButtonClick = () => {
    dispatch(addJobToList(workExperienceFormData));
    dispatch(clearFields());
    setActiveForm((state) => !state);
  };

  const handleResetButtonClick = () => {
    dispatch(clearFields());
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
        <FormField
          label="Job Title"
          name="jobTitle"
          value={workExperienceFormData.jobTitle}
          onChange={handleFieldChange}
        />
        <FormField
          label="Company"
          name="company"
          value={workExperienceFormData.company}
          onChange={handleFieldChange}
        />
        <FormSelect
          array={CITIESWITHOUTALL}
          value={workExperienceFormData.city}
          onChange={handleFieldChange}
          label="City"
          name="city"
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

        <MultiLineFormField
          label="Description"
          name="description"
          maxLength={450}
          value={workExperienceFormData.description}
          onChange={handleFieldChange}
        />

        <div
          style={{
            width: '100%',
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
            onClick={handleSaveButtonClick}
          >
            Save
          </Button>
          <Button
            style={{ minWidth: '150px', fontSize: '1.2rem' }}
            variant="contained"
            color="secondary"
            onClick={handleResetButtonClick}
          >
            reset
          </Button>
        </div>
      </div>
      <div
        style={{
          width: '100%',
          margin: '1rem',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Fab
          disabled={activeForm}
          aria-label="add"
          onClick={handleAddButtonClick}
          color="primary"
        >
          <AddIcon />
        </Fab>
      </div>
    </AccordionDetails>
  );
};

export default WorkExperience;
