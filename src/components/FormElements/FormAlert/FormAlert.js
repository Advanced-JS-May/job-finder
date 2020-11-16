import React from 'react';
import SnackBar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

function FormAlert({ message, handleClose, messageType, open }) {
  return (
    <SnackBar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={open}
    >
      <Alert variant="filled" onClose={handleClose} severity={messageType}>
        {message}
      </Alert>
    </SnackBar>
  );
}

export default FormAlert;
