import React, { useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

import { useHistory } from 'react-router-dom';

import { useAuth } from '../../services/authentication';
import { USER_ROLES } from '../../constants/user.constants';

export default function OutlinedCard() {
  const history = useHistory();
  const { user } = useAuth();

  let isUserVerified;
  if (user) {
    isUserVerified = user && user.emailVerified;
  }

  useEffect(() => {
    if (user && user.emailVerified) {
      if (user.role === USER_ROLES.employer) {
        history.push('/employer');
      } else {
        history.push('/');
      }
    }
  }, [history, user]);

  return user && user.emailVerified ? (
    <LinearProgress />
  ) : (
    <div
      style={{
        display: isUserVerified ? 'flex' : 'none',
        height: '80vh',
        width: '100vw',
        position: 'absolute',
        top: '20vh',
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Card
        style={{
          boxShadow: '2px 2px 2px #848484, -2px -2px 2px #eeeeee',
        }}
        variant="outlined"
      >
        <CardContent>
          <Typography variant="h6" component="h2">
            Verify your E-Mail
          </Typography>
          <Typography variant="body1" component="p">
            Check you E-Mails (Spam folder included) for a confirmation E-Mail
          </Typography>
          <Typography color="textSecondary" variant="body2" component="p">
            After verification, please reload this page
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
