import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

import { useHistory } from 'react-router-dom';

import { useAuth } from '../../services/authentication';
import { ROLES } from '../../constants/constants';

export default function OutlinedCard() {
  const history = useHistory();
  const { user } = useAuth();
  const [isDisplayed, setIsDisplayed] = useState(true);

  useEffect(() => {
    if (user && user.emailVerified) {
      setIsDisplayed(false);
      if (user.role === ROLES.employer) {
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
        display: isDisplayed ? 'flex' : 'none',
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
