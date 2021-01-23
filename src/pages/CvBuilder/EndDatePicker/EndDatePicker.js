import React, { useState } from 'react';
import FormSelect from '../../../components/FormElements/FormSelect/FormSelect';
import WorkDatePicker from '../WorkDatePicker/WorkDatePicker';
import MONTHS from '../../../constants/months';
import YEARS from '../../../constants/years';

function EndDatePicker() {
  const [endYear, setEndYear] = useState('year');

  const [endMonth, setEndMonth] = useState('month');

  const handleEndMonthChange = (e) => {
    setEndMonth(e.target.value);
  };

  const handleEndYearChange = (e) => {
    setEndYear(e.target.value);
  };
  return (
    <WorkDatePicker
      name={
        endYear === 'year' && endMonth === 'month'
          ? 'End Date'
          : `${endMonth} / ${endYear}`
      }
    >
      <FormSelect
        array={MONTHS}
        value={endMonth}
        indexValue
        onChange={handleEndMonthChange}
        label="months"
        name="startMonth"
      />
      <FormSelect
        array={YEARS}
        value={endYear}
        onChange={handleEndYearChange}
        label="year"
        name="startYear"
      />
    </WorkDatePicker>
  );
}

export default EndDatePicker;
