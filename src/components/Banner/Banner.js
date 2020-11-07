import React, { useState } from 'react';
import './Banner.css';
import SearchSvgIcon from '../icons/SearchSvgIcon/Search';
import Select from '../Select/Select.js'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import fields from '../../constants/jobField.js'
import CITIES from '../../constants/armenianCities.js'
import InputKey from '../../components/inputKeywords/inputKey.js'
import Button from '@material-ui/core/Button';

function Bunner() {
  const [value, setValue] = React.useState('jobs');
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="Bunner-Container">
      <h1 className="Bunner-secondary-title">CAREER SEARCH STARTS HERE</h1>
      <p className="Bunner-text">
        Search for jobs, find your match and apply with one click.
        <br />
        Explore all our options now.
      </p>
      <div className="centerer-search">
        <div className="Radio-Container">
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="job"
              name="job1"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel value="jobs" control={<Radio />} label="Jobs" />
              <FormControlLabel
                value="companies"
                control={<Radio />}
                label="Companies"
              />
            </RadioGroup>
          </FormControl>
        </div>

        <form  noValidate autoComplete="off">
          <div className="Inputs-Container">
           
            <InputKey />
            <Select givenArray={fields} />
            <Select givenArray={CITIES} />

            <Button variant="contained" color="primary" size="large">
              <SearchSvgIcon width="26px" />
            </Button>
          </div>
        </form>
      </div>
    </div>

  );
}

export default Bunner;