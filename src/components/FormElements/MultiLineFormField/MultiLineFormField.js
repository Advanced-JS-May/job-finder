import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  summary: {
    display: 'block',
    margin: '20px 0',
    background: 'white',
    height: 'auto',
    '& .MuiInputBase-root': {
      background: 'white',
    },
  },
});

function MultiLineFormField({ value, onChange, maxLength, ...props }) {
  const classes = useStyles();
  return (
    <TextField
      className={classes.summary}
      value={value}
      onChange={onChange}
      multiline
      fullWidth
      rows={10}
      // placeholder="Dynamic and motivated professional with a proven record of generating and building relationships, managing projects from concept to completion. Skilled in building cross-functional teams, demonstrating exceptional communication skills, and making critical decisions during challenges. Adaptable and transformational leader with an ability to work independently, creating effective presentations, and developing opportunities."
      variant="outlined"
      inputProps={{
        maxLength: maxLength,
      }}
      {...props}
    />
  );
}

export default MultiLineFormField;
