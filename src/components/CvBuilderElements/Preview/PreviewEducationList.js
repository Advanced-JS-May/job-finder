import { Divider, List, ListItem, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import SectionHeader from './SectionHeader';

const PreviewEducationList = () => {
  const schoolList = useSelector((state) => state.schoolList);

  return (
    schoolList.length >= 1 && (
      <div>
        <SectionHeader text="Education and Certificates" />

        <List>
          {schoolList.map((school) => (
            <ListItem
              key={school.id}
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
                    {school.startDate} - {school.endDate}
                  </Typography>
                  {/* <Typography
                    variant="body2"
                    component="p"
                    color="textSecondary"
                  >
                    {job.city}, Armenia
                  </Typography> */}
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Typography variant="body2" component="p" color="textPrimary">
                    {school.degree}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    color="textSecondary"
                  >
                    {school.school}
                  </Typography>
                </div>
              </div>
              <div>
                {school.description && (
                  <Typography
                    variant="body2"
                    component="p"
                    color="textSecondary"
                    style={{ fontStyle: 'italic' }}
                  >
                    {school.description}
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
export default PreviewEducationList;
