import React, { useState } from "react";
import { useHistory } from "react-router-dom";

//UI
import { makeStyles, useTheme } from "@material-ui/core/styles";

// import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  closeIcon: {
    position: "absolute",
    top: "0px",
    right: "0px",
    cursor: "pointer",
  },
  card: {
    position: "absolute",
    top: "40%",
    left: "30%",
    right: "80%",
    textAlign: "center",
    width: "500px",
    zIndex: 1,
  },
  page: {
    opasity: 0,
    filter: "blur(8px)",
  },
});

export default function ProfileCardEdit({ cardContent, page }) {
  const classes = useStyles();
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <div>
      <Card className={classes.card}>
        <div>
          <CloseIcon className={classes.closeIcon} onClick={handleGoBack} />
        </div>
        <div>
          <br></br>
          <hr></hr>
        </div>
        <Grid>
          <CardContent>{cardContent}</CardContent>
        </Grid>
      </Card>
      <div className={classes.page}>{page}</div>
    </div>
  );
}

/* const FormSection = ({ children }) => {
  return (
    <div
      style={{
        width: 400,
        height: 400,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      {children}
    </div>
  );
};

export default FormSection; */
/* 


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      margin: 10,
      display: "flex",
      flexDirection: "column",
    },
    element: {
      display: "flex",
      alignItems: "center",
    },

    edit: {
        position: "relative",
        top: 0,
        left: 0,
      },
  });

export  function EditProfileCardInfo() {
  const classes = useStyles();  
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(!edit);
  };



  return (
    <>
      {!edit ? (
        <Fab className={classes.edit}>
          <EditIcon className={classes.edit} onClick={handleEdit} />
        </Fab>
      ) : (
        <Fab className={classes.edit}>
          <CheckIcon className={classes.edit} onClick={handleEdit} />
        </Fab>
      )}
    </>
  ); */
