import React, { useEffect, useState } from "react";
import JobCard from "../../components/JobCard/JobCard";
import { makeStyles } from "@material-ui/core/styles";
import { getAllJobs } from "../../services/getAllJobs";
import { Pagination } from "@material-ui/lab";
import usePagination from "../../Utils/paginationHelper";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getUserFollowings, addUserFollow } from "../../services/favorites";
import { useAuth } from "../../services/authentication";

const useStyles = makeStyles({
  root: {
    // marginLeft: 50,
  },
  jobContainer: {
    width: 450,
  },
  job: {
    display: "flex",
    flexWrap: "wrap",
  },
});

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [following, setFollowing] = useState([]);
  const [loading, setLoading] = useState(true);
  const perPage = 2;
  const count = Math.ceil(jobs.length / perPage);
  const data = usePagination(jobs, perPage);
  const classes = useStyles();
  const { user } = useAuth();

  useEffect(() => {
    getAllJobs()
      .then((response) => {
        setLoading(false);
        setJobs(Object.values(response));
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getUserFollowings(user.uid)
      .then((res) => {
        console.log("response", res);
        setFollowing(res);
      })
      .catch((err) => console.log(err));
  }, [user.uid]);

  const handleChange = (event, page) => {
    setPage(page);
    data.jump(page);
  };

  const handleClick = (event) => { //@TODO: add include();
    let target = event.currentTarget.id;
    setFollowing((previous) => [...previous, target]);
    const newArr = following.filter(Boolean);//deletes undefined  
    const newSet = new Set([...newArr]);
    console.log(newSet);
    addUserFollow(user.uid, [...newSet,target]); 
  };

  function JobPage() {
    return (
      <div className={classes.root}>
        <div className={classes.jobContainer}>
          <div className={classes.job}>
            {data.currentData().map(({ id, position }) => {
              return (
                <JobCard
                  id={id}
                  jobTitle={position}
                  companyName={id}
                  key={id}
                  onClick={handleClick}
                  arr={following}
                ></JobCard>
              );
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
