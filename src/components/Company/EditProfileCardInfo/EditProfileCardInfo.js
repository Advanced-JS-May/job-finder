import React, { useState } from "react";

//UI
import { makeStyles, useTheme } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import Fab from "@material-ui/core/Fab";
import CheckIcon from "@material-ui/icons/Check";


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

export default function EditProfileCardInfo(props) {
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
  );
}