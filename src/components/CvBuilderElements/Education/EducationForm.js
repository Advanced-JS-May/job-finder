import { Button } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearFields, setField } from '../../../store/features/educationData';
import { addSchoolToList } from '../../../store/features/schoolList';
import CVForm from '../../CVForm/CVForm';
import FormField from '../../FormElements/FormField/FormField';
import MultiLineFormField from '../../FormElements/MultiLineFormField/MultiLineFormField';
import EducationDatePicker from '../EducationDatePicker/EducationDatePicker';

const EducationForm = ({ activeForm, closeForm }) => {
  const educationData = useSelector((state) => state.educationData);

  const dispatch = useDispatch();

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    dispatch(setField({ name, value }));
  };

  const handleSaveButtonClick = () => {
    dispatch(addSchoolToList(educationData));
    dispatch(clearFields());
    closeForm();
  };

  const handleResetButtonClick = () => {
    dispatch(clearFields());
  };

  return (
    <CVForm activeForm={activeForm}>
      <FormField
        label="Degree"
        name="degree"
        value={educationData.degree}
        onChange={handleFieldChange}
      />
      <FormField
        label="School/University"
        name="school"
        value={educationData.school}
        onChange={handleFieldChange}
      />

      <EducationDatePicker />

      <MultiLineFormField
        label="Description"
        name="description"
        maxLength={450}
        value={educationData.description}
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
};

export default EducationForm;
