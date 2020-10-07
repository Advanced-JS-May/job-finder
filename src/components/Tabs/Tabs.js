import React from 'react';
import PropTypes from 'prop-types';

/* UI */
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

/* Components */
import EmployerRegister from '../EmployerRegister/EmployerRegister';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          m={3}
        >
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

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
      </TabPanel>
    </div>
  );
}
