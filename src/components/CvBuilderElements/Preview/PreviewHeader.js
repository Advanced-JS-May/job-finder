import React from 'react';
import { Facebook, GitHub, LinkedIn, Twitter } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import Link from '@material-ui/core/Link';
import StackOverFlow from '../../../components/icons/StackOverFlow/StackOverFlow';
import { Typography } from '@material-ui/core';

import PreviewCvName from './PreviewCvName';
import PreviewSocialIcons from './PreviewSocialIcons';
import PreviewContacts from './PreviewContacts';

function PreviewHeader() {
  const { name, surname, email, phone, city, headline } = useSelector(
    (state) => state.jobSeeker,
  );

  return (
    <div
      className="preview__header"
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div>
          {/*  {user && user.cvImage !== null && (
        <img src={user.cvImage} alt="avatar" />
      )} */}
          {name && surname && <PreviewCvName text={`${name} ${surname}`} />}

          {headline && (
            <Typography variant="body1" component="p" color="textSecondary">
              {headline}
            </Typography>
          )}
        </div>
        <PreviewSocialIcons />
      </div>
      <PreviewContacts />
    </div>
  );
}

export default PreviewHeader;
