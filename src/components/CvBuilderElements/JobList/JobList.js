import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IconButton, List, ListItem, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { blue, grey } from '@material-ui/core/colors';
import { removeJobFromList } from '../../../store/features/jobList';

function JobList() {
  const { jobList } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleCloseIconClick = (id) => () => {
    dispatch(removeJobFromList({ id }));
  };

  return (
    <>
      {jobList && (
        <List
          style={{
            width: '100%',
          }}
        >
          {jobList.map((job, idx) => (
            <ListItem
              key={idx}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                background: blue[800],
                color: 'white',
                marginTop: '10px',
                borderRadius: '5px',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Typography
                  variant="body1"
                  component="p"
                  color="textPrimary"
                  style={{ color: 'white' }}
                >
                  {job.jobTitle}
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  color="textSecondary"
                  style={{ color: grey[300] }}
                >
                  {job.company}
                </Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Typography
                  variant="body2"
                  component="p"
                  color="textSecondary"
                  style={{ color: 'white' }}
                >
                  {job.startDate}
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  color="textSecondary"
                  style={{ color: 'white' }}
                >
                  {job.endDate}
                </Typography>
              </div>
              <div>
                <IconButton onClick={handleCloseIconClick(job.id)}>
                  <CloseIcon style={{ color: 'white' }} />
                </IconButton>
              </div>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
}

export default JobList;
