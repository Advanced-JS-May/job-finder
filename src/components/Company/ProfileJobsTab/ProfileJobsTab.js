import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

//UI
import { Pagination } from "@material-ui/lab";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";

//components
import CreateJob from "../CreateJobCard/CreateJobForm";
import MiniCardJobs from "../../MiniCardJobs/MiniCardJobs";
import ProfileJobsCardMaker from "./ProfileJobsCardMaker";
import CreateJobCard from "../../../components/Company/CreateJobCard/CreateJobCard";

//Utils
import usePagination from "../../../Utils/paginationHelper";

const useStyles = makeStyles({
  containter: {
    padding: "25px",
  },
  elements: {
    display: "flex",
    flexDirection: "row",
  },
  pagination: {
    marginTop: "25px",
    display: "flex",
  },
});

export default function ProfileJobsTab({ profileJobs }) {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const perPage = 3;
  const count = Math.ceil(profileJobs.length / perPage);

  const data = usePagination(profileJobs, perPage);

  function handlePageChange(event, page) {
    setPage(page);
    data.jump(page);
  }

  return (
    <div className={classes.containter}>
      <div className={classes.elements}>
        <ProfileJobsCardMaker profileJobs={data.currentData()} />
        <CreateJobCard />
      </div>
      <div className={classes.pagination}>
        <Pagination
          count={count}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
}
