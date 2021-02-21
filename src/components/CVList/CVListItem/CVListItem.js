import React from 'react';
import { IconButton, ListItem, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { blue, grey } from '@material-ui/core/colors';

const CVListItem = ({
  title,
  subtitle,
  startDate,
  endDate,
  id,
  onCloseButtonClick,
  ...props
}) => {
  const handleCloseIconClick = (id) => () => {
    onCloseButtonClick(id);
  };

  return (
    <ListItem
      {...props}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        background: blue[900],
        color: 'white',
        marginTop: '10px',
        borderRadius: '5px',
      }}
    >
      <div
        style={{ display: 'flex', flexDirection: 'column', minWidth: '40%' }}
      >
        <Typography
          variant="body1"
          component="p"
          color="textPrimary"
          style={{ color: 'white' }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          color="textSecondary"
          style={{ color: grey[300] }}
        >
          {subtitle}
        </Typography>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Typography
          variant="body2"
          component="p"
          color="textSecondary"
          style={{ color: 'white' }}
        >
          {startDate}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          color="textSecondary"
          style={{ color: 'white' }}
        >
          {endDate}
        </Typography>
      </div>
      <div>
        <IconButton onClick={handleCloseIconClick(id)}>
          <CloseIcon style={{ color: 'white' }} />
        </IconButton>
      </div>
    </ListItem>
  );
};

export default CVListItem;
