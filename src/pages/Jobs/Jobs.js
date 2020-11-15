import React, { useEffect, useState } from "react";
import JobCard from "../../components/JobCard/JobCard";
import { makeStyles } from "@material-ui/core/styles";
import { getAllJobs } from "../../services/getAllJobs";
// import PaginationControlled from "../../components/PaginationControlled/PaginationControlled";
import { wrap } from "lodash";
import { Pagination } from "@material-ui/lab";
import usePagination from "../../Utils/paginationHelper";

const useStyles = makeStyles({
  root: {
    marginLeft: 50,
  },
  jobContainer: {
    display: "flex",
    flexWrap: "wrap",
    width: 450,
  },
});

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1); //
  const perPage = 2;
  const classes = useStyles();

  const count = Math.ceil(jobs.length / perPage);
  const data = usePagination(jobs, perPage);

  useEffect(() => {
    getAllJobs().then((response) => {
      setJobs(Object.values(response));
    });
  }, []);

  const handleChange = (event, page) => {
    setPage(page);
    data.jump(page);
  };

  return (
    <div className={classes.root}>
      <div className={classes.jobContainer}>
        {data.currentData().map(({ id, position }) => {
          return <JobCard jobTitle={position}></JobCard>;
        })}
      </div>
      <Pagination
        count={count}
        size="large" //
        page={page} //
        variant="outlined" //
        shape="rounded" //
        onChange={handleChange}
      />
    </div>
  );
}

export default Jobs;
