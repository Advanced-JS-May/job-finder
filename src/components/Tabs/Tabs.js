import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import a11yProps from './helper/tabs.helper';

export default function SimpleTabs({ label1, label2, children, ...props }) {
  return (
    <div>
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        variant="fullWidth"
        centered
        {...props}
        aria-label="tabs"
        style={{
          margin: '2rem',
        }}
      >
        <Tab label={label1} {...a11yProps(0)} />
        <Tab label={label2} {...a11yProps(1)} />
      </Tabs>

      {children}
    </div>
  );
}

// function withTabs(first, second) {
//   function SimpleTabs() {
//     const [value, setValue] = React.useState(0);
//     const [label1, label2] = useContext(labelContext);

//     const handleChange = (_event, newValue) => {
//       setValue(newValue);
//     };

//     return (
//       <div>
//         <Tabs value={value} onChange={handleChange} aria-label="tabs">
//           <Tab label={label1} {...a11yProps(0)} />
//           <Tab label={label2} {...a11yProps(1)} />
//         </Tabs>

//         <TabPanel value={value} index={0}>
//           {first}
//         </TabPanel>

//         <TabPanel value={value} index={1}>
//           {second}
//         </TabPanel>
//       </div>
//     );
//   }
//   return SimpleTabs;
// }

// export const TabsWithComponents = withTabs(EmployerRegister, JobSeekerRegister);
