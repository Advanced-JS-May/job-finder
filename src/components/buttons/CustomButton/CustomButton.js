import React from 'react';
import Button from '@material-ui/core/Button';
export default function CustomButton({ children, text, ...props }) {
  return (
    <Button
      {...props}
      variant="outlined"
      color="primary"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '1rem 0',
        padding: '13px 10px',
        border: '1px solid',
        borderRadius: 5,
      }}
    >
      {children}
      <span
        style={{
          fontSize: 12,
        }}
      >
        {text}
      </span>
    </Button>
  );
}
