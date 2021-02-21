import React, { useState } from 'react';

import AccordionPanel from '../AccordionDetails/AccordionDetails';

import Fab from '@material-ui/core/Fab';
import EducationForm from './EducationForm';
import AddIcon from '@material-ui/icons/Add';
import CVList from '../../CVList/CVList';
import { useDispatch, useSelector } from 'react-redux';
import CVListItem from '../../CVList/CVListItem/CVListItem';
import { removeSchoolFromList } from '../../../store/features/schoolList';

const Education = () => {
  const [activeForm, setActiveForm] = useState(true);

  const schoolList = useSelector((state) => state.schoolList);
  const dispatch = useDispatch();

  const handleAddButtonClick = () => {
    setActiveForm((state) => !state);
  };

  const closeActiveForm = () => {
    setActiveForm((state) => !state);
  };

  const handleCloseIconClick = (id) => {
    dispatch(removeSchoolFromList({ id }));
  };

  return (
    <AccordionPanel>
      <CVList>
        {schoolList
          ? schoolList.map(
              ({ endDate, startDate, id, school, degree }, index) => (
                <CVListItem
                  id={id}
                  key={index}
                  title={degree}
                  subtitle={school}
                  endDate={endDate}
                  onCloseButtonClick={handleCloseIconClick}
                  startDate={startDate}
                />
              ),
            )
          : null}
      </CVList>

      <EducationForm activeForm={activeForm} closeForm={closeActiveForm} />

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

export default Education;
