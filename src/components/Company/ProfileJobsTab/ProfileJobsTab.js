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
import CreateJobCard from "../../../components/Company/CreateJobCard/CreateJobCard";

const useStyles = makeStyles({
  element: {
    display: "flex",
    flexDirection: "row",
    padding: "35px",
  },
  card: {
    // boxShadow: "10px  8px 10px #888888",
    // border: "1px solid #808080 ",
  },
});

export default function ProfileJobsTab() {
  const classes = useStyles();

  return (
    <Grid container direction="column" justify="center" alignItems="flex-start">
      <div className={classes.element}>
        <div className={classes.card}>
          <MiniCardJobs />
        </div>
        <div className={classes.card}>
          <MiniCardJobs />
        </div>
        <div className={classes.card}>
          <MiniCardJobs />
        </div>
        <div>
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
