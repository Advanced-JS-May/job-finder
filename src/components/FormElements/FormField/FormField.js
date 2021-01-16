import React from 'react';
import TextField from '@material-ui/core/TextField';

function FormField(props) {
  return (
    <TextField
      style={{
        background: 'white',
      }}
      {...props}
      fullWidth
      color="primary"
      variant="outlined"
      margin="normal"
    />
  );
}

export default FormField;
