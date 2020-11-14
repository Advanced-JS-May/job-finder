import React, { useEffect, useState } from 'react';
import JobCard from '../../components/JobCard/JobCard';
import { makeStyles } from '@material-ui/core/styles';
import { getAllJobs } from '../../services/getAllJobs';

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
});

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    getAllJobs().then((response) => {
      setJobs(Object.values(response));
    });
  }, []);

  return (
    <div className={classes.root}>
      {jobs.map(({ id, position }) => {
        return <JobCard jobTitle={position} />;
      })}
    </div>
  );
}

export default Jobs;
