import React from 'react';
import AccordionDetails from '@material-ui/core/AccordionDetails';

const AccordionPanel = ({ children, ...props }) => {
  return (
    <AccordionDetails
      {...props}
      style={{
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '300px',
      }}
    >
      {children}
    </AccordionDetails>
  );
};

export default AccordionPanel;
