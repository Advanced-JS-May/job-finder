import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

import { useHistory } from 'react-router-dom';

import { useAuth } from '../../services/authentication';
import { USER_ROLES } from '../../constants/user.constants';
import { Button } from '@material-ui/core';
import { getUserById } from '../../services/user';

export default function OutlinedCard() {
  const history = useHistory();
  const { user } = useAuth();
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    window.location.reload();
  };

  useEffect(() => {
    if (user) {
      getUserById(user.uid).then((res) => {
        if (res.emailVerified) {
          // if (user.role === USER_ROLES.employer) {
          //   history.push(`/company/create`);
          // } else {
          history.push('/profile/create');
          // }
        } else {
          setError(true);
        }
      });
    }
  }, [history, user]);

  return (
    <div
      style={{
        minHeight: '55.7vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {user === null ? (
        <LinearProgress />
      ) : user && user.emailVerified ? (
        <LinearProgress />
      ) : (
        <div
          style={{
            height: '100%',
            margin: '1rem 0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Card
            style={{
              boxShadow: '2px 2px 2px #848484, -2px -2px 2px #eeeeee',
              width: 500,
            }}
            variant="outlined"
          >
            <CardContent
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: 20,
              }}
            >
              <Typography variant="h6" component="h2">
                Verify your E-Mail
              </Typography>
              <Typography variant="body1" component="p">
                Check you mail box (Spam folder included) and clink on the link
                that we sent
              </Typography>
              <Typography color="textSecondary" variant="body1" component="p">
                After confirmation please reload the page
              </Typography>

              <Typography
                hidden={!error}
                color="secondary"
                variant="body2"
                component="p"
              >
                your email is not verified yet
              </Typography>

              <Button
                style={{ alignSelf: 'flex-end' }}
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Reload
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
