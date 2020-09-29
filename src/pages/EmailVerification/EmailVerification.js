import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { useAuth } from '../../services/authentication';
import { database } from '../../libraries/firebase';

function EmailVerification() {
  const [open, setOpen] = React.useState(true);
  const { user } = useAuth();
  // console.log(user);
  function getEventById(id) {
    return database
      .ref('/user/' + id)
      .once('value')
      .then((snapshot) => snapshot.val());
  }
  let uid;
  if (user) {
    uid = user;
  }
  // console.log(uid);
  // getEventById(uid).then((data) => console.log(data));

  const handleClose = () => {
    setOpen(false);
  };
  const handleReload = () => {};

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Email is sent'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Verify your E-Mail: Check you E-Mails (Spam folder included) for a
            confirmation E-Mail or send another confirmation E-Mail.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleReload} color="primary" autoFocus>
            Reload
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EmailVerification;
