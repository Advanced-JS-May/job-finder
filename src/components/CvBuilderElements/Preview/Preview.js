import React from 'react';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';

import PreviewHeader from './PreviewHeader';
import SectionHeader from './SectionHeader';
import PreviewJobList from './PreviewJobList';
import styles from './Preview.module.css';

function Preview() {
  const { summary } = useSelector((state) => state.jobSeeker);

  return (
    <div
      className={styles.preview}
      style={{
        background: 'white',
        height: '97%',
        minWidth: '600px',
        maxWidth: '700px',
        boxSizing: 'border-box',
        padding: '2rem 4rem',
        marginTop: '10px',
        fontSize: '0.9rem',
        overflowY: 'scroll',
      }}
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
      </div>
    </div>
  );
}

export default Preview;
