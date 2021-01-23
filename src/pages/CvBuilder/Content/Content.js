import React, { useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CvPersonalInfo from '../CvPersonalInfo/CvPersonalInfo';
import WorkExperience from '../WorkExperience/WorkExperience';

function Content() {
  const [expanded, setExpanded] = useState('WE');

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
          onClick={handleAccordionExpanded('PI')}
          expanded={expanded === 'PI'}
        >
          <AccordionSummary
            className="accordion"
            expandIcon={<ExpandMoreIcon style={{ cursor: 'default' }} />}
            aria-controls="personal information"
          >
            <Typography color={expanded === 'PI' ? 'primary' : 'textSecondary'}>
              Personal Information
            </Typography>
          </AccordionSummary>
          <CvPersonalInfo />
        </Accordion>

        <Accordion
          onClick={handleAccordionExpanded('WE')}
          expanded={expanded === 'WE'}
        >
          <AccordionSummary
            className="accordion"
            expandIcon={<ExpandMoreIcon style={{ cursor: 'default' }} />}
            aria-controls="work experience"
          >
            <Typography color={expanded === 'WE' ? 'primary' : 'textSecondary'}>
              Work WorkExperience
            </Typography>
          </AccordionSummary>
          <WorkExperience />
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ cursor: 'default' }} />}
            aria-controls="panel3a-content"
          >
            <Typography color={expanded === 'PI' ? 'primary' : 'textSecondary'}>
              Disabled Accordion
            </Typography>
          </AccordionSummary>
        </Accordion>
      </form>
    </div>
  );
}

export default Content;
