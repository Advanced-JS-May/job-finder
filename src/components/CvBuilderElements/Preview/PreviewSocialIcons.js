import React from 'react';

import StackOverFlow from '../../../components/icons/StackOverFlow/StackOverFlow';
import LinkWithSocialIcon from './LinkWithSocialIcon';
import Facebook from '@material-ui/icons/Facebook';
import GitHub from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Twitter from '@material-ui/icons/Twitter';

import { useSelector } from 'react-redux';

const PreviewSocialIcons = () => {
  const { facebook, linkedIn, twitter, github, stackOverFlow } = useSelector(
    (state) => state.jobSeeker,
  );

  const socialLinks = useSelector((state) => state.socialLinks);
  return (
    <div
      className="preview__socialIcons"
      style={{
        display: 'flex',
        gap: '1rem',
        marginTop: '0.5rem',
      }}
    >
      {facebook && socialLinks.facebook && (
        <LinkWithSocialIcon
          icon={<Facebook style={{ color: 'black', fontSize: '1.2rem' }} />}
          link={facebook}
        />
      )}
      {linkedIn && socialLinks.linkedIn && (
        <LinkWithSocialIcon
          icon={<LinkedIn style={{ color: 'black', fontSize: '1.2rem' }} />}
          link={linkedIn}
        />
      )}
      {twitter && socialLinks.twitter && (
        <LinkWithSocialIcon
          icon={<Twitter style={{ color: 'black', fontSize: '1.2rem' }} />}
          link={twitter}
        />
      )}
      {github && socialLinks.gitHub && (
        <LinkWithSocialIcon
          icon={<GitHub style={{ color: 'black', fontSize: '1.2rem' }} />}
          link={github}
        />
      )}
      {stackOverFlow && socialLinks.stackOverFlow && (
        <LinkWithSocialIcon
          icon={
            <StackOverFlow style={{ color: 'black', fontSize: '1.2rem' }} />
          }
          link={stackOverFlow}
        />
      )}
    </div>
  );
};

export default PreviewSocialIcons;
