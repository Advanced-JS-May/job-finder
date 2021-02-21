import React from 'react';
import { IconButton, List, ListItem, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { blue, grey } from '@material-ui/core/colors';
import CVListItem from './CVListItem/CVListItem';

const CVList = ({ children, ...props }) => {
  return (
    <List
      {...props}
      style={{
        width: '100%',
      }}
    >
      {children}
    </List>
  );
};

export default CVList;
