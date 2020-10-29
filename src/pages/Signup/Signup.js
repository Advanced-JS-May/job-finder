import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';

import SimpleTabs from '../../components/Tabs/Tabs';
import TabPanel from '../../components/TabPanel/TabPanel';
import EmployerRegister from '../../components/EmployerRegister/EmployerRegister';
import JobSeekRegister from '../../components/JobSeekerRegister/JobSeekRegister';

function Signup() {
  const [value, setValue] = useState(0);

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Typography
        variant="h3"
        color="textPrimary"
        align="center"
        style={{
          margin: '2rem 0',
        }}
      >
        Sign Up
      </Typography>

      <SimpleTabs
        value={value}
        onChange={handleChange}
        label1="Employer"
        label2="Job-seeker"
      >
        <TabPanel value={value} index={0}>
          <EmployerRegister />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <JobSeekRegister />
        </TabPanel>
      </SimpleTabs>
    </div>
  );
}

export default Signup;
