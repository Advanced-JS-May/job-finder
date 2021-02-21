import React from 'react';
import MultiLineFormField from '../../FormElements/MultiLineFormField/MultiLineFormField';
import FormSelect from '../../FormElements/FormSelect/FormSelect';
import WordExperienceDatePicker from '../WordExperienceDatePicker/WordExperienceDatePicker';
import FormField from '../../FormElements/FormField/FormField';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearFields,
  setJobField,
} from '../../../store/features/workExperienceFormData';
import { addJobToList } from '../../../store/features/jobList';
import { CITIESWITHOUTALL } from '../../../constants/armenianCities';
import CVForm from '../../CVForm/CVForm';

function JobForm({ activeForm, closeForm }) {
  const dispatch = useDispatch();
  const { workExperienceFormData } = useSelector((state) => state);

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    dispatch(setJobField({ name, value }));
  };

  const handleSaveButtonClick = () => {
    dispatch(addJobToList(workExperienceFormData));
    dispatch(clearFields());
    closeForm();
  };

  const handleResetButtonClick = () => {
    dispatch(clearFields());
  };
  return (
    <CVForm activeForm={activeForm}>
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

      <WordExperienceDatePicker />

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
    </CVForm>
  );
}

export default JobForm;