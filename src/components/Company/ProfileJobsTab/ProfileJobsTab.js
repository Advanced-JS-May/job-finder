import React from "react";
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
  console.log(profileJobs);

  return (
    <Grid container direction="column" justify="center" alignItems="flex-start">
      <div className={classes.jobCards}>
        <div className={classes.element}>
          <ProfileJobsCardMaker profileJobs={profileJobs} />
        </div>
        <div className={classes.element}>
          <CreateJobCard />
        </div>
      </div>
      <div className={classes.element}>
        <Pagination
          // count={count}
          size="large"
          //   page={page}
          variant="outlined"
          shape="rounded"
          // onChange={handleChange}
        />
      </div>
    </Grid>
  );
}
