import React from 'react';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';

import PreviewHeader from './PreviewHeader';
import SectionHeader from './SectionHeader';
import PreviewJobList from './PreviewJobList';

function Preview() {
  const { summary } = useSelector((state) => state.jobSeeker);

  return (
    <div
      style={{
        background: 'white',
        height: '97%',
        width: '600px',
        boxSizing: 'border-box',
        padding: '2rem 4rem',
        marginTop: '10px',
        fontSize: '0.9rem',
      }}
      className="preview"
    >
      <PreviewHeader />

      <div className="preview__body">
        {summary && (
          <div>
            <SectionHeader text="Summary" />

            <Typography
              variant="body2"
              style={{
                color: '#363636',
                fontStyle: 'italic',
              }}
            >
              {summary}
            </Typography>
          </div>
        )}

        <PreviewJobList />

        {/* {jobList.length >= 1 && (
          <div>
            <SectionHeader text="Professional Experience" />

            <List>
              {jobList.map((job) => (
                <ListItem
                  key={job.id}
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <div>
                      <span>{job.startDate}</span> - <span>{job.endDate}</span>
                    </div>
                    <div>
                      <span>{job.city}</span> , <span>Armenia</span>
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <span>{job.jobTitle}</span>
                    <span>{job.company}</span>
                  </div>
                  <div>{job.description && job.description}</div>
                </ListItem>
              ))}
            </List>
          </div>
        )} */}
      </div>
    </div>
  );
}

export default Preview;
