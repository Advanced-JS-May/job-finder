import React, { useState } from 'react';
import './Bunner.css'
import SearchSvgIcon from '../SearchSvgIcon/Search'

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';


function Bunner() {
  const [value, setValue] = React.useState('jobs');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
  	<div className="Bunner-Container">
  		<h1 className="Bunner-secondary-title">CAREER SEARCH STARTS HERE</h1>
  		<p className="Bunner-text">
  		Search for jobs, find your match and apply with one click.<br />
			Explore all our options now.
		</p>
		<div className="centerer-search">
			<div className="Radio-Container">
				<FormControl component="fieldset">
			      <RadioGroup row aria-label="job" name="job1" value={value} onChange={handleChange}>
			        <FormControlLabel value="jobs" control={<Radio />} label="Jobs" />
			        <FormControlLabel value="companies" control={<Radio />} label="Companies" />
			      </RadioGroup>
			    </FormControl>
		   </div>
		   <div className="Inputs-Container">
		   		<input type="text" className="job-keywords-input" placeholder="Job keywords"/>
		   		<select id="jobsfilter-category" class="form-control">
					<option value="">All categories</option>
					<option value="1">Software development</option>
					<option value="2">Quality Assurance /Control</option>
					<option value="3">Web/Graphic design</option>
					<option value="4">Product/Project Management</option>
					<option value="5">Hardware design</option>
					<option value="6">Other IT</option>
					<option value="7">Sales/service management</option>
					<option value="8">Administrative/office-work</option>
					<option value="9">Tourism/Hospitality/HoReCa</option>
					<option value="10">Marketing/Advertising</option>
					<option value="11">Communications/Journalism/PR</option>
					<option value="12">Accounting/Bookkeeping/Cash register</option>
					<option value="13">Finance Management</option>
					<option value="14">Banking/credit</option>
					<option value="15">TV/Radio/Entertainment</option>
					<option value="16">Education/training</option>
					<option value="17">Legal</option>
					<option value="18">Audit/Compliance</option>
					<option value="19">Healthcare/Pharmaceutical</option>
					<option value="20">Construction</option>
					<option value="21">Human Resources</option>
					<option value="23">Procurement/Logistics/Courier</option>
					<option value="24">Production</option>
					<option value="25">Business/Management</option>
					<option value="26">Art/Design/Architecture</option>
					<option value="27">General/professional/Other services</option>
					<option value="28">IT security/Networks</option>
					<option value="29">NGO/Nonprofit</option>
					<option value="31">Insurance</option>
					<option value="33">Hospitality/Entertainment</option>
					<option value="34">Data Science/Data Analytics</option>
					<option value="35">Foreign language</option>
					<option value="36">Economics</option>
					<option value="37">Hardware Design / Engineering</option>
					<option value="38">Data Collection &amp; Analytics</option>
					<option value="39">Business Software Consultancy</option>
					<option value="40">Mechanical</option>
					<option value="41">System Admin/Engineer</option>
					<option value="42">Retail business</option>
					<option value="43">Network Administration</option>
					<option value="44">Consultancy</option>
					<option value="46">Science</option>
					<option value="47">Content writing</option>
					<option value="48">Security</option>
				</select>
				<select id="jobsfilter-job_city" class="form-control">
					<option value="">All Cities</option>
					<option value="34">Yerevan</option>
					<option value="22">Gyumri</option>
					<option value="11">Abovyan</option>
					<option value="16">Alaverdi</option>
					<option value="3">Ararat</option>
					<option value="48317">Armenia (All cities)</option>
					<option value="4">Artashat</option>
					<option value="1">Ashtarak</option>
					<option value="33">Berd</option>
					<option value="7">Gavar</option>
					<option value="27">Kapan</option>
					<option value="42980">Los Angeles</option>
					<option value="48163">Maralik</option>
					<option value="8">Martuni</option>
					<option value="48307">Stepanakert</option>
					<option value="48303">village Kotayk</option>
				</select>
				<button className="search-button"><SearchSvgIcon width="26px"/></button>
				
		   </div>
		</div>
	</div>
  );
}

export default Bunner;