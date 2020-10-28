import React, { useState } from 'react';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import FormPersonalDataSection from '../../components/FormPersonalDataSection/FormPersonalDataSection';

import FormContactSection from '../../components/FormContactSection/FormContactSection';

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  active: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  line: {
    borderColor: '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: '#784af4',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}

export default function CustomizedSteppers() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Personal info', 'Contacts', 'Description'];

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleFinish = () => {};

  return (
    <div>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<QontoConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 350,
        }}
      >
        {activeStep === 0 ? (
          <FormPersonalDataSection />
        ) : activeStep === 1 ? (
          <FormContactSection />
        ) : (
          <div
            style={{
              width: 400,
              padding: '10px',
            }}
          >
            <TextField
              label="Headline"
              fullWidth
              multiline
              variant="outlined"
              margin="normal"
              placeholder="Marketing Professional | Medical Educator | Nutritional Advocate"
              inputProps={{
                maxLength: 70,
              }}
            />
            <TextField
              margin="normal"
              label="summary"
              multiline
              fullWidth
              rows={10}
              variant="outlined"
              placeholder="Dynamic and motivated professional with a proven record of generating and building relationships, managing projects from concept to completion. Skilled in building cross-functional teams, demonstrating exceptional communication skills, and making critical decisions during challenges. Adaptable and transformational leader with an ability to work independently, creating effective presentations, and developing opportunities."
              inputProps={{
                maxLength: 450,
              }}
            />
          </div>
        )}
        <div
          style={{
            width: 400,
            display: 'flex',
          }}
        >
          {activeStep === steps.length - 1 ? (
            <>
              <Button
                style={{
                  flexGrow: 1,
                }}
                size="large"
                disabled={activeStep === 0}
                onClick={handleReset}
              >
                Reset
              </Button>
              <Button
                style={{
                  flexGrow: 1,
                }}
                size="large"
                variant="contained"
                color="primary"
                onClick={handleFinish}
              >
                Finish
              </Button>
            </>
          ) : (
            <>
              <Button
                style={{
                  flexGrow: 1,
                }}
                size="large"
                variant="outlined"
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                Back
              </Button>
              <Button
                style={{
                  flexGrow: 1,
                }}
                size="large"
                variant="contained"
                color="primary"
                onClick={handleNext}
              >
                next
              </Button>
            </>
          )}
        </div>
      </form>

      <div></div>
    </div>
  );
}
