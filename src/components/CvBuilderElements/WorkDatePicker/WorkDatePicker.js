import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'no-wrap',
    gap: '1rem',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function WorkDatePicker({
  name,
  children,
  cancelButtonClick,
  submitButtonClick,
  dialogName,
}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCancelButtonClick = () => {
    setOpen(false);
    cancelButtonClick();
  };

  const handleSubmitButtonClick = () => {
    setOpen(false);
    submitButtonClick();
  };

  return (
    <div style={{ margin: '1rem 0' }}>
      <Button
        style={{ minWidth: '150px', fontSize: '1.2rem' }}
        onClick={handleClickOpen}
        variant="outlined"
      >
        {name}
      </Button>
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>{dialogName}</DialogTitle>
        <DialogContent>
          <form className={classes.container}>{children}</form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelButtonClick} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmitButtonClick} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
