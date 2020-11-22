import React, { useEffect, useState } from "react";
import JobCard from "../../components/JobCard/JobCard";
import { makeStyles } from "@material-ui/core/styles";
import { getAllJobs } from "../../services/getAllJobs";
import { Pagination } from "@material-ui/lab";
import usePagination from "../../Utils/paginationHelper";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles({
  root: {
    marginLeft: 50,
  },
  jobContainer: {
    width: 450,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translateY(-50%)",
    transform: "translateX(-50%)",
  },
  job: {
    display: "flex",
    flexWrap: "wrap",
  },
});

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const perPage = 2;
  const count = Math.ceil(jobs.length / perPage);
  const data = usePagination(jobs, perPage);
  const classes = useStyles();

  useEffect(() => {
    getAllJobs()
      .then((response) => {
        setLoading(false);
        setJobs(Object.values(response));
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (event, page) => {
    setPage(page);
    data.jump(page);
  };

  function JobPage() {
    return (
      <div className={classes.root}>
        <div className={classes.jobContainer}>
          <div className={classes.job}>
            {data.currentData().map(({ id, position }) => {
              return <JobCard jobTitle={position}></JobCard>;
            })}
          </div>
          <Pagination
            count={count}
            size="large"
            page={page}
            variant="outlined"
            shape="rounded"
            onChange={handleChange}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={classes.jobContainer}>
      {loading ? <CircularProgress color="secondary" /> : <JobPage />}
    </div>
  );
}

export default Jobs;
