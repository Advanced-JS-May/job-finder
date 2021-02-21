import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import MONTHS from '../../constants/months';
import YEARS from '../../constants/years';
import WorkDatePicker from '../CvBuilderElements/WorkDatePicker/WorkDatePicker';
import FormSelect from '../FormElements/FormSelect/FormSelect';

const CVDatePicker = ({
  date,
  setField,
  dialogName,
  ButtonName,
  fieldName,
}) => {
  const [startYear, setStartYear] = useState('year');
  const [startMonth, setStartMonth] = useState('month');
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
      setField({ name: fieldName, value: `${startMonth} / ${startYear}` }),
    );
  };

  return (
    <WorkDatePicker
      name={date === '' ? ButtonName : `${startMonth} / ${startYear}`}
      cancelButtonClick={handleCancel}
      submitButtonClick={handleSubmit}
      dialogName={dialogName}
    >
      <FormSelect
        array={MONTHS}
        value={startMonth}
        indexValue
        disabledValue={'month'}
        onChange={handleStartMonthChange}
        label="months"
      />
      <FormSelect
        array={YEARS}
        value={startYear}
        disabledValue={'year'}
        onChange={handleStartYearChange}
        label="year"
      />
    </WorkDatePicker>
  );
};

export default CVDatePicker;
