import React from 'react';

const FormSection = ({ children }) => {
  return (
    <div
      style={{
        width: 400,
        height: 400,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      {children}
    </div>
  );
};

export default FormSection;
