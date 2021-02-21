import React from 'react';

import { useSelector } from 'react-redux';
import { setJobField } from '../../../store/features/workExperienceFormData';

import CVDatePicker from '../../CVDatePicker/CVDatePicker';

function WordExperienceDatePicker() {
  const { startDate, endDate } = useSelector(
    (state) => state.workExperienceFormData,
  );

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      <CVDatePicker
        date={startDate}
        ButtonName={'Start date'}
        dialogName={'Start date'}
        setField={setJobField}
        fieldName={'startDate'}
      />
      <CVDatePicker
        date={endDate}
        ButtonName={'End date'}
        dialogName={'End date'}
        setField={setJobField}
        fieldName={'endDate'}
      />
    </div>
  );
}

export default WordExperienceDatePicker;
