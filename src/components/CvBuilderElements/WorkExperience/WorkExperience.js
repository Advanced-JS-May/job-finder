import React, { useState } from 'react';

import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import JobForm from '../JobFom/JobForm';
import JobList from '../JobList/JobList';
import AccordionPanel from '../AccordionDetails/AccordionDetails';

const WorkExperience = () => {
  const [activeForm, setActiveForm] = useState(true);

  const handleAddButtonClick = () => {
    setActiveForm((state) => !state);
  };

  const closeActiveForm = () => {
    setActiveForm((state) => !state);
  };

  return (
    <AccordionPanel>
      <JobList />
      <JobForm activeForm={activeForm} closeForm={closeActiveForm} />

      <div
        style={{
          width: '100%',
          margin: '1rem',
          display: !activeForm ? 'flex' : 'none',
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
    </AccordionPanel>
  );
};

export default WorkExperience;
