import React from 'react';

import SectionHeader from './SectionHeader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

import { useSelector } from 'react-redux';
import { Divider } from '@material-ui/core';

const PreviewJobList = () => {
  const jobList = useSelector((state) => state.jobList);

  return (
    jobList.length >= 1 && (
      <div>
        <SectionHeader text="Professional Experience" />

        <List>
          {jobList.map((job) => (
            <ListItem
              key={job.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                width: '100%',
                padding: 0,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '0.5rem',
                  gap: '1rem',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Typography variant="body2" component="p" color="textPrimary">
                    {job.startDate} - {job.endDate}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    color="textSecondary"
                  >
                    {job.city}, Armenia
                  </Typography>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Typography variant="body2" component="p" color="textPrimary">
                    {job.jobTitle}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    color="textSecondary"
                  >
                    {job.company}
                  </Typography>
                </div>
              </div>
              <div>
                {job.description && (
                  <Typography
                    variant="body2"
                    component="p"
                    color="textSecondary"
                    style={{ fontStyle: 'italic' }}
                  >
                    {job.description}
                  </Typography>
                )}

                <Divider
                  style={{
                    background: 'grey',
                    height: '1px',
                    margin: '10px 0',
                    width: '100%',
                  }}
                />
              </div>
            </ListItem>
          ))}
        </List>
      </div>
    )
  );
};

export default PreviewJobList;
