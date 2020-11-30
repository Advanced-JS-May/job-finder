import React from 'react';
import TextField from '@material-ui/core/TextField';

function FormField(props) {
  return (
    <TextField
      {...props}
      fullWidth
      color="primary"
      variant="outlined"
      margin="normal"
      style={{
        background: 'white',
      }}
    />
  );
}

export default FormField;
