import React, { useEffect, useRef, useState } from 'react';
import { useFormik, useField, useFormikContext } from 'formik';
/* constants */
import CITIES from '../../constants/armenianCities';
import GENDERS from '../../constants/gender';
/* components */
import FormPersonalDataSection from '../FormPersonalDataSection/FormPersonalDataSection';
import FormContactSection from '../FormContactSection/FormContactSection';
import FormDescriptionSection from '../FormDescriptionSection/FormDescriptionSection';
/* UI */
import Button from '@material-ui/core/Button';

/* auth */
import { useAuth } from '../../services/authentication';

function CreateProfileForm({
  activeStep,
  steps,
  handleBackButton,
  handleFinish,
  handleReset,
  handleNext,
}) {
  const { user } = useAuth();

  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      age: '',
      gender: GENDERS[0],
      city: CITIES[0],
      phone: '',
      email: user ? user.email : '',
      twitter: '',
      facebook: '',
      linkedIn: '',
      headline: '',
      summary: '',
    },
    /* ANCHOR not sure about it */
    enableReinitialize: true,
  });

  return (
    <>
      {user ? (
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
            <FormPersonalDataSection
              nameValue={formik.values.name}
              surnameValue={formik.values.surname}
              ageValue={formik.values.age}
              genderValue={formik.values.gender}
              cityValue={formik.values.city}
              HandleNameChange={formik.handleChange}
              handleSurnameChange={formik.handleChange}
              handleAgeChange={formik.handleChange}
              handleGenderChange={formik.handleChange}
              handleCityChange={formik.handleChange}
            />
          ) : activeStep === 1 ? (
            <FormContactSection
              phoneValue={formik.values.phone}
              emailValue={formik.values.email}
              twitterValue={formik.values.twitter}
              facebookValue={formik.values.facebook}
              linkedInValue={formik.values.linkedIn}
              handlePhoneChange={formik.handleChange}
              handleEmailChange={formik.handleChange}
              handleTwitterChange={formik.handleChange}
              handleFacebookChange={formik.handleChange}
              handleLinkedInChange={formik.handleChange}
            />
          ) : (
            <FormDescriptionSection
              headlineValue={formik.values.headline}
              summaryValue={formik.values.summary}
              handleHeadlineChange={formik.handleChange}
              handleSummaryChange={formik.handleChange}
            />
          )}
          <div
            style={{
              width: 400,
              display: 'flex',
            }}
          >
            {activeStep !== steps.length - 1 ? (
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
            ) : (
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
            )}
          </div>
        </form>
      ) : null}
    </>
  );
}

export default CreateProfileForm;
