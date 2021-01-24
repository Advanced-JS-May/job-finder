import React, { useState } from 'react';
import FormSelect from '../../../components/FormElements/FormSelect/FormSelect';
import WorkDatePicker from '../WorkDatePicker/WorkDatePicker';
import MONTHS from '../../../constants/months';
import YEARS from '../../../constants/years';
import { useDispatch } from 'react-redux';
import { setJobField } from '../../../store/features/workExperienceFormData';

const EndDatePicker = () => {
  const [endYear, setEndYear] = useState('year');
  const [endMonth, setEndMonth] = useState('month');

  const dispatch = useDispatch();

  const handleEndMonthChange = (e) => {
    setEndMonth(e.target.value);
  };

  const handleEndYearChange = (e) => {
    setEndYear(e.target.value);
  };

  const handleCancel = () => {
    setEndYear('year');
    setEndMonth('month');
  };

  const handleSubmit = () => {
    dispatch(
      setJobField({ name: 'endDate', value: `${endMonth} / ${endYear}` }),
    );
  };

  return (
    <WorkDatePicker
      name={
        endYear === 'year' && endMonth === 'month'
          ? 'End Date'
          : `${endMonth} / ${endYear}`
      }
      dialogName="End Date"
      cancelButtonClick={handleCancel}
      submitButtonClick={handleSubmit}
    >
      <FormSelect
        array={MONTHS}
        value={endMonth}
        indexValue
        disabledValue="month"
        onChange={handleEndMonthChange}
        label="months"
        name="endMonth"
      />
      <FormSelect
        array={YEARS}
        value={endYear}
        onChange={handleEndYearChange}
        disabledValue="year"
        label="year"
        name="endYear"
      />
    </WorkDatePicker>
  );
};

export default EndDatePicker;
