import React from 'react';
import Button from '@material-ui/core/Button';

function CreateProfileButtons({
  activeStep,
  handleBackButton,
  handleNext,
  steps,
  handleFormSubmit,
}) {
  return (
    <>
      <Button
        style={{
          flexGrow: 1,
        }}
        size="large"
        variant="outlined"
        disabled={activeStep === 0}
        onClick={handleBackButton}
      >
        Back
      </Button>
      {activeStep !== steps.length - 1 ? (
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
      ) : (
        <Button
          style={{
            flexGrow: 1,
          }}
          size="large"
          variant="contained"
          color="primary"
          onClick={handleFormSubmit}
        >
          Finish
        </Button>
      )}
    </>
  );
}

export default CreateProfileButtons;
