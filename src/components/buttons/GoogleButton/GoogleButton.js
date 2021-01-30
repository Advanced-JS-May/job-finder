import React from 'react';
import GoogleSvgIcon from '../../icons/GoogleSvgIcon/GoogleSvgIcon';
import CustomButton from '../CustomButton/CustomButton';
import { useAuth } from '../../../services/authentication';
import { useHistory } from 'react-router-dom';
import { USER_ROLES } from '../../../constants/user.constants';
import { getUsersById } from '../../../services/user';

export default function GoogleButton({ setProgress, ...props }) {
  const { authWithGoogle, signout } = useAuth();
  const history = useHistory();

  function signInWithGoogle() {
    setProgress();
    authWithGoogle(USER_ROLES.user)
      .then((user) => {
        getUsersById(user.uid).then((result) => {
          if (result && result.role === USER_ROLES.employer) {
            signout();
          }
          if (result && !result.profileCreated) {
            setTimeout(() => {
              history.push('/profile/create');
            }, 1000);
          } else {
            setTimeout(() => {
              history.push(`/profile/${result.uid}`);
            }, 1000);
          }
        });
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
