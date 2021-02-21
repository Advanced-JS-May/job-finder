import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import CVDatePicker from '../../CVDatePicker/CVDatePicker';
import { setField } from '../../../store/features/educationData';

const EducationDatePicker = () => {
  const { endDate, startDate } = useSelector((state) => state.educationData);

  const dispatch = useDispatch();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      <CVDatePicker
        ButtonName="Start date"
        date={startDate}
        dialogName={'Start date'}
        fieldName="startDate"
        setField={setField}
      />
      <CVDatePicker
        ButtonName="End date"
        date={endDate}
        dialogName={'End date'}
        fieldName="endDate"
        setField={setField}
      />
    </div>
  );
};

export default EducationDatePicker;
