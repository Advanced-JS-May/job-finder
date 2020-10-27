import React from 'react';

import TabPanel from './TabPanel/TabPanel';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import EmployerRegister from '../EmployerRegister/EmployerRegister';
import JobSeekerRegister from '../JobSeekerRegister/JobSeekRegister';
import a11yProps from './helper/tabs.helper';

export default function SimpleTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
      >
        <Tab label="Employer" {...a11yProps(0)} />
        <Tab label="Job-seeker" {...a11yProps(1)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <h2>Employer</h2>
        <EmployerRegister />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <h2>Job-seeker</h2>
        <JobSeekerRegister />
      </TabPanel>
    </div>
  );
}
