import React, { useEffect, useState } from "react";
import JobCard from "../../components/JobCard/JobCard";
import { makeStyles } from "@material-ui/core/styles";
import { getAllJobs } from "../../services/getAllJobs";
import { Pagination } from "@material-ui/lab";
import usePagination from "../../Utils/paginationHelper";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getUserFollowings, addUserFollow } from "../../services/favorites";
import { useAuth } from "../../services/authentication";
import _ from "lodash";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();

  useEffect(() => {
    getAllJobs()
      .then((response) => {
        setLoading(false);
        setJobs(Object.values(response));
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (user && user.uid) {
      getUserFollowings(user.uid)
        .then((res) => {
          setFollowing(res);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const handleChange = (event, page) => {
    setPage(page);
    data.jump(page);
  };

  const handleFollow = (event) => {
    if (user && user.uid) {
      if (user.role === "regular") {
        let target = event.currentTarget.id;
        setFollowing((previous) => [...previous, target]);
        const newArr = following.filter(Boolean); 
        const newSet = new Set([...newArr]);
        addUserFollow(user.uid, [...newSet, target]);
      }
    } else {
      history.push(`/login/`)
      console.log("please SignUp or SignIn");
    }
  };

  const handleUnFollow = (event) => {
    let target = event.currentTarget.id;
    let filteredArray = following.filter((item) => item !== target);
    setFollowing(filteredArray);
    addUserFollow(user.uid, filteredArray);
  };

  function JobPage() {
    return (
      <div className={classes.root}>
        <div className={classes.jobContainer}>
          <div className={classes.job}>
            {data.currentData().map(({ jobId, position }) => {
              return (
                <JobCard
                  companyLogo={
                    //temporary
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOReMDQrVH8-7Hc8LW-NIBda13DbA6m2s3eg&usqp=CAU"
                  }
                  key={_.uniqueId("job")}
                  id={jobId}
                  jobTitle={position}
                  onFollow={handleFollow}
                  onUnFollow={handleUnFollow}
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
