import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeJobFromList } from '../../../store/features/jobList';
import CVList from '../../CVList/CVList';
import CVListItem from '../../CVList/CVListItem/CVListItem';

function JobList() {
  const { jobList } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleCloseIconClick = (id) => {
    dispatch(removeJobFromList({ id }));
  };

  return (
    <CVList>
      {jobList
        ? jobList.map(
            ({ endDate, startDate, id, company, jobTitle }, index) => (
              <CVListItem
                id={id}
                key={index}
                title={jobTitle}
                subtitle={company}
                endDate={endDate}
                onCloseButtonClick={handleCloseIconClick}
                startDate={startDate}
              />
            ),
          )
        : null}
    </CVList>
  );
}

export default JobList;
