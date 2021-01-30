import React from 'react';
import Typography from '@material-ui/core/Typography';

function PreviewCvName({ text, ...props }) {
  return (
    <Typography variant="h6" component="h2" color="textPrimary" {...props}>
      {text}
    </Typography>
  );
}

export default PreviewCvName;
