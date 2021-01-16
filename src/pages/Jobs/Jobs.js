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
import TextField from "@material-ui/core/TextField"; //forSaerch
import Select from "../../components/Select/Select"; //forSaerch
import { useLocation, generatePath, useHistory } from "react-router-dom"; //forSaerch
import fields from "../../constants/jobField"; //forSaerch

const useStyles = makeStyles({
  root: {
    "& > *": {
      margin: " spacing(1)",
      width: "25ch",
      background: "green",
      width: "500px",
    },
  },
  jobContainer: {
    width: "25ch", //@TODO: css
    // background:"red"
  },
  job: {
    display: "flex",
    flexWrap: "wrap",
    // background:"yellow",
  },
  main: {
    background: "red",
    // margin: "20px 50px 75px 50px",
    width: "100vw",
  },
  body: {
    // width:1000,
    // height:500,
    background: "black",
    width: "100vw",
    position: "relative",
    marginLeft: "-50vw",
    height: "100px",
    marginTop: "100px",
    left: "50%",
  },
});

let tmpJobs = []; //forSaerch
let constJobs = []; //forSaerch

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [following, setFollowing] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(""); //forSaerch
  const [fieldValue, setFieldValue] = useState("All"); //forSaerch
  const perPage = 2;
  const count = Math.ceil(jobs.length / perPage);
  const data = usePagination(jobs, perPage);
  const classes = useStyles();
  const { user } = useAuth();
  const history = useHistory();
  const location = useLocation(); //forSaerch

  useEffect(() => {
    getAllJobs()
      .then((response) => {
        setLoading(false);
        setJobs(Object.values(response));
        constJobs = Object.values(response); //for search
      })
      .then(() => {
        searchSet(); //forSaerch
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    //forSaerch
    Search();
  }, [search, fieldValue]);

  useEffect(() => {
    if (user && user.uid) {
      getUserFollowings(user.uid)
        .then((res) => {
          setFollowing(res);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  async function searchSet() {
    //forSaerch
    let lastPartPath = ""; //forSaerch CHANGE VARS
    if (location.pathname !== "/jobs") {
      lastPartPath = location.pathname.substring(
        location.pathname.lastIndexOf("/") + 1,
        location.pathname.lastIndexOf("_")
      );
      if (lastPartPath !== "jobs") {
        console.log(lastPartPath);
        setSearch(lastPartPath);
      }
    } else {
      setSearch("");
    }

    let lastPartField = decodeURI(
      location.pathname.substring(location.pathname.lastIndexOf("_") + 1)
    );
    if (lastPartField !== "/jobs") {
      await setFieldValue(lastPartField);
    } else {
      setFieldValue("All");
    }
    return lastPartPath, lastPartField;
  }

  function Search() {
    //forSaerch
    tmpJobs = constJobs; //forSaerch CHANGE VASR
    console.log(search, 5);
    if (search === "" && fieldValue === "All") {
      setJobs(constJobs);
      return true;
    } else if (fieldValue === "All") {
      const filterComps = tmpJobs.filter((e) => {
        if (
          e.position &&
          e.position.toLowerCase().includes(search.toLowerCase())
        ) {
          return true;
        } else {
          return false;
        }
      });

      setJobs(filterComps);
    } else if (search === "") {
      const filterComps = tmpJobs.filter((e) => {
        if (e.field === fieldValue) {
          return true;
        }
        return false;
      });
      setJobs(filterComps);
    }
  }

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
      history.push(`/login/`);
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
        <form
          className={(classes.searchPart)}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            helperText="Write the keywords"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              console.log(search);
            }}
          />
          <Select
            valueq={fieldValue}
            givenArray={fields}
            givenFunction={(e) => {
              setFieldValue(e.target.value);
            }}
          />
        </form>
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
                  details={() => {
                    history.push(generatePath("/jobs/:id", { id: jobId }));
                  }}
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
      // <div className={classes.main}>
      //   Main
      //   <div className={classes.body}></div>
      // </div>
    );
  }

  return (
    <div className={classes.jobContainer}>
      {loading ? <CircularProgress color="secondary" /> : <JobPage />}
    </div>
  );
}

export default Jobs;
