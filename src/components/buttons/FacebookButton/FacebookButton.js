import React from 'react';
import FacebookSvgIcon from '../../icons/FacebookSvgIcon/FacebookSvgIcon';
import Button from '@material-ui/core/Button';
import { useAuth } from '../../../services/authentication';
import { useHistory } from 'react-router-dom';
import { USER_ROLES } from '../../../constants/user.constants';

export default function FacebookButton() {
  const { authWithFacebook } = useAuth();
  const history = useHistory();

  function signInWithFacebook() {
    authWithFacebook(USER_ROLES.user)
      .then((user) => {
        if (user) {
          history.push('/');
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <Button
      variant="outlined"
      color="primary"
      onClick={signInWithFacebook}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '220px',
      }}
    >
      <FacebookSvgIcon width="20" />
      <span>sign In with Facebook</span>
    </Button>
  );
}
