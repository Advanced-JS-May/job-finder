import React, { useState, useEffect } from "react";
import { useLocation, useHistory, useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

//components
import ProdileCardEdit from "./../../components/Company/ProfileCardEdit/ProfileCardEdit";

//UI
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import Grid from "@material-ui/core/Grid";
import { Category } from "@material-ui/icons";

//Services
import { getJobById } from "../../services/jobs.service";

const useStyles = makeStyles({
  minibar: {
    height: "10px",
  },
  bar: {
    color: "black",
    backgroundColor: "#e6e2d3",
    padding: "15px",
    height: "15px",
  },

  section: {
    padding: "15px",
  },
});

export default function VacancyCard() {
  const classes = useStyles();
  const params = useParams();
  const jobId = params.id;
  const [job, setJob] = useState("");

  useEffect(() => {
    getJobById(jobId).then((job) => {
      setJob(job);
    });
  });

  return (
    <Card>
      <CardContent>
        <Grid
          container
          direction="column"
          justify="space-around"
          alignItems="stretch"
        >
          <div className={classes.section}>
            <MuiAlert variant="filled" severity="info">
              {job.position}
            </MuiAlert>
          </div>
          <div className={classes.section}>
            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="center"
            >
              <Card>
                <SnackbarContent message="Company" />
                <CardContent className={classes.minibar}>
                  <p>{job.company}</p>
                </CardContent>
              </Card>
              <Card>
                <SnackbarContent message="Category" />
                <CardContent className={classes.minibar}>
                  <p>{job.category}</p>
                </CardContent>
              </Card>
              <Card>
                <SnackbarContent message="Job Adress" />
                <CardContent className={classes.minibar}>
                  <p>{job.address}</p>
                </CardContent>
              </Card>
              <Card>
                <SnackbarContent message="Deadline" />
                <CardContent className={classes.minibar}>
                  <p>{job.deadline}</p>
                </CardContent>
              </Card>
            </Grid>
          </div>
          <div className={classes.section}>
            <Card>
              <SnackbarContent
                className={classes.bar}
                message="Responsabilities"
              />
              <CardContent>
                <p>{job.responsabilites}</p>
              </CardContent>
            </Card>
          </div>
          <div className={classes.section}>
            <Card>
              <SnackbarContent
                className={classes.bar}
                message="Required qualifications"
              />
              <CardContent>
                <p>{job.qualifications}</p>
              </CardContent>
            </Card>
          </div>
          <div className={classes.section}>
            <Card>
              <SnackbarContent
                className={classes.bar}
                message="Application Procedures"
              />
              <CardContent>
                <p>{job.procedures}</p>
              </CardContent>
            </Card>
          </div>
          <div className={classes.section}>
            <Card>
              <SnackbarContent
                className={classes.bar}
                message="AdditionalInfo"
              />
              <CardContent>
                <p>{job.additionalInfo}</p>
              </CardContent>
            </Card>
          </div>
        </Grid>
      </CardContent>
    </Card>
  );
}
