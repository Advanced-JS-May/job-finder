import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import a11yProps from './helper/tabs.helper';
import styles from './Tabs.module.css';

export default function SimpleTabs({ label1, label2, children, ...props }) {
  return (
    <div className={styles.tabs}>
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        variant="fullWidth"
        centered
        {...props}
        aria-label="tabs"
        style={{
          margin: '0 0 2rem 0',
        }}
      >
        <Tab label={label1} {...a11yProps(0)} />
        <Tab label={label2} {...a11yProps(1)} />
      </Tabs>

      {children}
    </div>
  );
}
