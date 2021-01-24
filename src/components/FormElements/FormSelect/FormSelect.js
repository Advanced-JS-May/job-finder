import React from 'react';
import FormField from '../FormField/FormField';
import MenuItem from '@material-ui/core/MenuItem';

function FormSelect({
  value,
  onChange,
  array,
  indexValue = false,
  disabledValue,
  ...props
}) {
  return (
    <FormField
      {...props}
      select
      value={value}
      onChange={onChange}
      fullWidth
      InputProps={{ style: { padding: 0 } }}
    >
      <MenuItem disabled key={disabledValue} value={disabledValue}>
        {disabledValue}
      </MenuItem>
      {array.map((option) => (
        <MenuItem key={option} value={indexValue ? option.slice(0, 2) : option}>
          {option}
        </MenuItem>
      ))}
    </FormField>
  );
}

export default FormSelect;
