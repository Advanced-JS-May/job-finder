import React, { useState } from "react";

//UI
import { makeStyles, useTheme } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import Fab from "@material-ui/core/Fab";
import CheckIcon from "@material-ui/icons/Check";

// import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";

export default function ProfileCardEdit({ children }) {
  return (
    <div>
      <Card>
        <CloseIcon />
        <Grid>
          <CardContent></CardContent>
        </Grid>
        {/* <Button>
      </Button> */}
      </Card>
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
