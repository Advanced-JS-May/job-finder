import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import FacebookButton from '../buttons/FacebookButton/FacebookButton';
import GoogleButton from '../buttons/GoogleButton/GoogleButton';

export default function SocialAccountLogin() {
  return (
    <ButtonGroup
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
      aria-label="outlined primary button group"
    >
      <GoogleButton />
      <FacebookButton />
    </ButtonGroup>
  );
}
