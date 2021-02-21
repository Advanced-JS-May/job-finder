import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';

const SectionHeader = ({ text }) => {
  return (
    <div
      style={{
        margin: '16px 0 8px',
      }}
    >
      <Typography
        color="textSecondary"
        variant="body1"
        component="h3"
        style={{ color: '#363636' }}
      >
        {text}
      </Typography>
      <Divider style={{ background: 'black', height: '2px' }} />
    </div>
  );
};

export default SectionHeader;
