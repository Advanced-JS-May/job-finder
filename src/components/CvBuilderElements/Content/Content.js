import React, { useState } from 'react';
import { Accordion, AccordionSummary, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CvPersonalInfo from '../CvPersonalInfo/CvPersonalInfo';
import WorkExperience from '../WorkExperience/WorkExperience';
import Education from '../Education/Education';

const activeBar = {
  WorkExperience: 'WE',
  personalInformation: 'PI',
  education: 'EDU',
};

function Content() {
  const [expanded, setExpanded] = useState(activeBar.education);

  const handleAccordionExpanded = (panel) => (e) => {
    if (
      e.target &&
      e.target.parentNode &&
      (e.target.parentNode.classList.contains('accordion') ||
        e.target.parentNode.parentNode.classList.contains('accordion'))
    ) {
      setExpanded((state) => (state === panel ? false : panel));
    }
  };

  return (
    <div>
      <form>
        <Accordion
          onClick={handleAccordionExpanded(activeBar.personalInformation)}
          expanded={expanded === activeBar.personalInformation}
        >
          <AccordionSummary
            className="accordion"
            expandIcon={<ExpandMoreIcon style={{ cursor: 'default' }} />}
            aria-controls="personal information"
          >
            <Typography
              color={
                expanded === activeBar.personalInformation
                  ? 'primary'
                  : 'textSecondary'
              }
            >
              Personal Information
            </Typography>
          </AccordionSummary>
          <CvPersonalInfo />
        </Accordion>

        <Accordion
          onClick={handleAccordionExpanded(activeBar.WorkExperience)}
          expanded={expanded === activeBar.WorkExperience}
        >
          <AccordionSummary
            className="accordion"
            expandIcon={<ExpandMoreIcon style={{ cursor: 'default' }} />}
            aria-controls="work experience"
          >
            <Typography
              color={
                expanded === activeBar.WorkExperience
                  ? 'primary'
                  : 'textSecondary'
              }
            >
              Work WorkExperience
            </Typography>
          </AccordionSummary>
          <WorkExperience />
        </Accordion>

        <Accordion
          onClick={handleAccordionExpanded(activeBar.education)}
          expanded={expanded === activeBar.education}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ cursor: 'default' }} />}
            aria-controls="education"
            className="accordion"
          >
            <Typography
              color={
                expanded === activeBar.education ? 'primary' : 'textSecondary'
              }
            >
              Education and Certificates
            </Typography>
          </AccordionSummary>
          <Education />
        </Accordion>
      </form>
    </div>
  );
}

export default Content;
