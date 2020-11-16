import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Select(props) {
  const classes = useStyles();
  const [currency, setCurrency] = useState('EUR');
  const { givenArray } = props;

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            id="standard-select"
            select
            label="Select"
            onChange={handleChange}
            helperText="Please select"
            variant="filled"
          >
            {givenArray.map((option) => (
              <MenuItem value={option}>{option}</MenuItem>
            ))}
          </TextField>
        </div>
      </form>
    </>
  );
}
