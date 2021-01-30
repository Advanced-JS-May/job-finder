import React, { useState } from 'react';

import AccordionDetails from '@material-ui/core/AccordionDetails';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import JobForm from '../JobFom/JobForm';
import JobList from '../JobList/JobList';

const WorkExperience = () => {
  const [activeForm, setActiveForm] = useState(true);

  const handleAddButtonClick = () => {
    setActiveForm((state) => !state);
  };

  const closeActiveForm = () => {
    setActiveForm((state) => !state);
  };

  return (
    <AccordionDetails
      style={{
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '300px',
      }}
    >
      <JobList />
      <JobForm activeForm={activeForm} closeForm={closeActiveForm} />

      <div
        style={{
          width: '100%',
          margin: '1rem',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Fab
          disabled={activeForm}
          aria-label="add"
          onClick={handleAddButtonClick}
          color="primary"
        >
          <AddIcon />
        </Fab>
      </div>
    </AccordionDetails>
  );
};

export default WorkExperience;
