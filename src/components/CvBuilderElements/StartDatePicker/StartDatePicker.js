import React, { useState } from 'react';

import FormSelect from '../../FormElements/FormSelect/FormSelect';
import WorkDatePicker from '../WorkDatePicker/WorkDatePicker';

import { useDispatch, useSelector } from 'react-redux';
import { setJobField } from '../../../store/features/workExperienceFormData';
import YEARS from '../../../constants/years';
import MONTHS from '../../../constants/months';

function StartDatePicker() {
  const [startYear, setStartYear] = useState('year');
  const [startMonth, setStartMonth] = useState('month');

  const { startDate } = useSelector((state) => state.workExperienceFormData);

  const dispatch = useDispatch();

  const handleStartMonthChange = (e) => {
    setStartMonth(e.target.value);
  };

  const handleStartYearChange = (e) => {
    setStartYear(e.target.value);
  };

  const handleCancel = () => {
    setStartYear('year');
    setStartMonth('month');
  };

  const handleSubmit = () => {
    dispatch(
      setJobField({ name: 'startDate', value: `${startMonth} / ${startYear}` }),
    );
  };

  return (
    <WorkDatePicker
      name={startDate === '' ? 'Start Date' : `${startMonth} / ${startYear}`}
      cancelButtonClick={handleCancel}
      submitButtonClick={handleSubmit}
      dialogName="Start Date"
    >
      <FormSelect
        array={MONTHS}
        value={startMonth}
        indexValue
        disabledValue={'month'}
        onChange={handleStartMonthChange}
        label="months"
        name="startMonth"
      />
      <FormSelect
        array={YEARS}
        value={startYear}
        disabledValue={'year'}
        onChange={handleStartYearChange}
        label="year"
        name="startYear"
      />
    </WorkDatePicker>
  );
}

export default StartDatePicker;
