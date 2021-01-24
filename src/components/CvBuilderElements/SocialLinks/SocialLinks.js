import React from 'react';

import Button from '@material-ui/core/Button';
import FormField from '../../FormElements/FormField/FormField';

/* redux */
import { useDispatch, useSelector } from 'react-redux';
import { changeField } from '../../../store/features/JobSeekerDetails';
import { changeSocialLinkActiveState } from '../../../store/features/SocialLinks';

function SocialLinks() {
  const { facebook, linkedIn, twitter, stackOverFlow, github } = useSelector(
    (state) => state.jobSeeker,
  );

  const socialLinks = useSelector((state) => state.socialLinks);
  const dispatch = useDispatch();

  const handleFieldChange = (e) => {
    dispatch(changeField({ name: e.target.name, value: e.target.value }));
  };

  const handleSocialLinkButtonClick = (name) => () => {
    dispatch(changeSocialLinkActiveState(name));
  };

  return (
    <>
      <div className="content__social-buttons">
        <Button
          onClick={handleSocialLinkButtonClick('gitHub')}
          color={socialLinks.gitHub ? 'primary' : 'default'}
        >
          {socialLinks.gitHub ? '-' : '+'} GitHub
        </Button>
        <Button
          onClick={handleSocialLinkButtonClick('facebook')}
          color={socialLinks.facebook ? 'primary' : 'default'}
        >
          {socialLinks.facebook ? '-' : '+'} Facebook
        </Button>
        <Button
          onClick={handleSocialLinkButtonClick('twitter')}
          color={socialLinks.twitter ? 'primary' : 'default'}
        >
          {socialLinks.twitter ? '-' : '+'} Twitter
        </Button>
        <Button
          onClick={handleSocialLinkButtonClick('linkedIn')}
          color={socialLinks.linkedIn ? 'primary' : 'default'}
        >
          {socialLinks.linkedIn ? '-' : '+'} LinkedIn
        </Button>
        <Button
          onClick={handleSocialLinkButtonClick('stackOverFlow')}
          color={socialLinks.stackOverFlow ? 'primary' : 'default'}
        >
          {socialLinks.stackOverFlow ? '-' : '+'} StackOverflow
        </Button>
      </div>
      <div className="social-links">
        {socialLinks.facebook && (
          <FormField
            label="facebook"
            name="facebook"
            value={facebook || ''}
            onChange={handleFieldChange}
          />
        )}
        {socialLinks.linkedIn && (
          <FormField
            label="linkedIn"
            name="linkedIn"
            value={linkedIn || ''}
            onChange={handleFieldChange}
          />
        )}
        {socialLinks.twitter && (
          <FormField
            label="twitter"
            name="twitter"
            value={twitter || ''}
            onChange={handleFieldChange}
          />
        )}
        {socialLinks.gitHub && (
          <FormField
            label="github"
            name="github"
            value={github || ''}
            onChange={handleFieldChange}
          />
        )}
        {socialLinks.stackOverFlow && (
          <FormField
            label="stackOverFlow"
            name="stackOverFlow"
            value={stackOverFlow || ''}
            onChange={handleFieldChange}
          />
        )}
      </div>
    </>
  );
}

export default SocialLinks;
