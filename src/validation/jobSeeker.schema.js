import * as Yup from "yup";

const jobSeekerValidation = Yup.object({
  name: Yup.string().required("Required"),
  surname: Yup.string().required("Required"),
  age: Yup.string().required("Required"),
  gender: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  phone: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  twitter: Yup.string().url(),
  facebook: Yup.string().url(),
  linkedIn: Yup.string().url(),
  headline: Yup.string(),
  summary: Yup.string(),
});

export default jobSeekerValidation;
/*  
      twitter: '',
      facebook: '',
      linkedIn: '',
      headline: '',
      summary: '', */

export const companyValidation = Yup.object({
  name: Yup.string().required("Required"),
  field: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  phone: Yup.string().required("Required"),
  taxId: Yup.string().required("Required"),
  establishment: Yup.string().required("Required"),
  employee: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  twitter: Yup.string().url(),
  facebook: Yup.string().url(),
  website: Yup.string().url(),
  linkedIn: Yup.string().url(),
  headline: "",
  summary: "",
});
