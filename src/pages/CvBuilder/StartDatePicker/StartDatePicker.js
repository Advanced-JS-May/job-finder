import React, { useState } from 'react';
import FormSelect from '../../../components/FormElements/FormSelect/FormSelect';
import WorkDatePicker from '../WorkDatePicker/WorkDatePicker';
import MONTHS from '../../../constants/months';
import YEARS from '../../../constants/years';

function StartDatePicker() {
  const [startYear, setStartYear] = useState('year');

  const [startMonth, setStartMonth] = useState('month');

  const handleStartMonthChange = (e) => {
    setStartMonth(e.target.value);
  };

  const handleStartYearChange = (e) => {
    setStartYear(e.target.value);
  };
  return (
    <WorkDatePicker
      name={
        startYear === 'year' && startMonth === 'month'
          ? 'Start Date'
          : `${startMonth} / ${startYear}`
      }
    >
      <FormSelect
        array={MONTHS}
        value={startMonth}
        indexValue
        onChange={handleStartMonthChange}
        label="months"
        name="EndMonth"
      />
      <FormSelect
        array={YEARS}
        value={startYear}
        onChange={handleStartYearChange}
        label="year"
        name="startYear"
      />
    </WorkDatePicker>
  );
}

export default StartDatePicker;
