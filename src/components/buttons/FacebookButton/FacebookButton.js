import React from 'react';
import FacebookSvgIcon from '../../icons/FacebookSvgIcon/FacebookSvgIcon';
import CustomButton from '../CustomButton/CustomButton';
import { useAuth } from '../../../services/authentication';
import { useHistory } from 'react-router-dom';
import { USER_ROLES } from '../../../constants/user.constants';
import { getUserById } from '../../../services/user';

export default function FacebookButton({ setProgress, ...props }) {
  const { authWithFacebook } = useAuth();
  const history = useHistory();

  function signInWithFacebook() {
    setProgress();
    authWithFacebook(USER_ROLES.user)
      .then((user) => {
        getUserById(user.uid).then((result) => {
          if (!result.profileCreated) {
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
      {...props}
      text="sign In with Facebook"
      onClick={signInWithFacebook}
    >
      <FacebookSvgIcon width="20" />
    </CustomButton>
  );
}
