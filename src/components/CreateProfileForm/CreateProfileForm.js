import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useHistory } from 'react-router';

/* auth & services */
import { useAuth } from '../../services/authentication';
import { createJobSeeker } from '../../services/JobSeeker.service';
import jobSeekerValidation from '../../validation/jobSeeker.schema';

/* components */
import FormPersonalDataSection from '../FormPersonalDataSection/FormPersonalDataSection';
import FormContactSection from '../FormContactSection/FormContactSection';
import FormDescriptionSection from '../FormDescriptionSection/FormDescriptionSection';
import FormAlert from '../FormElements/FormAlert/FormAlert';
import CreateProfileButtons from '../FormElements/CreateProfileButtons/CreateProfileButtons';
import { updateUserById } from '../../services/user';

function CreateProfileForm({
  activeStep,
  steps,
  handleBackButton,
  moveToFirstPage,
  handleNext,
}) {
  const { user } = useAuth();
  const history = useHistory();

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('error');

  const handleClose = (_event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const { validateForm, handleSubmit, ...formik } = useFormik({
    initialValues: {
      name: '',
      surname: '',
      age: '',
      gender: '',
      city: '',
      phone: '',
      email: user ? user.email : '',
      twitter: '',
      facebook: '',
      linkedIn: '',
      headline: '',
      summary: '',
    },
    enableReinitialize: true,
    validationSchema: jobSeekerValidation,
    onSubmit: async (values) => {
      setOpen(true);
      setMessage(`Well done!`);
      setMessageType('success');
      await updateUserById(user.uid, { profileCreated: true });
      await createJobSeeker(values, user.uid)
        .then((res) => {
          history.push(`/profile/${user.uid}`);
        })
        .catch((error) => console.log(error));
    },
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    validateForm(formik.values).then((res) => {
      const answer = Object.keys(res).some((field) => res[field]);
      if (answer) {
        setOpen(true);
        setMessage(`please fill in all the required inputs`);
        setMessageType('error');
        moveToFirstPage();
      }
    });
    handleSubmit();
  };

  return (
    <>
      {user ? (
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {activeStep === 0 ? (
            <FormPersonalDataSection
              nameValue={formik.values.name}
              surnameValue={formik.values.surname}
              ageValue={formik.values.age}
              genderValue={formik.values.gender}
              cityValue={formik.values.city}
              handleNameChange={formik.handleChange}
              handleSurnameChange={formik.handleChange}
              handleAgeChange={formik.handleChange}
              handleGenderChange={formik.handleChange}
              handleCityChange={formik.handleChange}
              handleNameBlur={formik.handleBlur}
              handleSurnameBlur={formik.handleBlur}
              handleAgeBlur={formik.handleBlur}
              handleGenderBlur={formik.handleBlur}
              handleCityBlur={formik.handleBlur}
              nameError={
                formik.errors.name && formik.touched.name ? true : false
              }
              surnameError={
                formik.errors.surname && formik.touched.surname ? true : false
              }
              ageError={formik.errors.age && formik.touched.age ? true : false}
              cityError={
                formik.errors.city && formik.touched.city ? true : false
              }
              genderError={
                formik.errors.gender && formik.touched.gender ? true : false
              }
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
              handleEmailBlur={formik.handleBlur}
              handleFacebookBlur={formik.handleBlur}
              handleLinkedInBlur={formik.handleBlur}
              handlePhoneBlur={formik.handleBlur}
              handleTwitterBlur={formik.handleBlur}
              phoneError={
                formik.errors.phone && formik.touched.phone ? true : false
              }
              emailError={
                formik.errors.email && formik.touched.email ? true : false
              }
              twitterError={
                formik.errors.twitter && formik.touched.twitter ? true : false
              }
              facebookError={
                formik.errors.facebook && formik.touched.facebook ? true : false
              }
              linkedInError={
                formik.errors.linkedIn && formik.touched.linkedIn ? true : false
              }
            />
          ) : (
            <FormDescriptionSection
              headlineValue={formik.values.headline}
              summaryValue={formik.values.summary}
              handleHeadlineChange={formik.handleChange}
              handleSummaryChange={formik.handleChange}
            />
          )}
          <FormAlert
            open={open}
            message={message}
            handleClose={handleClose}
            messageType={messageType}
          />
          <div
            style={{
              width: 400,
              display: 'flex',
              margin: 20,
            }}
          >
            <CreateProfileButtons
              activeStep={activeStep}
              handleBackButton={handleBackButton}
              handleNext={handleNext}
              steps={steps}
              handleFormSubmit={handleFormSubmit}
            />
          </div>
        </form>
      ) : null}
    </>
  );
}

export default CreateProfileForm;
