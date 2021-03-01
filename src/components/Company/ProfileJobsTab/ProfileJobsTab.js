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
  element: {
    display: "flex",
    flexDirection: "row",
  },
  jobCards: {
    display: "flex",
    flexDirection: "row",
    padding: "35px",
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
    <Grid container direction="column" justify="center" alignItems="flex-start">
      <div className={classes.jobCards}>
        <div className={classes.element}>
          <ProfileJobsCardMaker profileJobs={data.currentData()} />
        </div>
        <div className={classes.element}>
          <CreateJobCard />
        </div>
      </div>
      <div className={classes.element}>
        <Pagination
          count={count}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handlePageChange}
        />
      </div>
    </Grid>
  );
}
