import React from 'react';
import GoogleSvgIcon from '../../icons/GoogleSvgIcon/GoogleSvgIcon';
import Button from '@material-ui/core/Button';
import { useAuth } from '../../../services/authentication';
import { useHistory } from 'react-router-dom';
import { USER_ROLES } from '../../../constants/user.constants';

export default function GoogleButton() {
  const { authWithGoogle } = useAuth();
  const history = useHistory();

  function signInWithGoogle() {
    authWithGoogle(USER_ROLES.user)
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
      onClick={signInWithGoogle}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '220px',
      }}
    >
      <GoogleSvgIcon width="20" />
      <span>sign In with Google</span>
    </Button>
  );
}
