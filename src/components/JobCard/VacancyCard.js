import React from "react";
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

export default function VacancyCard({
  company,
  category,
  address,
  deadline,
  position,
  responsabilites,
  qualifications,
  procedures,
  additionalInfo,
}) {
  const classes = useStyles();

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
              {position}
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
                  <p>{company}</p>
                </CardContent>
              </Card>
              <Card>
                <SnackbarContent message="Category" />
                <CardContent>
                  <p>{category}</p>
                </CardContent>
              </Card>
              <Card>
                <SnackbarContent message="Job Adress" />
                <CardContent>
                  <p>{address}</p>
                </CardContent>
              </Card>
              <Card>
                <SnackbarContent message="Deadline" />
                <CardContent>
                  <p>{deadline}</p>
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
                <p>{responsabilites}</p>
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
                <p>{qualifications}</p>
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
                <p>{procedures}</p>
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
                <p>{additionalInfo}</p>
              </CardContent>
            </Card>
          </div>
        </Grid>
      </CardContent>
    </Card>
  );
}
