import React, { useState } from "react";
import { useFormik } from "formik";
import { useHistory } from "react-router";

/* auth & services */
import { useAuth } from "../../services/authentication";
import { createCompany } from "../../services/company.service";
import { companyValidation } from "../../validation/jobSeeker.schema";

/* components */
import FormCompanyDataSection from "../FormPersonalDataSection/FormCompanyDataSection";
import FormCompanyContactSection from "../FormContactSection/FormCompanyContactSection";
import FormDescriptionSection from "../FormDescriptionSection/FormDescriptionSection";
import FormAlert from "../FormElements/FormAlert/FormAlert";
import CreateProfileButtons from "../FormElements/CreateProfileButtons/CreateProfileButtons";
import { updateUserById } from "../../services/user";

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
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("error");

  const handleClose = (_event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const { validateForm, handleSubmit, ...formik } = useFormik({
    initialValues: {
      name: "",
      field: "",
      city: "",
      address: "",
      phone: "",
      taxId: "",
      establishment: "",
      employee: "",
      email: user ? user.email : "",
      twitter: "",
      facebook: "",
      website: "",
      linkedIn: "",
      headline: "",
      summary: "",
    },
    enableReinitialize: true,
    validationSchema: companyValidation,
    onSubmit: async (values) => {
      setOpen(true);
      setMessage(`Well done!`);
      setMessageType("success");
      await updateUserById(user.uid, { profileCreated: true });
      await createCompany(values, user.uid)
        .then((res) => {
          history.push(`/profile/${user.uid}`);
        })
        .catch((error) => console.log(error));
    },
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    validateForm(formik.values).then((res) => {
      console.log(res);
      const answer = Object.keys(res).some((field) => res[field]);
      console.log(answer);
      if (answer) {
        setOpen(true);
        setMessage(`please fill in all the required inputs`);
        // console.log(user);
        setMessageType("error");
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
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {activeStep === 0 ? (
            <FormCompanyDataSection
              //values
              nameValue={formik.values.name}
              fieldValue={formik.values.field}
              establishmentValue={formik.values.establishment}
              taxIdValue={formik.values.taxId}
              employeeValue={formik.values.employee}
              cityValue={formik.values.city}
              //event handlers
              handleNameChange={formik.handleChange}
              handleFieldChnage={formik.handleChange}
              handleEstablishmentChange={formik.handleChange}
              handleTaxIdChange={formik.handleChange}
              handleCityChange={formik.handleChange}
              handleEmployeeChange={formik.handleChange}
              //blurs
              handleNameBlur={formik.handleBlur}
              handleFieldBlur={formik.handleBlur}
              handleEstablishmentBlur={formik.handleBlur}
              handleTaxIdBlur={formik.handleBlur}
              handleCityBlur={formik.handleBlur}
              handleEmployeeBlur={formik.handleBlur}
              //errors
              nameError={
                formik.errors.companyName && formik.touched.companyName
                  ? true
                  : false
              }
              fieldError={
                formik.errors.field && formik.touched.field ? true : false
              }
              establishmentError={
                formik.errors.establishment && formik.touched.establishment
                  ? true
                  : false
              }
              taxIdError={
                formik.errors.taxId && formik.touched.taxId ? true : false
              }
              cityError={
                formik.errors.city && formik.touched.city ? true : false
              }
              employeeError={
                formik.errors.employee && formik.touched.employee ? true : false
              }
            />
          ) : activeStep === 1 ? (
            <FormCompanyContactSection
              //values
              phoneValue={formik.values.phone}
              addressValue={formik.values.address}
              emailValue={formik.values.email}
              twitterValue={formik.values.twitter}
              facebookValue={formik.values.facebook}
              linkedInValue={formik.values.linkedIn}
              websiteValue={formik.values.website}
              //event handlers
              handlePhoneChange={formik.handleChange}
              handleAddressChange={formik.handleChange}
              handleEmailChange={formik.handleChange}
              handleTwitterChange={formik.handleChange}
              handleFacebookChange={formik.handleChange}
              handleLinkedInChange={formik.handleChange}
              handleWebsiteChange={formik.handleChange}
              //blurs
              handlePhoneBlur={formik.handleBlur}
              handleAddressBlur={formik.handleBlur}
              handleEmailBlur={formik.handleBlur}
              handleTwitterBlur={formik.handleBlur}
              handleFacebookBlur={formik.handleBlur}
              handleLinkedInBlur={formik.handleBlur}
              handleWebsiteBlur={formik.handleBlur}
              //Errors
              phoneError={
                formik.errors.phone && formik.touched.phone ? true : false
              }
              emailaddressErrorError={
                formik.errors.address && formik.touched.address ? true : false
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
              websiteError={
                formik.errors.website && formik.touched.website ? true : false
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
              display: "flex",
              margin: 170,
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
