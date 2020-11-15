import React from 'react';
import FacebookSvgIcon from '../../icons/FacebookSvgIcon/FacebookSvgIcon';
import CustomButton from '../CustomButton/CustomButton';
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
          history.push('/profile/create');
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <CustomButton text="sign In with Facebook" onClick={signInWithFacebook}>
      <FacebookSvgIcon width="20" />
    </CustomButton>
  );
}
