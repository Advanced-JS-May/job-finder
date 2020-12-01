import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function Select({givenArray, givenFunction,valueq}) {
  const classes = useStyles();
  const [ value, setValue ] = useState("All");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <FormControl className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            id="standard-select"
            select
            label="Select"
            onChange={handleChange , givenFunction}
            helperText="Please select"
            variant="filled"
            value = { valueq }
            className = { value }
          >
            {givenArray.map((option) => (
              <MenuItem key={option} value={option}>{option}</MenuItem>
            ))}
          </TextField>
        </div>
      </FormControl>
    </>
  );
}
