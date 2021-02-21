import React from 'react';

const CVForm = ({ children, activeForm }) => {
  return (
    <div>
      <div
        className="work-experience__form"
        style={{ display: activeForm ? 'block' : 'none' }}
      >
        {children}
      </div>
    </div>
  );
};

export default CVForm;
