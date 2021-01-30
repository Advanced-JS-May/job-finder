import React from 'react';
import Link from '@material-ui/core/Link';

const LinkWithSocialIcon = ({ icon, link }) => {
  return (
    <Link target="_blank" href={link}>
      {icon}
    </Link>
  );
};

export default LinkWithSocialIcon;
