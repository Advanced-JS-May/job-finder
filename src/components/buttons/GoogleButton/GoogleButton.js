import React from 'react';
import GoogleSvgIcon from '../../icons/GoogleSvgIcon/GoogleSvgIcon';
import CustomButton from '../CustomButton/CustomButton';
import { useAuth } from '../../../services/authentication';
import { useHistory } from 'react-router-dom';
import { USER_ROLES } from '../../../constants/user.constants';

export default function GoogleButton(props) {
  const { authWithGoogle } = useAuth();
  const history = useHistory();

  function signInWithGoogle() {
    authWithGoogle(USER_ROLES.user)
      .then((user) => {
        history.push('/profile/create');
      })
      .catch((error) => console.log(error));
  }

  return (
    <CustomButton
      text="sign In with Google"
      {...props}
      onClick={signInWithGoogle}
    >
      <GoogleSvgIcon width="20" />
    </CustomButton>
  );
}
