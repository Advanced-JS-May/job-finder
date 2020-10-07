import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { useHistory } from 'react-router-dom';

import { useAuth } from '../../services/authentication';

export default function OutlinedCard() {
  const history = useHistory();
  const { user } = useAuth();

  const handleReload = () => {
    if (user && user.emailVerified) {
      history.push('/employer');
    }
  };
  const [isDisplayed, setIsDisplayed] = useState(true);
  const handleContainerDisplay = () => {
    setIsDisplayed(false);
  };

  return (
    <div
      onClick={handleContainerDisplay}
      style={{
        display: isDisplayed ? 'flex' : 'none',
        height: '100vh',
        width: '100vw',
        position: 'absolute',
        top: 0,
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
        <CardActions>
          <Button onClick={handleReload} color="primary" autoFocus>
            Reload
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
