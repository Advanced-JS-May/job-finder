import React from 'react';
import Typography from '@material-ui/core/Typography';

function PreviewContactDetails({ icon, text, size }) {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {icon}

        <Typography
          style={{ fontSize: '0.8rem' }}
          variant="body1"
          component="p"
          color="textPrimary"
        >
          {text}
        </Typography>
      </div>
    </div>
  );
}

export default PreviewContactDetails;
