import { Facebook, LinkedIn, Twitter } from '@material-ui/icons';
import React from 'react';
import { useSelector } from 'react-redux';
import Link from '@material-ui/core/Link';
import { Typography } from '@material-ui/core';

function Preview() {
  const {
    name,
    surname,
    email,
    phone,
    city,
    headline,
    facebook,
    linkedIn,
    summary,
    twitter,
  } = useSelector((state) => state.jobSeeker);

  return (
    <div
      style={{
        background: 'white',
        height: '97%',
        width: '600px',
        boxSizing: 'border-box',
        padding: '1rem',
      }}
      className="preview"
    >
      <div className="preview__header">
        {/*  {user && user.cvImage !== null && (
            <img src={user.cvImage} alt="avatar" />
          )} */}
        {name && surname ? (
          <div style={{ fontWeight: '900', fontSize: '1.2rem' }}>
            {`${name} ${surname}`}
          </div>
        ) : null}
        {headline ? <div>{headline}</div> : null}
        {city ? <div>address: {city}, Armenia</div> : null}
        {email ? <div>{email}</div> : null}
        {phone ? <div>{phone}</div> : null}
        <div className="preview__socialIcons">
          {facebook ? (
            <Link target="_blank" href={facebook}>
              <Facebook />
            </Link>
          ) : null}
          {linkedIn ? (
            <Link target="_blank" href={linkedIn}>
              <LinkedIn />
            </Link>
          ) : null}
          {twitter ? (
            <Link target="_blank" href={twitter}>
              <Twitter />
            </Link>
          ) : null}
        </div>
      </div>
      <div className="preview__body">
        <Typography variant="h5" component="h3">
          Summary
        </Typography>
        {summary ? <div>{summary}</div> : null}
      </div>
    </div>
  );
}

export default Preview;
