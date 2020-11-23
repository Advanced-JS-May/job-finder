import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';

import SimpleTabs from '../../components/Tabs/Tabs';
import TabPanel from '../../components/TabPanel/TabPanel';
import EmployerRegister from '../../components/EmployerRegister/EmployerRegister';
import JobSeekRegister from '../../components/JobSeekerRegister/JobSeekRegister';

import styles from './signup.module.css';
import { Backdrop, CircularProgress } from '@material-ui/core';

function Signup() {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={styles.signup}>
      <Backdrop
        open={open}
        onClick={handleClose}
        style={{
          zIndex: 1,
        }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <SimpleTabs
        value={value}
        onChange={handleChange}
        label1="Employer"
        label2="Job-seeker"
      >
        <TabPanel value={value} index={0}>
          <EmployerRegister setProgress={handleOpen} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <JobSeekRegister setProgress={handleOpen} />
        </TabPanel>
      </SimpleTabs>
    </div>
  );
}

export default Signup;
