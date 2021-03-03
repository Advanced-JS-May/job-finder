import React from "react";
import { Link, useParams, useHistory, generatePath } from "react-router-dom";

//UI
import { makeStyles, useTheme } from "@material-ui/core/styles";

//components
import MiniCardJobs from "../../MiniCardJobs/MiniCardJobs";

const useStyles = makeStyles({
  card: {
    boxShadow: "10px  8px 10px #888888",
    // border: "1px solid #808080 ",
  },
});

export default function ProfileJobsCardMaker({ profileJobs }) {
  const classes = useStyles();
  const history = useHistory();

  return profileJobs.map((profileJob) => {
    return (
      <div>
        <MiniCardJobs
          className={classes.card}
          jobName={profileJob.position}
          buttonFunc={() => {
            history.push(
              generatePath("/profile/jobs/:id", { id: profileJob.jobId })
            );
          }}
        />
      </div>
    );
  });
}
