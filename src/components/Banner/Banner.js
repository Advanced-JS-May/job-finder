import React, {useState} from "react";
import "./Banner.css";
import SearchSvgIcon from "../icons/SearchSvgIcon/Search";
import Select from "../Select/Select.js";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import fields from "../../constants/jobField.js";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
 
function Bunner() {
  const [ searchPage, setSearchPage] = useState("jobs");
  const [ searchValue, setSearchValue ] = useState('')
  const [ fieldValue, setFieldValue ] = useState('All')
  let history = useHistory();

  const handleChange = (event) => {
    setSearchPage(event.target.value);
  };
  const handleInputChange = (e) =>{
    setSearchValue(e.target.value)
  }
  const fastSearch = () => {
    if( searchPage === 'jobs') {
      history.push(`/jobs/q/${searchValue}_${fieldValue}`)
    }
    else if( searchPage === 'companies') {
      history.push(`/companies/q/${searchValue}_${fieldValue}`)
    }
  }

  return (
    <div className="Bunner-Container">
      <h1 className="Bunner-secondary-title">EVERYTHING STARTS FROM HERE</h1>
      <p className="Bunner-text">
        Search for jobs, find your and contact employer with one click.
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
              value={searchPage}
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

        <form noValidate autoComplete="off">
          <div className="Inputs-Container">
            <TextField id="filled-basic" variant="filled" label="Keywords" value={searchValue} onChange={handleInputChange} />
            <Select givenArray={fields} givenFunction={(e)=> {setFieldValue(e.target.value)}}/>

            <Button variant="contained" color="primary" size="large" onClick={fastSearch}>
              <SearchSvgIcon width="26px" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Bunner;
